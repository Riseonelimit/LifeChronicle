import React from "react";

const FormInput = ({
    children,
    type = "text",
    name,
    value,
    onChange,
    className,
    placeholder,
}) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className={`w-full lg:text-md   px-[0.7em] py-[0.3em] bg-gray-100 dark:bg-[#3b3b3b3d] focus:outline-none rounded-lg placeholder:font-light   ${className}`}
            placeholder={placeholder}
        />
    );
};

export default FormInput;
