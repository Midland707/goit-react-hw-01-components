// 2- Секція статистики
// Створити компонент <Statistics>, який би відображав статистику з переданих пропсів. Наприклад, завантаження у хмару за типом файлів,
// відвідування веб-сторінки користувачами різних країн, фінансові витрати тощо. Дані про статистику лежать у файлі data.json.

import PropTypes from 'prop-types';
import data from './data.json';
import css from'./Statistics.module.css';

const Statistics = ({ stats }) => (
  <section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>
    <ul className={css.stat_list}>
      {stats.map(stats => (
      <li key={stats.id} className={css.item}>
          <span className={css.label}>{stats.label}</span>
          <span className={css.percentage}>{stats.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export const statistics = <Statistics stats={data} />;

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape( {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired,
};