import Profile from "./Profile/Profile";
import userdata from "../userdata.json";

export default function App() {
  return (
    <>
     <Profile user={userdata} />
    </>
  );
};