import { profile } from 'components/profile/profile';
import { statistics } from 'components/statistics/statistics';
import { friendList } from 'components/friendList/friendList';
import { transactionHistory } from 'components/transactionHistory/transactionHistory';

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
      {/* {transactionHistory} */}
    </div>
  );
};
