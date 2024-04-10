


// import React from "react";
// import { useSelector } from 'react-redux';
// import { Navigate, Outlet } from "react-router-dom";

// const PrivateRoute = () => {
    
// 	const { isAuthenticated } = useSelector((state) => state.userDetail);
	
// 	if (!isAuthenticated) {
// 		return <Navigate to="/" replace />;
// 	}

// 	// return <Outlet isAuthenticated={isAuthenticated}/>
//     return <Outlet/>
// };

// export default PrivateRoute;






// import React from "react";
// import { useSelector } from 'react-redux';
// import { Navigate, Outlet } from "react-router-dom";

// const PrivateRoute = ({children,authentication={true}}) => {
    
// 	const { isAuthenticated } = useSelector((state) => state.userDetail);
	
// 	if (!isAuthenticated) {
// 		return <Navigate to="/" replace />;
// 	}

// 	// return <Outlet isAuthenticated={isAuthenticated}/>
//     return <Outlet/>
// };

// export default PrivateRoute;




import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

//childeren here want to conditional check need render or not

export default function PrivateRoute({children, authentication = true,rolename}) {

	

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    
	const { isAuthenticated } = useSelector((state) => state.userDetail);
    const {auth}= useSelector(state => state.userDetail);
  

    useEffect(() => {
        //TODO: make it more easy to understand

        // if (isAuthenticated ===true){
        //     navigate("/")
        // } else if (isAuthenticated === false) {
        //     navigate("/login")
        // }
        
        //let authValue = isAuthenticated === true ? true : false

        if (authentication && !isAuthenticated) {
            navigate("/login");
        } else if (!authentication && isAuthenticated) {
            auth.rolename ==="DOCTOR" ? navigate("/github") : navigate("/dashboard");
        } else if (rolename && isAuthenticated && auth.rolename !== rolename) {
            navigate("/home");
        } else {
            setLoader(false);
        }
        setLoader(false)
    }, [isAuthenticated,auth.rolename, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}