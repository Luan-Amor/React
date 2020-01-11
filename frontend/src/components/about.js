import React, { Component} from 'react'
import PageHeader from './pageHeader'
export default class About extends Component {

    render(){
        
        return(
            <div>
                <PageHeader name="About" small="aplication"/>

                <h2>Todo - list</h2>
                <p>
                    Aplicação de registrar tarefas a serem feitas. <br/>
                    Essa aplicação foi baseada no curso de React da Cod3r.
                </p>
            </div>
        )
        
    }
    
}