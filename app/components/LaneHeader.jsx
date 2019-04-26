import React from 'react';
import uuid from 'uuid';
import connect from '../libs/connect';
import TopicActions from '../actions/TopicActions';
import LaneActions from '../actions/LaneActions';

export default connect (() => ({}), {
    TopicActions,
    LaneActions
})(({lane, LaneActions, TopicActions, ...props}) => {
    const addTopic = e => {
        e.stopPropagation();

        const topicID = uuid.v4();

        TopicActions.create({
            id: topicID,
            chunk: 'New Chunk'
        });
        LaneActions.attachToLane({
            laneId: lane.id,
            topicID
        });
    };

    return (
        <div className="lane-header" {...props}>
            <div className="lane-add-topic">
                <button onClick={addTopic}>+</button>
            </div>
            <div className="lane-name">{lane.name}</div>
        </div>
    );
})