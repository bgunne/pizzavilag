import React, { useState }  from 'react';

import Register from '../Register/Register';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';



const Order = ({onRouteChange, onEmptyCart, sumPrice, shoppingCart, user}) =>
{
    const [showFail, setShowFail] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [formatFail, setFormatFail] = useState(false);
    const [emailFail, setEmailFail] = useState(false);
    
    const loadUser = (reg) =>
    {
        user = reg;
    }

    const userSignedIn = (user)=>
    {
        if(user.id)
        {
            return(
                <div className="w-50 mh1" >
                        <article className="pa1 pa2-ns"style={{float: "right"}}>
                            <h1 className="f4 bold center mw6">Rendelés adatai</h1>
                            <ul className="list pl0 ml0 center mw6 ba b--light-silver br2 bg-light-yellow">
                                <li className="ph3 pv3 bb b--light-silver">Név: {user.lastname} {user.firstname} </li>
                                <li className="ph3 pv3 bb b--light-silver">Cím: {user.address}</li>
                                <li className="ph3 pv3 bb b--light-silver">Telefonszám: {user.phone}</li>
                                <li className="ph3 pv3 bb b--light-silver">E-mail: {user.email}</li>
                                <li className="ph3 pv3">Megjegyzés: {user.comment}</li>

                            </ul>
                        </article>
                    </div>
            );
            
        }
        else
            {
                return(<Register loadUser={loadUser} isOrder={true}/>);
            }
    }
    
    const onSubmit = () =>
    {
        
        let userData = `${user.lastname} ${user.firstname}\n${user.zip} ${user.city} ${user.address}\nTel.: ${user.phone}\nE-mail: ${user.email}\nMegj.: ${user.comment}`;
        
        const blackList=[",","@","(",")","'","\"","`",";","#","_","<",">","+","[","]","{","}"];
        
        blackList.forEach(char => 
            {
                if(user.email.includes(char,user.email.search("@")+1))
                {
                    setFormatFail(true);
                }
            }
        )
        if(!user.email.includes("@") || !user.email.includes(".",user.email.search("@")) || formatFail)
        {
            setEmailFail(true);
        
        } 
        else if(!user.lastname || !user.firstname || !user.zip || !user.city || !user.address || !user.phone || !user.email )
        {
            setShowFail(true);
        }
        else
        {
            let pizzas ='';
            shoppingCart.forEach(function(pizza, index)
            {
                pizzas+=`${pizza.name} ${pizza.size} cm      ${pizza.price} Ft\n`;
            })
            
            fetch('https://shielded-coast-80926.herokuapp.com/order',
            {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify
                (
                    {
                        user: userData,
                        pizzas: pizzas,
                        price: sumPrice
                    }
                )
            })
            .then(response => response.json())
            .then(setShowSuccess(true))
            .then(onEmptyCart())
            //.then(setTimeout(() => { onRouteChange('home') }, 10000));
        }
        
    }



    return(
        <div className="flex flex-column items-center " >
            <Alert show={emailFail} variant="danger" >
                <p>
                Hibás e-mail cím formátum!
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                <Button onClick={() => {setEmailFail(false); setFormatFail(false);}} variant="outline-danger">
                    Bezárás
                </Button>
                </div>
            </Alert>  
            <Alert show={showSuccess} variant="success">
                <Alert.Heading>Rendelésed fogadtuk.</Alert.Heading>
                <p>
                    Köszönjük, hogy minket választottál.
                </p>
                <hr />
                <p className="mb-0">
                    Probléma esetén vedd fel a kapcsolatot az ügyfélszolgálatunkkal: ugysemvalaszolunk@pizzavilag.test
                </p>
            </Alert>
            <Alert show={showFail} variant="danger" >
                <p>
                Kérlek tölts ki minden kötelező mezőt a rendelés leadásához.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                <Button onClick={() => setShowFail(false)} variant="outline-danger">
                    Bezárás
                </Button>
                </div>
            </Alert>
            <div className="w-80 mr2">
                <div className="flex justify-center">
                    {userSignedIn(user)}
                    <div className="w-50 mh1" style={{overflowY: 'scroll', height:'600px'}}>
                        <article className="pa1 pa2-ns" style={{float: "left"}}>
                            <ul className="list pl0 ml0 center mw6 ba b--light-silver br2 bg-light-yellow">
                            {
                                shoppingCart.map((pizza, i) =>
                                {
                                    return(
                                        <li className="ph3 pv3 bb b--light-silver tc" key={i}>
                                            <p>{pizza.name} {pizza.size} cm</p>
                                            <p>{pizza.price} Ft</p>
                                        </li>
                                    );
                                })
                            }
                            </ul>
                        </article>
                    </div>
                </div>
            </div> 
            <div className="w-25 mr2 flex">
                <p className="b red ">Végösszeg: {sumPrice} Ft</p>
                <p className="f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0 ml3" 
                    style={{background: "#c4954f"}}
                    onClick = {() => 
                    {
                        onSubmit();
                    }}>
                        Rendelés megerősítése
                </p>
            </div>
        </div>
        
    );
}

export default Order;