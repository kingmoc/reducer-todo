import React from 'react';
import { Button } from 'semantic-ui-react';

const ClearButton = (props) => {
    return (
        <div>
            <Button
                negative
                inverted
                floated='right'
                color='red' 
                type='submit' 
                size='medium'
                onClick={props.clearSelected}
            >
                Clear
            </Button>
        </div>  
    );
};

export default ClearButton;