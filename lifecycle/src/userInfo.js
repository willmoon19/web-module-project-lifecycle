import React from "react";


class UserInfo extends React.Component {

    render(){
        return(
            <div>
                <img src={this.props.info.avatar_url} alt={this.props.info.avatar_url} />
                <h2>Name: {this.props.info.login}</h2>
            </div>
        )
    }
}

export default UserInfo;
