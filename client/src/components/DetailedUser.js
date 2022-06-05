import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const DetailedUser = (props) => {
    const { id } = useParams();
    const [oneUser, setOneUser] = useState({});
    const navigate=useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/user/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);
    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/user/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="oneUser-component">
            <h2>{oneUser.firstName}{oneUser.lastName}</h2>
            <p>First Name: {oneUser.firstName}</p>
            <p>Last Name: {oneUser.lastName}</p>
            <p>Email: {oneUser.email}</p>
            <p>Password: {oneUser.password}</p>
            <button><a href="/"> Home</a></button><br/>
            <button onClick={deleteHandler}>Delete Account: {oneUser.firstName} {oneUser.lastName} </button>
        </div>
    );
};

export default DetailedUser;