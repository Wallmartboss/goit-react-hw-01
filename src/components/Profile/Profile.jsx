const Profile = ({ userdata }) => {
    return (
        <div>
            <div>
                <img
                    src={userdata.avatar}
                    alt="User avatar"
                />
                <p>{userdata.username}</p>
                <p>{userdata.tag}</p>
                <p>{userdata.location}</p>
            </div>

            <ul>
                <li>
                    <span>Followers</span>
                    <span>{userdata.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{userdata.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{userdata.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile