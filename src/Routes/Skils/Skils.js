import './Skills.css'
import { motion } from "framer-motion"
import htmlimage from '.././../Assets/html5.png'
import cssimage from '.././../Assets/css3.png'
import jsimage from '.././../Assets/js.png'
import reactLogo from '.././../Assets/ReactLogo.png'
import fb from '.././../Assets/FB.png'
import tt from '.././../Assets/TT.png'
import sc from '.././../Assets/SC.png'
import dv from '.././../Assets/DV.png'


export default function Skils() { 
  return (
    <motion.div
    drag
    animate={{
      opacity:[0,0,1,1,0,1,0,1,1],
    }} className='skills'>

  <h1 className='title hacked skils-title'>Social Menager Skils</h1>
        <div className='skills-icons'>     
          <div>
            <img src={fb} alt='html 5'/>
          </div>
          <div>
            <img src={tt} alt='css 3'/>
          </div>
        </div>  

        <div className='skills-icons'>
        <div>
            <img src={sc} alt='java script'/>
          </div>
          <div>
            <img src={dv} alt='html 5'/>
          </div>
        </div>    

     <h1 className='title hacked skils-title'>Front End Skils</h1>
        <div className='skills-icons'>     
          <div>
            <img src={htmlimage} alt='html 5'/>
          </div>
          <div>
            <img src={cssimage} alt='css 3'/>
          </div>
        </div>  

        <div className='skills-icons'>
        <div>
            <img src={jsimage} alt='java script'/>
          </div>
          <div>
            <img src={reactLogo} alt='html 5'/>
          </div>
        </div>  

      </motion.div>
  );
}
  
  