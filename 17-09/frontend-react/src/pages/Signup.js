import { Form, Input, Button, Typography, notification } from 'antd'
const { Title } = Typography;

function Signup(){
    const [form] = Form.useForm()

    const handleSignup = values => {
        const newUser = {
            firstName: values.firstname,
            lastName: values.lastname,
            email: values.email,
            password: values.password
        }
        const password = values.password
        const password1 = values.password1
        if(password !== password1){
            notification.error({message:'Passwords do not match!'})
        } else {
            form.resetFields()
            addNewUser(newUser)
        }
       
    }

    const addNewUser = async (user) => {
        const res = await fetch('http://localhost:8081/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json' 
            }
        })
        if(res.status === 200) {
            notification.success({ message: 'User created!'})
        } else {
            notification.error({message: 'There was an error...'})
        }
        
    }
    return (
        <div style={{textAlign: 'center'}}>
            <Title>Sign up</Title>
            <Form form={form} autoComplete='off' labelCol={{ span: 10 }} wrapperCol={{ span: 5 }} style={{ textAlign: 'center' }} onFinish={handleSignup}>
                <Form.Item label='Firstname' name='firstname' rules={[{ required: true, message:'Please insert firstname'}]}>
                    <Input />
                </Form.Item>
                <Form.Item label='Lastname' name='lastname' rules={[{ required: true, message:'Please insert lastname'}]}>
                    <Input />
                </Form.Item>
                <Form.Item label='E-mail' name='email' rules={[{ required: true, type:'email', message:'Please insert correct E-mail'}]}>
                    <Input />
                </Form.Item>
                <Form.Item label='Password' name='password' rules={[{ required: true, message:'Please insert password'}]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item label='Password again' name='password1' rules={[{ required: true, message:'Please insert password again'}]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 9, span: 5 }}>
                    <Button type="primary" htmlType="submit">
                        Sign up
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Signup