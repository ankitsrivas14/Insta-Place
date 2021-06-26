import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Ankit Srivastava",
      image:
        "https://images.pexels.com/photos/6973962/pexels-photo-6973962.jpeg?cs=srgb&dl=pexels-monstera-6973962.jpg&fm=jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
