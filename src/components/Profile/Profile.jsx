// 1 - Профіль соціальної мережі
// Необхідно створити компонент <Profile>, за допомогою якого ми могли б відображати інформацію про користувача соціальної мережі.
// Дані про користувача лежать у файлі user.json.

import PropTypes from 'prop-types'; // ES6 перевіряє відповідність типів даних
import user from './user.json';
import './Profile.css';

const Profile = ({ avatar, username, tag, location, stats }) => (
  <div className="profile">
    <div className="description">
      <img className="profile-avatar" src={avatar} alt="User avatar" />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li className="stats-item">
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li className="stats-item">
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li className="stats-item">
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
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

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
