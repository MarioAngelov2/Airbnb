import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Account from "./components/Account/Account";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import UserPlaces from "./components/Places/UserPlaces";
import AddPlaces from "./components/AddPlaces/AddPlaces";

import UserContextProvider from "./context/userContext";
import Home from "./components/Home/Home";

axios.defaults.baseURL = "http://127.0.0.1:5001";
axios.defaults.withCredentials = true;


function App() {
    return (
        <UserContextProvider>
            <div className="py-3 px-4">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/account/places" element={<UserPlaces />} />
                    <Route path="/account/places/new" element={<AddPlaces />} />
                    <Route path="/account/places/:id" element={<AddPlaces />} />
                </Routes>
            </div>
        </UserContextProvider>
    );
}

export default App;
