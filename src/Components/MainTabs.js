import React from 'react';
import { useState } from "react";
import "./tabStyle.css";

function MainTabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tab-container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          International Journal Publication
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          
          Book Chapters
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          International Conference proceedings
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
         
         <ol>
            <li><b> Alamgir, F.M.</b> , Alam, M.S. <a href=""> " A Novel Deep Learning-based Bidirectional Elman Neural Network for Facial Emotion Recognition" International Journal of Pattern Recognition and Artificial Intelligence, (World Scientific) Vol. 36, No. 10, 2252016 (2022) https://doi.org/10.1142/S0218001422520164 </a> </li>
            <li><b>Alamgir, F.M. </b> , Alam, M.S. "An artificial intelligence driven facial emotion recognition system using hybrid deep belief rain optimization." Multimedia Tools and Applications by Springer Nature (2022). <a href=""> https://link.springer.com/article/10.1007/s11042-022-13378-x </a></li>
            <li>Md. Mahmudul Tarik Chowdhury, Md. Saleh Ebn Sharif and <b>Fakir Mashuque Alamgir</b> , “Design and Simulation of a Dual Conversion Transformer Less Online and Line Interactive UPS” The Dhaka University Journal of Science, Volume 67, No.2 pp. 79-84, July, 2019.</li>
            <li>Faisal Ahmed & <b>Fakir Mashuque Alamgir</b> , “Simulation-Based proportional Study of routing protocols for MANET” International Journal of Computer Networks and Communications Security, Volume 5, Issue 12, pp. 28-36, December 2017.</li>
            <li>Sakib Ullah Sourov, Asifur Rahman, Abdullah Al Mamun, & <b>Fakir Mashuque Alamgir</b> , “Standard Transcranial Direct Current Stimulation (tDCS) Model” International Journal of Computer Networks and Communications Security, Volume 5, Issue 12, pp. 13-21, December 2017.</li>
            <li>Abdullah Al Mamun, Sarwar J.K. Palash & <b>Fakir Mashuque Alamgir</b> , “Flex Sensor-based hand glove for deaf and mute people” International Journal of Computer Networks and Communications Security, Volume 5, Issue 2, pp. 38-48, February 2017.</li>
            <li> <b>Fakir Mashuque Alamgir</b> , Christer Andrews & Jannatul Ferdous Kakon, "A Mat-Lab based Filter for curtailing Interferences in Ad-Hoc Network", International Journal of Computer Networks and Communications Security, Volume 2, Issue 10, pp 348-354, 2014.</li>
            <li>Lailun Nahar, Sameha Zaman Ruthi, <b>Fakir Mashuque Alamgir</b>  & Anwarul Azim, "Decisive Factors of False Detection on Spectrum Sensing in Cognitive Radio", International Journal of Computer Networks & Communication Security, Volume 1, ISSUE 6, Page:225-231, November 2013.</li>
            <li>Rahul Kumar,<b>Fakir M. Alamgir</b>  and Christer Andrews, "Impacts & Minimization of Interference in Ad Hoc Network", Journal of Information and Communication Technologies, volume-2-issue-9-October-2012, 2012.</li>
         </ol>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
         
         <ol>
            <li>S. F. Madina, M.S. Islam, <b>F.M. Alamgir</b> , and M.F. Ferdous, “Internet of Things (IoT)-Based Industrial Monitoring System” Chapter -4 in Industrial Internet of Things: Technologies, Design, and Applications. 1st Edition Imprint CRC Press: Taylor & Francis Group; Pages 32 eBook ISBN 9781003102267 (2022)</li>
            <li>L. Nahar and <b>F. M. Alamgir</b> , "Collision of counterfeit detection on spectrum sensing for cognitive radio" Chapter 8 in Introduction to Cognitive Radio Networks and Applications, pp:334 -352, edited by Geetam Tomar, Ashish Bagwari, and Jyotshana Kanti, published by CRC Press of Taylor & Francis Group, Florida USA.</li>
         </ol>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <ol>
            <li> Obaidullah Al Mahmud, Kausar Khan, R. Roy and <b>Fakir Mashuque Alamgir</b> , " Internet of Things (IoT) based Smart healthcare medical box for elderly people", 2020 IEEE International Conference for Emerging Technology (INCET) Belgaum, India. Jun 5-7, 2020.</li>
            <li>Md. Mohitul Haque, Zakir Hasan Chowdhury and <b>Fakir Mashuque Alamgir</b>  “IoT Based Smart Energy Metering System for Power Consumers”, International Conference on Innovation in Engineering and Technology (ICIET 2019) December 23-24, 2019, University of Dhaka, Dhaka, Bangladesh</li>
            <li>Chowdhury, Mahmud-Ul-Tarik, Ebn Sharif, Saleh Afrin, Foujia, Alamgir, <b>Fakir Mashuque</b>  & Tanzeem Sohana “Design and Analysis of an Isolated SiC MOSFET based full-bridge DC-DC converter”. 5th International Conference on the Developments in Renewable Energy Technology (ICDRET' 18), Kathmandu, Nepal.</li>
            <li><b>Fakir Mashuque Alamgir</b> , F. Ahmed, Mamun Miah, Hossain M. Munna, S. Barua, “A Novel routing Algorithm for inter-group load balancing in wireless mesh networks”,  IEEE 21st Saudi Computer Society National Computer Conference (NCC) 25-26 April, 2018, Riyadh , KSA.</li>
            <li>B.M.   Adnan   and <b>Fakir   Mashuque  Alamgir</b>  ,   “Performance    Simulation & Comparison in High Altitude Platforms (HAPs) Communications System Under PSK, DPSK, QAM & FSK Modulation Schemes & AWGN, RICIAN & RAYLEIGH Communication Channels” IEEE 7th Annual Information Technology, Electronics and Mobile Communication Conference (IEMCON),October, 13-15 , 2016, University of British Columbia, Vancouver, Canada.</li>
            <li>Arshad Rafid and <b>Fakir Mashuque Alamgir</b> , "A method for making artificially intelligent robots: A study on speech recognition & synthesis software", International Conference on Advanced Computing, Communication and Information Sciences (ICACCI) May 27-29, 2016, Cebu, Philippines.</li>
            <li>B.M. Adnan, Sopan Chakma, M.M. Jahazeb Alam, and <b>Fakir Mashuque Alamgir</b> , "MATLAB based performance replication in High Altitude Platform (HAPs) Communication system" IEEE International Conference on Electrical, Electronics, and Optimization Techniques (ICEEOT), March 3-5, 2016 Chennai, India.</li>
            <li>Fahima   Afroz,   Fahmida   Repa, <b>Fakir   Mashuque   Alamgir</b>   &   Rahul Kumar  "Breakdown of coverage assessment parameters for  WCDMA  base on  UMTS", International Conference on Emerging Trends & Developments on Science, Management & Technology, Ghaziabad, New Delhi, India., 2013.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default MainTabs;