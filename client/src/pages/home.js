import React, { useEffect } from 'react'

import Status from '../components/home/Status'
import Posts from '../components/home/Posts'
import RightSideBar from '../components/home/RightSideBar'

import { useSelector } from 'react-redux'
import LoadIcon from '../images/loading.gif'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

let scroll = 0;
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
const Home = () => {
    const { homePosts } = useSelector(state => state)

    window.addEventListener('scroll', () => {
        if (window.location.pathname === '/') {
            scroll = window.pageYOffset
            return scroll;
        }
    })

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: scroll, behavior: 'smooth' })
        }, 100)
    }, [])
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        // <div className="home row mx-0">
        //     <div className="col-md-8">
        //         <Status />

        // {
        //     homePosts.loading 
        //     ? <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
        //     : (homePosts.result === 0 && homePosts.posts.length === 0)
        //         ? <h2 className="text-center">No Post</h2>
        //         : <Posts />
        // }

        //     </div>

        //     <div className="col-md-4">
        //         <RightSideBar />
        //     </div>
        // </div>
        <Grid xs={12} container style={{ display: 'flex', justifyContent: 'center', marginTop: "10px" }}>
            <Grid xs={5} style={{ marginLeft: "20px" }}>
            {/* <Status /> */}
                <Card 
                // sx={{ maxWidth: 800 ,maxHeight:600}}
                >
                    {/* <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="/static/images/cards/paella.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent> */}
                    {
                        homePosts.loading
                            ? <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
                            : (homePosts.result === 0 && homePosts.posts.length === 0)
                                ? <h2 className="text-center">No Post</h2>
                                : <Posts />
                    }

                </Card>
            </Grid>
            <Grid xs={3} style={{ marginLeft: '30px' }}>
                <RightSideBar />
            </Grid>
        </Grid>
    )
}

export default Home
