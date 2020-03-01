import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './Nav.css'

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            left:false
        };
        this.props.onRef(this);
        this.drw=this.drw.bind(this)
    }
    toggleDrawer(obj){
        this.setState({
            left:obj
        })
    }
    people(obj,num){
        let query= {
            name : this.props.arr[obj],
            src:this.props.arr1[obj],
            mes:this.props.arr2[obj]
        };
        if (num===1){
            this.props.history.push({pathname:"/index/people",query: query})
        } else {
            this.props.history.push({pathname:"/index/place",query: query})
        }

    }
    drw(){
        if (this.props.arr[0]==='漩涡鸣人') {
            return(
                <div
                    id='list'
                    role="presentation"
                    onClick={this.toggleDrawer.bind(this, false)}
                    onKeyDown={this.toggleDrawer.bind(this, false)}
                >
                    <List>
                        {this.props.arr.map((text, index) => (
                           <ListItem button key={index} onClick={this.people.bind(this,index,1)}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            )
        }else{
            return(
                <div
                    id='list'
                    role="presentation"
                    onClick={this.toggleDrawer.bind(this, false)}
                    onKeyDown={this.toggleDrawer.bind(this, false)}
                >
                    <List>
                        {this.props.arr.map((text, index) => (
                            <ListItem button key={text} onClick={this.people.bind(this,index,2)} >
                                <ListItemText primary={text} />
                                <Divider/>
                            </ListItem>
                        ))}
                    </List>
                </div>
            )
        }
    }
    render(){
        return(
            <div id='nav'>
                <Drawer open={this.state.left} onClose={this.toggleDrawer.bind(this, false)}>
                    {this.drw()}
                </Drawer>
            </div>
        )
    }
}
export default Nav