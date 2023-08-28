import { Route, Routes } from "react-router-dom";
import Account from "./components/Account/Account";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Places from "./components/Places/Places";
import AddPlaces from "./components/AddPlaces/AddPlaces";

import UserContextProvider from "./context/userContext";


function App() {
    return (
        <UserContextProvider>
            <div className="py-3 px-4">
                <Navbar />
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/account/places" element={<AddPlaces />} />
                    <Route path="/account/places/new" element={<AddPlaces />} />
                </Routes>
            </div>
        </UserContextProvider>
    );
}

export default App;
