import React, { useReducer } from 'react';
import { Checkbox, Button, Icon, Table, Header } from 'semantic-ui-react';

import { ADD_ITEM, TOGGLE_TASK, CLEAR, initialState, reducer} from '../reducer/reducer'

//component
import Input from './Input'
import ClearButton from './ClearButton';

const TableTask = () => {

    const[{ todoList }, dispatch] = useReducer(reducer, initialState)
    // console.log(todoList)

    const addItem = (item) => {
        console.log(item.task)
        item.task && dispatch({ type: ADD_ITEM, payload: item.task })
    }

    const toggle = (id) => {
        console.log(id)
        dispatch({ type: TOGGLE_TASK, payload: id })
    }

    const clearSelected = () => {
        console.log('got to first call')
        dispatch({ type: CLEAR })
    }


    return (
        <Table striped celled>
            {console.log(todoList)}
            <Table.Header>

                <Table.Row>
                    <Table.HeaderCell>
                        <ClearButton clearSelected={clearSelected}/>
                    </Table.HeaderCell>
                    <Table.HeaderCell><Header size='large'>Task</Header></Table.HeaderCell>
                </Table.Row>
                
            </Table.Header>
        
            <Table.Body>

                {todoList.map(task => {
                    return (
                        <Table.Row key={task.id} negative={task.completed ? true : null}>
                            <Table.Cell collapsing>
                                <Checkbox onClick={() => toggle(task.id)} slider />
                            </Table.Cell>
                            <Table.Cell>
                                {task.item}
                            </Table.Cell>
                        </Table.Row>     
                    )
                })}

            </Table.Body>
        
            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell />
                    
                    <Table.HeaderCell>

                        <Input addItem={addItem}/>

                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
      </Table>
    );
};

export default TableTask;