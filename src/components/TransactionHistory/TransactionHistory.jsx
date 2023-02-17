// 4 - Історія транзакцій
// Необхідно створити компонент історії транзакцій в особистому кабінеті інтернет-банку.
// Дані для списку доступні у форматі JSON у файлі transactions.json.

import PropTypes from 'prop-types';
import transactions from './transactions.json';
import css from'./TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={css.transaction_history}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(items => (
        <tr key={items.id}>
          <td>{items.type}</td>
          <td>{items.amount}</td>
          <td>{items.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export const transactionHistory = <TransactionHistory items={transactions} />;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape( {
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['invoice', 'payment', 'withdrawal', 'deposit']).isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })).isRequired,
};