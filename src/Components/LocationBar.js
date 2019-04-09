import  {Input, InputGroup} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

const LocationBar = () => {
        return (
    <div>
    <InputGroup size="lg">
        <Input  placeholder="Zip Code" />
    </InputGroup>
    </div>
)
}

export default LocationBar;