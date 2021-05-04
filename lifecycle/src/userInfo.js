import React from "react";


class UserInfo extends React.Component {

    render(){
        console.log(this.props.info)
        return(
            <div>
                <h1>Name: {this.props.info.name}</h1>
            </div>
        )
    }
}

export default UserInfo;
