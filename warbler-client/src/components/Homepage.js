import React from "react";
import {Link} from "react-router-dom";
import MessageTimeLine from "./MessageTimeline";

const Homepage = ({currentUser}) => {
    if(!currentUser.isAuthenticated){
    return(
    <div className="home-hero">
        <h1>Whats happenin</h1>
        <h4>New to warbler?</h4>
        <Link to="/signup" className="btn btn-primary">
        Sign up
        </Link>
    </div>
    )
    }
    return <div>
        <MessageTimeLine
        profileImageUrl={currentUser.user.profileImageUrl}
        username={currentUser.user.username}
      />
    </div>
};

export default Homepage;