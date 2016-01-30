import React, { Component } from 'react';

class SettingsButton extends Component {
    render () {
        return (
            <a onClick={this.props.onClick} className="subNav_button"><i className="fa fa-times-circle"></i></a>
        )
    }
}

class SettingsApp extends Component {

    logout () {
        return (
            guiConfig.close()
        )
    };

    render () {
        return (
            <div>
                <SettingsButton onClick={this.logout.bind(this)} />
            </div>
        )
    }
}

export default SettingsApp;