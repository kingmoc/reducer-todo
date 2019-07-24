import React, { useState } from 'react';
import { Formik } from 'formik';
import { Button, Form, Grid, Icon, Header, Message, Image, Segment, } from 'semantic-ui-react'
import * as Yup from "yup";
import shortid from "shortid"


const InputTask = (props) => {
    console.log(props)

    return (

        <Formik 
        
            initialValues = {{
                task: "",
            }}
            onSubmit={(values, actions,) => {
                actions.resetForm()
                props.addItem(values)
            }}

            validationSchema={UserSignUpSchema}
        
            render = {({ values, handleSubmit, handleChange, errors, touched, isSubmitting, ...props }) => (
                <Grid>
                    
                    <Grid.Column>
                        
                            <Form onSubmit={handleSubmit} size='big'>
                                <Form.Group>

                                <Form.Input   
                                    type="text"
                                    name="task"
                                    placeholder="Add Task Here ..."
                                    icon='tasks' 
                                    iconPosition='left'
                                    value={values.task}
                                    onChange={handleChange}
                                    error={touched.task && errors.task}
                                />

                                <Button 
                                    inverted
                                    floated='right'
                                    color='green' 
                                    type='submit' 
                                    // loading={isSubmitting}
                                    size='big'
                                >
                                    <Icon name='add' /> Add Task                       
                                </Button>

                                </Form.Group>
                            </Form>

                    </Grid.Column>
                </Grid>
            )}        
        
        />
    )
}

const UserSignUpSchema = Yup.object().shape({

    task: Yup.string()
        .min(3, 'Not Long Enough')
        .max(15, 'Slow Down Partner')
})

export default InputTask;    