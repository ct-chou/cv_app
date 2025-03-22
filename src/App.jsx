import './styles/App.css'
import Contact from './Contact.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'

function App() {

  return (
    <div id='container-main'>
      <header>Resume Builder</header>
      <h1>Contact Details</h1>
      <hr></hr>
      <Contact />
      <h1>Education</h1>
      <hr></hr>
      <Education />
      <Education />
      <Experience />
    </div>
  )
}

export default App
