import React, {useState} from "react";
import UserForm from '../components/user/UserForm.js';
import UpdateUser from '../components/user/UpdateUser'

const Main =(props) => {
    const [user, setUser] = useState([]);
    
return (
    <div>

        <UserForm user={user} setUser={setUser}/>
        <UpdateUser user={user} setUser={setUser}/>
    </div>

)
}
export default Main;