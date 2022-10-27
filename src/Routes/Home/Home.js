import './Home.css'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.div
    drag
    dragConstraints={{
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}
  >
      <article className='home hacked'>
        <motion.div
          animate={{
            opacity:[0,1,0,1],
            
          }} 
        >
          <p> Hi, my name is</p>
          </motion.div>
          <motion.div
          animate={{
            opacity:[0,1,1,0,1],    
          }} 
        >
          <h1 className='name-text'>Aleksandar <span>Djuratovic</span></h1>
          {/* <span className="tooltiptext">tooltip</span> */}
          </motion.div>
          <motion.div
          animate={{
            opacity:[null,0,1,0,1],
          }} >
          <p className='t-center'>Junior Frontend develpoer</p>
          </motion.div>
      </article>
      </motion.div>
  );
}


