import React from "react";
import s from "./Profile.module.css";

const Profile = ({ user }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <div className={s.topPart}>
          <img className={s.image} src={user.avatar} alt="avatar" />
          <h2 className={s.name}>{user.username}</h2>
          <p className={s.textTag}>{user.tag}</p>
          <p className={s.textLoc}>{user.location}</p>
        </div>

        <ul className={s.list}>
          <li className={s.listItem}>
            <p className={s.textStat}>Followers</p>
            {user.followers}
          </li>
          <li className={s.listItem}>
            <p className={s.textStat}>Views</p>
            {user.views}
          </li>
          <li className={s.listItem}>
            <p className={s.textStat}>Likes</p> {user.likes}
          </li>
        </ul>
      </div>
    </div>
    
  );
};

export default Profile;
