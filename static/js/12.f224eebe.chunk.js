(this.webpackJsonppizzavilag=this.webpackJsonppizzavilag||[]).push([[12],{106:function(e,n,a){"use strict";a.r(n);var t=a(3),r=a.n(t),i=a(7),o=a(16),l=a(25),s=a(31),c=a(32),u=a(0),p=a.n(u),m=a(87),g=a(85),h=a(84),d=a(49),b=a(13),f=a(33),E=a(80),w=a(29),v=a(9),F=function(e){Object(s.a)(a,e);var n=Object(c.a)(a);function a(e){var t;return Object(o.a)(this,a),(t=n.call(this,e)).onSigninFormChange=function(e){t.props.onSigninFormChange(e.target.value,e.target.id)},t.onSubmit=Object(i.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.signIn(t.props.signInEmail,t.props.signInPassword);case 2:return e.next=4,e.sent.json();case 4:(n=e.sent).id?(t.props.loadUser(n),t.props.signIn(),t.props.history.push(v.a.root),"admin"===n.role&&(t.props.admin(),t.props.history.push(v.a.admin))):t.handleAlert("showFail",!0);case 6:case"end":return e.stop()}}),e)}))),t.state={showFail:!1},t}return Object(l.a)(a,[{key:"handleAlert",value:function(e,n){"showFail"===e&&this.setState({showFail:n})}},{key:"render",value:function(){var e=this;return p.a.createElement(m.a,{className:"w-80 center bg-light-yellow pa2 br3 mt2",onKeyPress:function(n){"Enter"===n.key&&(e.onSubmit(),n.preventDefault())}},p.a.createElement(g.a,{show:this.state.showFail,variant:"danger"},p.a.createElement("p",null,p.a.createElement(E.a,{id:"alert.emailFormatFail"})),p.a.createElement("hr",null),p.a.createElement("div",{className:"d-flex justify-content-end"},p.a.createElement(h.a,{onClick:function(){return e.handleAlert("showFail",!1)},variant:"outline-danger"},p.a.createElement(E.a,{id:"alert.close"})))),p.a.createElement(m.a.Group,{controlId:"signInEmail"},p.a.createElement(m.a.Label,null,p.a.createElement(E.a,{id:"signin.email"})),p.a.createElement(m.a.Control,{type:"email",placeholder:"pelda@pizzavilag.hu",onChange:this.onSigninFormChange})),p.a.createElement(m.a.Group,{controlId:"signInPassword"},p.a.createElement(m.a.Label,null,p.a.createElement(E.a,{id:"signin.password"})),p.a.createElement(m.a.Control,{type:"password",placeholder:"Jelsz\xf3",onChange:this.onSigninFormChange})),p.a.createElement("p",{className:"f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0",style:{background:"#c4954f"},onClick:this.onSubmit},p.a.createElement(E.a,{id:"signin.signIn"})))}}]),a}(u.Component);n.default=Object(f.b)((function(e){return{signInEmail:e.onSigninFormChange.signInEmail,signInPassword:e.onSigninFormChange.signInPassword}}),(function(e){return{onSigninFormChange:function(n,a){return function(e,n,a){e({type:d.a,payload:n,id:a})}(e,n,a)},signIn:function(){return Object(b.k)(e)},admin:function(){return Object(b.b)(e)}}}))(F)}}]);
//# sourceMappingURL=12.f224eebe.chunk.js.map