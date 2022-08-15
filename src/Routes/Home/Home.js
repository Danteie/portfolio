import './Home.css'
import { motion } from "framer-motion"

export default function Home() {
  return (
      <article className='home hacked'>
        <motion.div
          animate={{
            opacity:[0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1],
            originY: [300,0,200,0]
          }} 
        >
          <p >Hi, my name is</p>
          </motion.div>
          <motion.div
          animate={{
            opacity:[1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1],
            y: [100,0,50,0]
          }} 
        >
          <h1>Aleksandar <span>Djuratovic</span></h1>
          </motion.div>
          <motion.div
          animate={{
            opacity:[0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1],
            y: [-200,0,200,0]
          }} >
          <p className='t-center'>Junior Frontend develpoer</p>
          </motion.div>
      </article>
  );
}


