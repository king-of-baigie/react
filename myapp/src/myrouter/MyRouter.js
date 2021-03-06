import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Login from'.././components/Login'
import Index from '.././components/index/Index'
import History from '.././components/history/History'
import People from '.././components/people/People'
import Place from '.././components/place/Place'

class MyRouter extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <Route exact path='/' component={Login}/>
                    <Route path='/index' component={Index}/>
                    <Route exact path='/index/' component={History}/>
                    <Route path='/index/people' component={People}/>
                    <Route path='/index/place' component={Place}/>
                </Router>
            </div>
        )
    }
}
export default MyRouter