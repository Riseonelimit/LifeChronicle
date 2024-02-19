import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const ContentCard = ({ note }, ref) => {
    return (
        <Link to={`/explore/${note.user_slug}/${note.day_no}`}>
            <div
                ref={ref}
                className=" w-full group h-[18rem] bg-[#ffffff6b] relative dark:bg-[#21202083] p-7 gap-3 flex justify-between flex-col col-span-1 rounded-[15px] shadow-[0_5px_20px_-15px_rgba(0,0,0,0.3)] hover:scale-[1.05] dark:text-black duration-300  "
            >
                <h1 className=" justify-self-start text-2xl font-bold inter  bg-gradient-to-tl dark:from-rose-400 dark:to-orange-600  from-red-400 to-orange-400  text-transparent bg-clip-text line-clamp-2">
                    {note.title}
                </h1>
                <p className="text-md font-[300] inter line-clamp-4 dark:text-white">
                    {parse(note.content)}
                </p>
                <hr className="w-[30%] group-hover:w-[70%]  duration-500 outline-none h-1 rounded-[20px] border-none bg-yellow-400 dark:bg-[#fff948] bg-gradient-to-r from-red-400 to-red-600" />
                <div className="flex w-full justify-between">
                    <h1 className="dark:text-white">
                        {note.username} ,{" "}
                        {new Date(note.publish_date).toLocaleDateString()}
                    </h1>
                    <div className="flex gap-1 justify-evenly items-center">
                        <AiOutlineStar size={25} className="dark:text-white" />
                        <h1 className="dark:text-white">{note.likes_count}</h1>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default React.forwardRef(ContentCard);
