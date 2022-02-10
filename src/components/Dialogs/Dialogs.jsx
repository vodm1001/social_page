import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'


const Dialogs = (props) => {


   let updateNewMessageText = (event) => {
      let text = event.target.value
      // let text = newMessageRef.current.value
      // props.dispatch(updateNewMessageTextActionCreator(text))
      // props.dispatch({ type: 'UPDATE-NEW-MESSAGE', newText: text })
      props.updateNewMessageText(text)
   }

   let addMessage = () => {
      // props.dispatch(addMessageActionCreator())
      //props.dispatch({ type: 'ADD-MESSAGE' })
      props.addMessage()
   }

   let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatarUrl={d.avatarUrl} />)
   let messagesElements = props.messages.map(m => <Message message={m.message} />)


   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>

            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
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

      </div >

   )
}
export default Dialogs


