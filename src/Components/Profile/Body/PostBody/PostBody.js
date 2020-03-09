import React from 'react'
import s from './PostBody.module.css'
import Post from './Post/Post'

const PostBody = (props) => {
    let newPostElement = React.createRef();
    let postsElements = props.posts.map(p => <Post message={p.post} likeCounts={p.like}/>)
    // Внутренние функции
    let onAddPost = () => {
        if (newPostElement.current.value !== '') {
            props.addPost();
        }
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    // *****************

    return (
        <div>
            <div>
                <div className={s.formPost}>
        <textarea ref={newPostElement} onChange={onPostChange}
                  value={props.newPostText}
                  type="text" cols="40" className={s.form__field} placeholder="New post..."/>
                    <button onClick={onAddPost} className={s.buttonPost}>Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default PostBody
