import TopicActions from '../actions/TopicActions';

export default class TopicStore {
    constructor() {
        this.bindActions(TopicActions)
        this.topics = [];
    }

create(topic) {
    this.setState({
        topics: this.topics.concat(topic)
    })
}
update(updatedTopic) {
    this.setState({
        topics: this.topics.map(topic => {
            if(topic.id === updatedTopic.id) {
                return Object.assign({}, topic, updatedTopic);
            }
            return topic;
        })
    });
}
delete(id) {
    this.setState({
        topics: this.topics.filter(topic => topic.id !== id)
    });
}
}

