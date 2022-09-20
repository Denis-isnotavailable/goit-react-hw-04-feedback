import React, { Component } from "react";
import PropTypes from 'prop-types';

export class Notification extends Component {

    render() {

        return (<p>{ this.props.message }</p>);
    }
}

Notification.protoType = {
    message: PropTypes.string.isRequired,
}