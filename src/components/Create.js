import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const navigate = useNavigate();

    const [resume, setResume] = useState({});

    const handleInputChange = (event) => {
        setResume({ ...resume, [event.target.name]: event.target.value });
    };

    const submitAction = (event) => {
        event.preventDefault()
        navigate("/view", { state: { resume } })
    }

    return (
        <>
            <div className="container-fluid">
                <form onSubmit={submitAction}>
                    <h1>Create</h1>
                    <div className="personal">
                        <h4 className="category-header">Personal Details</h4>
                        <div className="form-group">
                            <label for="name">Name:</label>
                            <input type="text" className="form-control w-25" placeholder="Your Name" name="name" onChange={handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <label for="email">Email:</label>
                            <input type="email" className="form-control w-25" placeholder="someone@email.com" name="email" onChange={handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <label for="address">Address:</label>
                            <input type="text" className="form-control w-25" name="address" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label for="mobile">Mobile:</label>
                            <input type="number" className="form-control w-25" name="mobile" onChange={handleInputChange} required />
                        </div>
                    </div>

                    <div className="educational">
                        <h4 className="category-header">Educational Details</h4>
                        <div className="form-group">
                            <label for="institute">Institute:</label>
                            <input type="text" className="form-control w-25" placeholder="" name="institute" onChange={handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <label for="degree">Degree:</label>
                            <input type="text" className="form-control w-25" placeholder="" name="degree" onChange={handleInputChange} required />
                        </div>
                        <label for="edu-from">
                            From:
                            <input type="date" className="form-control m-2 p-3" name="edufrom" onChange={handleInputChange} required />
                        </label>
                        <label for="edu-to">
                            To:
                            <input type="date" className="form-control m-2 p-3" name="eduto" onChange={handleInputChange} required />
                        </label>
                    </div>

                    <div className="work">
                        <h4 className="category-header">Work Details</h4>
                        <div className="form-group">
                            <label for="company">Company:</label>
                            <input type="text" className="form-control w-25" placeholder="" name="company" onChange={handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <label for="position">Position:</label>
                            <input type="text" className="form-control w-25" placeholder="" name="position" onChange={handleInputChange} required />
                        </div>
                        <label for="work-from">
                            From:
                            <input type="date" className="form-control m-2 p-3" name="workfrom" onChange={handleInputChange} required />
                        </label>
                        <label for="work-to">
                            To:
                            <input type="date" className="form-control m-2 p-3" name="workto" onChange={handleInputChange} required />
                        </label>
                    </div>

                    <div className="skill">
                        <h4 className="category-header">Skills</h4>
                        <div className="form-group">
                            <label for="company">Skills:</label>
                            <input type="text" className="form-control w-25" placeholder="" name="skills" onChange={handleInputChange} required />
                        </div>
                    </div>

                    <div className="sumbit-button">
                        <button type="submit" className="btn btn-primary">Create</button>
                    </div>
                </form >
            </div >
        </>
    )
}