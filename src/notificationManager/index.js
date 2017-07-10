/**
 * Created by Utku on 07/07/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Snackbar} from 'react-mdl';
import {clearNotification} from '../utils/actions';
class NotificationManager extends React.Component{
    render(){
        if(this.props.notification){
        return(
            <Snackbar
                active={!!this.props.notification.infoText}
                onClick={() => this.props.clearNotification() }
                onTimeout={ () => this.props.clearNotification()}
                timeout={2000}
                action="Kapat">
                <span style={{color : this.props.notification.infoColor}}>{this.props.notification.infoText}</span>
                </Snackbar>
        )}else {
            return null;
        }
    }
}

export default connect( (state) => {
    return{
        notification: state && state.notification,
    }
},{clearNotification})(NotificationManager);