import axios from "axios";
import React from "react";
import UserInfo from "./userInfo"

class FollowerInfo extends React.Component {

    render(){
        return(
            <div>
                {this.props.followersData.map(item => {
                    return(
                        <UserInfo key={item.id} info={item} />
                        )           
                    })}
            </div>
        )
    }
}

export default FollowerInfo;