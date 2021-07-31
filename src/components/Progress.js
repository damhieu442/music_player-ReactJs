import React from 'react';
import './Progress.css';

const Progress = () => {
    return (
        <div>
            <input id="progress" className="progress" type="range" defaultvalue="{0}" step="{1}" min="{0}" max="{100}" />
            <audio id="audio" src=''></audio>
        </div>
    );
}

export default Progress;
