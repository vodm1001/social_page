import React from 'react'
import s from './../Dialogs.module.css'



const AddNewMessage = () => {
   let newMessage = (React.createRef())
   let addMessage = () => {
      let textNewMessage = newMessage.current.value
      alert(textNewMessage)

   }



   return (
      <div>
         <div>
            <textarea ref={newMessage}></textarea>
         </div>
         <div>
            <button onClick={addMessage}>send message</button>
         </div>
      </div>
   )
}
export default AddNewMessage