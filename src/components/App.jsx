
import Profile from "./components/Profile/Profile.jsx";
import userData from "./userData.json";

export default function App(userdata) {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};