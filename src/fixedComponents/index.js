/**
 * Created by Utku on 02/03/2017.
 */
import React from 'react'
import {Link} from 'react-router';
@annotation
export default class HeaderNav extends React.Component{
    render(){
        return(
            <div>
            <div style={{display : 'flex',width : '50%',justifyContent:'space-between'}}>
                <div style={{width : '50%'}}>
                    <Link to="/">List Queries</Link>
                </div>
                <div style={{width : '50%'}}>
                    <Link to="/createQuery">Create Query</Link>
                </div>
            </div>
            </div>
        )
    }
}