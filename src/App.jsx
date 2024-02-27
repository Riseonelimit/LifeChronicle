import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./index.css";

//components
import Navbar from "./components/layout/Navbar";
import LandingPage from "./components/LandingPage";
// import jwt from "jsonwebtoken"
//assest
import bg from "./assets/blur3.svg";
import bg2 from "./assets/testbg.svg";
import { useContext, useEffect } from "react";
import { Data } from "./context/DataContext";
import { USER } from "./reducer/userReducer";
import { authLogin } from "./api/auth/AUTH";
import { checkDayExpiry } from "./utils/helpers";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoading } from "./hooks/customHook";

function App() {
    const context = useContext(Data);
    const navigate = useNavigate();

    const [loading, setLoading] = useLoading(false);

    useEffect(() => {
        context.SET_STATUS(true);
        const checkAuth = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                const res = await authLogin(token);
                if (res) {
                    await checkDayExpiry(res.day_timer, res, token);
                    context.SET_STATUS(false);
                    return context.USER_DISPATCHER({
                        type: USER.LOGGED_IN,
                        payload: res,
                    });
                }

                localStorage.removeItem("token");
                context.USER_DISPATCHER({ type: USER.LOGGED_OUT });
                context.SET_STATUS(false);
                return navigate("/");
            }
        };

        checkAuth();
        return () => context.SET_STATUS(false);
    }, []);
    // console.log(context.USER);
    const { pathname: pathName } = useLocation();
    return (
        <div className="relative w-full overflow-x-hidden h-full flex flex-col bg-[#fffffe] backdrop-blur-lg items-center dark:bg-[#16161a] dark:text-white duration-500">
            <Navbar />
            <div className="w-full z-20 ">
                {pathName !== "/" ? <Outlet key="1" /> : <LandingPage />}
            </div>
            {pathName === "/" ? (
                <img
                    src={bg2}
                    alt="bg_blur"
                    className="absolute w-full h-full object-cover top-[-15%] -z-10  "
                />
            ) : (
                <img
                    src={bg}
                    alt="bg_blur"
                    className="absolute w-full h-full top-0 left-0 object-cover -z-10  "
                />
            )}
            <ToastContainer theme="light" />
        </div>
    );
}

export default App;
