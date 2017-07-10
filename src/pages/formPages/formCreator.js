/**
 * Created by Utku on 07/03/2017.
 */
import React from 'react';
import {Card, Textfield, CardTitle, Button, CardText, CardMenu, IconButton} from 'react-mdl';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import {getFormByName,upsertFormData,deleteForm} from '../../utils/actions';
import {Field, reduxForm, FieldArray} from 'redux-form';

const RenderTextField = (props) => {
    return (
        <Textfield
            onChange={(event, index, value) => props.input.onChange(value)}
            floatingLabel
            {...props.input}
            {...props}
        />
    )
}

const RenderFormFields = (props) =>{
    return <div className="mdl-grid">{props.fields.map((field, index) => {
        return (
            <Field name={field} component={ (p) => {
                console.log('ALT P',p)
                return (
                    <div className="mdl-cell mdl-cell--3-col">
                        <Card shadow={2} style={{minHeight: '0px', width: '100%'}}>
                            <CardTitle style={{color: 'black'}}>{p.input.value.column_name}</CardTitle>
                            <CardText>
                                {p.input.value.data_type}
                            </CardText>
                            <CardMenu style={{color: 'red'}}>
                                <IconButton onClick={ () => props.fields.remove(index)} name="delete"/>
                            </CardMenu>
                        </Card>
                    </div>
                )
            } }/>)
    })}</div>
}

class _FormCreator extends React.Component {
    componentWillMount() {
        this.props.getFormByName(this.props.params.formName)
    }

    render() {

        return (
            <Card shadow={0} style={{width: '100%', height: 'calc(100vh - 80px)',overflow : 'scroll'}}>
                <CardTitle style={{borderBottom: '1px solid #DCDADA'}}>
                    <h4 style={{marginTop: '0'}}>
                        {this.props.params.formName ? `Form: ${this.props.params.formName}` : "New Form"}
                    </h4>
                </CardTitle>
                <div style={{padding: '10px 30px 10px 30px'}}>
                    <Field name="form_name" style={{width: '100%'}} label="Form Name" component={RenderTextField}/>
                    <Field name="table_and_schema" style={{width: '100%'}} label="Table And Schema" component={RenderTextField}/>
                    <div>
                        <FieldArray name="form_fields" component={RenderFormFields}/>
                    </div>
                    <div style={{paddingTop: '20px'}}>
                        <Button raised accent onClick={() => this.props.upsertFormData({
                            form: "frm_form_creator",
                            params: {
                                formName: this.props.params.formName
                            },
                            onSave: (res) => {
                                hashHistory.push("/form/edit/" + res[0].form_name)
                            }
                        })}>SAVE</Button>
                        <Button style={{marginLeft: '8px'}} raised primary
                                onClick={() => this.props.deleteForm(this.props.params.formName, {
                                    onDelete: () => {
                                        hashHistory.push("/allforms")
                                    }
                                })}>DELETE</Button>
                        <Button style={{marginLeft: '8px'}} raised
                                onClick={ () => hashHistory.push("/allforms")}>CANCEL</Button>
                    </div>
                </div>
            </Card>
        )
    }
}
const FormCreator = reduxForm({
    form: 'frm_form_creator'
})(_FormCreator)
export default connect((state, ownProps) => {
    return {
        initialValues: state && state.queryReducer && state.queryReducer[ownProps.params.formName] && state.queryReducer[ownProps.params.formName][0],
    }
}, {getFormByName,upsertFormData,deleteForm})(FormCreator);