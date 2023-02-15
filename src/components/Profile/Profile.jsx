// 1 - Профіль соціальної мережі
// Необхідно створити компонент <Profile>, за допомогою якого ми могли б відображати інформацію про користувача соціальної мережі.
// Дані про користувача лежать у файлі user.json.

// import PropTypes from 'prop-types'; // ES6 перевіряє відповідність типів даних
import user from './user.json';
import './Profile.css';

const Profile = ({ avatar, username, tag, location, stats }) => (
  <div class="profile">
    <div class="description">
      <img class="profile-avatar" src={avatar} alt="User avatar" />
      <p class="name">{username}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li class="stats-item">
        <span class="label">Followers</span>
        <span class="quantity">{stats.followers}</span>
      </li>
      <li class="stats-item">
        <span class="label">Views</span>
        <span class="quantity">{stats.views}</span>
      </li>
      <li class="stats-item">
        <span class="label">Likes</span>
        <span class="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

export const profile = (
  <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
);
