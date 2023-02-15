// 4 - Історія транзакцій
// Необхідно створити компонент історії транзакцій в особистому кабінеті інтернет-банку.
// Дані для списку доступні у форматі JSON у файлі transactions.json.

import transactions from './transactions.json';
import './TransactionHistory.css';

const TransactionHistory = ({ items }) => (
  <table className="transaction-history">
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