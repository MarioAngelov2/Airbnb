import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AccountNav from "./AccountNav";
import { UserContext } from "../../context/userContext";
import ClipLoader from "react-spinners/ClipLoader";
import * as api from '../../api/requester'

function Account() {
    const { user, ready, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    if (!ready) {
        return (
            <div className="flex flex-col items-center justify-center mt-32">
                <ClipLoader className="mb-4"/>
                <span>Loading...</span>
            </div>
        );
    }

    if (ready && !user) {
        return navigate("/login");
    }

    const onLogout = async () => {
        await api.logout();
        setUser(null);
        navigate('/')
    }

    return (
        <div>
            <AccountNav />
            <div className="flex flex-col items-center justify-center mt-16">
                <h1 className="text-3xl mb-1">Welcome {user.name}</h1>
                <p>{user.email}</p>
                <button onClick={onLogout} className="primary max-w-xs md:max-w-md mt-4">Logout</button>
            </div>
        </div>
    );
}

export default Account;
