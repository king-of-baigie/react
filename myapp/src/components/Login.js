import React from 'react'
import './Login.css'
import $ from 'jquery'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends React.Component{
    constructor(props){
        super (props);
        let html=$('html')[0];
        this.state={
            width:html.clientWidth,
            height:html.clientHeight
        }
    }
    render(){
        return(
            <div id='login' style={{width:this.state.width,height:this.state.height}}>
                <div>
                    <img width='60%' src="http://192.168.1.3:3000/images/logo.png" alt=""/>
                    <TextField id="outlined-basic" label="用户名" variant="outlined" />
                    <TextField
                        id="outlined-password-input"
                        label="密码"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                    />
                    <Button onClick={()=>{this.props.history.push('index')}} variant="contained" color="primary">
                        登入
                    </Button>
                </div>
            </div>
        )
    }
}
export default Login