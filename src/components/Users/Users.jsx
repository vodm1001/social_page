import React from "react";
import styles from "./users.module.css"
import * as axios from 'axios'

//Реалізація на класовій компоненті

class Users extends React.Component {
   constructor(props) {
      super(props)
      alert('NEW')
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then (response => {   //не працює силка (51 відос)
      this.props.setUsers(response.data.items)
   })

   }

   // getUsers =() => {
   //    if (this.props.users.length === 0 ) {
   //       axios.get("https://social-network.samuraijs.com/api/1.0/users").then (response => {   //не працює силка (51 відос)
   //          this.props.setUsers(response.data.items)
   //       })
   //    }

   // }

   render () {
      return (
         <div>
            {
               this.props.users.map(u => <div key={u.id}>
                  <span>
                     <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                     </div>
                     <div>
                        {u.followed ? <button onClick={() => { this.props.unfollow(u.id) }}> Unfollow </button> : <button onClick={() => { this.props.follow(u.id) }}> follow </button>}
                     </div>
                  </span>
                  <span>
                     <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                     </span>
                     <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                     </span>
                  </span>
   
               </div>)}
            
   
         </div>
      )
   }
    
}

export default Users

