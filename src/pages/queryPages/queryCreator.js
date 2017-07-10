/**
 * Created by Utku on 02/03/2017.
 */
import React from 'react';
import {Card, Textfield, CardTitle, Button} from 'react-mdl';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import {getQueryByName, upsertQuery,deleteQuery} from '../../utils/actions';
import {Field, reduxForm} from 'redux-form';
const RenderTextField = (props) => {
    return (
        <Textfield
            onChange={(event, index, value) => props.input.onChange(value)}
            floatingLabel
            {...props.input}
            label={props.label}
            style={props.style}
            rows={props.rows}
        />
    )
}
class _QueryCreator extends React.Component {
    componentWillMount() {
        this.props.getQueryByName(this.props.params.queryName)
    }
    render() {
        return (
            <Card shadow={0} style={{width: '100%', height: 'calc(100vh - 70px)'}}>
                <CardTitle style={{borderBottom: '1px solid #DCDADA'}}>
                    <h4 style={{marginTop: '0'}}>
                        {this.props.params.queryName ? `Query: ${this.props.params.queryName}` : "New Query"}
                    </h4>
                </CardTitle>
                <div style={{padding: '10px 30px 10px 30px'}}>
                    <Field name="query_name" style={{width: '100%'}} label="Query Name" component={RenderTextField}/>
                    <Field name="query_text" rows={5} style={{width: '100%'}} label="Query Text"
                           component={RenderTextField}/>
                    <div>
                        <Button raised accent onClick={() => this.props.upsertQuery({
                            form: "frm_query_creator",
                            params : {
                                queryName: this.props.params.queryName
                            },
                            onSave : (res) => {hashHistory.push("/query/edit/"+res[0].query_name)}
                        })}>SAVE</Button>
                        <Button style={{ marginLeft : '8px'}} raised primary onClick={() => this.props.deleteQuery(this.props.params.queryName,{
                            onDelete : () => {hashHistory.push("/allqueries")}
                        })}>DELETE</Button>
                        <Button style={{ marginLeft : '8px'}} raised onClick={ () => hashHistory.push("/allqueries")}>CANCEL</Button>
                    </div>
                </div>
            </Card>
        )
    }
}
const QueryCreator = reduxForm({
    form: 'frm_query_creator'
})(_QueryCreator)
export default connect((state,ownProps) => {
    return {
        initialValues: state && state.queryReducer && state.queryReducer[ownProps.params.queryName] && state.queryReducer[ownProps.params.queryName][0]
    }
}, {getQueryByName, upsertQuery, deleteQuery})(QueryCreator);