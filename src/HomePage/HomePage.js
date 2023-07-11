import React from 'react'
import Header from './Header/Header'
import MainPage from './MainCard/MainPage'
import Navbar from './SideNavigation/Navbar'

const HomePage = () => {
    return (
        <div style={{ display: "flex", flexDirection: 'column' , height:"100%", position: 'absolute', width:"100%"}}>
            <div style={{ height: '10%', background:"green" }}>
                <Header />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', height: "90%" }}>
                <div style={{ width: '30%', background: "red" }}>
                    <Navbar />
                </div>
                <div style={{ width: '70%', background: "blue" }}>
                    <MainPage />
                </div>

            </div>
        </div>
    )
}

export default HomePage