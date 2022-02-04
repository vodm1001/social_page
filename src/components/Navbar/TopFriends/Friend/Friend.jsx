import React from 'react';
import { NavLink } from 'react-router-dom';



const Friend = (props) => {
   let path = '/dialogs/' + props.id
   return (
      <div>
         asdasdasd
         <img src={props.avatarUrl} />
         <NavLink to={path}> {props.name} </NavLink>


      </div>
   )

}
export default Friend