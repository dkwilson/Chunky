import React from 'react';
import uuid from 'uuid';
import Topics from './Topics';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            topics: [
            {
                id: uuid.v4(),
                chunk: 'react'
            },
            {
                id: uuid.v4(),
                chunk: 'jsx'
            }
        ]
    };
}
render() {
    const { topics } = this.state;

    return (
        <div>
            <button onClick={this.addTopic}>+</button>
            <Topics topics={topics} onDelete={this.deleteNote}/>
        </div>
    );
}
addTopic = () => {
    this.setState({
    topics: this.state.topics.concat([{
        id: uuid.v4(),
        chunk: 'New Chunk'
    }])
});
}
deleteNote = (id, e) => {
    e.stopPropagation();

    this.setState({
        topics: this.state.topics.filter(note => note.id !== id)
    });
}

}