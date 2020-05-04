import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import PropTypes from "prop-types";

const UserProfilePage = ({ username, avatarUrl, actualName }) => {
  const loggedInUser = useContext(UserContext);
  return (
    <div>
      <p>{username}</p>
      <img src={avatarUrl} alt={`${username}'s avatar`} />
      <p>{actualName}</p>
    </div>
  );
};

UserProfilePage.propTypes = {
  username: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
  actualName: PropTypes.string
};

export default UserProfilePage;
