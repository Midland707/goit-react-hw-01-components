import { profile } from 'components/Profile/Profile';
import { statistics } from 'components/Statistics/Statistics';
import { friendList } from 'components/FriendList/FriendList';
import { transactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {profile}
      {statistics}
      {friendList}
      {transactionHistory}
    </div>
  );
};
