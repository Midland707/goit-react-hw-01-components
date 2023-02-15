// 3 - Список друзів
// Необхідно створити компонент <FriendList>, за допомогою якого ми могли б відображати інформацію про друзів користувача.
// Інформація про друзів зберігається у файлі friends.json.

import friends from './friends.json';
import './FriendList.css';

const FriendList = ({ friends }) => (
  <section className="friends">
    <h2 className="friend-title">Friends</h2>
    <ul className="friend-list">
      {friends.map(friends => (
        <li key={friends.id} className="friend-item">
          {friends.isOnline === true ? (
            <span className="status status-green"></span>
          ) : (
            <span className="status status-red"></span>
          )}
          <img
            className="friend-avatar"
            src={friends.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="friend-name">{friends.name} </p>
        </li>
      ))}
    </ul>
  </section>
);

export const friendList = <FriendList friends={friends} />;
