import Profile from "./Profile/Profile";
import userData from "../userData.json";

const App = () => {
  return (
    <>
     <Profile user={userdata} />
    </>
  );
};
export default App;