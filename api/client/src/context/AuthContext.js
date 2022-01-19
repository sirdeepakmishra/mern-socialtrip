import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    // user: {
    //     _id: "61b70c61294d6433e79d8a3e",
    //     username: "deepak",
    //     email: "deepak@gmail.com",
    //     password: "$2b$10$hCxcWY4hRLLsbHtDoYWYs.YWU5jCVUa.TWQUJ8uKz54gb9Bs4Uut6",
    //     profilePicture: "",
    //     coverPicture: "",
    //     followers: [],
    //     followings: [
    //         "61b704809fd035e219b75ac8"
    //     ],
    //     isAdmin: false,
    //     createdAt: "2021-12-13T09:03:29.677Z",
    //     updatedAt: "2021-12-16T19:23:01.915Z",
    // },
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);


    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user))
      },[state.user])

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}>
            {children}
        </AuthContext.Provider>
    )
}


