import React from "react";
import PropTypes from "prop-types";
import s from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.friendsContainer}>
      <img className={s.image} src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      <p
        className={`${s.status} ${
          isOnline ? s["statusOnline"] : s["statusOffline"]
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
