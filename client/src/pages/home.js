import React, { useEffect } from 'react'

import Status from '../components/home/Status'
import Posts from '../components/home/Posts'
import RightSideBar from '../components/home/RightSideBar'

import { useSelector } from 'react-redux'
import LoadIcon from '../images/loading.gif'
import { Grid } from '@mui/material'


let scroll = 0;

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
        <Grid xs={12} container style={{display:'flex',justifyContent:'center',marginTop:"10px"}}>
            <Grid xs={5} style={{marginLeft:"20px"}}>
            {
                    homePosts.loading 
                    ? <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
                    : (homePosts.result === 0 && homePosts.posts.length === 0)
                        ? <h2 className="text-center">No Post</h2>
                        : <Posts />
                }
            </Grid>
            <Grid xs={3} style={{marginLeft:'30px'}}>
<RightSideBar />    
            </Grid>
        </Grid>
    )
}

export default Home
