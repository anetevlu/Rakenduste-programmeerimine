import { Typography, Form, Input, Button, notification } from 'antd';
import { useContext } from "react";
import { Context } from "../store";
import { loginUser } from '../store/actions'

const { Title } = Typography;

function Login(){
    const [state, dispatch] = useContext(Context)
    const [form] = Form.useForm()

    const handleLogin = async (values) => {
        const userData = {
            email: values.email,
            password: values.password
        }
    
        const res = await fetch('http://localhost:8081/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })

        const response = await res.json()
        form.resetFields()

        if(response.token){
            const template = {
                token: response.token,
                user: {
                    id: response.id,
                    firstName: response.firstName,
                    lastName: response.lastName,
                    email: response.email
                }
            }
            notification.success({message:'Logged in!'})
            dispatch(loginUser(template))
        } else {
            notification.error({message: 'Something went wrong...'})
        }
    }
    

    return (
        <div style={{ textAlign: 'center'}}>
            <Title>Log in</Title>

            <Form form={form} onFinish={handleLogin} autoComplete='off' labelCol={{ span: 10 }} wrapperCol={{ span: 5 }} style={{ textAlign: 'center' }}>
                <Form.Item label='E-mail' name='email' rules={[{ required: true, message:'Please insert E-mail'}]}>
                    <Input />
                </Form.Item>
                <Form.Item label='Password' name='password' rules={[{ required: true, message:'Please insert password'}]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 9, span: 5 }}>
                    <Button type="primary" htmlType="submit">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login