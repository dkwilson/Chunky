import React from 'react';
import connect from '../libs/connect';
import TopicActions from '../actions/TopicActions';
import LaneActions from '../actions/LaneActions';
import Topics from './Topics';
import LaneHeader from './LaneHeader';

const Lane = ({
    lane, topics, LaneActions, TopicActions, ...props
}) => {
    const editTopic = (id, chunk) => {
        TopicActions.update({id, chunk, editing: false});
    };
    
    const deleteTopic = (topicID, e) => {
        e.stopPropagation();

        LaneActions.detachFromLane({
            laneId: lane.id,
            topicID
        });
        TopicActions.delete(topicID);
    };
    const activateTopicEdit = id => {
        TopicActions.update({id, editing: true});
    };

    return (
        <div {...props}>
                <LaneHeader lane={lane} />
                <Topics
                    topics={selectTopicsByIds(topics, lane.topics)}
                    onTopicClick={activateTopicEdit}
                    onEdit={editTopic}
                    onDelete={deleteTopic} />
        </div>
    )
}

function selectTopicsByIds(allTopics, topicIds = []) {
    return topicIds.reduce((topics, id) => 
        topics.concat(allTopics.filter(topic => topic.id === id)
        )
        ,[]);
}

export default connect (
    ({topics}) => ({
        topics
    }), {
        TopicActions,
        LaneActions
    }
)(Lane)