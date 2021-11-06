import { useState, useContext, useRef, useEffect } from 'react';
import { Context } from '../store';
import { addPost, removePost, updatePosts } from '../store/actions'

function Posts(){
    const [title, setTitle] = useState('')
    const [state, dispatch] = useContext(Context)
    const inputRef = useRef(Context)

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
    }, [])

    const handleSubmit = e => {
        e.preventDefault()       
        setTitle('')
        addNewPost()
        if(inputRef.current) inputRef.current.focus()
    }
    //console.log({state})
    const addNewPost = () => {
        const newPost = {
            id: Date.now(),
            title
        }
        //salv ab, kui edu, siis dispatch ja renew state locally
        dispatch(addPost(newPost))
    }

    console.log({inputRef})
    return(
        <div style={{textAlign: 'center'}}>
            <h1>Posts</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    ref={inputRef} 
                    type="text" 
                    value={title} 
                    onChange={e => setTitle(e.target.value)} autoFocus />
                <button type="submit">Submit</button>
            </form>
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
        </div>
    )
}

export default Posts