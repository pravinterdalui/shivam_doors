import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import { JavaTutorial } from "./java-tutorial";
import { JavaScriptTutorial } from "./javascript-tutorial";
import { Login } from "../components/login/login";



export function TutorialIndex(){

    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header className="p-3 bg-dark text-white border border-2 text-center mt-2">
                    <span className="bi bi-camera-video fs-3 fw-bold">Tech Video Tutorials</span>
                    <div className="fs-5">
                        <Link to="/" className="text-white text-decoration-none mx-2">Home</Link>
                        <Link to="/java" className="text-white text-decoration-none mx-2">Java</Link>
                        <Link to="/js" className="text-white text-decoration-none mx-2">JavaScript</Link>
                        <Link to="/login" className="text-white text-decoration-none mx-2">My Project</Link>
                    </div>
                </header>
                <Routes>
                    <Route path="/" element={<div><h3>Welcome to Tech Videos <hr/> <p>We provide videos for various technologies like Java,React,AWS,UI,...NET</p></h3></div>}/>
                    <Route path="java" element={<JavaTutorial/>} />
                    <Route path="js" element={<JavaScriptTutorial/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="*" element={<h3>Requested Path:Not Found</h3>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}