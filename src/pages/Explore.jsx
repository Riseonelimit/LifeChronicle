import { useCallback, useEffect, useRef, useState } from "react";

import { useInView } from "react-intersection-observer";
import ContentCard from "../components/[Explore]/ContentCard";

// import CurrentDayCard from "../components/CurrentDayCard";

import { getAllNotes } from "../api/GET";
import SearchNotes from "../components/[Explore]/SearchNotes";

const Explore = () => {
    const [notes, setNotes] = useState([]);

    const { ref, inView, entry } = useInView({ rootMargin: "250px" });

    const initialPage = useRef(0);

    const fetchNotes = useCallback(async () => {
        if (inView || entry == undefined) {
            const res = await getAllNotes(initialPage.current);
            if (res && res.length != 0) {
                setNotes([...notes, ...res.sort(() => Math.random() - 0.5)]);
            } else {
                return;
            }

            if (initialPage.current == 0) {
                console.log("check");
                initialPage.current = 10;
            } else {
                initialPage.current += 10;
            }
        }
    });

    useEffect(() => {
        fetchNotes();
    }, [inView]);

    return (
        <section className="md:grid lg:grid flex-box flex-col relative  md:lg:grid-cols-4 lg:grid-cols-4 w-full lg:h-[90vh] lg:p-8 gap-3 lg:gap-10  ">

            {/*! EXPLORE section */}
            <div className="w-full relative h-full flex flex-col p-5 backdrop-blur-lg justify-evenly order-last lg:order-first lg:col-span-3 dark:bg-[#1513137c] bg-[#ffffff7b] rounded-[25px] shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] overflow-hidden  ">
                <div className="w-full h-[10%] p-5  border-green-500">
                    <h1 className="text-4xl inter font-[600]  bg-gradient-to-tl dark:from-yellow-600 dark:to-orange-400  from-yellow-400 to-orange-400  text-transparent bg-clip-text">
                        Explore ✨
                    </h1>
                </div>
                <div className="w-full h-[40rem] overflow-y-scroll no-scrollbar p-5 gap-10 z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   border-blue-500">
                    {notes.map((note, idx) => {
                        if (idx == notes.length - 1) {
                            return (
                                <ContentCard ref={ref} note={note} key={idx} />
                            );
                        }
                        return <ContentCard note={note} key={idx} />;
                    })}
                </div>
            </div>

            {/* SEARCH SECTION */}
            <div
                className={` w-full lg:h-full flex-box flex-col relative justify-start gap-5 lg:col-span-1 rounded-[25px] p-7 z-10`}
            >
              
                <SearchNotes/>
                {/* <DayCompletedCard /> */}
            </div>
        </section>
    );
};

export default Explore;
