
import './App.css'
import {Navbar} from "./components/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/Home.jsx";
import {Projects} from "./components/Projects.jsx";
import {Competences} from "./components/Competences.jsx";
import {Contact} from "./components/Contact.jsx";

export default function App() {
    return (
<div>
    <Navbar/>
    <Home/>
    <Projects/>
    <Competences/>
    <Contact/>

</div>


    )
}
