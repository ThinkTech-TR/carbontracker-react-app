import React from 'react';

export const Avatar = () => {
React.useEffect(() => {
    console.log("render");

    return () => {
        console.log("unmount");
    }
},[]);
return <button type="button" className="btn">
 <img src="/images/loggedIn.png" alt="Avatar" className="user-actions"/> 
</button>
}
