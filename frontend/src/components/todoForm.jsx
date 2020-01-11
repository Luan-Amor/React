import React from 'react'
import Grid from './grid'
import IconButton from './iconButton'

export default props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 12'>
                <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.description}></input>
            </Grid>
            <br/>
            <Grid cols='12 3'>
                <IconButton style='primary' icon='plus'
                    onClick={props.handleAdd}></IconButton>
            </Grid>
        </div>
    )
}