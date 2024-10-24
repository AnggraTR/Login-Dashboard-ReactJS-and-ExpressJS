import React from "react";

import LoginForm from "../components/LoginForm";

function LoginPage({ onLogin }) {
    return (
        <div className="min-h-screen w-screen bg-purple-600 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold text-center mb-6 text-purple-700">LOGIN</h1>
                <LoginForm onLogin={onLogin} />
            </div>
        </div>
    );
}

export default LoginPage;
