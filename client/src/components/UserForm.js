import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const UserForm=(props) => {
    const {user, setUser} = props;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] =useState([])
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/user', {
            firstName,
            lastName,
            email,
            password
        })
        .then(res => {
            navigate('/')
            console.log(res);
            console.log(res.data);
            setUser([...user, res.data]);
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
        })
        .catch((err)=>{
            const errorResponse= err.response.data.errors;
            const errArr = [];
            for(const key of Object.keys(errorResponse)){
                errArr.push(errorResponse[key].message)
            }
            setErrors(errArr);
        });
    }


    return (
        <div>
            <h1>Register</h1>
            {errors.map((error, index)=> {
                return(<p key={index}>{error}</p>)
            })}
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>First Name:</label><br/>
                    <input onChange ={(e)=> setFirstName(e.target.value)} value={firstName} type='text' name='firstName'/>
                    { errors.firstName ?
                        <p>{errors.firstName.message}</p>
                        : null
                    }
                </p>
                <p>
                    <label>Last Name:</label><br/>
                    <input onChange ={(e)=> setLastName(e.target.value)} value={lastName} type='text' name='lastName'/>
                    { errors.lastName ?
                        <p>{errors.lastName.message}</p>
                        : null
                    }
                </p>
                <p>
                    <label> Email:</label><br/>
                    <input onChange ={(e)=> setEmail(e.target.value)} value={email} type='text' name='email'/>
                    { errors.email ?
                        <p>{errors.email.message}</p>
                        : null
                    }
                </p>
                <p>
                    <label> Password:</label><br/>
                    <input onChange ={(e)=> setPassword(e.target.value)} value={password} type='text' name='password'/>
                    { errors.password ?
                        <p>{errors.password.message}</p>
                        : null
                    }
                </p>
                {errors.firstName ? <span>{errors.firstName.message} </span>: null}
                {errors.lastName ? <span>{errors.lastName.message} </span>: null}
                {errors.email ? <span>{errors.email.message} </span>: null}
                {errors.password ? <span>{errors.password.message} </span>: null}
                <input type='submit' value='Create'/>
            </form>
            <a href='/'>Home</a>
        </div>
    )}
export default UserForm;