// Acá van los estados globales


import React, { useReducer } from "react";
import UserReducer from './UserReducer';
import UserContext from "./UserContext";
import axios from 'axios';

const State = (props) => {

    const initialEstate = {
        users: [],
        selectedUser: null
    };

    const [state, dispatch] = useReducer(UserReducer, initialEstate);

    //Funciones que alteran el state
    const getUsers = async () => {
        const res = await axios.get('https://reqres.in/api/users');
        dispatch({
            type: 'GET_USERS',
            payload: res.data.data
        })

    };
    const getProfile = async (id) => {
        const res = await axios.get('https://reqres.in/api/users/' + id);
        dispatch({
            type: 'GET_PROFILE',
            payload: res.data.data
        })
    };

    //renderizado del provider
    // usar useMemo para que no se renderice cada vez que se cambia el state
    return (
        <UserContext.Provider value={
            {
                users: state.users,
                selectedUser: state.selectedUser,
                getUsers,
                getProfile
            }
        }>
            {props.children}
        </UserContext.Provider>

    )

}

export default State;
