import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import userData from "/src/userData.json";
import friends from "/src/friends.json/";
import transactions from "/src/transactions.json";


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