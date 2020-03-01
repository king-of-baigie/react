import React from'react'
import './Place.css'

class Place extends React.Component{
    render(){
        if (this.props.location.query) {
            return(
                <div id='place'>
                    <h1>{this.props.location.query.name}</h1>
                    <div><img width='100%' src={this.props.location.query.src} alt=""/></div>
                    <p>{this.props.location.query.mes}</p>
                </div>
            )
        }else {
            this.props.history.push('/index');
            return null
        }

    }
}
export default Place