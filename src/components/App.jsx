import Profile from "./Profile/Profile";
import userData from "/src/userData.json";
import FriendList from "./FriendList/FriendList"
import friends from "/src/friends.json/"
import transactions from "/src/transactions.json"
import TransactionHistory from "./TransactionHistory/TransactionHistory"

const App = () => {
  return (
    <>
      <Profile user={userData} />
      <FriendList friends={friends} />
       <TransactionHistory transactions={transactions} />
    </>
  );
};
export default App;