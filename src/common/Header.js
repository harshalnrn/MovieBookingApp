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

    tabChangeHandler=(event,position)=>{
        console.log(position);
        this.setState({ value:position });
}

render(){
    return(<div class="mainContainer">
        <header className="header">
        <img src={logo} className="app-logo" alt="logo"></img>
    <Button variant="contained" className="login-button" onClick={this.openModalHandler}>  {/*  we directly import ready-made button element as component from materialUI library */}
    Login
    </Button>
    </header>
    {/* display of modal is controlled via modalIsopen attribute */}
    <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" onRequestClose={this.closeModal} className="loginRegModal">
    <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login" />   {/* position 0 */}
                        <Tab label="Register" />  {/*  position1 */}
                    </Tabs>

                    {/* Here onChange event handler for the Tabs,sets the state of value to 0 or 1, based upon position passed.
                    So is position an inbuilt property of Tab component*/}
            
        </Modal>
    </div>);
}
}


export default Header