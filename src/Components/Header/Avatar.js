import React, {useEffect, useState} from 'react';
import {
    Link
} from "react-router-dom";

export const Avatar = () => {

    const [showAvatar, setShowAvatar] = useState(false);

    React.useEffect(() => {
        console.log("render");

        return () => {
            console.log("unmount");
        }
    }, []);
    return <Link to="/logout"><button type="button" onClick={() => setShowAvatar(!showAvatar)} className="btn btn-outline-success d-none d-md-block">
        <img src="/images/loggedIn.png" alt="Avatar" />
    </button> </Link>
}
