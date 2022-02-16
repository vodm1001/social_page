import React from "react";
import styles from "./users.module.css"

let Users = (props) => {
   props.setUsers (  [
      { id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r3ogaSmpwNYSaEKRifVaHjwmYsKSW7fC6Q&usqp=CAU', followed: false, fullName: 'Dmytro', status: 'i am a boss', location: { city: 'Minsk', country: 'Belarus' } },
      { id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r3ogaSmpwNYSaEKRifVaHjwmYsKSW7fC6Q&usqp=CAU', followed: true, fullName: 'Sasha', status: 'i am a cool boy', location: { city: 'lviv', country: 'Ukraine' } },
      { id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r3ogaSmpwNYSaEKRifVaHjwmYsKSW7fC6Q&usqp=CAU', followed: false, fullName: 'Olga', status: 'wanna sleep', location: { city: 'Washington', country: 'USA' } },

   ]
   )
   return ( 
      <div>
         {
            props.users.map(u => <div key={u.id}>
               <span>
                  <div>
                     <img src={u.photoUrl} className={styles.userPhoto} />
                  </div>
                  <div>
                     {u.followed ? <button onClick={() => { props.unfollow(u.id) }}> Unfollow </button> : <button onClick={() => { props.follow(u.id) }}> follow </button>}
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

            </div>)
         }

      </div>
   )
}
export default Users