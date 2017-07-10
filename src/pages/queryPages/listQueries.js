/**
 * Created by Utku on 02/03/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import {getAllQueries} from '../../utils/actions';
import {hashHistory} from 'react-router'
import {Card, List, ListItemContent,FABButton, ListItem, ListItemAction, Icon} from 'react-mdl';

class ListQueries extends React.Component {
    componentWillMount() {
        this.props.getAllQueries()
    }

    render() {
        return (
            <Card shadow={0} style={{width: '100%', height: 'calc(100vh - 80px)',overflow : 'scroll'}}>
                <List>
                    {this.props.queryList && this.props.queryList.length > 0 && (this.props.queryList).map((query) => {
                        return (
                            <ListItem onClick={ () => hashHistory.push("query/edit/"+query.query_name)} key={query.record_id} className="hoverableListItem" twoLine>
                                <ListItemContent avatar="person"
                                                 subtitle={query.query_text}>
                                    {query.query_name}
                                </ListItemContent>
                                <ListItemAction>
                                    <a href="#"><Icon name="star"/></a>
                                </ListItemAction>
                            </ListItem>
                        )
                    })}
                </List>
                <FABButton onClick={ () => hashHistory.push("/query/new")} style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    zIndex: 100
                }} ripple colored>
                    <Icon name="add" />
                </FABButton>
            </Card>
        )
    }
}
export default connect((state) => {
    return {
        queryList: state && state.queryReducer && state.queryReducer.allQueries
    }
},{getAllQueries})(ListQueries)