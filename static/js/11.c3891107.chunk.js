(this.webpackJsonppizzavilag=this.webpackJsonppizzavilag||[]).push([[11],{94:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t.n(n),l=t(7),o=t(16),s=t(27),i=t(33),c=t(34),m=t(0),d=t.n(m),h=t(89),p=t(88),g=t(87),u=t(86),E=t(48),F=t(14),w=t(35),C=t(82),f=t(31),b=t(10),y=function(e){Object(i.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleSubmitButton=function(e){if(!e)return d.a.createElement("p",{className:"f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0",style:{background:"#c4954f"},onClick:n.onSubmit},d.a.createElement(C.a,{id:"register.register"}))},n.handlePassword=function(e){if(!e)return d.a.createElement(h.a.Row,null,d.a.createElement(p.a,null,d.a.createElement(h.a.Group,{controlId:"password"},d.a.createElement(h.a.Label,null,d.a.createElement(C.a,{id:"register.password"})),d.a.createElement(h.a.Control,{type:"password",placeholder:"Jelsz\xf3",onChange:n.onRegisterFormChange}))),d.a.createElement(p.a,null,d.a.createElement(h.a.Group,{controlId:"password2"},d.a.createElement(h.a.Label,null,d.a.createElement(C.a,{id:"register.passwordAgain"})),d.a.createElement(h.a.Control,{type:"password",placeholder:"Jelsz\xf3",onChange:n.onRegisterFormChange}))))},n.onRegisterFormChange=function(e){n.props.onRegisterFormChange(e.target.value,e.target.id)},n.onSubmit=Object(l.a)(r.a.mark((function e(){var a,t,l,o,s,i,c,m,d,h,p,g;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.props,t=a.email,l=a.password,o=a.password2,s=a.firstname,i=a.lastname,c=a.phone,m=a.zip,d=a.city,h=a.address,p=a.comment,/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)){e.next=6;break}n.handleAlert("emailFail",!0),e.next=24;break;case 6:if(!(l.length<8)||n.props.isOrder){e.next=10;break}n.handleAlert("passwordLengthFail",!0),e.next=24;break;case 10:if(l===o||n.props.isOrder){e.next=14;break}n.handleAlert("passwordFail",!0),e.next=24;break;case 14:if(i&&s&&m&&d&&h&&c&&t&&l&&o||n.props.isOrder){e.next=18;break}n.handleAlert("showFail",!0),e.next=24;break;case 18:return e.next=20,f.a.register(t,l,s,i,c,m,d,h,p);case 20:return e.next=22,e.sent.json();case 22:(g=e.sent).id&&(n.props.loadUser(g),n.props.signIn(),n.props.history.push(b.a.root));case 24:case"end":return e.stop()}}),e)}))),n.state={showFail:!1,passwordFail:!1,passwordLengthFail:!1,emailFail:!1},n}return Object(s.a)(t,[{key:"handleAlert",value:function(e,a){"showFail"===e?this.setState({showFail:a}):"passwordFail"===e?this.setState({passwordFail:a}):"passwordLengthFail"===e?this.setState({passwordLengthFail:a}):"emailFail"===e&&this.setState({emailFail:a})}},{key:"render",value:function(){var e=this;return d.a.createElement(h.a,{className:"w-80 center bg-light-yellow pa2 br3 mt2",onKeyPress:function(a){"Enter"!==a.key||e.props.isOrder||(e.onSubmit(),a.preventDefault())}},d.a.createElement(g.a,{show:this.state.emailFail,variant:"danger"},d.a.createElement("p",null,d.a.createElement(C.a,{id:"alert.emailFormatFail"})),d.a.createElement("hr",null),d.a.createElement("div",{className:"d-flex justify-content-end"},d.a.createElement(u.a,{onClick:function(){e.handleAlert("emailFail",!1),e.handleAlert("formatFail",!1)},variant:"outline-danger"},d.a.createElement(C.a,{id:"alert.close"})))),d.a.createElement(g.a,{show:this.state.passwordLengthFail,variant:"danger"},d.a.createElement("p",null,d.a.createElement(C.a,{id:"alert.passwordLengthFail"})),d.a.createElement("hr",null),d.a.createElement("div",{className:"d-flex justify-content-end"},d.a.createElement(u.a,{onClick:function(){return e.handleAlert("passwordLengthFail",!1)},variant:"outline-danger"},d.a.createElement(C.a,{id:"alert.close"})))),d.a.createElement(g.a,{show:this.state.passwordFail,variant:"danger"},d.a.createElement("p",null,d.a.createElement(C.a,{id:"alert.passwordFail"})),d.a.createElement("hr",null),d.a.createElement("div",{className:"d-flex justify-content-end"},d.a.createElement(u.a,{onClick:function(){return e.handleAlert("passwordFail",!1)},variant:"outline-danger"},d.a.createElement(C.a,{id:"alert.close"})))),d.a.createElement(g.a,{show:this.state.showFail,variant:"danger"},d.a.createElement("p",null,d.a.createElement(C.a,{id:"alert.admin"})),d.a.createElement("hr",null),d.a.createElement("div",{className:"d-flex justify-content-end"},d.a.createElement(u.a,{onClick:function(){return e.handleAlert("showFail",!1)},variant:"outline-danger"},d.a.createElement(C.a,{id:"register.close"})))),d.a.createElement(h.a.Group,{controlId:"email"},d.a.createElement(h.a.Label,null,d.a.createElement(C.a,{id:"register.email"})),d.a.createElement(h.a.Control,{type:"email",placeholder:"pelda@pizzavilag.hu",onChange:this.onRegisterFormChange})),this.handlePassword(this.props.isOrder),d.a.createElement(h.a.Row,null,d.a.createElement(p.a,null,d.a.createElement(h.a.Group,{controlId:"lastname"},d.a.createElement(h.a.Label,null,d.a.createElement(C.a,{id:"register.lastName"})),d.a.createElement(h.a.Control,{type:"text",placeholder:"Vezet\xe9kn\xe9v",onChange:this.onRegisterFormChange}))),d.a.createElement(p.a,null,d.a.createElement(h.a.Group,{controlId:"firstname"},d.a.createElement(h.a.Label,null,d.a.createElement(C.a,{id:"register.firstName"})),d.a.createElement(h.a.Control,{type:"text",placeholder:"Keresztn\xe9v",onChange:this.onRegisterFormChange})))),d.a.createElement(h.a.Group,{controlId:"phone"},d.a.createElement(h.a.Label,null,d.a.createElement(C.a,{id:"register.phone"})),d.a.createElement(h.a.Control,{type:"text",placeholder:"Telefonsz\xe1m",onChange:this.onRegisterFormChange})),d.a.createElement(h.a.Row,null,d.a.createElement(p.a,{className:"col-5"},d.a.createElement(h.a.Group,{controlId:"zip"},d.a.createElement(h.a.Label,null,d.a.createElement(C.a,{id:"register.zip"})),d.a.createElement(h.a.Control,{type:"number",placeholder:"Ir\xe1ny\xedt\xf3sz\xe1m",onChange:this.onRegisterFormChange}))),d.a.createElement(p.a,{className:"col-7"},d.a.createElement(h.a.Group,{controlId:"city"},d.a.createElement(h.a.Label,null,d.a.createElement(C.a,{id:"register.city"})),d.a.createElement(h.a.Control,{type:"text",placeholder:"Telep\xfcl\xe9s",onChange:this.onRegisterFormChange})))),d.a.createElement(h.a.Group,{controlId:"address"},d.a.createElement(h.a.Label,null,d.a.createElement(C.a,{id:"register.address"})),d.a.createElement(h.a.Control,{type:"text",placeholder:"C\xedm",onChange:this.onRegisterFormChange})),d.a.createElement(h.a.Group,{controlId:"comment"},d.a.createElement(h.a.Label,null,d.a.createElement(C.a,{id:"register.comment"})),d.a.createElement(h.a.Control,{type:"text",placeholder:"Pl.: Kapucseng\u0151 sz\xe1ma - nem k\xf6telez\u0151 kit\xf6lteni!",onChange:this.onRegisterFormChange})),this.handleSubmitButton(this.props.isOrder))}}]),t}(d.a.Component);a.default=Object(w.b)((function(e){return{email:e.onRegisterFormChange.email,password:e.onRegisterFormChange.password,password2:e.onRegisterFormChange.password2,firstname:e.onRegisterFormChange.firstname,lastname:e.onRegisterFormChange.lastname,phone:e.onRegisterFormChange.phone,zip:e.onRegisterFormChange.zip,city:e.onRegisterFormChange.city,address:e.onRegisterFormChange.address,comment:e.onRegisterFormChange.comment}}),(function(e){return{onRegisterFormChange:function(a,t){return function(e,a,t){e({type:E.a,payload:a,id:t})}(e,a,t)},signIn:function(){return Object(F.k)(e)}}}))(y)}}]);
//# sourceMappingURL=11.c3891107.chunk.js.map