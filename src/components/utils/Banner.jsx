import React from "react";

const Banner = ({children}) => {
    return (
        <div className="w-full flex-box p-5 bg-gradient-to-tl from-rose-400 to-orange-500 ">
            <h1 className="  text-[1.5rem]  md:text-[3rem] lg:text-[3rem] inter font-[600] bg-gradient-to-tl dark:from-orange-100 dark:to-gray-100  from-gray-100 to-orange-100  text-transparent bg-clip-text  ">
                {children}
            </h1>
        </div>
    );
};

export default Banner;
