import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="max-w-global mx-auto flex justify-center mt-20">
            <div className="flex flex-col">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-md" action="">
                    <input type="email" placeholder="your@email.com" />
                    <input type="password" placeholder="password" />
                    <button className="primary mt-5">Login</button>
                </form>
                <div className="text-center mt-4">
                    Already have an account? <Link className="font-semibold underline" to={"/login"}>Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
