import TopFriends from './TopFriends';
import { connect } from 'react-redux'


// const TopFriendsContainer = (props) => {
//    let TopFriendsElements = props.topFriends.map(t => <Friend name={t.name} avatarUrl={t.avatarUrl} id={t.id} />)

//    return (
//       <div className={s.topFriends}>
//          {TopFriendsElements}
//       </div>
//    )
// }
let mapStateToProps = (state) => {
   return {
      topFriends: state.sidebar.topFriends

   }
}

const TopFriendsContainer = connect(mapStateToProps)(TopFriends)

export default TopFriendsContainer 
