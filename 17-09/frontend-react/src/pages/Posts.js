import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { addPost, removePost, updatePosts } from "../store/actions";
import { Typography, Input, Button, notification, Table, Modal } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

const { Title } = Typography;
let postIdForEdit

function Posts() {
    const [title, setTitle] = useState("");
    const [isEditing, setIsEditing] = useState(false)
    const [editingPost, setEditingPost] = useState(null)
    const [state, dispatch] = useContext(Context);
    const inputRef = useRef(null);   

    const getAllPosts = async () => {
        fetch('http://localhost:8081/api/post/get-posts').then(res => {
            return res.json()
        }).then(async (data) => {
            dispatch(updatePosts(data))
        })
    }

    useEffect(() => {
        getAllPosts()        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(state.auth.user === null){
            const newPost = {
                title,
                authorId: 'anonymous'
            }
            addNewPost(newPost)
        } else {
            const newPost = {
                title: title,
                authorId: state.auth.user.id
            }
            addNewPost(newPost)
        }
        
        setTitle("");       

        if (inputRef.current) inputRef.current.focus();
    };


    const addNewPost = async (post) => { 
        const res = await fetch('http://localhost:8081/api/post/create-post', {
                method: 'POST',
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json'               
                }           
            })
        const resData = await res.json()

        if(res.status === 200){        
            dispatch(addPost(resData));
            notification.success({ message: 'Post saved!'})
        } else {
            notification.error({ message: resData})
        }
        
    };

    const columns = [
        {
            title: 'Post',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Creation date',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Author',
            dataIndex: 'authorId',
            key: 'authorId'
        },
        {
            title: 'Updated date',
            dataIndex: 'updatedAt',
            key: 'updatedAt'
        },
        {
            title: 'Delete',
            key: 'action',
            render: (e) => (
                <DeleteOutlined style={{color:'red'}} type='link' onClick={() => handleDelete(e._id)}></DeleteOutlined>
            )
        },
        {
            title: 'Edit',
            render: (e) => (
                <EditOutlined type='link' onClick={() => handleEdit(e)}></EditOutlined>
            )
        }
    ]

    const handleDelete = async (id) => {
           
        const res = await fetch(`http://localhost:8081/api/post/delete-post/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'               
            }           
        })
        const resData = await res.json()
        if(res.status === 200){
            dispatch(removePost(resData))
            notification.success({message: "Post deleted!"})            
        } else {
            notification.error({ message: resData})
        }  
    }

    const handleEdit = async (e) => {
        setIsEditing(true)
        const id = e._id
        const res = await fetch(`http://localhost:8081/api/post/get-post/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'               
            }
        })
        const resData = await res.json()
        postIdForEdit = resData._id
    }

    const resetEditing = () => {
        setIsEditing(false)
        setEditingPost(null)
    }

    const editPost = async (newTitle) => {
        const updatedPost = {
            title: newTitle.title
        }
        const res = await fetch(`http://localhost:8081/api/post/update-post/${postIdForEdit}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'               
            },
            body: JSON.stringify(updatedPost)
        })
        notification.success({message:'Post updated!'})
        getAllPosts()        
    }
    
  return (
    <div style={{ textAlign: "center" }}>
      <Title level={2}>Add a post</Title>
      <form onSubmit={handleSubmit}>
        <Input
            style={{ width: 300}}
            ref={inputRef}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
        /> <br/> <br/>
        <Button type="primary" htmlType="submit">
            Add post
        </Button>
      </form>

        <br />

        <Table 
            className='posts-table'
            columns={columns} 
            dataSource={state.posts.data} 
            rowKey='_id' 
            pagination={{
                size:'small', 
                showQuickJumper:'true', 
                position:'bottomCenter' 
            }} 
        />

        <Modal
            title='Edit post'
            visible={isEditing}
            okText='Save changes'
            onCancel={() => {
                resetEditing()
            }}
            onOk={() => {
                editPost(editingPost)
                resetEditing()                
            }}
        >
            <Input value={editingPost?.title} onChange={(e) => {
                setEditingPost(() => {
                    return {title:e.target.value}
                })
                
            }}></Input>
        </Modal>
    </div>
  );
}
//modal inspiration: https://www.youtube.com/watch?v=y4_nSE-aZhc&t=230s&ab_channel=CodeWithAamir

export default Posts;
