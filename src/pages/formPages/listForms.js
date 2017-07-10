/**
 * Created by Utku on 07/03/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import {getAllForms} from '../../utils/actions';
import {hashHistory} from 'react-router'
import {Card, List,FABButton, ListItemContent, ListItem, ListItemAction, Icon} from 'react-mdl';
class ListForms extends React.Component {
    componentWillMount() {
        this.props.getAllForms()
    }
    render() {
        return (
            <Card shadow={0} style={{width: '100%', height: 'calc(100vh - 80px)',overflow : 'scroll'}}>
                <List>
                    {this.props.formList && this.props.formList.length > 0 && (this.props.formList).map((form) => {
                        return (
                            <ListItem onClick={ () => hashHistory.push("form/edit/"+form.form_name)} key={form.record_id} className="hoverableListItem" twoLine>
                                <ListItemContent avatar="person"
                                                 subtitle={form.table_and_schema}>
                                    {form.form_name}
                                </ListItemContent>
                                <ListItemAction>
                                    <a href="#"><Icon name="star"/></a>
                                </ListItemAction>
                            </ListItem>
                        )
                    })}
                </List>
                <FABButton onClick={ () => hashHistory.push("/form/new")} style={{
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
        formList: state && state.queryReducer && state.queryReducer.allForms
    }
},{getAllForms})(ListForms)