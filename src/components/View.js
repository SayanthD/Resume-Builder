import { useLocation } from 'react-router-dom';

export default function View() {

    const location = useLocation();
    const resume = location.state.resume;
    return (
        <>
            <div className="container-fluid">
                <h1>View</h1>

                <div className="card">
                    <div className="card-header">
                        <h3 className="category-header">Personal Details</h3>
                    </div>
                    <div className="card-body">
                        <p>Name: {resume.name}</p>
                        <p>Email: {resume.email}</p>
                        <p>Address: {resume.address}</p>
                        <p>Phone: {resume.mobile}</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3 className="category-header">Educational Details</h3>
                    </div>
                    <div className="card-body">
                        <p>Institute: {resume.institute}</p>
                        <p>Degree: {resume.degree}</p>
                        <p>From: {resume.edufrom}</p>
                        <p>To: {resume.eduto}</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3>Work Details</h3>
                    </div>
                    <div className="card-body">
                        <p>Company: {resume.company}</p>
                        <p>Position: {resume.position}</p>
                        <p>From: {resume.workfrom}</p>
                        <p>To: {resume.workto}</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3>Skills</h3>
                    </div>
                    <div className="card-body">
                        <p>Skills: {resume.skills}</p>
                    </div>
                </div>
            </div>
        </>)

};