// 2- Секція статистики
// Створити компонент <Statistics>, який би відображав статистику з переданих пропсів. Наприклад, завантаження у хмару за типом файлів,
// відвідування веб-сторінки користувачами різних країн, фінансові витрати тощо. Дані про статистику лежать у файлі data.json.

import data from 'components/statistics/data.json';
import './statistics.css';

const Statistics = ({ stats }) => (
  <section class="statistics">
    <h2 class="title">Upload stats</h2>
    <ul class="stat-list">
      {stats.map(stats => (
        <li key={stats.id} class="item">
          <span class="label">{stats.label}</span>
          <span class="percentage">{stats.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export const statistics = <Statistics title="Upload stats" stats={data} />;
