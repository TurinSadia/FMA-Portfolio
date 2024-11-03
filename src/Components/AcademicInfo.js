import "../Components/AcademicInfoStyle.css";
import "../Components/ExperienceInfoStyle.css";
import  AcademicImg1 from "../assets/du.png";
import  AcademicImg2 from "../assets/greenwich.png";
import {FaElementor}  from 'react-icons/fa';
import React from 'react';






const AcademicInfo = () => {

  return (
   
<div className="academic-info">
    <h1>Education</h1>
  <div className="common">
    <div className="academic-left">
    <div className="academic-logo">
    <img  src={AcademicImg1} alt="AcademicImg" />
    </div>
    </div>
    <div className="academic-right">
    <div className="academic-name">
    <h3>Ph.D. Student in Electrical & Electronic Engineering, University of Dhaka, Bangladesh.</h3>
     <p>Registration No. 85, Session: 2019-20. Dr. Muhammed Shohidullah Hall. </p>
    </div>
    </div>
  </div>


  <div className="common">
    <div className="academic-left">
    <div className="academic-logo">
    <img  src={AcademicImg2} alt="AcademicImg" />
    </div>
    </div>
    <div className="academic-right">
    <div className="academic-name">
    <h3>M.Sc.(Engg) in Wireless Communication & System Engineering, University of Greenwich, UK</h3>
    </div>
    </div>
    </div>
 

  <div className="common">
    <div className="academic-left">
    <div className="academic-logo">
    <img  src={AcademicImg2} alt="AcademicImg" />
    </div>
    </div>
    <div className="academic-right">
    <div className="academic-name">
    <h3>B.Sc.(Engg) in Computer Science & Communication Engineering, University of Greenwich, UK</h3>
    </div>
    </div>
  </div>

{/* ------------------------Experience Info-------------------------------------- */}
<br /> <br />

  <div className="experience-info">
    <h1>Experience</h1>
    <div className="experience-containner">
       
<div className="col-4">
    <div className="experience-box" >
        <h2> Assistant Professor </h2>
        <span>|| May 2018- Present||</span>
        <p>East-West University, Dhaka, Bangladesh, Electrical & Electronic Engineering Department.</p>
        
    </div>
</div>

<div className="col-4">
    <div className="experience-box">
    <h2> Senior Lecturer</h2>
        <span>|| September 2013-April 2018||</span>
        <p>East-West University, Dhaka, Bangladesh, Electrical & Electronic Engineering Department.</p>
    </div>
</div>

<div className="col-4">
    <div className="experience-box">
    <h2> Lecturer </h2>
        <span>|| September 2011- August 2013||</span>
        <p>East-West University, Dhaka, Bangladesh, Electrical & Electronic Engineering Department.</p>
    </div>
</div>

    </div>
    </div>



{/* ------------------------Teaching Material-------------------------------------- */}
    <br /> <br />


    <div className="t-material-info">
    <h1>Teaching Materials</h1>
       
<div className="col-4 t-material-col">
    <div className="t-material" >
   
    <>
      <div className="toggler">
        <input type="checkbox" id="toggler__checkbox-id-1" className="toggler__checkbox" />
        <label htmlFor="toggler__checkbox-id-1" className="toggler__label">1. Microprocessors and Interfacing : EEE302</label>
        <span className="toggler__content-box">
          {/* Course content : <br />
          Different types of microprocessors. Intel 8086/8088 microprocessor: Architecture, instruction sets, hardware organization, addressing modes, assembly language programming, system design and interrupt. Programmable peripheral interface, programmable timer, serial communication interface, programmable interrupt controller, direct memory access, keyboard and display interface: programmable keyboard and display controller. Micro-controllers: Introduction, applications.
          The course includes lab work based on theory taught. The lab also includes open-ended design.
          <br /> <br /> */}

         Course Materials: <br />
<a href="https://drive.google.com/drive/u/2/folders/1D2sihs89YjUqpfxZD5VS19YnluO2W1KJ" target="_blank"> <FaElementor size={12} style={{color: "#D3413F"}}/> EEE302_Materials</a>

        </span>
      </div>

      <div className="toggler">
        <input type="checkbox" id="toggler__checkbox-id-2" className="toggler__checkbox" />
        <label htmlFor="toggler__checkbox-id-2" className="toggler__label">2. Fundamentals of Embedded System : EEE306</label>
        <span className="toggler__content-box">
          {/* Course content : <br /> */}
         Course Materials: <br />

         <a href="https://drive.google.com/drive/u/2/folders/1bbQ5z2741muyyUeu73qim7ESEJDiyVV2" target="_blank"><FaElementor size={12} style={{color: "#D3413F"}}/>EEE306_Material</a>
         

        </span>
      </div>



      <div className="toggler">
        <input type="checkbox" id="toggler__checkbox-id-3" className="toggler__checkbox" />
        <label htmlFor="toggler__checkbox-id-3" className="toggler__label">3. Computer Networks : EEE433</label>
        <span className="toggler__content-box">
        {/* Course content : <br />
        Introduction to network and protocol. The Network Edge, Core, and Access, Networks Physical Media Delay and Loss in Packet-Switched Networks ,Protocol Layers and Their Service Models, Internet Backbones, NAPs and ISPs, a Brief History of Computer Networking and the Internet. The Application Layer: Principles of Application-Layer Protocols, The World Wide Web: HTTP, File Transfer: FTP, Electronic Mail in the Internet, The Internet’s Directory Service: DNS, Socket Programming. The Transport Layer: Transport-Layer Services and Principles, Multiplexing and Demultiplexing Applications,  Connectionless Transport: UDP, Principles of Reliable of Data Transfer, TCP case study , Principles of Congestion Control, TCP Congestion Control. The Network Layer:  Introduction and Network Service Model, Routing Principles, Hierarchical Routing.  IP:  The Internet Protocol, routing in the Internet, What is Inside a Router, Mobile networking. The Link Layer and Local Area Networks: The Data Link Layer: Introduction, Services, Error Detection and Correction, Multiple Access Protocols and LANs, LAN Addresses and ARP, Ethernet   Hubs, Bridges and Switches, Wireless LANs: IEEE 802.11, PPP: the Point-to-Point Protocol, ATM.  Security in Computer Networks: What is Network Security, Principles of Cryptography Authentication, Integrity, Key Distribution and Certification, Firewalls, Attacks and Countermeasures Protocols.
        The course includes lab work based on the concepts introduced. */}
        {/* <br /> <br /> */}

         Course Materials: <br />
         <a href="https://drive.google.com/drive/u/2/folders/1nxBSzArOdiFZk8ZVsjTxgOVrka-2AdXL" target="_blank"><FaElementor size={12} style={{color: "#D3413F"}}/>EEE433_Material</a>
        </span>
      </div>
    </>

    </div>
</div>

 {/* <br /> <br /> <br /> <br /> */}


 </div>


</div>
  )
}

export default AcademicInfo
