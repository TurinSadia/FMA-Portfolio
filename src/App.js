import React from "react";
import "./index.css"
import Home from "./route/Home";
import Academic from "./route/Academic";
import ResearchProjects from "./route/ResearchProjects";
import Publication from "./route/Publication";
import Gallery from "./route/Gallery";
import Contact from "./route/Contact";

import {Routes, Route} from "react-router-dom";
import DeepLearningDetails from "./route/DeepLearningDetails";




function App() {
  
  return (
    <>
        <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/Academic" element={<Academic />}/>
          <Route path="/ResearchProjects" element={<ResearchProjects />}/>
          <Route path="/Publication" element={<Publication />}/>
          <Route path="/Gallery" element={<Gallery />}/>
          <Route path="/Contact" element={<Contact />}/>

          <Route path="/DeepLearningDetails" element={<DeepLearningDetails/>}/>
          
          
        </Routes>
    </>
  );
}

export default App;
