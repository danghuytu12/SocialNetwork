import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'
import a from "../../img/735145cfe0a4.png";
const Header = () => {

    return (
        // <div className="header bg-light">
        //     <nav className="navbar navbar-expand-lg navbar-light 
        //     bg-light justify-content-between align-middle">

        //         <Link to="/" className="logo">
        //             <h1 className="navbar-brand text-uppercase p-0 m-0"
        //             onClick={() => window.scrollTo({top: 0})}>
        //                 Instagram
        //             </h1>
        //         </Link>

        //         <Search />

        //         <Menu />
        //     </nav>
        // </div>
        <Grid xs={12} container style={{ minHeight: "60px", padding: "0px 150px", display: "flex", justifyContent: 'center',alignItems:"center" }}>
            <Grid xs={3}>
                <Link to="/" className="logo">
                    {/* <h1 className="navbar-brand text-uppercase p-0 m-0"
                        onClick={() => window.scrollTo({ top: 0 })}>
                        Instagram
                    </h1> */}
                    <img src={a} />
                </Link>
            </Grid>
            <Grid xs={3}>
                b
            </Grid>
            <Grid xs={3}>
                c
            </Grid>
        </Grid>
    )
}

export default Header
