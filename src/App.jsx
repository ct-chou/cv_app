import './styles/App.css'
import Contact from './Contact.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'

function App() {

  return (
    <div id='container-main'>
      <header>Resume Builder</header>
      <Contact />
      <Education />
      <Experience />
    </div>
  )
}

export default App
