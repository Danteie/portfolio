import './Projects.css'

export default function Projects() {
    return (
        <article className='project'>
          <div className="project-card">
            <img  src="https://loremflickr.com/640/360" alt='project' className='project-image'/>
            <p>ovo je test za stranicu sa projektima  ovo je test za stranicu sa projektima</p>
          </div>
          <div className="project-card">
            <p>ovo je test za stranicu sa projektima</p>
            <img  src="https://loremflickr.com/640/360" alt='project' className='project-image'/>
          </div>
        </article>
    );
  }
  