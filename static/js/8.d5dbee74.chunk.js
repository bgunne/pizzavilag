(this.webpackJsonppizzavilag=this.webpackJsonppizzavilag||[]).push([[8,11],{109:function(e,a,t){"use strict";t.r(a);var l=t(2),n=t.n(l),r=t(9),s=t(47),i=t(11),c=t(24),o=t(29),m=t(30),d=t(0),h=t.n(d),p=t(106),u=t(105),E=t(104),g=t(103),f=t(31),b=t(45),w=t(46),v=t(10),F=t(20),y=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var l;return Object(i.a)(this,t),(l=a.call(this,e)).handleSubmitButton=function(e){if(!e)return h.a.createElement("p",{className:"f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0",style:{background:"#c4954f"},onClick:l.onSubmit},h.a.createElement(b.a,{id:"register.register"}))},l.handlePassword=function(e){if(!e)return h.a.createElement(p.a.Row,null,h.a.createElement(u.a,null,h.a.createElement(p.a.Group,{controlId:"password"},h.a.createElement(p.a.Label,null,h.a.createElement(b.a,{id:"register.password"})),h.a.createElement(p.a.Control,{type:"password",placeholder:"Jelsz\xf3",onChange:l.onRegisterFormChange}))),h.a.createElement(u.a,null,h.a.createElement(p.a.Group,{controlId:"password2"},h.a.createElement(p.a.Label,null,h.a.createElement(b.a,{id:"register.passwordAgain"})),h.a.createElement(p.a.Control,{type:"password",placeholder:"Jelsz\xf3",onChange:l.onRegisterFormChange}))))},l.onRegisterFormChange=function(e){l.setState(Object(s.a)({},e.target.id,e.target.value))},l.onSubmit=Object(r.a)(n.a.mark((function e(){var a,t,r,s,i,c,o,m,d,h,p,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=l.state,t=a.email,r=a.password,s=a.password2,i=a.firstname,c=a.lastname,o=a.phone,m=a.zip,d=a.city,h=a.address,p=a.comment,/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)){e.next=6;break}l.handleAlert("emailFail",!0),e.next=24;break;case 6:if(!(r.length<8)||l.props.isOrder){e.next=10;break}l.handleAlert("passwordLengthFail",!0),e.next=24;break;case 10:if(r===s||l.props.isOrder){e.next=14;break}l.handleAlert("passwordFail",!0),e.next=24;break;case 14:if(c&&i&&m&&d&&h&&o&&t&&r&&s||l.props.isOrder){e.next=18;break}l.handleAlert("showFail",!0),e.next=24;break;case 18:return e.next=20,w.a.register(t,r,i,c,o,m,d,h,p);case 20:return e.next=22,e.sent.json();case 22:(u=e.sent).id&&(l.props.loadUser(u),l.props.dispatch(F.c.signIn()),l.props.history.push(v.a.root));case 24:case"end":return e.stop()}}),e)}))),l.state={showFail:!1,passwordFail:!1,passwordLengthFail:!1,emailFail:!1,email:"",password:"",password2:"",firstname:"",lastname:"",phone:"",zip:"",city:"",address:"",comment:""},l}return Object(c.a)(t,[{key:"handleAlert",value:function(e,a){"showFail"===e?this.setState({showFail:a}):"passwordFail"===e?this.setState({passwordFail:a}):"passwordLengthFail"===e?this.setState({passwordLengthFail:a}):"emailFail"===e&&this.setState({emailFail:a})}},{key:"componentDidUpdate",value:function(e,a){this.state!==a&&this.props.loadUser(this.state)}},{key:"render",value:function(){var e=this;return h.a.createElement(p.a,{className:"w-80 center bg-light-yellow pa2 br3 mt2",onKeyPress:function(a){"Enter"!==a.key||e.props.isOrder||(e.onSubmit(),a.preventDefault())}},h.a.createElement(E.a,{show:this.state.emailFail,variant:"danger"},h.a.createElement("p",null,h.a.createElement(b.a,{id:"alert.emailFormatFail"})),h.a.createElement("hr",null),h.a.createElement("div",{className:"d-flex justify-content-end"},h.a.createElement(g.a,{onClick:function(){e.handleAlert("emailFail",!1),e.handleAlert("formatFail",!1)},variant:"outline-danger"},h.a.createElement(b.a,{id:"alert.close"})))),h.a.createElement(E.a,{show:this.state.passwordLengthFail,variant:"danger"},h.a.createElement("p",null,h.a.createElement(b.a,{id:"alert.passwordLengthFail"})),h.a.createElement("hr",null),h.a.createElement("div",{className:"d-flex justify-content-end"},h.a.createElement(g.a,{onClick:function(){return e.handleAlert("passwordLengthFail",!1)},variant:"outline-danger"},h.a.createElement(b.a,{id:"alert.close"})))),h.a.createElement(E.a,{show:this.state.passwordFail,variant:"danger"},h.a.createElement("p",null,h.a.createElement(b.a,{id:"alert.passwordFail"})),h.a.createElement("hr",null),h.a.createElement("div",{className:"d-flex justify-content-end"},h.a.createElement(g.a,{onClick:function(){return e.handleAlert("passwordFail",!1)},variant:"outline-danger"},h.a.createElement(b.a,{id:"alert.close"})))),h.a.createElement(E.a,{show:this.state.showFail,variant:"danger"},h.a.createElement("p",null,h.a.createElement(b.a,{id:"alert.admin"})),h.a.createElement("hr",null),h.a.createElement("div",{className:"d-flex justify-content-end"},h.a.createElement(g.a,{onClick:function(){return e.handleAlert("showFail",!1)},variant:"outline-danger"},h.a.createElement(b.a,{id:"register.close"})))),h.a.createElement(p.a.Group,{controlId:"email"},h.a.createElement(p.a.Label,null,h.a.createElement(b.a,{id:"register.email"})),h.a.createElement(p.a.Control,{type:"email",placeholder:"pelda@pizzavilag.hu",onChange:this.onRegisterFormChange})),this.handlePassword(this.props.isOrder),h.a.createElement(p.a.Row,null,h.a.createElement(u.a,null,h.a.createElement(p.a.Group,{controlId:"lastname"},h.a.createElement(p.a.Label,null,h.a.createElement(b.a,{id:"register.lastName"})),h.a.createElement(p.a.Control,{type:"text",placeholder:"Vezet\xe9kn\xe9v",onChange:this.onRegisterFormChange}))),h.a.createElement(u.a,null,h.a.createElement(p.a.Group,{controlId:"firstname"},h.a.createElement(p.a.Label,null,h.a.createElement(b.a,{id:"register.firstName"})),h.a.createElement(p.a.Control,{type:"text",placeholder:"Keresztn\xe9v",onChange:this.onRegisterFormChange})))),h.a.createElement(p.a.Group,{controlId:"phone"},h.a.createElement(p.a.Label,null,h.a.createElement(b.a,{id:"register.phone"})),h.a.createElement(p.a.Control,{type:"text",placeholder:"Telefonsz\xe1m",onChange:this.onRegisterFormChange})),h.a.createElement(p.a.Row,null,h.a.createElement(u.a,{className:"col-5"},h.a.createElement(p.a.Group,{controlId:"zip"},h.a.createElement(p.a.Label,null,h.a.createElement(b.a,{id:"register.zip"})),h.a.createElement(p.a.Control,{type:"number",placeholder:"Ir\xe1ny\xedt\xf3sz\xe1m",onChange:this.onRegisterFormChange}))),h.a.createElement(u.a,{className:"col-7"},h.a.createElement(p.a.Group,{controlId:"city"},h.a.createElement(p.a.Label,null,h.a.createElement(b.a,{id:"register.city"})),h.a.createElement(p.a.Control,{type:"text",placeholder:"Telep\xfcl\xe9s",onChange:this.onRegisterFormChange})))),h.a.createElement(p.a.Group,{controlId:"address"},h.a.createElement(p.a.Label,null,h.a.createElement(b.a,{id:"register.address"})),h.a.createElement(p.a.Control,{type:"text",placeholder:"C\xedm",onChange:this.onRegisterFormChange})),h.a.createElement(p.a.Group,{controlId:"comment"},h.a.createElement(p.a.Label,null,h.a.createElement(b.a,{id:"register.comment"})),h.a.createElement(p.a.Control,{type:"text",placeholder:"Pl.: Kapucseng\u0151 sz\xe1ma - nem k\xf6telez\u0151 kit\xf6lteni!",onChange:this.onRegisterFormChange})),this.handleSubmitButton(this.props.isOrder))}}]),t}(d.Component);a.default=Object(f.b)(null,(function(e){return{dispatch:e}}))(y)},120:function(e,a,t){"use strict";t.r(a);var l=t(2),n=t.n(l),r=t(9),s=t(11),i=t(24),c=t(29),o=t(30),m=t(0),d=t.n(m),h=t(109),p=t(104),u=t(103),E=t(31),g=t(45),f=t(46),b=t(8),w=t(20),v=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).loadUser=function(e){l.setState({user:e})},l.userSignedIn=function(e){return e.id?d.a.createElement("div",{className:"w-50 mh1"},d.a.createElement("article",{className:"pa1 pa2-ns",style:{float:"right"}},d.a.createElement("h1",{className:"f4 bold center mw6"},d.a.createElement(g.a,{id:"order.details"})),d.a.createElement("ul",{className:"list pl0 ml0 center mw6 ba b--light-silver br2 bg-light-yellow"},d.a.createElement("li",{className:"ph3 pv3 bb b--light-silver"},d.a.createElement(g.a,{id:"order.name"}),": ",e.lastname," ",e.firstname),d.a.createElement("li",{className:"ph3 pv3 bb b--light-silver"},d.a.createElement(g.a,{id:"order.address"}),": ",e.address),d.a.createElement("li",{className:"ph3 pv3 bb b--light-silver"},d.a.createElement(g.a,{id:"order.phone"}),": ",e.phone),d.a.createElement("li",{className:"ph3 pv3 bb b--light-silver"},d.a.createElement(g.a,{id:"order.email"}),": ",e.email),d.a.createElement("li",{className:"ph3 pv3"},d.a.createElement(g.a,{id:"order.comment"}),": ",e.comment)))):d.a.createElement(h.default,{loadUser:l.loadUser,isOrder:!0})},l.onSubmit=Object(r.a)(n.a.mark((function e(){var a,t,r,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=l.props.shoppingCart,t="",t=l.props.user.id?l.props.user:l.state.user,r="".concat(t.lastname," ").concat(t.firstname,"\n").concat(t.zip," ").concat(t.city," ").concat(t.address,"\nTel.: ").concat(t.phone,"\nE-mail: ").concat(t.email,"\nMegj.: ").concat(t.comment),b.a.BlackList.forEach((function(e){t.email.includes(e,t.email.search("@")+1)&&l.handleAlert("formatFail",!0)})),t.email.includes("@")&&t.email.includes(".",t.email.search("@"))&&!l.state.formatFail?t.lastname&&t.firstname&&t.zip&&t.city&&t.address&&t.phone&&t.email?(s="",a.forEach((function(e,a){s+="".concat(e.name," ").concat(e.size," cm      ").concat(e.price," Ft\n")})),f.a.order(r,s,l.props.sumPrice),l.handleAlert("showSuccess",!0),l.props.dispatch(w.a.emptyCart())):l.handleAlert("showFail",!0):l.handleAlert("emailFail",!0);case 6:case"end":return e.stop()}}),e)}))),l.state={showFail:!1,showSuccess:!1,formatFail:!1,emailFail:!1,user:{email:"",firstname:"",lastname:"",phone:"",zip:"",city:"",address:"",comment:""}},l}return Object(i.a)(t,[{key:"handleAlert",value:function(e,a){"showFail"===e?this.setState({showFail:a}):"showSuccess"===e?this.setState({showSuccess:a}):"formatFail"===e?this.setState({formatFail:a}):"emailFail"===e&&this.setState({emailFail:a})}},{key:"render",value:function(){var e=this;return d.a.createElement("div",{className:"flex flex-column items-center "},d.a.createElement(p.a,{show:this.state.emailFail,variant:"danger"},d.a.createElement("p",null,d.a.createElement(g.a,{id:"alert.emailFormatFail"})),d.a.createElement("hr",null),d.a.createElement("div",{className:"d-flex justify-content-end"},d.a.createElement(u.a,{onClick:function(){e.handleAlert("emailFail",!1),e.handleAlert("formatFail",!1)},variant:"outline-danger"},d.a.createElement(g.a,{id:"alert.close"})))),d.a.createElement(p.a,{show:this.state.showSuccess,variant:"success"},d.a.createElement(p.a.Heading,null,d.a.createElement(g.a,{id:"alert.confirm"})),d.a.createElement("p",null,d.a.createElement(g.a,{id:"alert.thankyou"})),d.a.createElement("hr",null),d.a.createElement("p",{className:"mb-0"},d.a.createElement(g.a,{id:"alert.info"}))),d.a.createElement(p.a,{show:this.state.showFail,variant:"danger"},d.a.createElement("p",null,d.a.createElement(g.a,{id:"alert.emailFormatFail"})),d.a.createElement("hr",null),d.a.createElement("div",{className:"d-flex justify-content-end"},d.a.createElement(u.a,{onClick:function(){return e.handleAlert("showFail",!1)},variant:"outline-danger"},d.a.createElement(g.a,{id:"alert.close"})))),d.a.createElement("div",{className:"w-100 mr2 flex justify-center"},d.a.createElement("div",{className:"flex justify-center"},this.userSignedIn(this.props.user),d.a.createElement("div",{className:"w-50 mh1",style:{overflowY:"auto",height:"600px"}},d.a.createElement("article",{className:"pa1 pa2-ns",style:{float:"left"}},d.a.createElement("ul",{className:"list pl0 ml0 center mw6 ba b--light-silver br2 bg-light-yellow"},this.props.shoppingCart.map((function(e,a){return d.a.createElement("li",{className:"ph3 pv3 bb b--light-silver tc",key:a},d.a.createElement("p",null,e.name," ",e.size," cm"),d.a.createElement("p",null,e.price," Ft"))}))))))),d.a.createElement("div",{className:"w-25 mr2 flex"},d.a.createElement("p",{className:"b red "},"V\xe9g\xf6sszeg: ",this.props.sumPrice," Ft"),d.a.createElement("p",{className:"f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0 ml3",style:{background:"#c4954f"},onClick:function(){e.onSubmit()}},d.a.createElement(g.a,{id:"order.checkout"}))))}}]),t}(m.Component);a.default=Object(E.b)((function(e){return{user:e.manageUser.user}}))(v)}}]);
//# sourceMappingURL=8.d5dbee74.chunk.js.map