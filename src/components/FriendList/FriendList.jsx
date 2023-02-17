// 3 - Список друзів
// Необхідно створити компонент <FriendList>, за допомогою якого ми могли б відображати інформацію про друзів користувача.
// Інформація про друзів зберігається у файлі friends.json.

import PropTypes from 'prop-types';
import friends from './friends.json';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <section className="friends">
    <h2 className={css.friend_title}>Friends</h2>
    <ul className="friend_list">
      {friends.map(friends => (
        <li key={friends.id} className="friend_item">
          {friends.isOnline === true ? (
            <span className="status status_green"></span>
          ) : (
            <span className="status status_red"></span>
          )}
          <img
            className="friend_avatar"
            src={friends.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="friend_name">{friends.name} </p>
        </li>
      ))}
    </ul>
  </section>
);

export const friendList = <FriendList friends={friends} />;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape( {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // isOnline: PropTypes.bool.isRequired,
    isOnline: PropTypes.oneOf([true, false]).isRequired,
    
  })).isRequired,
};