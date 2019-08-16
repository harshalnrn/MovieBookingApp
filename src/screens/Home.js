import React,{Component} from 'react';
import './Home.css';
import Header from '../common/Header.js';
import {withStyles} from '@material-ui/core/styles';
import movieData from '../common/movieData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
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
    }
});





class Home extends Component {
    render(){
        const {
            classes
        }
        =this.props;

        return(
<div>
<Header/>
<header className={classes.upcomingMoviesHeading}>Upcoming Movies</header>

<GridList className={classes.gridListUpcomingMovies} cols={5}>
                            {/* iterating throw map, to display each element/object in grid */}
{
    movieData.map(movie =>(

<GridListTile key={movie.id}>                                    {/* remember why key is needed for each element within map */}
   <img src={movie.poster_url} alt={movie.title}/>
   <GridListTileBar title={movie.title}/>
</GridListTile>
))}

</GridList>
</div>
        )
    }
}
export default withStyles(styles)(Home);