import * as React from "react";
import Iframe from "react-iframe";

const Badges = ()=> {
        return <div className="SectionContainer" id="Badgr">
        <Iframe url="https://api.badgr.io/public/collections/b8fb6db591c8e71a3374487f7ab589ae?embed=true&amp;embedVersion=1&amp;embedWidth=330&amp;embedHeight=186"
        width="330px"
        height="186px"
        className="Iframe1"
        styles={{color:"white"}}
        position= "initial"
        />
        <Iframe url= "https://api.badgr.io/public/collections/fdfa7ea08ed5f221fb453a8081edb616?embed=true&amp;embedVersion=1&amp;embedWidth=330&amp;embedHeight=186"
        width="330px"
        height="186px"
        className="Iframe2"
        styles={{color:"white"}}
        position= "initial"
        />
        <Iframe url= "https://api.badgr.io/public/collections/627d32103422472b481be8933ef49429?embed=true&amp;embedVersion=1&amp;embedWidth=330&amp;embedHeight=186"
        width="330px"
        height="186px"
        className="Iframe3"
        styles={{color: "white"}}
        position="initial"
        /> 
        </div>
}
export default Badges;