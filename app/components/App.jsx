import React from 'react';
import uuid from 'uuid';
import Topics from './Topics';
import connect from '../libs/connect';
import TopicActions from '../actions/TopicActions';

class App extends React.Component {

render() {
    const { topics } = this.props;

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
    this.props.TopicActions.create({
        id: uuid.v4(),
        chunk: 'New Chunk'
    });
}

deleteTopic = (id, e) => {
    e.stopPropagation();

    this.props.TopicActions.delete(id);
}

activateTopicEdit = (id) => {
    this.props.TopicActions.update({id, editing: true});
}
editTopic = (id, chunk) => {
    this.props.TopicActions.update({id, chunk, editing: false});
}

}

export default connect(( {topics} ) => ({
    topics
}), {
    TopicActions
})(App)