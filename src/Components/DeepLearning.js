import React from 'react';
import { useState } from "react";
import "./DeepLearningStyle.css";


const DeepLearning = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="RP-tab-container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Google Scholar
        </button>
        
      
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
         
         <ol>
            <li><a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=sD1W1egAAAAJ&citation_for_view=sD1W1egAAAAJ:UebtZRa9Y70C" target='_blank'> An artificial intelligence driven facial emotion recognition system using hybrid deep belief rain optimization</a>
            <br />
            <span>FM Alamgir, MS Alam
              <br />
                  Multimedia Tools and Applications 81 (16)
            </span>
             </li>
            <li><a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=sD1W1egAAAAJ&citation_for_view=sD1W1egAAAAJ:5nxA0vEk-isC" target='_blank'>Hybrid multi-modal emotion recognition framework based on InceptionV3DenseNet</a>
            <br />
            <span>FM Alamgir, MS Alam
              <br />
                  Multimedia Tools and Applications 10 (23), 1-28
            </span>
            </li>
            <li><a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=sD1W1egAAAAJ&citation_for_view=sD1W1egAAAAJ:hqOjcs7Dif8C" target='_blank'>A Novel Deep Learning-Based Bidirectional Elman Neural Network for Facial Emotion Recognition</a>
            <br />
            <span>FM Alamgir, F Ahmed, M Miah, H Mohammad, S Barua
              <br />
                  International Journal of Pattern Recognition and Artificial Intelligence 36 …
            </span>
            </li>
            
         </ol>
        </div>

        

        
      </div>
    </div>
  )
}

export default DeepLearning

