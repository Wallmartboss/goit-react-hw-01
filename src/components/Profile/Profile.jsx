import s from './Profile.module.css'; 

const Profile = ({ user }) => {
    return (
        <div className={s.user_card}>
            <div className={s.user_info}>
                <img className={s.user_img}
                    src={user.avatar}
                    alt="User avatar"
                />
                <p className={s.user_name}>{user.username}</p>
                <p className={s.user_info}>@{user.tag}</p>
                <p className={s.user_info}>{user.location}</p>
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