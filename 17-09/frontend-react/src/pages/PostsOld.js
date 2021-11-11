import { useState, useContext, useEffect } from 'react';
import { Context } from '../store';
import { addPost, updatePosts } from '../store/actions'
import { Typography, Form, Input, Button, notification, Table } from 'antd';

const { Title } = Typography;

function Posts(){
    const [ form ] = Form.useForm();
    const [ title, setTitle ] = useState('')
    const [ state, dispatch ] = useContext(Context)
   // const inputRef = useRef(Context)

    useEffect(() => {
        dispatch(updatePosts([
            {
                id: 1,
                title: "Test-array-1"
            },
            {
                id: 2,
                title: "Test-array-2"
            }
        ]))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSubmit = values => {
        const newPost = {
            title: values.title
        } 
        form.resetFields()
        addNewPost(newPost)
    }
    console.log({state})
    const addNewPost = async (post) => {
        const res = await fetch('http://localhost:8081/api/post/create-post', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'               
            }           
        })
        const resData = await res.json()
        notification.success({ message: 'Post saved!'})
        dispatch(addPost(post))
    }

    const columns = [
        {
            title: 'Post',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'Creation date',
            dataIndex: 'createdAt',
            key: 'createdAt'
        }
    ]

    return(
        <div style={{ textAlign: 'center' }}>
            <Title level={2}>Add a post</Title>
            <Form form={form} autoComplete='off' labelCol={{ span: 10 }} wrapperCol={{ span: 5 }} onFinish={handleSubmit}>
                <Form.Item  label='Post' name='title' rules={[{ required: true, message:'Please write a post'}]}>
                    <Input value={title} />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 9, span: 5 }}>
                    <Button type="primary" htmlType="submit">
                        Add post
                    </Button>
                </Form.Item>
            </Form>
            <Table columns={columns} />
        </div>
        
    )
}

export default Posts
/*

{state.posts.data.map(element => 
    <li key={element.id}>
        {element.id} {element.title}
        <span 
            onClick={() => dispatch(removePost(element.id))} 
            style={{ cursor: 'pointer'}}>
            &#128540;
        </span>
    </li>
)}

<div style={{textAlign: 'center'}}>
            <Title>Add a post</Title>
            <form onSubmit={handleSubmit}>
                <input 
                    ref={inputRef} 
                    type="text" 
                    value={title} 
                    onChange={e => setTitle(e.target.value)} autoFocus />
                <button type="submit">Submit</button>
            </form>
            
        </div>

*/