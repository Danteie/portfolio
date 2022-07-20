import './Skills.css'

import htmlimage from '.././../Assets/html5.png'
import cssimage from '.././../Assets/css3.png'
import jsimage from '.././../Assets/js.png'



export default function Skils() {

    return (
        <article className='skills'>
          <div className='skills-icons'>
            <img src={htmlimage} alt='html 5'/>
            <img src={cssimage} alt='css 3'/>
            <img src={jsimage} alt='java script'/>
          </div>
          
        </article>
    );
  }
  
  