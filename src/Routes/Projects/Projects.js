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
            <a href='https://danteie.github.io/gwtools_v2/' target='_blank' rel="noreferrer"> <img  src={gw2} alt='project' /> </a>
              <div className='text'>
                <a href='https://danteie.github.io/gwtools_v2/' target='_blank' rel="noreferrer" className='link'><span className='alien'>aokdasd</span> GENOMEWEB V2 <span className='alien'>asdd</span></a>
                <p>This was small project for current job. For this project look dident metter it was more funcionality</p>
                <hr/>
                <ul>
                  <li>Generating names for ad campaigns</li>
                  <li>QA checklist</li>
                  <li>Ad unit generator for the day of the week</li>
                  <li>Setup of newsletters in google ad manager</li>
                  <li>Links to job-related sheets</li>
                  <li>My colleges are still using this website</li>
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
              <a className='link' href='https://danteie.github.io/subra/' target='_blank' rel="noreferrer"><span className='alien'>aokdeijew</span> SUBRA <span className='alien'>asdghthr</span></a>
              <p>Web site for local mountain club. </p>
              <hr/>
              <ul>
                <li>Navigation menu with hiking markings</li>
                <li>Some basic information about the club</li>
                <li>Last News from the club(need some more work)</li>
                <li>Gallery layout(i need some time to add images)</li>
                <li>Still need some work</li>
              </ul>
            </div>
            <a href='https://danteie.github.io/subra/' target='_blank' rel="noreferrer"y> <img  src={sub} alt='project' /></a>
           
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
  