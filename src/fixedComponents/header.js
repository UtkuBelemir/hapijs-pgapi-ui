/**
 * Created by Utku on 02/03/2017.
 */
import React from 'react';
import {Layout, Header, Textfield, Content} from 'react-mdl';
import {hashHistory} from 'react-router';
import LeftNav from './leftNav'
import NotificationManager from '../notificationManager';

class HeaderNav extends React.Component {
    constructor(props){
        super(props);
        this.state={
            searchText:""
        }
    }
    render() {
        return (
            <Textfield
                value={this.state.searchText}
                onChange={ (val) => {console.log('VALLL',val)} }
                label="Search"
                expandable
                expandableIcon="search"
            />
        )
    }
}
export default class HeaderMain extends React.Component {
    render() {
        return (
            <div>
                <Layout fixedHeader>
                    <Header title={<span onClick={ () => hashHistory.push("/")}><strong>Reactivers</strong><span style={{color: '#ddd'}}> API Panel</span></span>}>
                        <HeaderNav />
                    </Header>
                    <LeftNav/>
                    <Content>
                        <div style={{padding : '8px 8px 0px 8px'}}>
                            {this.props.children}
                        </div>
                    </Content>
                </Layout>
                <NotificationManager/>
            </div>
        )
    }
}
