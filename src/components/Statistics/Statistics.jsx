// 2- Секція статистики
// Створити компонент <Statistics>, який би відображав статистику з переданих пропсів. Наприклад, завантаження у хмару за типом файлів,
// відвідування веб-сторінки користувачами різних країн, фінансові витрати тощо. Дані про статистику лежать у файлі data.json.

import PropTypes from 'prop-types';
import css from'./Statistics.module.css';

export const Statistics = ({title, stats }) => (
  <section className={css.statistics}>
    {title && (
      <h2 className={css.title}>{title}</h2>
    )}
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

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape( {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired,
};