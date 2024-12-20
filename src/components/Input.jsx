import React from "react";

export const InputText = ({value, onChange, name, placeholder, type}) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full bg-gray-800 p-3 rounded-md border border-gray-600 focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
    )
}

export const TextArea = ({value, onChange, name, placeholder}) => {
    return (
        <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full bg-gray-800 p-3 rounded-md border border-gray-600 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            rows={4}
        ></textarea>
    )
}