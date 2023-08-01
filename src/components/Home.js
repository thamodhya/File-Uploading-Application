import React, { useState } from 'react'
import './Css/Home.css'
import { Navigate } from 'react-router'

function App() {
    const [redirect, setRedirect] = useState({
        sendRedirect: false,
        recieveRedirect: false,
    })
    const handleOnClickUpload = () => {
        setRedirect((prev) => ({ ...prev, sendRedirect: true }))
    }
    const handleOnClickStorage = () => {
        setRedirect((prev) => ({ ...prev, recieveRedirect: true }))
    }

    if (redirect.sendRedirect) {
        return <Navigate to="/upload" />
    } else if (redirect.recieveRedirect) {
        return <Navigate to="/storage" />
    }
    return (
        <div className="MainContainer">
            <div className="centralPanel">
                <div className="panelContent">
                    <h1>EasyStore.</h1>
                    <p>
                        This is a file uploading app which allows you to upload and
                        view a file from your pc and download it
                        anytime across the internet quickly and easily.
                    </p>
                    <div className="lead">
                        <div className="Selection">
                            <button
                                id="send"
                                className="Selection-button"
                                onClick={handleOnClickUpload}
                            >
                                Upload File
                            </button>{' '}
                            <br />
                            <button
                                id="recieve"
                                className="Selection-button"
                                onClick={handleOnClickStorage}
                            >
                                File Storage
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgPanel">
                <img
                    src={require('./image/landing.jpg')}
                    alt="sharing file"
                    className="landingImage"
                />
            </div>
        </div>
    )
}

export default App