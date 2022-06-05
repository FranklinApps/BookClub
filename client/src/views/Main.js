import React, {useState} from "react";
import UserForm from '../components/UserForm.js';

const Main =(props) => {
    const [user, setUser] = useState([]);
    
return (
    <div>

        <UserForm user={user} setUser={setUser}/>

    </div>
)
}
export default Main;