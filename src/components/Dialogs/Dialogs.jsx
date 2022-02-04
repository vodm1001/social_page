import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import AddNewMessage from './NewMessage/NewMessage'



const Dialogs = (props) => {



   let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatarUrl={d.avatarUrl} />)

   let messagesElements = props.messages.map(m => <Message message={m.message} />)

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
            <AddNewMessage />
         </div>

      </div >

   )
}
export default Dialogs



