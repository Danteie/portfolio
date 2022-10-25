import './Skills.css'
import { motion } from "framer-motion"
import htmlimage from '.././../Assets/html5.png'
import cssimage from '.././../Assets/css3.png'
import jsimage from '.././../Assets/js.png'
import batery1 from '.././../Assets/batery1.png'
import batery2 from '.././../Assets/batery2.png'
import batery3 from '.././../Assets/batery3.png'
import baterygif from '.././../Assets/baterygif.gif'
import reactLogo from '.././../Assets/ReactLogo.png'



export default function Skils() { 
  return (
    <motion.div
    drag
    animate={{
      opacity:[0,0,1,1,0,1,0,1,1],
    }} className='skills'>
        <div className='skills-icons'>
          <div>
            <img src={htmlimage} alt='html 5'/>
            <img src={batery1} alt='html 5'/>
          </div>
          <div>
            <img src={cssimage} alt='css 3'/>
            <img src={batery2} alt='html 5'/>
          </div>
        </div>  

        <div className='skills-icons'>
        <div>
            <img src={jsimage} alt='java script'/>
            <img src={batery3} alt='html 5'/>
          </div>
          <div>
            <img src={reactLogo} alt='html 5'/>
            <img src={baterygif} alt='html 5'/>
          </div>
        </div>  

      </motion.div>
  );
}
  
  