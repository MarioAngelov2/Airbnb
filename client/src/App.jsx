import { Route, Routes } from "react-router-dom";
import Account from "./components/Account/Account";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="py-3 px-4">
                <Navbar />
            <Routes>
                <Route path="/account" element={<Account />} />
            </Routes>
        </div>
    );
}

export default App;
