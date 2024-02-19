import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Form, Link } from "react-router-dom";
import { getNoteByTitle } from "../../api/GET";
import { useLoading } from "../../hooks/customHook";
import useDebounce from "../../hooks/useDebounce";

const SearchNotes = () => {
    const [searchValue, setSearchValue] = useState("");
    const [result, setResult] = useState(null);


    const [loading,setLoading] = useLoading(false)

    const debouncedValue = useDebounce(searchValue,500);

    useEffect(()=>{
        const searchNotes = async () => {
            setLoading(true)
            if(debouncedValue == ""){
                setResult(null)
                return 
            }
            const notes = await getNoteByTitle(debouncedValue);
            setResult(notes)

            setLoading(false);
        }
        searchNotes()

    },[debouncedValue])


    return (
        <>
            <div className="w-full flex-box flex-col items-center justify-evenly gap-7 p-2  rounded-[15px]">
                <Form className="w-full bg-slate-100 dark:bg-[#373737] flex-box px-5 py-2 rounded-[15px] drop-shadow-sm duration-300">
                    <input
                        type="text"
                        className="w-[90%] h-[2rem] bg-transparent placeholder:text-slate-800 dark:placeholder:text-white/70 outline-none "
                        placeholder="Search..."
                        value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                    />
                    <button>
                        <BiSearch
                            size={25}
                            className="fill-slate-800 dark:fill-white ml-3"
                        />
                    </button>
                </Form>

                <div className="w-full flex justify-evenly items-center gap-4">
                    <button className="p-2 w-[7rem] rounded-[10px] text-sm inter font-[600] border-2 hover:bg-red-400 duration-300 hover:text-black border-red-400 drop-shadow-md">
                        Trending
                    </button>
                    <button className="p-2 w-[7rem] rounded-[10px]  text-sm inter font-[600] border-2 hover:bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-orange-500 to-yellow-300 hover:border-none duration-300 hover:text-black border-yellow-300 drop-shadow-md">
                        Top
                    </button>
                    <button className="p-2 w-[7rem] rounded-[10px]  text-sm inter font-[600] border-2 hover:bg-cyan-300 duration-300 hover:text-black border-cyan-300 drop-shadow-md">
                        Latest
                    </button>
                </div>
            </div>
            <div className=" max-h-[28rem] w-full flex-box flex-col justify-start gap-2 no-scrollbar overflow-y-auto">
                
                {result
                    ? result.map((note) => {
                          return <Link to={`/explore/${note.user_slug}/${note.day_no}`} className=" w-full px-4 py-5  rounded-2xl dark:bg-[#212121a6] bg-[#ecececa6] shadow-md text-rose-500 font-semibold  text-lg">
                            {note.title}</Link>;
                      })
                    : null}
            </div>
        </>
    );
};

export default SearchNotes;
