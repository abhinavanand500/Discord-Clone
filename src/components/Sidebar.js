import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannels from "./SidebarChannels";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InboxOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
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
                <div className='sidebar_channelsList'>
                    <SidebarChannels />
                    <SidebarChannels />
                    <SidebarChannels />
                    <SidebarChannels />
                </div>
            </div>
            <div className='sidebar_voice'>
                <SignalCellularAltIcon
                    className='sidebar_voiceIcon'
                    fontSize='large'
                />
                <div className='sidebar_voiceInfo'>
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className='sidebar_voiceIcons'>
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>
            <div className='sidebar_profile'>
                <Avatar src='https://scontent.fshl1-1.fna.fbcdn.net/v/t1.0-9/53732606_1854722427967281_6466001520994287616_o.jpg?_nc_cat=107&_nc_sid=174925&_nc_ohc=oYfhApgdASoAX8YJMnH&_nc_ht=scontent.fshl1-1.fna&oh=14c023e22dbc4631ad294a71e19d33bb&oe=5FA631ED' />
                <div className='sidebar_profileInfo'>
                    <h3>Abhinav</h3>
                    <p>#thisismyid</p>
                </div>
                <div className='sidebar_profileIcons'>
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
