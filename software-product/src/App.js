import React from 'react';
import * as s from './App.styles';
import * as Palette from './colors'


import Sidebar from './components/Sidebar/Sidebar';
import MainView from './components/MainView/MainView'
import Mainbar from './components/Mainbar/Mainbar';


const App = () => {
  const backgroundImage = 'images/mountain.jpg';
  const sidebarHeader = {

  };
  const menuItems = [
    // {icon: '/iconssvg/toggle.svg', subMenuItems: [] },
    {name: 'User Dashboard', to: '/', icon: '/iconssvg/dashboard.svg', subMenuItems: [] },
    {name: 'RFQs', to: '/rfqs', icon: '/iconssvg/rfq.svg', subMenuItems: [] },
    {name: 'vendors', to: '/vendors', icon: '/iconssvg/vendors.svg', 
      subMenuItems: [
      ] },
    {name: 'Rewards', to: '/rewards', icon: '/iconssvg/rewards.svg', subMenuItems: [] },
    {name: 'Help', to: '/help', icon: '/iconssvg/help.svg', subMenuItems: [] },
  ];

  const fonts = {
    header: 'ZCOOL KuaiLe',
    menu: 'Poppins'
  }

  return (
    <s.App>
       <Mainbar
        backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
        colorPalette={Palette.brown}
      />
      <Sidebar
        backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
        colorPalette={Palette.brown}
      />
      <MainView />
    </s.App>
  );
}

export default App;
