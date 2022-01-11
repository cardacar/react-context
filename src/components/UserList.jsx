import React, { useEffect, useContext } from "react";
import UserContext from "../context/user/UserContext";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

const UserList = () => {
  const { users, getAllUsers, getProfileById } = useContext(UserContext);

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  const handleClick=(data)=>{
      console.log(`click user ${data}`)
      getProfileById(data)
  }

  return (
    <div>
      <Stack direction="column" spacing={2}>
        {users.map((user) => (
          <div key={user.id}>
            <Chip
              sx={{ width: 150, justifyContent: 'flex-start', pl: 1 }}
              avatar={
                <Avatar
                  sx={{ width: 1 }}
                  alt={`${user.first_name} ${user.last_name}`}
                  src={user.avatar}
                />
              }
              label={`${user.first_name} ${user.last_name}`}
              variant="outlined" 
              color="success"
              onClick={()=>handleClick(user.id)}
            />
          </div>
        ))}
      </Stack>

      <h1>UserList</h1>
    </div>
  );
};

export default UserList;
