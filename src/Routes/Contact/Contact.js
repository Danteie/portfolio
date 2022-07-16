import './Contact.css'

export default function Contact() {
    return (
        <article className='home contact'>
          <div>
            <p>NAME</p>
            <h2>Aleksandar Djuratovic</h2>
            <hr/>
            <p>EMAIL</p>
            <h2>aleksandr.djuratovic@gmail.com</h2>
            <hr/>
            <p>GIT HUB</p>
            <h2>https://github.com/Danteie</h2>
            <hr/>
          </div>
          <div>
          <img  src="https://loremflickr.com/640/360" alt='project' className='project-image'/>
          </div>
        </article>
    );
  }
  