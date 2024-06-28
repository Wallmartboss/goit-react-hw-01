import s from "./FriendListItem.module.css"; 

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={s.friend_card}>
            <img className={s.friend_img} src={avatar} alt={name} width="48" />
            <p className={s.friend_text}> {name}</p>
            <p className={isOnline ? s.friendOnline : s.friendOffline}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    );
};
export default FriendListItem;