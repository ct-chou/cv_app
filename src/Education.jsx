import {useState} from 'react'
import '../styles/Education.css';

function Education({id, addEducation, removeEducation}) {
    const [formData, setFormData] = useState({school: '', degree: '', major: '', minor: '', startDate: '', endDate: ''});
    const [editMode, setEditMode ] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        setEditMode(false);
    }
    
    function handleEdit() {
        setEditMode(true);
    }

    return (
        <div id='education-container'>
            {editMode ? (
                <>
                <form className='education-form' id='education-form' onSubmit={handleSubmit}>
                    <label>
                        School:  {' '}
                        <input 
                            type="text" 
                            value={formData.school}
                            name='school'
                            onChange={e => setFormData({...formData, school: e.target.value})}
                        />
                    </label>
                    <label>
                        Degree:  {' '}
                        <input 
                            type="text" 
                            value={formData.degree}
                            name='degree'
                            placeholder='e.g. Bachelors'
                            onChange={e => setFormData({...formData, degree: e.target.value})}
                        />
                    </label>
                    <label>
                        Major:  {' '}
                        <input 
                            type="text" 
                            value={formData.major}
                            name='major'
                            placeholder='e.g. English'
                            onChange={e => setFormData({...formData, major: e.target.value})}
                        />
                    </label>
                    <label>
                        Minor:  {' '}
                        <input 
                            type="text" 
                            value={formData.minor}
                            name='minor'
                            placeholder='e.g. Computer Science'
                            onChange={e => setFormData({...formData, minor: e.target.value})}
                        />
                    </label>
                    <label>
                        Date:  {' '}
                        <input 
                            type="date" 
                            value={formData.startDate}
                            name='startDate'
                            onChange={e => setFormData({...formData, startDate: e.target.value})}
                        />
                        <input 
                            type="date" 
                            value={formData.endDate}
                            name='endDate'
                            onChange={e => setFormData({...formData, endDate: e.target.value})}
                        />
                    
                    </label>
                    
                </form>

                <button 
                        type="submit" 
                        className="education-button"
                        form='education-form'
                    >
                        Submit
                </button>
            </>  
            ) : (
            <div>
                <div className='education-info'>
                    <p><span className="bold">School:</span> {formData.school}</p>
                    <p><span className="bold">Degree:</span> {formData.degree}</p>
                    <p><span className="bold">Major: </span> {formData.major}</p>
                    <p><span className="bold">Minor: </span> {formData.minor}</p>
                    <p><span className="bold">Date: </span> {formData.startDate} - {formData.endDate}</p>
                </div>
                <button 
                    className="education-button"
                    onClick={handleEdit}
                >
                    Edit
                </button>
                <button 
                    className="education-button"
                    onClick={addEducation}
                >
                    Add More
                </button>
                {id !==0 && 
                    <button 
                        className="education-button"
                        onClick={() => removeEducation(id)}
                    >
                        Delete
                    </button>
                }
            </div>
            )}
            
        </div>
    );
}

export default Education;