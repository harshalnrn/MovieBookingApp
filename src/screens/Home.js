import React,{Component} from 'react';
import './Home.css';
import genres from  '../common/genres.js';
import artists from '../common/artists.js';
import Header from '../common/Header.js';
import {withStyles} from '@material-ui/core/styles';
import movieData from '../common/movieData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from'@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from'@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox  from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
//didnt undetrstand the below styles constant and high level components
const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    gridListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
     },
     title: {
        color: theme.palette.primary.light,
     }
});





class Home extends Component {

constructor(){
super();
    this.state={
movieName:"",
movieGenreName:"",
genres: [],
artists:[]
    }
}

//event handler for movie name input
movieNameChangeHandler=(e)=>{

  this.setState({
      movieData:e.target.value,
      movieGenreName:e.target.value
  });
}

//event handler for drop down select list of genres
genreSelectHandler= e =>{
    console.log("inside genre select Handler");
   this.setState({
       genres:e.target.value
   });
}
//event handler for drop-down select list of artists

artistSelectHandler= e =>{
    console.log("inside genre select Handler");
    console.log(e.target.value);
   this.setState({
       
    artists:e.target.value
   });
}


    render(){
        const {
            classes
        }
        =this.props;

        return(
<div>
<Header/>
<header className={classes.upcomingMoviesHeading}>Upcoming Movies</header>

{/* add a flex row div  */}
<div>
<GridList cellHeight={350} cols ={5} className={classes.gridListUpcomingMovies}>
                            {/* iterating throw map, to display each element/object in grid */}     
{

    movieData.map(movie =>(

<GridListTile key={movie.id}>                                    {/* remember why key is needed for each element within map */}
   <img className="movie-poster" src={movie.poster_url} alt={movie.title}/>
   <GridListTileBar title={movie.title}/>
</GridListTile>
))}

</GridList>
</div>

<br/>

<div className="flex-container">
                    <div className="left">
<GridList cellHeight={350} cols ={3} className={classes.gridListMain}>
                            {/* iterating throw map, to display each element/object in grid */}     
{

    movieData.map(movie =>(

<GridListTile key={movie.id}>                                    {/* remember why key is needed for each element within map */}
   <img className="movie-poster" src={movie.poster_url} alt={movie.title}/>
   <GridListTileBar title={movie.title}/>
</GridListTile>
))}

</GridList>
</div>




<div className="right">
<Card>
<CardContent>

<FormControl className={classes.formControl}>
<Typography className={classes.title} colors="textSecondary">
Find Movies By :
</Typography>
</FormControl>


<FormControl className={classes.formControl}>
<InputLabel htmlFor="movieName">Movie Name</InputLabel>
<Input id="movieName" onChange={this.movieNameChangeHandler}></Input>  
</FormControl>








<FormControl className={classes.formControl}>
<InputLabel htmlFor="select-multiple-checkbox">Genres</InputLabel>
<Select 
multiple input={<Input id="select-multiple-checkbox" />}
/* above value of property is another component */
renderValue={selected => selected.join(',')}
value={this.state.genres}
onChange={this.genreSelectHandler} 
>

{/* creating each check-box item iteratively,by iterating genres list */}
<MenuItem value="0">None</MenuItem>
{genres.map(genre => (
<MenuItem key={genre.id} value={genre.name}>
    <Checkbox checked={this.state.genres.indexOf(genre.name) > -1}/>
    <ListItemText primary={genre.name}/>
    </MenuItem>

))}
</Select>
</FormControl>






<FormControl className={classes.formControl}>
<InputLabel htmlFor="select-multiple-checkbox">Artists</InputLabel>
<Select 
multiple input={<Input id="select-multiple-checkbox" />}
/* above value of property is another component */
renderValue={selected => selected.join(',')}
value={this.state.artists}
onChange={this.artistSelectHandler} 
>

{/* creating each check-box item iteratively,by iterating genres list */}
<MenuItem value="0">None</MenuItem>
{artists.map(artist => (
<MenuItem key={artist.id} value={artist}>                            {/* complete artist object gets sent as event, to event change handler */}
    <Checkbox checked={this.state.artists.indexOf(artist.first_name) > -1}/>
    <ListItemText primary={artist.first_name+" "+ artist.last_name}/>
    </MenuItem>

))}
</Select>
</FormControl>



</CardContent>
</Card>
</div>
</div>
</div>
        )
    }
}
export default withStyles(styles)(Home);