import './App.css'
import Circle from "./Pages/Circle.jsx";
import {useRef} from "react";
import UserForm from "@/Pages/userForm.jsx";

const App = () => {

    const myRef = useRef();
    const circleRef = useRef();
    const mouseMovedHandler = (e) => {
        const circle = circleRef.current;
        setTimeout(() => {
            circle.style.left = e.clientX + "px";
            circle.style.top = e.clientY + "px";
        }, 100)
    };

    return (

        <>
        <UserForm></UserForm>
        <div ref={myRef} onMouseMove={mouseMovedHandler} >
            <div className="h-screen relative">
             <Circle ref={circleRef} />
            </div>
        </div>
            </>
    )
}

export default App
