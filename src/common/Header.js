import React,{Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button'
import logo from '../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// why cant we make use of JSX elements instead of importing these elements
class Header extends Component {
    constructor(){
super();
//dynamic members is initialised within state
this.state={
    modalIsOpen:false,
    value:0
}
        
    }

    openModalHandler=()=>{
this.setState({modalIsOpen:true})
    }

    closeModal=()=>{

        this.setState({modalIsOpen:false})
    }

    tabChangeHandler=(event,value)=>{
        console.log(value);
        this.setState({ value });
}

render(){
    return(<div >
        <header className="header">
        <img src={logo} className="app-logo" alt="logo"></img>
    <Button variant="contained" className="login-button" onClick={this.openModalHandler}>  {/*  we directly import ready-made button element as component from materialUI library */}
    Login
    </Button>
    </header>
    {/* display of modal is controlled via modalIsopen attribute */}
    <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" onRequestClose={this.closeModal}>
    <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>

                    {/* not understanding how 'value' is being manipulated and sent to onChange event handler */}
        </Modal>
    </div>);
}
}


export default Header