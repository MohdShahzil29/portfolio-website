import React from "react";
import "./App.scss";
import Intro from "./Coponents/Intro";
// import Skills from "./Coponents/Skills";
import Project from './Coponents/Project'
import Blogs from "./Coponents/blogs";
import Contact from './Coponents/contact';
import Skills from "./Coponents/Skills";
import Footer from "./Coponents/footer";

function App() {
    return (
        <div>
             <Intro />
             <Skills/>
             <Project/>
             <Blogs/>
             <Contact/>
             <Footer/>

        </div>
    );
}

export default App;
