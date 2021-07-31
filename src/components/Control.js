import React from 'react';
import './Control.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Control = () => {
    return (
        <div className="control">
            <div className="btn btn-repeat">
                <i className="fas fa-redo"></i> 
            </div>
            <div className="btn btn-prev">
                <i className="fas fa-step-backward"></i>
            </div>
            <div className="btn btn-toggle-play">
                <i className="fas fa-pause icon-pause" />
                <i className="fas fa-play icon-play" />
            </div>
            <div className="btn btn-next">
                <i className="fas fa-step-forward" />
            </div>
            <div className="btn btn-random">
                <i className="fas fa-random" />
            </div>
        </div>
    );
}

export default Control;
