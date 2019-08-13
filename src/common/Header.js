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
    regUserName:"",
    regPassword:"",
    firstName:"",
    lastName:"",
    contactNo:"",
    userNameRequired:"dispNone",
    passWordRequired:"dispNone",
    ReguserNameRequired:"dispNone",
    RegpassWordRequired:"dispNone",
    firstNameRequired:"dispNone",
    lastNameRequired:"dispNone",
    contactNoRequired:"dispNone"
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


// Question: Cant we do DOM manipulation here as we used to do in Javascript.(i.e manipulate displkay property of FormHelperText)
}


registerationClickHandler=()=>{
    this.state.regUserName===""? this.setState({ReguserNameRequired:"dispBlock"}):
    this.setState({ReguserNameRequired:"dispNone"});
    
    this.state.regPassword===""? this.setState({RegpassWordRequired:"dispBlock"}):
    this.setState({RegpassWordRequired:"dispNone"});

    this.state.firstName===""?this.setState({firstNameRequired:"dispBlock"}):
    this.setState({firstNameRequired:"dispNone"});

    this.state.lastName===""?this.setState({lastNameRequired:"displBlock"}):
    this.setState({lastNameRequired:"dispNone"});

    this.state.contactNo===""?this.setState({contactNo:"dispBlock"}):
    this.setState({contactNo:"dispNone"});
}


handleClickOutside=()=>{
//exercize1,2 bug
this.setState({userNameRequired:"dispNone",
passWordRequired:"dispNone" ,
ReguserNameRequired:"dispNone",
RegpassWordRequired:"dispNone",
firstNameRequired:"dispNone",
lastNameRequired:"dispNone",
contactNoRequired:"dispNone",

value:0});

}



//below are onchange events handlers for form

inputUserNameChangeHandler=(e)=>{
    //setting userName field of state object, with form input's text value
    this.setState({userName:e.target.value});
}



inputPasswordChangeHandler=(e)=>{
    //setting password field of state object, with form input's text value
    this.setState({passWord:e.target.value});

}

inputRegUserNameChangeHandler=(e)=>{
    //setting userName field of state object, with form input's text value
    this.setState({regUserName:e.target.value});
}



inputRegPasswordChangeHandler=(e)=>{
    //setting password field of state object, with form input's text value
    this.setState({regPassword:e.target.value});

}

inputFirstNameChangeHandler=(e)=>{

this.setState({firstName:e.target.value});

}

inputLastNameChangeHandler=(e)=>{

this.setState({lastName:e.target.value});
    
}

inputContactChangeHandler=(e)=>{

this.setState({contactNo:e.target.value});
    
}

//------------------------------------------------------------------------------------------------------------------------
render(){
    return(
    
    <div className="mainContainer" >


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
{/* form helpertext with dynmic class */}
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
    <InputLabel htmlFor="firstName" > First Name</InputLabel>
    <Input id="firstName" type="text"  onChange={this.inputFirstNameChangeHandler}/>
    <FormHelperText className={this.state.firstNameRequired}><span className="red">Required</span></FormHelperText>
    </FormControl>

    <br/>
    <FormControl>
    <InputLabel htmlFor="lastName"  > Last Name</InputLabel>
    <Input id="lastName" type="text" onChange={this.inputLastNameChangeHandler}/>
    <FormHelperText className={this.state.lastNameRequired}><span className="red">Required</span></FormHelperText>
    </FormControl>


{/* consider email and username as same for now */}
    <br/>
    <FormControl>
    <InputLabel htmlFor="email"  > Email</InputLabel>
    <Input id="email" type="text"  username={this.state.regUserName} onChange={this.inputRegUserNameChangeHandler}/>
    <FormHelperText className={this.state.ReguserNameRequired}><span className="red">Required</span></FormHelperText>
</FormControl>

<br/>
    <FormControl>
    <InputLabel htmlFor="regPassword"  > Password</InputLabel>
    <Input id="regPassword" type="password" password={this.state.regPassword} onChange={this.inputRegPasswordChangeHandler}/>
    <FormHelperText className={this.state.RegpassWordRequired}><span className="red">Required</span></FormHelperText>
</FormControl>
<br/>

    <FormControl>
    <InputLabel htmlFor="contact"  > Contact No</InputLabel>
    <Input id="contact" type="text" onChange={this.inputContactChangeHandler}/>
    <FormHelperText className={this.state.contactNoRequired}><span className="red">Required</span></FormHelperText>
    </FormControl> <br/><br/>

    <Button variant="contained" color="primary" onClick={this.registerationClickHandler}>REGISTER</Button>
    </TabContainer>
    }
            
        </Modal>
    </div>);
}
}

export default onClickOutside(Header)