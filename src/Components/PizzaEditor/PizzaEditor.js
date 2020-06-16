import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';
class PizzaEditor extends React.Component {
    render() {
        const { pizza, onFormChange, onFileInputChangeHandler } = this.props;
        return (
            <Form style={{}}>
                <Form.Row>
                    <Col className="col-3">
                        <Form.Group controlId="name">
                            <Form.Label>
                                <FormattedMessage
                                    id="pizzaeditor.name" />
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Név"
                                defaultValue={pizza.name}
                                onChange={onFormChange} />
                        </Form.Group>
                    </Col>
                    <Col className="col-3">
                        <Form.Group controlId="topping">
                            <Form.Label>
                                <FormattedMessage
                                    id="pizzaeditor.toppings" />
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Feltétek"
                                defaultValue={pizza.topping}
                                onChange={onFormChange} />
                        </Form.Group>
                    </Col>
                    <Col className="col-3">
                        <Form.Group controlId="price">
                            <Form.Label>
                                <FormattedMessage
                                    id="pizzaeditor.price" />
                            </Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Ár"
                                defaultValue={pizza.price}
                                onChange={onFormChange} />
                        </Form.Group>
                    </Col>
                    <Col className="col-3">
                        <Form.File id="formcheck-api-regular">
                            <Form.File.Label>
                                <FormattedMessage
                                    id="pizzaeditor.image" />
                            </Form.File.Label>
                            <Form.File.Input type="file" onChange={onFileInputChangeHandler} />
                        </Form.File>
                    </Col>
                </Form.Row>
            </Form>
        );
    }
}
export default PizzaEditor;