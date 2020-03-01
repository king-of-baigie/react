import React from 'react'
import './People.css'

class People extends React.Component{
    render(){
        if (!this.props.location.query){
            this.props.history.push({pathname:"/index"});
            return null
        } else{
            return(
                <div id='people'>
                    <h1>{this.props.location.query.name}</h1>
                    <div>
                        <img width='100%' src={this.props.location.query.src} alt=""/>
                    </div>
                    <p>{this.props.location.query.mes}</p>
                </div>
            )
        }
    }
}
export default People