import React, {Component} from "react";
import {getApolloContext, gql} from '@apollo/client';
import { Button, Divider, Header, Icon, List, ListContent, ListItem, Form, FormGroup, FormField, Input, FormButton, FormInput} from 'semantic-ui-react'


export default class EditPRoductGroup extends Component{

    catchGroupName = e => {}

    saveGroup = e => {}
    
    render() {
        return (
            <Form>
                <FormGroup>
                    
                </FormGroup>
                <FormGroup>                        
                    <FormInput
                    placeholder='Nombre del grupo'
                    name='Nombre del grupo'
                    onChange={this.catchGroupName}
                    />
                    <FormButton content='Guardar' onClick={this.saveGroup}/>
                </FormGroup>
            </Form>
        );
    }
}