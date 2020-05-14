import React from 'react'

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

class PizzaEditor extends React.Component
{
 // eslint-disable-next-line
    constructor(props) 
    {
        super(props);
    }

    render()
    {
        const{pizza,onFormChange,onFileInputChangeHandler}=this.props;
        
        return(
            <Form style={{}}>
                <Form.Row>
                    <Col className="col-3">
                        <Form.Group controlId="name">
                        <Form.Label>Név</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Név"
                            defaultValue={pizza.name}
                            onChange={onFormChange} />
                        </Form.Group>
                    </Col>
                    
                    <Col className="col-3">
                        <Form.Group controlId="topping">
                        <Form.Label>Feltétek</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Feltétek"
                            defaultValue={pizza.topping}
                            onChange={onFormChange} />
                        </Form.Group>
                    </Col>
                    
                    <Col className="col-3">
                        <Form.Group controlId="price">
                        <Form.Label>Ár</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="Ár"
                            defaultValue={pizza.price}
                            onChange={onFormChange} />
                        </Form.Group>
                    </Col>
                    
                    <Col className="col-3">
                        <Form.File id="formcheck-api-regular">
                            <Form.File.Label>Kép</Form.File.Label>
                            <Form.File.Input type="file" onChange={onFileInputChangeHandler}/>
                        </Form.File>
                    </Col>
                </Form.Row>
            </Form>
        );
    }
    
}


export default PizzaEditor;