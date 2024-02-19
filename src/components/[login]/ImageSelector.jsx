import React, { useContext, useState } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";

import bg from "../../assets/NoteBlur.svg";
import DataContext, { Data } from "../../context/DataContext";
import { USER } from "../../reducer/userReducer";

import imageData from "../../data/imageSelector.json";
import { signIn } from "../../api/auth/AUTH";

const ImageSelector = () => {
    const [imageValue, setImageValue] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [username, setUsername] = useState("");

    const navigate = useNavigate();
    const context = useContext(Data);

    if (context.USER.email == null) {
        navigate("/signup");
    }
    // console.log(imageValue);

    console.log(context.USER);
    const handleSignIn = async (e) => {
        e.preventDefault();

        // console.log(password);

        const data = {
            ...context.USER,
            username: username,
            profile_img: imageURL,
        };

        console.log(data);
        context.USER_DISPATCHER({ type: USER.UPDATE_FIELD, payload: data });

        const res = await signIn(data);
        if (res != null) {
            localStorage.setItem("token", res.token);
            context.USER_DISPATCHER({
                type: USER.LOGGED_IN,
                payload: res.newUser,
            });
            return navigate("/explore", { replace: true });
        }
    };
    return (
        <div className="w-[60%] h-[80%] relative flex-box flex-col justify-evenly self-start mt-[2em] ">
            <div className=" w-full flex-box transform">
                <h1 className="md:text-[3rem] lg:text-[4rem] inter font-[600] bg-gradient-to-tl dark:from-rose-500 dark:to-orange-400  from-rose-600 to-rose-400  text-transparent bg-clip-text  ">
                    Choose Your Look
                </h1>
            </div>
            {/* <img src={bg} alt="bg_blur" className="absolute w-full h-full top-0 left-0 object-cover -z-10  "/> */}

            <div>
                <Form className="flex-box w-full  p-5 gap-5 group bg-[#fffefe8d] dark:bg-[#151515b4] shadow-[rgba(0,_0,_0,_0.2)_0px_10px_20px_-7px] rounded-full">
                    {imageData.map((image) => {
                        return (
                            <button
                                key={image.id}
                                value={image.src}
                                onFocus={(e) => {
                                    setImageValue(e.target.value);
                                    setImageURL(image.base_url);
                                }}
                                className={`w-[10rem] hover:scale-[1.1]  hover:!opacity-100 focus:opacity-100 focus:scale-[1.1]  ${
                                    imageValue == null
                                        ? "opacity-100 group-hover:opacity-25"
                                        : imageValue != null &&
                                          imageValue === image.src
                                        ? " opacity-100 scale-[1.1] "
                                        : " opacity-25 "
                                }  transform duration-200   rounded-full p-3 `}
                            >
                                <img
                                    src={image.src}
                                    alt="avatar_image"
                                    className=" w-full h-full object-cover"
                                />
                                {/* <img src={`data:image/svg+xml;base64,${image.base_url}`} alt="image" /> */}
                            </button>
                        );
                    })}
                </Form>
            </div>

            {imageValue != null
                ? [
                      <h1
                          key={1}
                          className="md:text-[3rem] lg:text-[3rem] inter font-[600] bg-gradient-to-tl dark:from-rose-600 dark:to-orange-400  from-rose-600 to-rose-400  text-transparent bg-clip-text  "
                      >
                          Get A Cool NickName
                      </h1>,
                      <div
                          key={2}
                          className=" flex-box flex-col justify-center gap-5  bg-[#fffefe8d] dark:bg-[#151515b4] shadow-[rgba(0,_0,_0,_0.2)_0px_10px_20px_-7px] rounded-full transform duration-150 opacity-100"
                      >
                          <Form className="flex-box w-full">
                              <input
                                  type="text"
                                  placeholder="eg: Kaachaoww"
                                  onChange={(e) => {
                                      setUsername(e.target.value);
                                  }}
                                  className=" placeholder:dark:text-slate-600 bg-transparent  focus:outline-none p-4 text-4xl s text-center"
                              />
                          </Form>
                      </div>,
                      <button
                          key={3}
                          onClick={handleSignIn}
                          type="submit"
                          className="bg-gradient-to-tl dark:from-rose-600 dark:to-orange-400  from-rose-600 to-rose-400 text-white  duration-300 rounded-2xl px-4 py-3 text-xl font-medium text-start"
                      >
                          Sign In
                      </button>,
                  ]
                : null}
        </div>
    );
};

export default ImageSelector;
