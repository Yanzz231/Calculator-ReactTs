import {useLocation, useNavigate} from "react-router-dom";
import React from "react";

export default function Ticket() {

    const navigate = useNavigate();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const ticket = queryParams.get("ticket");

    if (ticket === null) {
        navigate(`/support`);
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-500">
            <div className="bg-gray-700 text-white w-96 p-8 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4 border-b border-gray-500 pb-2">
                    Support Ticket Form
                </h2>
                <p className="text-center text-lg font-medium text-yellow-400 mb-6">
                    Thank you for sending us your report, we will track the problem now
                </p>
                <div className="text-center text-sm">
                    <span>ticket number:</span>
                    <span className="text-yellow-400 font-bold ml-2">{ticket}</span>
                </div>

                <div className={"flex justify-center mt-8"}>
                    <button
                        onClick={() => navigate("/")}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md focus:outline-none "
                    >
                        BACK
                    </button>
                </div>

            </div>
        </div>
    )
}