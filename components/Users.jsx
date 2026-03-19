import { Suspense } from "react";

const Users = () => {

  return(
    
    <>
    <h3>Users : </h3>

    <Suspense 
    fallback={ <div>Loading users...</div> }></Suspense>
    
    </>
  )
}

export default Users