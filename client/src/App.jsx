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
import PlacePage from "./components/Places/PlacePage";
import BookingPlces from "./components/Booking/BookingPlces";
import BookedPlace from "./components/Booking/BookedPlace";

axios.defaults.baseURL = "http://127.0.0.1:5001";
axios.defaults.withCredentials = true;

function App() {
    return (
        <UserContextProvider>
            <div className="pt-4 px-6 md:px-12 lg:px-24">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/account/places" element={<UserPlaces />} />
                    <Route path="/account/places/new" element={<AddPlaces />} />
                    <Route path="/account/places/:id" element={<AddPlaces />} />
                    <Route path="/places/:id" element={<PlacePage />} />
                    <Route path="/account/bookings" element={<BookingPlces />} />
                    <Route path="/account/bookings/:id" element={<BookedPlace />} />
                </Routes>
            </div>
        </UserContextProvider>
    );
}

export default App;
