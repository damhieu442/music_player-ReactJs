import React, { Component } from 'react';
import './List_music.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

class List_music extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="song">
                <div className="thumb">
                    <img className="thumb_img" src={this.props.anh}></img>
                </div>
            <div className="body">
                <h3 className="title">{this.props.name}</h3>
                <p className="author">{this.props.singer}</p>
            </div>
            <div className="option">
                <i className="fas fa-ellipsis-h" />
            </div>
        </div>
        );
    }
}


export default List_music;
