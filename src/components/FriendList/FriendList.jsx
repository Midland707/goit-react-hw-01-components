// 3 - Список друзів
// Необхідно створити компонент <FriendList>, за допомогою якого ми могли б відображати інформацію про друзів користувача.
// Інформація про друзів зберігається у файлі friends.json.

import friends from './friends.json';
import './FriendList.css';

const FriendList = ({ friends }) => (
  <section class="friends">
    <h2 class="friend-title">Friends</h2>
    <ul class="friend-list">
      {friends.map(friends => (
        <li key={friends.id} class="friend-item">
          {friends.isOnline === true ? (
            <span class="status status-green"></span>
          ) : (
            <span class="status status-red"></span>
          )}
          <img
            class="friend-avatar"
            src={friends.avatar}
            alt="User avatar"
            width="48"
          />
          <p class="friend-name">{friends.name} </p>
        </li>
      ))}
    </ul>
  </section>
);

export const friendList = <FriendList friends={friends} />;
