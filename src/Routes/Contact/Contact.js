import './Contact.css'
import brain from '../../Assets/brain.png'
import Tilty from 'react-tilty';
import { motion } from "framer-motion"
import cv from '../../Assets/CV.pdf'

export default function Contact() {
    return (
        <article className='home contact hacked'>
          <motion.div
          animate={{
            opacity:[0,0,1,1,0,1,0,1,1],
          }} 
        >
            <div>
              <p>NAME</p>
              <h2>Aleksandar Djuratovic</h2>
              <hr/>
              <p>EMAIL</p>
              <h2>aleksandar.djuratovic@gmail.com</h2>
              <hr/>
              <p>GIT HUB</p>
              <a href='https://github.com/Danteie'>https://github.com/Danteie</a>
              <hr/>
            </div>
          </motion.div>
          
          <motion.div
          animate={{
            opacity:[0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1],
            rotate: 360
          }} 
        >
          <div>
          <a href={cv} download>
          <Tilty><img  src={brain} alt='brain' className='contact-image'/></Tilty>
          <h2 className='download' >Downlaod CV</h2>
          </a>
          </div>
          </motion.div>
        </article>
    );
  }
  