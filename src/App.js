import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Chat from "./components/Chat";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Login from "./components/Login";
import { login, logout } from "./features/userSlice";
function App() {
    const dispatch = useDispatch(selectUser);
    const user = useSelector(selectUser);
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(
                    login({
                        uid: authUser.uid,
                        photo: authUser.photoURL,
                        email: authUser.email,
                        displayName: authUser.displayName,
                    }),
                );
            } else {
                dispatch(logout());
            }
        });
    }, [dispatch]);

    return (
        <div className='app'>
            {user ? (
                <>
                    <Sidebar />
                    <Chat />
                </>
            ) : (
                <Login />
            )}
        </div>
    );
}

export default App;
