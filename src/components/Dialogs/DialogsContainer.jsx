import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'


// const DialogsContainer = (props) => {

//    return (
//       <StoreContext.Consumer>
//          {(store) => {
//             let state = store.getState()


//             let updateNewMessageText = (text) => {
//                // let text = event.target.value
//                // let text = newMessageRef.current.value
//                store.dispatch(updateNewMessageTextActionCreator(text))
//                // props.dispatch({ type: 'UPDATE-NEW-MESSAGE', newText: text })
//                //props.updateNewMessage(text)
//             }

//             let addMessage = () => {
//                store.dispatch(addMessageActionCreator())
//                //props.dispatch({ type: 'ADD-MESSAGE' })
//                //props.addMessage()
//             }

//             return <Dialogs
//                updateNewMessageText={updateNewMessageText}
//                addMessage={addMessage}
//                dialogs={state.dialogsPage.dialogs}
//                messages={state.dialogsPage.messages}
//                NewMessageText={state.dialogsPage.NewMessageText}
//             />
//          }
//          }
//       </StoreContext.Consumer>
//    )
// }

let mapStateToProps = (state) => {
   return {
      dialogs: state.dialogsPage.dialogs,
      messages: state.dialogsPage.messages,
      NewMessageText: state.dialogsPage.NewMessageText
   }
}

let mapDispachToProps = (dispatch) => {
   return {
      updateNewMessageText: (text) => {
         dispatch(updateNewMessageTextActionCreator(text))  
      },
      addMessage: () => {
         dispatch(addMessageActionCreator())
      }
   }
}


const DialogsContainer = connect(mapStateToProps, mapDispachToProps)(Dialogs)


export default DialogsContainer


