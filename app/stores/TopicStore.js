import uuid from 'uuid';
import TopicActions from '../actions/TopicActions';

export default class TopicStore {
    constructor() {
        this.bindActions(TopicActions)
        this.topics = [
            {
                id: uuid.v4(),
                chunk: 'learn React'
            },
            {
                id: uuid.v4(),
                chunk: 'jsx'
            }
        ];
    }

create(topic) {
    this.setState({
        topics: this.topics.concat(topic)
    })
}
update(updateTopic) {
    console.log('update topic', updateTopic);
}
delete(id) {
    console.log('delete topic', id);
}
}

