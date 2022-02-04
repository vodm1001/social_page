import React from 'react';
import Friend from './Friend/Friend';
import s from './TopFriends.module.css';


const TopFriends = (props) => {

   let TopFriendsElements = props.topFriends.map(t => <Friend name={props.name} avatarUrl={props.avatarUrl} id={props.id} />)

   return (
      <div className={s.TopFriends}>
         {TopFriendsElements}
      </div>
   )
}
export default TopFriends