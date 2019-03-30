import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types'
import * as actions from '../actions/index';
import Message from '../components/Message'

class MessageContainer extends Component {
    render() {
        return (
            <Message message={this.props.message}/>
        );
    }
    
}

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
};

const mapStateToProps = state =>{
    return {
        message: state.message
    }
}



export default connect(mapStateToProps, null)(MessageContainer);
