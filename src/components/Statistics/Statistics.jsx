// 2- Секція статистики
// Створити компонент <Statistics>, який би відображав статистику з переданих пропсів. Наприклад, завантаження у хмару за типом файлів,
// відвідування веб-сторінки користувачами різних країн, фінансові витрати тощо. Дані про статистику лежать у файлі data.json.

import data from './data.json';
import './Statistics.css';

const Statistics = ({ stats }) => (
  <section className="statistics">
    <h2 className="title">Upload stats</h2>
    <ul className="stat-list">
      {stats.map(stats => (
        <li key={stats.id} className="item">
          <span className="label">{stats.label}</span>
          <span className="percentage">{stats.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export const statistics = <Statistics title="Upload stats" stats={data} />;
