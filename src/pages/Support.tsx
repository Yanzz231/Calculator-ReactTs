import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

// FUNCTION
import {message} from "../function/swal";
import {generateRandomFourDigit} from "../function/function";

// COMPONENT
import {InputText, TextArea} from "../components/Input";
import {Label, RadioLabel} from "../components/Label";

const checkedRadio = [
    "General",
    "Bug"
]

export default function Support() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        topic: "General",
        description: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log(form.topic)
        if(form.firstName === "" || form.lastName === "" || form.email === "") return message("Error", "Isi form yang belom terisi", "error")

        setForm({
            firstName: "",
            lastName: "",
            email: "",
            topic: "General",
            description: "",
        });

        const randomFourDigit = generateRandomFourDigit();

        navigate(`/ticket?ticket=${randomFourDigit}`);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-800">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-700 text-white p-6 rounded-lg shadow-lg w-full max-w-2xl"
            >
                <h1 className="text-2xl font-bold mb-6">Support Ticket Form</h1>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <Label name={"Name"} plus={"*"}/>
                        <InputText name={"firstName"} placeholder={"First"} value={form.firstName} onChange={handleInputChange} type={"text"} />
                    </div>
                    <div>
                        <Label name={"Last"} plus={"*"}/>
                        <InputText name={"lastName"} placeholder={"Last"} value={form.lastName} onChange={handleInputChange} type={"text"} />
                    </div>
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <Label name={"Email"} plus={"*"}/>
                    <InputText name={"email"} placeholder={"Your email"} value={form.email} onChange={handleInputChange} type={"email"} />
                </div>

                <div className="mb-4">
                    <Label name={"Topic"} plus={"*"}/>
                    <div className="flex flex-col gap-2">
                        {checkedRadio.map(res => {
                            return <RadioLabel name={"topic"} value={res} checked={form.topic === res}
                                               onChange={handleInputChange}/>
                        })}
                    </div>
                </div>

                <div className="mb-4">
                    <Label name={"Description"} plus={"(optional)"}/>
                    <TextArea name={"description"} placeholder={"Description Report"} value={form.description} onChange={handleInputChange}/>
                </div>

                <div className="flex justify-between">
                    <button
                        onClick={() => navigate("/")}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md focus:outline-none"
                    >
                        BACK
                    </button>
                    <button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md focus:outline-none"
                    >
                        SEND
                    </button>
                </div>
            </form>
        </div>
    );
}