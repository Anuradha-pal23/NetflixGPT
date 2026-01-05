import Login from './Login';
import Browse from './Browse';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {onAuthStateChanged } from "firebase/auth";
import {useDispatch} from "react-redux";
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { auth } from "../utils/firebase";


function Body(){

    const dispatch=useDispatch();

    const appRouter=createBrowserRouter([
       {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  
    ]);

    useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    const {uid,email,displayName} = user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName}))
  } else {
    // User is signed out
    dispatch(removeUser());
  }
});

    },[])


    return(
        <>
        <RouterProvider router={appRouter}/>
        </>
    )
}

export default Body;