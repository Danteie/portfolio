import './Projects.css'
import gw2 from '../../Assets/gw2.PNG'
import sub from '../../Assets/sub.PNG'

export default function Projects() {
    return (
        <article className='project hacked'>
          <div className="project-card">
            <img  src={gw2} alt='project'/>
            <div>
              <h1 className='t-center'>GENOMEWEB V2</h1>
              <p>This was small project for current job</p>
            </div>
          </div>
          <div className="project-card">
          <div>
              <h1 className='t-center'>SUBRA</h1>
              <p>Web site for local mountain club</p>
            </div>
            <img  src={sub} alt='project'/>
          </div>
        </article>
    );
  }
  