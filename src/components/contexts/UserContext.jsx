import React from "react";

const UserContext = React.createContext({
  user: "Guest",
  changeUser: () => {}
});

export default UserContext;
