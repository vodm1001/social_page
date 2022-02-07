import React from 'react'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogReducer'

import s from './../Dialogs.module.css'


const AddNewMessage = (props) => {

   // let newMessageRef = (React.createRef())

   let updateNewMessageText = (event) => {
      let text = event.target.value
      // let text = newMessageRef.current.value
      props.dispatch(updateNewMessageTextActionCreator(text))
      // props.dispatch({ type: 'UPDATE-NEW-MESSAGE', newText: text })
      //props.updateNewMessage(text)

   }


   let addMessage = () => {
      props.dispatch(addMessageActionCreator())
      //props.dispatch({ type: 'ADD-MESSAGE' })
      //props.addMessage()
   }


   return (
      <div>
         <div>
            <textarea
               placeholder='Enter your message'
               onChange={updateNewMessageText}
               // ref={newMessageRef}
               value={props.NewMessageText}
            />
         </div>
         <div>
            <button onClick={addMessage}>send message</button>
         </div>
      </div>
   )
}
export default AddNewMessage