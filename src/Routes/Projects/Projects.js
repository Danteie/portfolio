import './Projects.css'
import gw2 from '../../Assets/gw2.PNG'
import sub from '../../Assets/sub.PNG'
import { motion } from "framer-motion"


export default function Projects() {
    return (
        <article className='project hacked'>
          <motion.div
          animate={{
            opacity:[0,0,1,1,0,1,0,1,1],
            
          }} 
        >
            <div className="project-card">
              <img  src={gw2} alt='project'/>
              <div className='text'>
                <h1 className='t-center'>GENOMEWEB V2</h1>
                <p>This was small project for current job. For this project look dident metter it was more funcionality</p>
                <hr/>
                <ul>
                  <li>Genereting names for ad chapains</li>
                  <li>QA check list</li>
                  <li>Ad unit generator for day of the week</li>
                  <li>Setup of newslettes in google ad menager</li>
                  <li>Links to job related sheets</li>
                  <li>My colegs are still using this</li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
          animate={{
            opacity:[0,0,1,1,0,1,0,1,1],
            
          }} 
        >
          <div className="project-card">
          <div className='text'>
              <h1 className='t-center'>SUBRA</h1>
              <p>Web site for local mountain club. </p>
              <hr/>
              <ul>
                <li>Navigation menu with hikinh markings</li>
                <li>Some basic info about club</li>
                <li>Last News from club(need some more work)</li>
                <li>Gallery layout(i need some time to add images)</li>
                <li>Still need some work</li>
              </ul>
            </div>
            <img  src={sub} alt='project' />
          </div>
          </motion.div>
          <motion.div
          animate={{
            opacity:[1,0,0,0,0,0,0,0,1],  
          }} 
        >
         <h2 className='bottom-click'>You can see more <a href='https://www.frontendmentor.io/profile/Danteie' target='_blank' rel="noreferrer">here!</a></h2>
         </motion.div>
        </article>
    );
  }
  