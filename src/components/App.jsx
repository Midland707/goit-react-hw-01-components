import { profile } from 'components/Profile/Profile';
import { statistics } from 'components/Statistics/Statistics';
import { friendList } from 'components/FriendList/FriendList';
import { transactionHistory } from 'components/TransactionHistory/TransactionHistory';

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
