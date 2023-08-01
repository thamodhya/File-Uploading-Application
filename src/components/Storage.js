import React, { useState } from 'react'
import './Css/Receive.css'
import List from './List';

function Storage() {  
     
    return (
        <div className="Recieve">
            <div className="imgPanel">
                <img
                    src={require('./image/people-recieving-shared-file.jpg')}
                    width={'600px'}
                    alt="recieving a shared file"
                    title="recieving a shared file"
                    className="recieveImage"
                />
            </div>
            <div className="ContentPanel">
                <div className="contentPanelElements">
                    <img
                        src={require('./image/file-download.png')}
                        width="200px"
                        alt=" file download icon"
                        title="file download icon"
                        className="downloadImage"
                    />
                     <List></List>
                     
                </div>
            </div>
             
        </div>
    )
}

export default Storage
