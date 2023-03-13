import React from 'react'
import {Outlet} from 'react-router-dom'
import Layout from './Layout';
export default function Main(){
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
     const handleDrawerToggle = () => {
         setMobileOpen(!mobileOpen);
     };
    return (
 
        <Layout handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}>
        <Outlet context={[handleDrawerToggle]}/>
        </Layout>
    )
}