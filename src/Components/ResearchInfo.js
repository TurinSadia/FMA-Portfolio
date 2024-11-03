
import { Link } from "react-router-dom";
import "../Components/ResearchInfoStyle.css";
import React from 'react'

const ResearchInfo = () => {
return (
 <div className="research-info">
    <h1>Research Projects</h1>
    <div className="row"> 
    <div className="research-container">  
<div className="col-4">
    <div className="research-box box1 align-center">
        <h2> Power System</h2>
    </div>
</div>



<div className="col-4">
    <div className="research-box box3 align-center">
    <h2>Wireless Communication </h2>
    </div>
</div>
</div>  
    </div>

    <div className="row"> 
    <div className="research-container">  
<div className="col-4">
    <div className="research-box box4 align-center">
        <h2> Robotics</h2>
    </div>
</div>

<div className="col-4">
    <div className="research-box box5 align-center">
    <h2> Machine Learning</h2>
    </div>
</div>

 <div className="col-4">
 <Link to="/DeepLearningDetails"> <div className="research-box box6 align-center">
    <h2>Deep Learning </h2>
    </div>
</Link>
</div>

</div>  

</div>

    <div className="row"> 
    <div className="research-container">  
<div className="col-4">
    <div className="research-box box7 align-center">
        <h2> Internet of things </h2>
    </div>
</div>

<div className="col-4">
    <div className="research-box box8 align-center">
    <h2>Computer Networks Security </h2>
    </div>
</div>
</div>  

 </div>

 </div>
)
}

export default ResearchInfo
