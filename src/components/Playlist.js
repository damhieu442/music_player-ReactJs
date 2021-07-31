import React, { Component } from 'react';
import './Playlist.css';
import List_music from './List_music';
import List from './Song.json';

class Playlist extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="playlist">
                {
                    List.map((value,key) => {
                        return(
                            <List_music 
                                key = {key}
                                name={value.name}
                                singer={value.singer}
                                anh={value.image}
                            >
                            </List_music>
                        )
                    })
                }
            </div>
        );
    }
}


export default Playlist;
