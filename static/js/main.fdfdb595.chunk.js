(this.webpackJsonppizzavilag=this.webpackJsonppizzavilag||[]).push([[0],{27:function(e,t,a){e.exports=a(42)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},39:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),i=a.n(r),s=(a(32),a(26)),c=a(7),o=a(8),m=a(10),p=a(9),d=(a(33),function(e){var t=e.onRouteChange,a=e.isSignedIn,n=e.isAdmin,r=e.user;return a?n?l.a.createElement("nav",{className:"flex justify-center pa2",style:{background:"#c4954f"}},l.a.createElement("p",{className:"link white-70 hover-white no-underline flex items-center pa1 cms"},"Pizza vil\xe1g CMS"),l.a.createElement("div",{className:"flex-grow pa1 flex items-center"},l.a.createElement("p",{className:"f6 link dib white dim mr3 mr4-ns pa1 pointer",onClick:function(){return t("orders")}},"Rendel\xe9sek ellen\u0151rz\xe9se"),l.a.createElement("p",{className:"f6 link dib white dim mr3 mr4-ns pa1 pointer",onClick:function(){return t("admin")}},"K\xedn\xe1lat kezel\xe9se"),l.a.createElement("p",{className:"f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 pointer",onClick:function(){return t("signout")}},"Kijelentkez\xe9s"))):l.a.createElement("nav",{className:"flex justify-center pa2",style:{background:"#c4954f"}},l.a.createElement("p",{className:"link white-70 hover-white no-underline flex items-center pa1 pointer",onClick:function(){return t("home")}},"F\u0151oldal"),l.a.createElement("div",{className:"flex flex-grow items-center header pl5"},l.a.createElement("p",{className:"i ma0",style:{color:"#FAD784"}},"Pizza vil\xe1g")),l.a.createElement("div",{className:"flex-grow pa1 flex items-center"},l.a.createElement("p",{className:"f6 link dib white dim mr3 mr4-ns pa1"},"\xdcdv\xf6zl\xfcnk, ",r.firstname),l.a.createElement("p",{className:"f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 pointer",onClick:function(){return t("signout")}},"Kijelentkez\xe9s"))):l.a.createElement("nav",{className:"flex justify-center pa2",style:{background:"#c4954f"}},l.a.createElement("p",{className:"link white-70 hover-white no-underline flex items-center pa1 pointer",onClick:function(){return t("signout")}},"F\u0151oldal"),l.a.createElement("div",{className:"flex flex-grow items-center header pl5"},l.a.createElement("p",{className:"i ma0",style:{color:"#FAD784"}},"Pizza vil\xe1g")),l.a.createElement("div",{className:"flex-grow pa1 flex items-center"},l.a.createElement("p",{className:"f6 link dib white dim mr3 mr4-ns pa1 pointer",onClick:function(){return t("signin")}},"Bejelentkez\xe9s"),l.a.createElement("p",{className:"f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 pointer",onClick:function(){return t("register")}},"Regisztr\xe1ci\xf3")))}),u=(a(34),function(e){var t=e.pizza,a=e.priceMultiplier,n=e.size,r=e.addToCart;return l.a.createElement("article",{className:"cardBox dib br2 ba dark-gray b--black-10 w-100 w-50-m w-25-l mw5 mh-auto mv2 bg-light-yellow"},l.a.createElement("img",{src:t.imageurl,className:"db w-100 br2 br--top",alt:"Pizza",style:{objectFit:"cover",height:"130px"}}),l.a.createElement("div",{className:"pa2 ph3-ns pb3-ns"},l.a.createElement("div",{className:"dt w-100 mt1"},l.a.createElement("div",{className:"dtc"},l.a.createElement("h1",{className:"f5 f4-ns mv0 pizzaName"},t.name))),l.a.createElement("p",{className:"f6 lh-copy measure mt2 mid-gray topping"},t.topping),l.a.createElement("div",{className:"dt w-100 ma0"},l.a.createElement("h2",{className:"f5 mv0"},Math.round(t.price*a)," HUF")),l.a.createElement("p",{className:"f6 lh-copy measure mt2 mid-gray pa0 ma0"},n," cm"),l.a.createElement("p",{className:"f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0",style:{background:"#c4954f"},onClick:function(){return r({id:t.id,name:t.name,price:Math.round(t.price*a),size:n,imageurl:t.imageurl})}},"Kos\xe1rba")))}),h=function(e){var t=e.pizzas,a=e.priceMultiplier,n=e.size,r=e.addToCart;return l.a.createElement("div",{className:"w-90",style:{overflowY:"auto",height:"600px"}},t.map((function(e,t){return l.a.createElement(u,{key:e.id,pizza:e,priceMultiplier:a,size:n,addToCart:r})})))},g=function(e){var t=e.searchChange;return l.a.createElement("div",{className:"pa2"},l.a.createElement("input",{className:"pa3 ba bg-white w-100",style:{borderColor:"#c4954f"},type:"search",placeholder:"Keres\xe9s n\xe9v alapj\xe1n",onChange:t}))},b=function(e){var t=e.sizeChange;return l.a.createElement("div",{className:"flex items-center"},l.a.createElement("p",null,"\xc1tm\xe9r\u0151 (cm):"),l.a.createElement("p",{className:"f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0 mh2",style:{background:"#c4954f"},onClick:function(){return t(32)}},"32"),l.a.createElement("p",{className:"f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0 mh2",style:{background:"#c4954f"},onClick:function(){return t(45)}},"45"),l.a.createElement("p",{className:"f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0 mh2",style:{background:"#c4954f"},onClick:function(){return t(55)}},"55"))},f=function(e){return l.a.createElement("div",{className:"flex justify-between",style:{overflowY:"scroll",height:"600px"}},e.children)},E=(a(35),function(e){var t=e.onRouteChange,a=e.onSumPriceChange,n=e.shoppingCart,r=e.deleteFromCart,i=0,s=0;return n.length?l.a.createElement("main",{className:"center",style:{overflowY:"auto",height:"600px",maxWidth:"200px",margin:"auto"}},l.a.createElement("i",{className:"gg-shopping-cart dib"})," Kos\xe1r tartalma:",n.map((function(e,t){return i+=e.price,e.id=s,l.a.createElement("article",{className:"shoppingCartList bg-light-yellow",key:s++,style:{boxSizing:"content-box"},onClick:function(){i-=e.price,r(e)}},l.a.createElement("div",{className:"bb b--black-10 pb2 mt2 pointer mh0"},l.a.createElement("div",{className:"ma0"},l.a.createElement("div",{className:"db mh-auto center",style:{width:"100%",height:"100px",backgroundImage:"url(".concat(e.imageurl,")"),backgroundSize:"cover"}}),l.a.createElement("div",{className:"db v-top pl2 tc center mh-auto"},l.a.createElement("h1",{className:"f6 f5-ns fw6 lh-title black mv0"},e.name),l.a.createElement("p",{className:"f6 fw4 mt2 mb0 black-60"},e.size+" cm"),l.a.createElement("dl",{className:"mt2 f6"},l.a.createElement("dt",{className:"clip"},"\xc1r"),l.a.createElement("dd",{className:"ml0 b"},e.price+" Ft")))),l.a.createElement("div",{className:"flex justify-center"},l.a.createElement("i",{className:"gg-trash"}))))})),l.a.createElement("div",{className:"b red"},"V\xe9g\xf6sszeg: ",i," Ft"),l.a.createElement("p",{className:"f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0",style:{background:"#c4954f"},onClick:function(){a(i),t("order")}},"Rendel\xe9s")):l.a.createElement("div",{className:"center"},l.a.createElement("i",{className:"gg-shopping-cart dib"}),"Az \xf6n kosara \xfcres.")}),v=a(17),w=a(19),z=a(2),C=a(6),N=a(11),k=a(12),y=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmitButton=function(e){if(!e)return l.a.createElement("p",{className:"f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0",style:{background:"#c4954f"},onClick:n.onSubmit},"Regisztr\xe1ci\xf3");n.props.loadUser(n.state)},n.handlePassword=function(e){if(!e)return l.a.createElement(z.a.Row,null,l.a.createElement(C.a,null,l.a.createElement(z.a.Group,{controlId:"password"},l.a.createElement(z.a.Label,null,"Jelsz\xf3 (minimum 8 karakter)"),l.a.createElement(z.a.Control,{type:"password",placeholder:"Jelsz\xf3",onChange:n.onFormChange}))),l.a.createElement(C.a,null,l.a.createElement(z.a.Group,{controlId:"password2"},l.a.createElement(z.a.Label,null,"Jelsz\xf3 meger\u0151s\xedt\xe9se"),l.a.createElement(z.a.Control,{type:"password",placeholder:"Jelsz\xf3",onChange:n.onFormChange}))))},n.onFormChange=function(e){n.setState(Object(w.a)({},e.target.id,e.target.value))},n.onSubmit=function(){var e=n.state,t=e.email,a=e.password,l=e.password2,r=e.firstname,i=e.lastname,s=e.phone,c=e.zip,o=e.city,m=e.address,p=e.comment,d=!1;[",","@","(",")","'",'"',"`",";","#","_","<",">","+","[","]","{","}"].forEach((function(e){t.includes(e,t.search("@")+1)&&(d=!0)})),t.includes("@")&&t.includes(".",t.search("@"))&&!d?a.length<8?n.setState({passwordLengthFail:!0}):a!==l?n.setState({passwordFail:!0}):i&&r&&c&&o&&m&&s&&t&&a&&l?fetch("https://shielded-coast-80926.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:a,firstname:r,lastname:i,phone:s,zip:c,city:o,address:m,comment:p,joined:new Date})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("signedin"))})):n.setState({showFail:!0}):n.setState({emailFail:!0})},n.state={email:"",password:"",password2:"",firstname:"",lastname:"",phone:"",zip:"",city:"",address:"",comment:"",showFail:!1,passwordFail:!1,passwordLengthFail:!1,emailFail:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(z.a,{className:"w-80 center bg-light-yellow pa2 br3 mt2"},l.a.createElement(N.a,{show:this.state.emailFail,variant:"danger"},l.a.createElement("p",null,"Hib\xe1s e-mail c\xedm form\xe1tum!"),l.a.createElement("hr",null),l.a.createElement("div",{className:"d-flex justify-content-end"},l.a.createElement(k.a,{onClick:function(){return e.setState({emailFail:!1,formatFail:!1})},variant:"outline-danger"},"Bez\xe1r\xe1s"))),l.a.createElement(N.a,{show:this.state.passwordLengthFail,variant:"danger"},l.a.createElement("p",null,"A jelsz\xf3nak legal\xe1bb 8 karakterb\u0151l kell \xe1llnia."),l.a.createElement("hr",null),l.a.createElement("div",{className:"d-flex justify-content-end"},l.a.createElement(k.a,{onClick:function(){return e.setState({passwordLengthFail:!1})},variant:"outline-danger"},"Bez\xe1r\xe1s"))),l.a.createElement(N.a,{show:this.state.passwordFail,variant:"danger"},l.a.createElement("p",null,"A megadott jelszavak nem egyeznek."),l.a.createElement("hr",null),l.a.createElement("div",{className:"d-flex justify-content-end"},l.a.createElement(k.a,{onClick:function(){return e.setState({passwordFail:!1})},variant:"outline-danger"},"Bez\xe1r\xe1s"))),l.a.createElement(N.a,{show:this.state.showFail,variant:"danger"},l.a.createElement("p",null,"K\xe9rlek t\xf6lts ki minden k\xf6telez\u0151 mez\u0151t!"),l.a.createElement("hr",null),l.a.createElement("div",{className:"d-flex justify-content-end"},l.a.createElement(k.a,{onClick:function(){return e.setState({showFail:!1})},variant:"outline-danger"},"Bez\xe1r\xe1s"))),l.a.createElement(z.a.Group,{controlId:"email"},l.a.createElement(z.a.Label,null,"E-mail c\xedm"),l.a.createElement(z.a.Control,{type:"email",placeholder:"pelda@pizzavilag.hu",onChange:this.onFormChange})),this.handlePassword(this.props.isOrder),l.a.createElement(z.a.Row,null,l.a.createElement(C.a,null,l.a.createElement(z.a.Group,{controlId:"lastname"},l.a.createElement(z.a.Label,null,"Vezet\xe9kn\xe9v"),l.a.createElement(z.a.Control,{type:"text",placeholder:"Vezet\xe9kn\xe9v",onChange:this.onFormChange}))),l.a.createElement(C.a,null,l.a.createElement(z.a.Group,{controlId:"firstname"},l.a.createElement(z.a.Label,null,"Keresztn\xe9v"),l.a.createElement(z.a.Control,{type:"text",placeholder:"Keresztn\xe9v",onChange:this.onFormChange})))),l.a.createElement(z.a.Group,{controlId:"phone"},l.a.createElement(z.a.Label,null,"Telefonsz\xe1m"),l.a.createElement(z.a.Control,{type:"text",placeholder:"Telefonsz\xe1m",onChange:this.onFormChange})),l.a.createElement(z.a.Row,null,l.a.createElement(C.a,{className:"col-3"},l.a.createElement(z.a.Group,{controlId:"zip"},l.a.createElement(z.a.Label,null,"Ir\xe1ny\xedt\xf3sz\xe1m"),l.a.createElement(z.a.Control,{type:"number",placeholder:"Ir\xe1ny\xedt\xf3sz\xe1m",onChange:this.onFormChange}))),l.a.createElement(C.a,{className:"col-9"},l.a.createElement(z.a.Group,{controlId:"city"},l.a.createElement(z.a.Label,null,"Telep\xfcl\xe9s"),l.a.createElement(z.a.Control,{type:"text",placeholder:"Telep\xfcl\xe9s",onChange:this.onFormChange})))),l.a.createElement(z.a.Group,{controlId:"address"},l.a.createElement(z.a.Label,null,"C\xedm"),l.a.createElement(z.a.Control,{type:"text",placeholder:"C\xedm",onChange:this.onFormChange})),l.a.createElement(z.a.Group,{controlId:"comment"},l.a.createElement(z.a.Label,null,"Megjegyz\xe9s a c\xedmhez"),l.a.createElement(z.a.Control,{type:"text",placeholder:"Pl.: Kapucseng\u0151 sz\xe1ma - nem k\xf6telez\u0151 kit\xf6lteni!",onChange:this.onFormChange})),this.handleSubmitButton(this.props.isOrder))}}]),a}(l.a.Component),j=function(e){e.onRouteChange;var t=e.onEmptyCart,a=e.sumPrice,r=e.shoppingCart,i=e.user,s=Object(n.useState)(!1),c=Object(v.a)(s,2),o=c[0],m=c[1],p=Object(n.useState)(!1),d=Object(v.a)(p,2),u=d[0],h=d[1],g=Object(n.useState)(!1),b=Object(v.a)(g,2),f=b[0],E=b[1],w=Object(n.useState)(!1),z=Object(v.a)(w,2),C=z[0],j=z[1],x=function(e){i=e};return l.a.createElement("div",{className:"flex flex-column items-center "},l.a.createElement(N.a,{show:C,variant:"danger"},l.a.createElement("p",null,"Hib\xe1s e-mail c\xedm form\xe1tum!"),l.a.createElement("hr",null),l.a.createElement("div",{className:"d-flex justify-content-end"},l.a.createElement(k.a,{onClick:function(){j(!1),E(!1)},variant:"outline-danger"},"Bez\xe1r\xe1s"))),l.a.createElement(N.a,{show:u,variant:"success"},l.a.createElement(N.a.Heading,null,"Rendel\xe9sed fogadtuk."),l.a.createElement("p",null,"K\xf6sz\xf6nj\xfck, hogy minket v\xe1lasztott\xe1l."),l.a.createElement("hr",null),l.a.createElement("p",{className:"mb-0"},"Probl\xe9ma eset\xe9n vedd fel a kapcsolatot az \xfcgyf\xe9lszolg\xe1latunkkal: ugysemvalaszolunk@pizzavilag.test")),l.a.createElement(N.a,{show:o,variant:"danger"},l.a.createElement("p",null,"K\xe9rlek t\xf6lts ki minden k\xf6telez\u0151 mez\u0151t a rendel\xe9s lead\xe1s\xe1hoz."),l.a.createElement("hr",null),l.a.createElement("div",{className:"d-flex justify-content-end"},l.a.createElement(k.a,{onClick:function(){return m(!1)},variant:"outline-danger"},"Bez\xe1r\xe1s"))),l.a.createElement("div",{className:"w-80 mr2"},l.a.createElement("div",{className:"flex justify-center"},function(e){return e.id?l.a.createElement("div",{className:"w-50 mh1"},l.a.createElement("article",{className:"pa1 pa2-ns",style:{float:"right"}},l.a.createElement("h1",{className:"f4 bold center mw6"},"Rendel\xe9s adatai"),l.a.createElement("ul",{className:"list pl0 ml0 center mw6 ba b--light-silver br2 bg-light-yellow"},l.a.createElement("li",{className:"ph3 pv3 bb b--light-silver"},"N\xe9v: ",e.lastname," ",e.firstname," "),l.a.createElement("li",{className:"ph3 pv3 bb b--light-silver"},"C\xedm: ",e.address),l.a.createElement("li",{className:"ph3 pv3 bb b--light-silver"},"Telefonsz\xe1m: ",e.phone),l.a.createElement("li",{className:"ph3 pv3 bb b--light-silver"},"E-mail: ",e.email),l.a.createElement("li",{className:"ph3 pv3"},"Megjegyz\xe9s: ",e.comment)))):l.a.createElement(y,{loadUser:x,isOrder:!0})}(i),l.a.createElement("div",{className:"w-50 mh1",style:{overflowY:"scroll",height:"600px"}},l.a.createElement("article",{className:"pa1 pa2-ns",style:{float:"left"}},l.a.createElement("ul",{className:"list pl0 ml0 center mw6 ba b--light-silver br2 bg-light-yellow"},r.map((function(e,t){return l.a.createElement("li",{className:"ph3 pv3 bb b--light-silver tc",key:t},l.a.createElement("p",null,e.name," ",e.size," cm"),l.a.createElement("p",null,e.price," Ft"))}))))))),l.a.createElement("div",{className:"w-25 mr2 flex"},l.a.createElement("p",{className:"b red "},"V\xe9g\xf6sszeg: ",a," Ft"),l.a.createElement("p",{className:"f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0 ml3",style:{background:"#c4954f"},onClick:function(){!function(){var e="".concat(i.lastname," ").concat(i.firstname,"\n").concat(i.zip," ").concat(i.city," ").concat(i.address,"\nTel.: ").concat(i.phone,"\nE-mail: ").concat(i.email,"\nMegj.: ").concat(i.comment);if([",","@","(",")","'",'"',"`",";","#","_","<",">","+","[","]","{","}"].forEach((function(e){i.email.includes(e,i.email.search("@")+1)&&E(!0)})),i.email.includes("@")&&i.email.includes(".",i.email.search("@"))&&!f)if(i.lastname&&i.firstname&&i.zip&&i.city&&i.address&&i.phone&&i.email){var n="";r.forEach((function(e,t){n+="".concat(e.name," ").concat(e.size," cm      ").concat(e.price," Ft\n")})),fetch("https://shielded-coast-80926.herokuapp.com/order",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:e,pizzas:n,price:a})}).then((function(e){return e.json()})).then(h(!0)).then(t())}else m(!0);else j(!0)}()}},"Rendel\xe9s meger\u0151s\xedt\xe9se")))},x=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmit=function(){fetch("https://shielded-coast-80926.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id?(n.props.loadUser(e),"admin"===e.role?n.props.onRouteChange("admin"):n.props.onRouteChange("signedin")):n.setState({showFail:!0})}))},n.state={signInEmail:"",signInPassword:"",showFail:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(z.a,{className:"w-80 center bg-light-yellow pa2 br3 mt2"},l.a.createElement(N.a,{show:this.state.showFail,variant:"danger"},l.a.createElement("p",null,"Hib\xe1s e-mail c\xedm vagy jelsz\xf3!"),l.a.createElement("hr",null),l.a.createElement("div",{className:"d-flex justify-content-end"},l.a.createElement(k.a,{onClick:function(){return e.setState({showFail:!1})},variant:"outline-danger"},"Bez\xe1r\xe1s"))),l.a.createElement(z.a.Group,{controlId:"formBasicEmail"},l.a.createElement(z.a.Label,null,"E-mail c\xedm"),l.a.createElement(z.a.Control,{type:"email",placeholder:"pelda@pizzavilag.hu",onChange:this.onEmailChange})),l.a.createElement(z.a.Group,{controlId:"formBasicPassword"},l.a.createElement(z.a.Label,null,"Jelsz\xf3"),l.a.createElement(z.a.Control,{type:"password",placeholder:"Jelsz\xf3",onChange:this.onPasswordChange})),l.a.createElement("p",{className:"f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0",style:{background:"#c4954f"},onClick:this.onSubmit},"Bejelentkez\xe9s"))}}]),a}(l.a.Component),S={orders:[]},F=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).loadOrders=function(){fetch("https://shielded-coast-80926.herokuapp.com/orders",{method:"get"}).then((function(e){return e.json()})).then((function(t){e.setState({orders:t})}))},e.changeStatus=function(t,a){fetch("https://shielded-coast-80926.herokuapp.com/orders",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,statusCode:a})}).then((function(e){return e.json()})),setTimeout((function(){e.loadOrders()}),1e3)},e.deleteOrder=function(t){fetch("https://shielded-coast-80926.herokuapp.com/orders",{method:"delete",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t})}).then((function(e){return e.json()})),setTimeout((function(){e.loadOrders()}),100)},e.state=S,e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state.orders;return t.length||this.loadOrders(),l.a.createElement("div",{className:"w-80 flex items-center center"},l.a.createElement("article",{className:"pa2 w-100"},l.a.createElement("h1",{className:"f4 bold left tl mw6"},"Rendel\xe9sek"),l.a.createElement("ul",{className:"list pl0 ml0 center ba b--black br "},t.map((function(t,a){var n=t.user.split("\n"),r=t.pizzas.split("\n");return l.a.createElement("li",{className:"ph3 pv3 bb b--black tc items-center",style:{boxSizing:"content-box",backgroundColor:"".concat(t.status)},key:t.id},l.a.createElement("div",{className:"ma-auto"},l.a.createElement("div",{className:"ma-auto flex tc items-center center bb b--light-yellow"},l.a.createElement("p",{className:"w-100 center mt-auto mb-auto"},n[0])),l.a.createElement("div",{className:"ma-auto flex tc items-center center bb b--light-yellow"},l.a.createElement("p",{className:"w-100 center mt-auto mb-auto"},n[1]))),l.a.createElement("div",{className:"ma-auto"},l.a.createElement("div",{className:"ma-auto flex tc items-center center bb b--light-yellow"},l.a.createElement("p",{className:"w-100 center mt-auto mb-auto"},n[2])),l.a.createElement("div",{className:"ma-auto flex tc items-center center bb b--light-yellow"},l.a.createElement("p",{className:"w-100 center mt-auto mb-auto"},n[3])),l.a.createElement("div",{className:"ma-auto flex tc items-center center bb b--light-yellow"},l.a.createElement("p",{className:"w-100 center mt-auto mb-auto"},n[4]))),l.a.createElement("div",{className:"ma-auto h-auto bb b--light-yellow"},r.map((function(e,t){return l.a.createElement("p",{className:"w-100 center mt-auto mb-auto pt2",key:t},e)}))),l.a.createElement("div",{className:"ma-auto flex tc items-center center"},l.a.createElement("p",{className:"w-100 center mt-auto mb-auto fw6"},"V\xe9g\xf6sszeg: ",t.price," Ft")),l.a.createElement("div",{className:"self-end pa1 h-auto"},l.a.createElement("p",{className:"f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-gold",onClick:function(){return e.changeStatus(t.id,"#FFFF66")}},"Rendel\xe9s visszaigazol\xe1sa"),l.a.createElement("p",{className:"f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-dark-green",onClick:function(){return e.changeStatus(t.id,"#9ACD32")}},"Rendel\xe9s ek\xfcldve"),l.a.createElement("p",{className:"f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-dark-red",onClick:function(){return e.deleteOrder(t.id)}},"Rendel\xe9s t\xf6rl\xe9se")))})))))}}]),a}(n.Component),O=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.pizza,a=e.onFormChange;e.onFileInputChangeHandler;return l.a.createElement(z.a,{style:{}},l.a.createElement(z.a.Row,null,l.a.createElement(C.a,{className:"col-3"},l.a.createElement(z.a.Group,{controlId:"name"},l.a.createElement(z.a.Label,null,"N\xe9v"),l.a.createElement(z.a.Control,{type:"text",placeholder:"N\xe9v",defaultValue:t.name,onChange:a}))),l.a.createElement(C.a,{className:"col-3"},l.a.createElement(z.a.Group,{controlId:"topping"},l.a.createElement(z.a.Label,null,"Felt\xe9tek"),l.a.createElement(z.a.Control,{type:"text",placeholder:"Felt\xe9tek",defaultValue:t.topping,onChange:a}))),l.a.createElement(C.a,{className:"col-3"},l.a.createElement(z.a.Group,{controlId:"price"},l.a.createElement(z.a.Label,null,"\xc1r"),l.a.createElement(z.a.Control,{type:"number",placeholder:"\xc1r",defaultValue:t.price,onChange:a}))),l.a.createElement(C.a,{className:"col-3"},l.a.createElement(z.a.Group,{controlId:"imageurl"},l.a.createElement(z.a.Label,null,"K\xe9p URL"),l.a.createElement(z.a.Control,{type:"text",placeholder:"K\xe9p URL",defaultValue:t.imageurl,onChange:a})))))}}]),a}(l.a.Component),P={pizzas:[],pizzaEdit:{id:"",name:"",topping:"",price:"",imageurl:""},showEdit:!1,editId:"",showUpload:!1,selectedFile:null},I=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).loadPizzas=function(){fetch("https://shielded-coast-80926.herokuapp.com/manage",{method:"get"}).then((function(e){return e.json()})).then((function(t){e.setState({pizzas:t})}))},e.deletePizza=function(t){fetch("https://shielded-coast-80926.herokuapp.com/manage",{method:"delete",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t})}).then((function(e){return e.json()})),setTimeout((function(){e.loadPizzas()}),100)},e.onFormChange=function(t){e.setState(Object.assign(e.state.pizzaEdit,Object(w.a)({},t.target.id,t.target.value)))},e.onFileInputChangeHandler=function(t){e.setState({selectedFile:t.target.files[0],loaded:0})},e.onFileUploadHandler=function(){var t=new FormData;t.append("file",e.state.selectedFile),e.state.selectedFile&&fetch("https://shielded-coast-80926.herokuapp.com/uploadimage",{method:"POST",body:t}).then((function(t){t.json().then((function(t){console.log(t),e.setState(Object.assign(e.state.pizzaEdit,{imageurl:"https://shielded-coast-80926.herokuapp.com/public/images/".concat(t.filename)}))}))}))},e.state=P,e}return Object(o.a)(a,[{key:"changePizza",value:function(e){this.setState({pizzaEdit:e,showEdit:!0,editId:e.id})}},{key:"newPizza",value:function(){this.setState({showUpload:!0,pizzaEdit:[]})}},{key:"updatePizza",value:function(){var e=this;fetch("https://shielded-coast-80926.herokuapp.com/manage",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:this.state.pizzaEdit.id,name:this.state.pizzaEdit.name,topping:this.state.pizzaEdit.topping,price:this.state.pizzaEdit.price,imageurl:this.state.pizzaEdit.imageurl})}).then((function(e){return e.json()})),setTimeout((function(){e.loadPizzas()}),1e3),this.setState({showEdit:!1})}},{key:"uploadPizza",value:function(){var e=this;fetch("https://shielded-coast-80926.herokuapp.com/manage",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.state.pizzaEdit.name,topping:this.state.pizzaEdit.topping,price:this.state.pizzaEdit.price,imageurl:this.state.pizzaEdit.imageurl})}).then((function(e){return e.json()})).then(setTimeout((function(){e.setState(P)}),100)).then(this.loadPizzas)}},{key:"addBar",value:function(){var e=this;return!0===this.state.showUpload?l.a.createElement("div",{className:"ma-auto flex tc items-center"},l.a.createElement(O,{onFileInputChangeHandler:this.onFileInputChangeHandler,pizza:[],onFormChange:this.onFormChange}),l.a.createElement("div",{className:"self-end pa1 h-auto",style:{height:"100px",width:"16%",marginLeft:"0",marginRight:"0"}},l.a.createElement("p",{className:"f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-dark-green mh1",onClick:function(){e.uploadPizza()}},"Pizza Felt\xf6lt\xe9se"),l.a.createElement("p",{className:"f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-dark-red mh1",onClick:function(){return e.setState({showUpload:!1})}},"M\xe9gsem"))):l.a.createElement("p",{className:"f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0 mt-auto mb-auto center",style:{backgroundColor:"#c4954f"},onClick:function(){return e.newPizza()}},"Hozz\xe1ad\xe1s")}},{key:"render",value:function(){var e=this,t=this.state.pizzas;return t.length||this.loadPizzas(),l.a.createElement("div",{className:"w-80 flex items-center center"},l.a.createElement("article",{className:"pa2 w-100"},l.a.createElement("div",{className:"flex justify-between items-center pa2"},l.a.createElement("h1",{className:"f4 bold left tl mw6 mt-auto mb-auto"},"Pizz\xe1k")),l.a.createElement("ul",{className:"list pl0 ml0 center ba b--light-silver br "},l.a.createElement("li",{className:"ph3 pv3 bb b--light-silver flex tc items-center bg-light-yellow",style:{boxSizing:"content-box"},key:"0"},this.addBar()),t.map((function(t,a){return e.state.editId===t.id&&e.state.showEdit?l.a.createElement("li",{className:"ph3 pv3 bb b--light-silver flex tc items-center bg-light-yellow",style:{boxSizing:"content-box"},key:t.id},l.a.createElement(O,{onFileInputChangeHandler:e.onFileInputChangeHandler,pizza:t,onFormChange:e.onFormChange}),l.a.createElement("div",{className:"w-10 pa1 h-auto flex tc items-center center",style:{height:"100px",width:"16%",marginLeft:"0",marginRight:"0"}},l.a.createElement("p",{className:"f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-dark-green mt-auto mb-auto",onClick:function(){e.updatePizza()}},"M\xf3dos\xedt\xe1s ment\xe9se"))):l.a.createElement("li",{className:"ph3 pv3 bb b--light-silver flex tc items-center",style:{boxSizing:"content-box",backgroundColor:"#c4954f"},key:t.id},l.a.createElement("div",{className:" ma-auto flex tc items-center center",style:{height:"100px",width:"16%"}},l.a.createElement("p",{className:"w-100 center mt-auto mb-auto"},t.name)),l.a.createElement("div",{className:" ma-auto flex tc items-center center",style:{height:"100px",width:"16%"}},l.a.createElement("p",{className:"w-100 center mt-auto mb-auto"},t.topping)),l.a.createElement("div",{className:" ma-auto flex tc items-center center",style:{height:"100px",width:"16%"}},l.a.createElement("p",{className:"w-100 center mt-auto mb-auto"},t.price," Ft")),l.a.createElement("div",{className:" ma-auto flex tc items-center center",style:{height:"100px",width:"16%"}},l.a.createElement("p",{className:"w-100 center mt-auto mb-auto"},l.a.createElement("img",{src:t.imageurl,alt:t.imageurl,className:"db br2 br--top",style:{objectFit:"cover",width:"200px",height:"100px"}}))),l.a.createElement("div",{className:"self-end pa1 h-auto",style:{height:"100px",width:"16%"}},l.a.createElement("p",{className:"f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-gold",onClick:function(){return e.changePizza(t)}},"M\xf3dos\xedt\xe1s"),l.a.createElement("p",{className:"f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-dark-red",onClick:function(){return e.deletePizza(t.id)}},"T\xf6rl\xe9s")))})))))}}]),a}(n.Component),R=(a(39),{route:"home",isSignedIn:!1,isAdmin:!1,user:{id:"",email:"",firstname:"",lastname:"",phone:"",zip:"",city:"",address:"",comment:"",role:"",joined:""},pizzas:[],searchField:"",prizeMultiplier:1,size:32,sumPrice:0,shoppingCart:[],orders:[]}),L=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,email:t.email,firstname:t.firstname,lastname:t.lastname,phone:t.phone,zip:t.zip,city:t.city,address:t.address,comment:t.comment,role:t.role,joined:t.joined}})},e.loadPizzas=function(){e.state.pizzas.length||fetch("https://shielded-coast-80926.herokuapp.com/",{method:"get"}).then((function(e){return e.json()})).then((function(t){e.setState({pizzas:t})}))},e.onRouteChange=function(t){"signedin"===t?(e.setState({isSignedIn:!0}),t="home"):"signout"===t?(e.setState({isSignedIn:!1,isAdmin:!1,user:[]}),t="home"):"admin"===t&&e.setState({isSignedIn:!0,isAdmin:!0}),e.setState({route:t})},e.onSearchChange=function(t){e.setState({searchField:t.target.value})},e.onSizeChange=function(t){switch(e.setState({size:t}),t){case 32:e.setState({prizeMultiplier:1});break;case 45:e.setState({prizeMultiplier:1.9});break;case 55:e.setState({prizeMultiplier:2.75});break;default:console.log("ERROR setting size")}},e.onAddToCart=function(t){e.setState((function(e){return{shoppingCart:[].concat(Object(s.a)(e.shoppingCart),[t])}}))},e.onDeleteFromCart=function(t){var a=e.state.shoppingCart;a.forEach((function(e,n){e.id===t.id&&a.splice(n,1)})),e.setState({shoppingCart:a})},e.onEmptyCart=function(){e.setState({shoppingCart:[]})},e.onSumPriceChange=function(t){e.setState({sumPrice:t})},e.state=R,e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.pizzas,a=e.searchField;t.length||this.loadPizzas();var n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return l.a.createElement("div",{className:"tc appBody"},l.a.createElement(d,{onRouteChange:this.onRouteChange,isSignedIn:this.state.isSignedIn,isAdmin:this.state.isAdmin,user:this.state.user}),"home"===this.state.route?l.a.createElement("div",null,l.a.createElement("div",{className:"flex justify-center"},l.a.createElement(g,{searchChange:this.onSearchChange}),l.a.createElement(b,{sizeChange:this.onSizeChange})),l.a.createElement(f,null,l.a.createElement(h,{pizzas:n,priceMultiplier:this.state.prizeMultiplier,size:this.state.size,addToCart:this.onAddToCart}),l.a.createElement(E,{onRouteChange:this.onRouteChange,onSumPriceChange:this.onSumPriceChange,shoppingCart:this.state.shoppingCart,deleteFromCart:this.onDeleteFromCart}))):"admin"===this.state.route?l.a.createElement(I,null):"orders"===this.state.route?l.a.createElement(F,null):"order"===this.state.route?l.a.createElement(j,{onRouteChange:this.onRouteChange,onEmptyCart:this.onEmptyCart,sumPrice:this.state.sumPrice,shoppingCart:this.state.shoppingCart,user:this.state.user}):"signin"===this.state.route?l.a.createElement(x,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):l.a.createElement(y,{isOrder:!1,loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(40),a(41);i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.fdfdb595.chunk.js.map