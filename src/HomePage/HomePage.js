import React from 'react'
import Header from './Header/Header'
import AllCard from './MainCard/AllCard'
import MainPage from './MainCard/MainPage'
import Navbar from './SideNavigation/Navbar'

const HomePage = () => {
    return (
        <div style={{ display: "flex", flexDirection: 'column' , height:"100%", position: 'absolute', width:"100%"}}>
            <div style={{ height: '20%' , borderBottomStyle: 'solid'}}>
                <Header />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', height: "80%" }}>
                <div style={{ width: '12%', borderRightStyle: 'solid', display:'flex'}}>
                    <Navbar />
                </div>
                <div style={{ width: '88%', }}>
                    <MainPage />
                    {/* <AllCard/> */}
                </div>

            </div>
        </div>
    )
}

export default HomePage