import React from 'react'
import IconButton from './iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        
        return list.map(todo =>
            
            <tr key={todo.values.key}>
                <td className={todo.values.ative ? '' : 'markedAsDone'}>
                    {todo.values.name}
                </td>
                <td>
                <IconButton style='success' icon='check' hide={!todo.values.ative}
                    onClick={() => props.handleMarkAsDone(todo)}></IconButton>
                <IconButton style='warning' icon='undo' hide={todo.values.ative}
                    onClick={() => props.handleMarkAsPending(todo)}></IconButton>
                <IconButton style='danger' icon='trash-o' hide={todo.values.ative}
                    onClick={() => props.handleRemove(todo)}>
                </IconButton>
                </td>
            </tr>
        )

    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th className='tableActions'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}