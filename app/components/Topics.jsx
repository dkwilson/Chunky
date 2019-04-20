import React from 'react';
import Topic from './Topic';
import Editable from './Editable';

export default ({
    topics,
    onNoteClick=() => {},
    onEdit=() => {}, 
    onDelete=() => {}
}) => (
    <ul>{topics.map(({id, editing, chunk}) =>
    <li key={id}>
        <Topic onClick={onNoteClick.bind(null, id)}>
            <Editable
                editing={editing}
                value={chunk}
                onEdit={onEdit.bind(null, id)}/>
            <button onClick={onDelete.bind(null,id)}>X</button>
        </Topic>
    </li>
    )}</ul>
)