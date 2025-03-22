import './styles/Experience.css';
import {useState} from 'react';

function Experience() {
    const [experience, setExperience] = useState({company:'', title:'', description:'', startDate:'', endDate:''})
    const [editMode, setEditMode] = useState(true);

    function handleSubmit () {
        // setExperience(experience);
        setEditMode(false);
    }

    function enterEditMode() {
        setEditMode(true);
    }

    return (
        <div id='experience-container'>
            {editMode ? (
            <>
                <form className="experience-form" id="experience-form" onSubmit={handleSubmit}>
                    <label>Company:
                        <input 
                            type="text" 
                            value={experience.company} 
                            name="company"
                            onChange={(e) => setExperience({...experience, company: e.target.value})}
                        />
                    </label>
                    <label>Title:
                        <input 
                            type="text" 
                            value={experience.title} 
                            name="title"
                            onChange={(e) => setExperience({...experience, title: e.target.value})}
                        />
                    </label>
                    <label>Description:
                        <input 
                            type="text" 
                            value={experience.description} 
                            name="description"
                            onChange={(e) => setExperience({...experience, description: e.target.value})}
                        />
                    </label>
                    <label>Date:
                        <input 
                            type="date" 
                            name="dateStart"    
                            value={experience.startDate}
                            onChange={(e) => setExperience({...experience, startDate: e.target.value})}
                        />
                        <input 
                            type="date" 
                            name="dateEnd" 
                            value={experience.endDate} 
                            onChange={(e) => setExperience({...experience, endDate: e.target.value})}
                        />
                    </label>
                </form>
                <button type="submit" form='experience-form'>
                    submit
                </button>
            </>
            ) : ( 
            <div> 
                <div className="experience-info">
                    <p><span className='bold'>Company: </span> {experience.company}</p>
                    <p><span className='bold'>Title: </span> {experience.title}</p>
                    <p><span className='bold'>Description: </span> {experience.description} </p>
                    <p><span className='bold'>Date: </span> {experience.startDate} - {experience.endDate}</p>
                </div>    
                <button onClick={enterEditMode}>
                    edit
                </button>
            </div>
            )}
        </div>
    );
}

export default Experience;