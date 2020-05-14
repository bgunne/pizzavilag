import React from 'react';

import Form from 'react-bootstrap/Form';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

class Signin extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            signInEmail: '',
            signInPassword: '',
            showFail: false
        }
    }

    onEmailChange = (event) =>
    {
        this.setState({signInEmail: event.target.value});
        
    }
    onPasswordChange = (event) =>
    {
        this.setState({signInPassword: event.target.value});
    }

    onSubmit = () =>
    {
        fetch(
            'http://localhost:3000/signin',
            {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify
                (
                    {
                        email: this.state.signInEmail,
                        password: this.state.signInPassword
                    }
                )
            }
        )
        .then(response => response.json())
        .then( user=>
            {
                if(user.id)
                {
                    this.props.loadUser(user);
                    if(user.role === "admin")
                    {
                        
     
                        this.props.onRouteChange("admin");
                    }
                    else
                    {
                        
      
                        this.props.onRouteChange("signedin");
                    }
                }
                else
                {
                    this.setState({showFail: true});
                }
            }
        )
    }

    
    render()
    {
        return(
            <Form className="w-80 center bg-light-yellow pa2 br3 mt2">
                <Alert show={this.state.showFail} variant="danger" >
                    <p>
                    Hibás e-mail cím vagy jelszó!
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                    <Button onClick={() => this.setState({showFail: false})} variant="outline-danger">
                        Bezárás
                    </Button>
                    </div>
                </Alert>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>E-mail cím</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="pelda@pizzavilag.hu"
                onChange={this.onEmailChange} />
            </Form.Group>
          
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Jelszó</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Jelszó"
                onChange={this.onPasswordChange} />
            </Form.Group>
            <p className="f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0" 
                style={{background: "#c4954f"}}
                onClick={this.onSubmit}>
                Bejelentkezés
            </p>
            </Form>
        );
    }
}


export default Signin;