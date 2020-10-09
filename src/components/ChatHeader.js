import React from "react";
import "./ChatHeader.css";
import NotificationIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRounded from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { HelpRounded, SendRounded } from "@material-ui/icons";

function ChatHeader({ channelName }) {
    return (
        <div className='chatHeader'>
            <div className='chatHeader_left'>
                <h3>
                    <span className='chatHeader_hash'>#</span>
                    {channelName}
                </h3>
            </div>
            <div className='chatHeader_right'>
                <NotificationIcon />
                <EditLocationRoundedIcon />
                <PeopleAltRounded />
                <div className='chatHeader_search'>
                    <input placeholder='search' />
                    <SearchRoundedIcon />
                </div>
                <SendRounded />
                <HelpRounded />
            </div>
        </div>
    );
}

export default ChatHeader;
