import React, { useContext } from "react";
import UserContext from "../context/user/UserContext";

const Profile = () => {
  const { selectedUser } = useContext(UserContext);
  return (
    <div>
      {selectedUser ? (
        <div>
          El usuario seleccionado es <b>{selectedUser.first_name}</b>{" "}
          <b>{selectedUser.last_name}</b>
        </div>
      ) : (
        <h1>Selecciona un usuario</h1>
      )}
    </div>
  );
};

export default Profile;
