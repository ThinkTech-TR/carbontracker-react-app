import React from 'react';

export const Avatar = () => {
React.useEffect(() => {
    console.log("render");

    return () => {
        console.log("unmount");
    }
},[]);
return <button type="button" className="btn d-none d-md-block">
 <img src="/images/loggedIn.png" alt="Avatar" /> 
</button>
}
