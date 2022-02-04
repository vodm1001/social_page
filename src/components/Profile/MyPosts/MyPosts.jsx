import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let newPostElement = (React.createRef())

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.addNewLetter(text)

  }

  let addPost = () => {
    props.addPost()


  }

  let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;