import { use } from "react";

const Users = ({ fetchUser }) => {
  const users = use(fetchUser);
  console.log(users);

  return (
    <>
      <div className="card">
        <h2>Users: {users.length}</h2>
      </div>
    </>
  );
}

export default Users;