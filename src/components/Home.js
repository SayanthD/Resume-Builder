import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className="home">
                <h1 className="header">Resume Builder</h1>
                <Link to="/create">
                    <button className="btn btn-primary create-button" type="button">Create Resume</button>
                </Link>
            </div>
        </>
    );
}