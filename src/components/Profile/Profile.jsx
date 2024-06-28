import s from './Profile.module.css'; 

const Profile = ({ user }) => {
    return (
        <div className={s.user_card}>
            <div className={s.user_info}>
                <img className={s.user_img}
                    src={user.avatar}
                    alt="User avatar"
                />
                <h1>{user.username}</h1>
                <h2>@{user.tag}</h2>
                <h2>{user.location}</h2>
            </div>

            <ul className={s.user_stats}>
                <li className={s.user_stat_data}>
                    <span>Followers  </span>
                    <span>{user.stats.followers}</span>
                </li>
                <li className={s.user_stat_data}>
                    <span>Views  </span>
                    <span>{user.stats.views}</span>
                </li>
                <li className={s.user_stat_data}>
                    <span>Likes  </span>
                    <span>{user.stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};
export default Profile;