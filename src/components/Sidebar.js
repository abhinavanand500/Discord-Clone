import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <h3>Abhinav Anand 🚀</h3>
                <ExpandMoreIcon />
            </div>
            <div className='sidebar_channels'>
                <div className='sidebar_channelHeader'>
                    <div className='sidebar_header'>
                        <ExpandMoreIcon />
                        <h4>Text Channel</h4>
                    </div>
                    <AddIcon className='sidebar_addChannel' />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
