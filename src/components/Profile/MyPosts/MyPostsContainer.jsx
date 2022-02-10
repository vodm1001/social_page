import React from 'react';
import { addNewLetterActionCreator, addPostActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux'


// const MyPostsContainer = (props) => {
//   // let state = props.store.getState()

//   // let onAddPost = () => {

//   //   props.store.dispatch(addPostActionCreator())
//   //   // props.dispatch({ type: 'ADD-POST' })
//   //   //props.addPost()
//   // }

//   // let onPostChange = (text) => {
//   //   props.store.dispatch(addNewLetterActionCreator(text))
//   //   //props.dispatch({ type: 'UPDATE-NEW-POST', newText: text })
//   //   //props.addNewLetter(text)
//   // }

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState()

//         let onAddPost = () => {

//           store.dispatch(addPostActionCreator())
//           // props.store.dispatch(addPostActionCreator())

//           // props.dispatch({ type: 'ADD-POST' })
//           //props.addPost()
//         }

//         let onPostChange = (text) => {
//           store.dispatch(addNewLetterActionCreator(text))
//           // props.store.dispatch(addNewLetterActionCreator(text))

//           //props.dispatch({ type: 'UPDATE-NEW-POST', newText: text })
//           //props.addNewLetter(text)
//         }


//         return < MyPosts
//           addNewLetter={onPostChange}
//           addPost={onAddPost}
//           newPostText={state.profilePage.newPostText}
//           posts={state.profilePage.posts}
//         />
//       }
//       }
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  }
}

let mapDispachToProps = (dispatch) => {
  return {
    addNewLetter: (text) => {
      dispatch(addNewLetterActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }

  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispachToProps)(MyPosts)

export default MyPostsContainer;