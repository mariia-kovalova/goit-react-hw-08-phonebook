"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[696],{7503:function(e,n,t){t.d(n,{W:function(){return g}});var r=t(1413),i=t(9439);function a(e){return e.charAt(0).toUpperCase()+e.slice(1)}var s=t(8096),o=t(4925),c=t(635),d=t(3466),l=t(3400),u=t(7071),x=t(890),p=t(2791),m=t(3710),h=t(9569),f=t(5970),j={error:{color:"error.main",fontSize:"12px"}},Z=t(3329),g=function(e){var n=e.inputName,t=e.type,g=e.id,b=e.register,y=e.errors,v=(0,p.useState)(!1),C=(0,i.Z)(v,2),w=C[0],A=C[1];return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(s.Z,{error:function(e){return!!y[e]}(n),children:[(0,Z.jsx)(o.Z,{htmlFor:g,children:a(n)}),"password"!==t?(0,Z.jsx)(c.Z,(0,r.Z)({id:g,type:t,label:a(n),"aria-describedby":g},b(n,{required:"This field is required."}))):(0,Z.jsx)(c.Z,(0,r.Z)((0,r.Z)({id:g,type:w?"text":"password",label:a(n),"aria-describedby":g},b(n,{required:"This field is required."})),{},{endAdornment:(0,Z.jsx)(d.Z,{position:"end",children:(0,Z.jsx)(l.Z,{"aria-label":"toggle password visibility",onClick:function(){A(!w)},onMouseDown:function(e){e.preventDefault()},edge:"end",children:w?(0,Z.jsx)(m.Z,{}):(0,Z.jsx)(h.Z,{})})})})),(0,Z.jsx)(u.Z,{component:f.B,id:g,errors:y,name:n,render:function(e){var n=e.message;return(0,Z.jsx)(x.Z,{sx:j.error,children:n})}})]})})}},6953:function(e,n,t){t.d(n,{$:function(){return c}});var r=t(8870),i=t(1614),a=t(890),s={section:{paddingTop:"20px",paddingBottom:"20px"},title:{textAlign:"center"}},o=t(3329),c=function(e){var n=e.title,t=e.children;return(0,o.jsx)(r.Z,{component:"section",sx:s.section,children:(0,o.jsxs)(i.Z,{children:[n&&(0,o.jsx)(a.Z,{component:"h2",variant:"h2",sx:s.title,children:n}),t]})})}},4322:function(e,n,t){t.d(n,{O:function(){return a}});var r=t(4942),i=t(1413),a=function(e){return e.reduce((function(e,n){return(0,i.Z)((0,i.Z)({},e),{},(0,r.Z)({},n.inputName,""))}),{})}},7696:function(e,n,t){t.r(n),t.d(n,{default:function(){return ae}});var r=t(9439),i=t(2791),a=t(6953),s=t(3634),o=t(9434),c=t(4158),d=t(3431),l=t(8870),u=t(3044),x=t(890),p=t(1917),m=t(3400),h=t(1286),f=t(7247),j=t(717),Z={wrap:{display:"inline-flex",bgcolor:"extra.modalBGC",padding:"20px",borderRadius:"3px",position:"absolute",top:{xs:"35%",sm:"50%"},left:"50%",transform:"translate(-50%, -50%)"}},g=t(3329),b=function(e){var n=e.children,t=e.onCloseModal;return(0,g.jsx)(j.Z,{open:!0,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,g.jsx)(l.Z,{sx:Z.wrap,children:n})})},y=t(1413),v=t(1134),C=t(4695),w=t(6727),A=new RegExp("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"),M=w.Ry().shape({name:w.Z_().required("This field is required").matches(A,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),number:w.Z_().required("This field is required").matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")}),z=t(6151),k=t(7503),S=t(5984),I=[{inputName:"name",type:"text",id:(0,S.x0)()},{inputName:"number",type:"tel",id:(0,S.x0)()}],q={form:{display:"flex",flexDirection:"column",gap:"20px",width:{xs:"330px",sm:"400px"},margin:"0 auto"},btnList:{display:"flex",justifyContent:"center",gap:"20px"}},N=t(5985),_=function(e){var n=e.id,t=e.onCloseModal,r=(0,c.g)().contacts,i=r.find((function(e){return e.id===n})),a=i.name,d=i.number,u=(0,v.cI)({resolver:(0,C.X)(M),defaultValues:{name:a,number:d}}),x=u.register,p=u.formState.errors,m=u.handleSubmit,h=u.reset,f=(0,o.I0)();return(0,g.jsxs)(l.Z,{component:"form",sx:q.form,onSubmit:m((function(e){return e.name===a&&e.number===d?t():r.find((function(n){return n.name===e.name}))?(0,N.Am)("".concat(e.name," is already in your contacts")):(f((0,s.Tk)((0,y.Z)({id:n},e))),(0,N.Am)("".concat(e.name," was updated")),h(),void t())})),children:[I.map((function(e){var n=e.inputName,t=e.type,r=e.id;return(0,g.jsx)(k.W,{inputName:n,type:t,id:r,register:x,errors:p},r)})),(0,g.jsxs)(l.Z,{sx:q.btnList,children:[(0,g.jsx)(z.Z,{type:"submit",variant:"contained",children:"Update Contact"}),(0,g.jsx)(z.Z,{type:"button",variant:"outlined",onClick:function(){return t()},children:"Cancel"})]})]})},T={item:{padding:"10px",bgcolor:"extra.contactItemBGC",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"space-between"},itemContentWrap:{display:"flex",gap:"10px",alignItems:"center"},btnList:{display:"flex",gap:"5px",alignItems:"center"}},F=(0,i.memo)((function(e){var n=e.contact,t=(0,i.useState)(!1),a=(0,r.Z)(t,2),c=a[0],d=a[1],j=n.id,Z=n.name,y=n.number,v=n.avatar,C=(0,o.I0)(),w=function(){return d(!c)};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(l.Z,{component:"li",sx:T.item,children:[(0,g.jsxs)(l.Z,{sx:T.itemContentWrap,children:[(0,g.jsx)(u.Z,{alt:v.alt,src:v.src}),(0,g.jsxs)(l.Z,{children:[(0,g.jsx)(x.Z,{children:Z}),(0,g.jsx)(x.Z,{children:y})]})]}),(0,g.jsxs)(l.Z,{component:"ul",sx:T.btnList,children:[(0,g.jsx)(p.Z,{title:"Update contact",children:(0,g.jsx)(m.Z,{"aria-label":"update",onClick:w,children:(0,g.jsx)(h.Z,{})})}),(0,g.jsx)(p.Z,{title:"Dlete contact",children:(0,g.jsx)(m.Z,{"aria-label":"delete",onClick:function(){C((0,s.GK)(j)),(0,N.Am)("".concat(Z," was deleted from your contatcs"))},children:(0,g.jsx)(f.Z,{})})})]})]}),c&&(0,g.jsx)(b,{onCloseModal:w,children:(0,g.jsx)(_,{id:j,onCloseModal:w})})]})})),D=t(350),L={textAlign:"center",padding:"30px"},$=function(e){var n=e.children,t=e.color,r=void 0===t?"common.black":t;return(0,g.jsx)(x.Z,{component:"p",sx:(0,y.Z)((0,y.Z)({},L),{},{color:r}),children:n})},B=t(493),R={list:{display:"flex",flexDirection:"column",gap:"10px"}},V=function(){var e=(0,c.g)(),n=e.isLoading,t=e.error,r=e.contacts,a=(0,o.v9)(d.A),l=(0,o.I0)();(0,i.useEffect)((function(){l((0,s.yF)())}),[l]);var u=!n&&!t,x=!n&&t,p=u&&""===a&&0===r.length,m=u&&""!==a&&0===r.length,h=!t&&0!==r.length;return(0,g.jsxs)(g.Fragment,{children:[h&&(0,g.jsx)(B.Z,{sx:R.list,children:r.map((function(e){return(0,g.jsx)(F,{contact:e},e.id)}))}),n&&(0,g.jsx)(D.a,{}),x&&(0,g.jsx)($,{children:"Sorry, something went wrong"}),p&&(0,g.jsx)($,{children:"Your contacts list is empty"}),m&&(0,g.jsx)($,{children:"Sorry, there is no such contacts"})]})},H=t(1273),W=t(8096),E=t(4925),O=t(635),G={wrap:{display:"flex",justifyContent:"center",alignItems:"center"}},P=(0,S.x0)(),U=function(){var e=(0,o.I0)();return(0,g.jsx)(l.Z,{sx:G.wrap,children:(0,g.jsxs)(W.Z,{sx:{width:"350px"},children:[(0,g.jsx)(E.Z,{htmlFor:P,children:"Search"}),(0,g.jsx)(O.Z,{id:P,type:"text",label:"Search",onChange:function(n){return e((0,H.T)(n.currentTarget.value.trim()))}})]})})},J=t(7750),K={btn:{display:"flex",justifyContent:"center",alignItems:"center",padding:"14px",bgcolor:"primary.400",color:"common.white",position:"fixed",top:"87%",left:{xs:"80%",sm:"90%"},"&:hover":{bgcolor:"primary.300"}}},X=function(e){var n=e.onOpenModal;return(0,g.jsx)(p.Z,{title:"Add contact",children:(0,g.jsx)(m.Z,{variant:"contained",sx:K.btn,type:"button",onClick:n,children:(0,g.jsx)(J.Z,{})})})},Y=new RegExp("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"),Q=w.Ry().shape({name:w.Z_().required("This field is required").matches(Y,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),number:w.Z_().required("This field is required").matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")}),ee=t(4322),ne=[{inputName:"name",type:"text",id:(0,S.x0)()},{inputName:"number",type:"tel",id:(0,S.x0)()}],te={form:{display:"flex",flexDirection:"column",gap:"20px",width:{xs:"330px",sm:"400px"},margin:"0 auto"}},re=(0,ee.O)(ne),ie=function(e){var n=e.onCloseModal,t=(0,v.cI)({resolver:(0,C.X)(Q),defaultValues:re}),r=t.register,i=t.formState.errors,a=t.handleSubmit,d=t.reset,u=(0,c.g)().contacts,x=(0,o.I0)();return(0,g.jsxs)(l.Z,{component:"form",sx:te.form,onSubmit:a((function(e){if(u.find((function(n){return n.name===e.name})))return(0,N.Am)("".concat(e.name," is already in your contacts"));x((0,s.uK)(e)),(0,N.Am)("".concat(e.name," was added to your contacts")),d(),n()})),children:[ne.map((function(e){var n=e.inputName,t=e.type,a=e.id;return(0,g.jsx)(k.W,{inputName:n,type:t,id:a,register:r,errors:i},a)})),(0,g.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"center",gap:"20px"},children:[(0,g.jsx)(z.Z,{type:"submit",variant:"contained",children:"Add Contact"}),(0,g.jsx)(z.Z,{type:"button",variant:"outlined",onClick:function(){return n()},children:"Cancel"})]})]})},ae=function(){var e=(0,i.useState)(!1),n=(0,r.Z)(e,2),t=n[0],s=n[1],o=function(){return s(!t)};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a.$,{children:(0,g.jsx)(U,{})}),(0,g.jsxs)(a.$,{children:[(0,g.jsx)(V,{}),(0,g.jsx)(X,{onOpenModal:o})]}),t&&(0,g.jsx)(b,{onCloseModal:o,children:(0,g.jsx)(ie,{onCloseModal:o})})]})}},7247:function(e,n,t){var r=t(4836);n.Z=void 0;var i=r(t(5649)),a=t(3329),s=(0,i.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=s},1286:function(e,n,t){var r=t(4836);n.Z=void 0;var i=r(t(5649)),a=t(3329),s=(0,i.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.Z=s},7750:function(e,n,t){var r=t(4836);n.Z=void 0;var i=r(t(5649)),a=t(3329),s=(0,i.default)((0,a.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAdd");n.Z=s}}]);
//# sourceMappingURL=696.3dbb91c8.chunk.js.map