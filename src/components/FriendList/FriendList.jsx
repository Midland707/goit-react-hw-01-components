// 3 - Список друзів
// Необхідно створити компонент <FriendList>, за допомогою якого ми могли б відображати інформацію про друзів користувача.
// Інформація про друзів зберігається у файлі friends.json.

import friends from 'components/FriendList/friends.json';

const FriendList = ({ friends }) => (
  <section class="statistics">
    <h2 class="title">Upload stats</h2>
    <ul class="stat-list">
      {friends.map(friends => (
        <li class="item">
          <span class="status">{friends.isOnline}</span>
          <img
            class="avatar"
            src={friends.avatar}
            alt="User avatar"
            width="48"
          />
          <p class="name">{friends.name} </p>
        </li>
      ))}
    </ul>
  </section>
);

export const friendList = <FriendList friends={friends} />;
