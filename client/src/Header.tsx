import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "./UserContext.tsx";
const Header = () => {
    const {setUserInfo, userInfo}: any = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include'
        }).then(res => {
            res.json().then(userInfo => {
                setUserInfo(userInfo)
            });
        })
    },[]);
    const logout = () => {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST'
        })
        setUserInfo(null);
    }

    const username = userInfo?.username;

    return (
        <header>
            <Link className="logo" to="/">My Blog</Link>
            <nav>
                {username && (
                    <>
                        <Link to="/create">Create new post</Link>
                        <a onClick={logout} style={{ cursor: 'pointer' }}>Logout</a>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;