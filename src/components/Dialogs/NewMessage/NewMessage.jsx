import React from 'react'
import s from './../Dialogs.module.css'


const AddNewMessage = (props) => {

   let newMessageRef = (React.createRef())

   let updateNewMessage = () => {
      let text = newMessageRef.current.value
      props.updateNewMessage(text)

   }


   let addMessage = () => {
      props.addMessage()
   }


   return (
      <div>
         <div>
            <textarea
               onChange={updateNewMessage}
               ref={newMessageRef}
               value={props.NewMessage}
            />
         </div>
         <div>
            <button onClick={addMessage}>send message</button>
         </div>
      </div>
   )
}
export default AddNewMessage