
import './App.css'
import {Navbar} from "./components/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/Home.jsx";
import {Projects} from "./components/Projects.jsx";

export default function App() {
    return (
<div>
    <Navbar/>
    <Home/>
    <Projects/>

</div>


    )
}
