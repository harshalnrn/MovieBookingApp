import React,{Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button'
import logo from '../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
import onClickOutside from 'react-onclickoutside';

//making use of styled JSX elements, in form of ready  components, from materialUI library


const customStyles={

content:{
    top: '50%',
    left:'50%',
    right:'auto',
    bottom:'auto',
    marginRight: '-50%',
    transform: 'translate(-50%,-50%)'

}

}
//---------------------------------------------------------

//below is stateless functional typrography component

const TabContainer=function(props){
//note the styling priority : inline>internal>external
    return (
    <Typography component="div" style={{padding:0,textAlign:'center'}}>
{props.children}

    </Typography>    /* note that inline styling has {{}} */
    
    );

}

//we validate if tabContainer component always have children elements or not
//PropTypes required for inbuilt typeChecking of data
TabContainer.propTypes={
    children:PropTypes.node.isRequired
}


//---------------------------------------------------------------

// why cant we make use of JSX elements instead of importing these elements
class Header extends Component {
    constructor(){
super();
//dynamic members is initialised within state
this.state={
    modalIsOpen:false,
    value:0,
    userName:"",
    passWord:"",
    userNameRequired:"dispNone",
    passWordRequired:"dispNone"
}
        
    }

    //----------------------------------------

    openModalHandler=()=>{
this.setState({modalIsOpen:true})
    }

    //--------------------------------
    closeModal=()=>{
        this.setState({modalIsOpen:false})
    }
    //----------------------------------

    tabChangeHandler=(event,position)=>{
        console.log(position);
        this.setState({ value:position });

       // note: this value controls the display of underlining line on the tab
}

loginClickHandler=()=>{
//validate and update display state

this.state.userName===""? this.setState({userNameRequired:"dispBlock"}):
this.setState({userNameRequired:"dispNone"});

this.state.passWord===""? this.setState({passWordRequired:"dispBlock"}):
this.setState({passWordRequired:"dispNone"});
}


handleClickOutside=()=>{

this.setState({userNameRequired:"dispNone",
passWordRequired:"dispNone" ,
value:0});

}

inputUserNameChangeHandler=(e)=>{
    //setting userName field of state object, with form input's text value
    this.setState({userName:e.target.value});

}



inputPasswordChangeHandler=(e)=>{
    //setting password field of state object, with form input's text value
    this.setState({passWord:e.target.value});


}

//------------------------------------------------------------------------------------------------------------------------
render(){
    return(
    
    <div class="mainContainer" >


        <header className="header">
        <img src={logo} className="app-logo" alt="logo"></img>
    <Button variant="contained" className="login-button" onClick={this.openModalHandler}>  {/*  we directly import ready-made button element as component from materialUI library */}
    Login
    </Button>
    </header>
    
    {/* display of modal is controlled via modalIsopen attribute, similar to display attribute in html/css */}

    <Modal onClickOutside={this.outsideModalClickHandler} ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" onRequestClose={this.closeModal} style={customStyles}>
    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>  {/* change of position */}
                        <Tab label="Login" />   {/* position 0 */}
                        <Tab label="Register"/>  {/*  position1 */}
                        
                    </Tabs>

{/* Here onChange event handler for the Tabs,sets the state of value to 0 or 1, based upon position passed.
So is position an inbuilt property of Tab component*/}
{/* using state for conditional rendering of both tab change, forms */}
{this.state.value===0 &&

<TabContainer>
<FormControl>
<InputLabel htmlFor="username" > UserName</InputLabel>
<Input id="username" type="text" username={this.state.userName} onChange={this.inputUserNameChangeHandler}/>
<FormHelperText className={this.state.userNameRequired}><span className="red">Required</span></FormHelperText>
</FormControl>
<br/>


<FormControl>
<InputLabel htmlFor="password"> Password </InputLabel>
<Input id="password" type="text" password={this.state.passWord}    onChange={this.inputPasswordChangeHandler} />
{/* below should be shown only after validation of input, post onClick event */}
<FormHelperText className={this.state.passWordRequired}><span className="red">Required</span></FormHelperText>
</FormControl> <br/><br/>
<Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
</TabContainer>
}
 





 {/* registeration form */}
{this.state.value===1 &&

    <TabContainer>
    <FormControl>
    <InputLabel > </InputLabel>
    <Input id="" type="text"/>
    </FormControl>
    <br/>
    <FormControl>
    <InputLabel ></InputLabel>
    <Input id="" type="text"/>
    </FormControl> <br/><br/>
    <Button variant="contained" color="primary">REGISTER</Button>
    </TabContainer>
    }
            
        </Modal>
    </div>);
}
}

export default onClickOutside(Header)