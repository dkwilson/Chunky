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
            <button className="add-topic" onClick={this.addTopic}>+</button>
            <Topics 
                topics={topics}
                onTopicClick={this.activateTopicEdit}
                onEdit={this.EditTopic}
                onDelete={this.deleteTopic}
            />
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
deleteTopic = (id, e) => {
    e.stopPropagation();

    this.setState({
        topics: this.state.topics.filter(topic => topic.id !== id)
    });
}

activateTopicEdit = (id) => {
    this.setState({
        topics: this.state.topics.map(topic => {
            if(topic.id === id) {
                topic.editing = true;
            }
            return topic;
        })
    });
}
editTopic = (id, chunk) => {
    this.setState({
        topics: this.state.topics.map(topic => {
            if(topic.id === id) {
                topic.editing = false;
                topic.chunk = chunk;
            }
            return topic;
        })
    });
}

}