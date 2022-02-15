import React from "react"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
   users: [],
}


const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW: {
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u
            })

         }
      }

      case UNFOLLOW: {
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u
            })

         }
      }
      case SET_USERS: {
         return { ...state, users: { ...state.users, ...action.users } }
      }
      default: return state

   }
}

// const profileReducer = (state = initialState, action) => {
//    switch (action.type) {
//       case ADD_POST: {
//          let newPost = {
//             id: 4,
//             message: state.newPostText,
//             likesCount: 0
//          }
//          let stateCopy = { ...state }
//          stateCopy.posts = [...state.posts]
//          stateCopy.posts.push(newPost)
//          stateCopy.newPostText = ''
//          return stateCopy
//       }
//       case UPDATE_NEW_POST: {
//          let stateCopy = { ...state }
//          stateCopy.newPostText = action.newText
//          return stateCopy
//       }
//       default: return state

//    }
// }


export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })



export default usersReducer