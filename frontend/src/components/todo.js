import React, { Component } from 'react'
import Axios from 'axios'

import PageHeader from './pageHeader'
import TodoForm from './todoForm'
import TodoList from './TodoList'

const URL = 'http://localhost:3003'

export default class Todo extends Component{
    constructor(props){
        super(props)

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleSearch = this.handleSearch.bind(this)


        this.state = {
            description: '',
            list: []
        }

        this.refresh()
    }

    refresh(description = ''){
        Axios.get(`${URL}`)
        .then(resp => this.setState({ 
            ...this.state, 
            description: '',
            list: resp.data
        }))
    }
    
    handleSearch(){
        this.refresh(this.state.description)
    }

    handleChange(e){
        this.setState({ ...this.state, description: e.target.value})
    }

    handleAdd(){
        const description = this.state.description
        Axios.post(URL, { name: description})
            .then(e => this.refresh())
    }

    handleRemove(todo){
        Axios.delete(`${URL}/${todo.values.key}`)
            .then(this.refresh())
    }

    handleMarkAsDone(todo){
        Axios.put(`${URL}/${todo.values.key}`, { ...todo, ative: false })
            .then(this.refresh())
    }

    handleMarkAsPending(todo){
        Axios.put(`${URL}/${todo.values.key}`, { ...todo, ative: true })
            .then(this.refresh())
    }

    render(){
        return( 
            <div>
                <PageHeader name="Tasks" small="Register"/>
                <TodoForm description={this.state.description} 
                    handleChange={this.handleChange}
                    handleAdd = {this.handleAdd}
                    handleSearch={this.handleSearch}
                    />
                <TodoList 
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                />    
            </div>
        )
    }
}