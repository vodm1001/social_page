import React from 'react';
import Friend from './Friend/Friend';
import s from './TopFriends.module.css';


const TopFriends = (props) => {

   let TopFriendsElements = props.topFriends.map(t => <Friend name={t.name} avatarUrl={t.avatarUrl} key={t.id} id={t.id} />)

   return (
      <div className={s.topFriends}>
         {TopFriendsElements}
      </div>
   )
}
export default TopFriends