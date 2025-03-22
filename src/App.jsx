import './styles/App.css'
import Contact from './Contact.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import {useState} from 'react'

function App() {
  const [educationComponents, setEducationComponents] = useState([0]);
  const [experienceComponents, setExperienceComponents] = useState([0]);



  function addExperience() {
    setExperienceComponents([...experienceComponents, experienceComponents.slice(-1,) + 1]);
  }

  function removeExperience(id) {
    setExperienceComponents(experienceComponents.filter((experience) => experience !== id));
  }

  function addEducation() {
    setEducationComponents([...educationComponents, educationComponents.slice(-1,) +1]);
  }

  function removeEducation(id) {
    setEducationComponents(educationComponents.filter((education) => education !== id));
  }

  console.log('rendering...')
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
        <Education key={education} id={education} addEducation={addEducation} removeEducation={removeEducation} />
      ))}
      
      <h1>Experience</h1>
      <hr></hr>
      {experienceComponents.map((experience) => (
        <Experience key={experience} id={experience} addExperience={addExperience} removeExperience={removeExperience} />
      ))}
      
    </div>
  )
}

export default App
