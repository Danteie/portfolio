import './Projects.css'
import gw2 from '../../Assets/gw2.PNG'
import sub from '../../Assets/sub.PNG'
import Tilty from 'react-tilty';



export default function Projects() {
    return (
        <article className='project hacked'>
          <div className="project-card">
            <img  src={gw2} alt='project'/>
            <div>
              <h1 className='t-center'>GENOMEWEB V2</h1>
              <p>This was small project for current job. For this project look dident metter it was more funcionality</p>
              <hr/>
              <ul>
                <li>Genereting names for ad chapains</li>
                <li>QA check list</li>
                <li>Ad unit generator for day of the week</li>
                <li>Setup of newslettes in google ad menager</li>
                <li>Links to job related sheets</li>
              </ul>
            </div>
          </div>
          <div className="project-card">
          <div>
              <h1 className='t-center'>SUBRA</h1>
              <p>Web site for local mountain club. </p>
              <hr/>
              <ul>
                <li>Genereting names for ad chapains</li>
                <li>QA check list</li>
                <li>Ad unit generator for day of the week</li>
                <li>Setup of newslettes in google ad menager</li>
                <li>Links to job related sheets</li>
              </ul>
            </div>
            <img  src={sub} alt='project'/>
          </div>
          <a href='test' className='project-page'>Next Page</a>
        </article>
    );
  }
  