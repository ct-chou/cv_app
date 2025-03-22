import './styles/App.css'
import Contact from './Contact.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import {useState} from 'react'

function App() {
  const [educationComponents, setEducationComponents] = useState([{id:0}]);

  function addEducation() {
    setEducationComponents([...educationComponents,{ id:educationComponents.length}]);
  }

  function removeEducation(id) {
    setEducationComponents(educationComponents.filter((education) => education.id !== id));
  }

  console.log(educationComponents)
  return (
    <div id='container-main'>
      <header>Resume Builder</header>
      <h1>Contact Details</h1>
      <hr></hr>
      <Contact />
      <h1>Education</h1>
      <hr></hr>
      {educationComponents.map((education) => (
        <Education key={education.id} id={education.id} addEducation={addEducation} removeEducation={removeEducation} />
      ))}
      <h1>Experience</h1>
      <hr></hr>
      <Experience />
    </div>
  )
}

export default App
