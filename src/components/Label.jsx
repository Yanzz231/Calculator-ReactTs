import React from "react";

export const Label = ({name, plus}) => {
    return (
        <label className="block mb-2 text-sm font-medium">
            {name} <span className="text-red-500">{plus}</span>
        </label>
    )
}

export const RadioLabel = ({value, onChange, name, checked}) => {
    return (
        <label className="inline-flex items-center">
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="text-orange-500 focus:ring-orange-500"
            />
            <span className="ml-2">{value}</span>
        </label>
    )
}