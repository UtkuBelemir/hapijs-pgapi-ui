/**
 * Created by Utku on 02/03/2017.
 */
import React from 'react';
import {Navigation, Drawer } from 'react-mdl';
import {Link} from 'react-router'
class DrawerNav extends React.Component {
    render() {
        return (
            <Navigation>
                <Link to="allqueries"><strong>QUERIES</strong></Link>
                <Link to="allforms"><strong>FORMS</strong></Link>
            </Navigation>
        )
    }
}
export default class LeftDrawer extends React.Component {
    render() {
        return (
            <Drawer title="Reactivers API">
                <DrawerNav/>
            </Drawer>
        )
    }
}
