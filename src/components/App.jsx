import { profile } from './Profile/Profile';
import { statistics } from './Statistics/Statistics';
import { friendList } from './FriendList/FriendList';
import { transactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: 'rgb(180, 180, 180)',
        backgroundColor: 'rgba(197, 193, 193, 0.863)',
      }}
    >
      {profile}
      {statistics}
      {friendList}
      {transactionHistory}
    </div>
  );
};
