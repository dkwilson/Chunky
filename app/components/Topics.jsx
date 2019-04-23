import React from 'react';
import Topic from './Topic';
import Editable from './Editable';

export default ({
    topics,
    onTopicClick=() => {},
    onEdit=() => {}, 
    onDelete=() => {}
}) => (
    <ul className="topics">{topics.map(({id, editing, chunk}) =>
    <li key={id}>
        <Topic className="topic" onClick={onTopicClick.bind(null, id)}>
            <Editable
                className='editable'
                editing={editing}
                value={chunk}
                onEdit={onEdit.bind(null, id)}/>
            <button className="delete" onClick={onDelete.bind(null,id)}>X</button>
        </Topic>
    </li>
    )}</ul>
)