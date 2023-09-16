import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as api from "../../api/requester";

function Register() {
    const [name, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmpty, setIsEmpty] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        const data = { name, email, password };
        await api.register(data)
        navigate("/");
    };

    useEffect(() => {
        const emptyInputs = !email && !password;

        setIsEmpty(emptyInputs);
    }, [name, email, password]);

    return (
        <div className="max-w-global mx-auto flex justify-center mt-20">
            <div className="flex flex-col">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form onSubmit={handleSubmit} className="max-w-md" action="">
                    <input
                        type="text"
                        placeholder="Mario Angelov"
                        value={name}
                        onChange={(ev) => setUsername(ev.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                    />
                    <button disabled={isEmpty} className="primary mt-5">Register</button>
                </form>
                <div className="text-center mt-4">
                    Already have an account?{" "}
                    <Link className="font-semibold underline" to={"/login"}>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
