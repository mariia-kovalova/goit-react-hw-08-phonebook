"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[329],{1340:function(e,n,t){t.d(n,{W:function(){return g}});var r=t(1413),i=t(9439);function a(e){return e.charAt(0).toUpperCase()+e.slice(1)}var s=t(8096),o=t(4925),c=t(635),d=t(3466),l=t(3400),u=t(7071),x=t(890),p=t(2791),m=t(3710),h=t(9569),f=t(5970),j={error:{color:"error.main",fontSize:"12px"}},Z=t(3329),g=function(e){var n=e.inputName,t=e.type,g=e.id,b=e.register,v=e.errors,y=(0,p.useState)(!1),C=(0,i.Z)(y,2),w=C[0],A=C[1];return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(s.Z,{error:function(e){return!!v[e]}(n),children:[(0,Z.jsx)(o.Z,{htmlFor:g,children:a(n)}),"password"!==t?(0,Z.jsx)(c.Z,(0,r.Z)({id:g,type:t,label:a(n),"aria-describedby":g},b(n,{required:"This field is required."}))):(0,Z.jsx)(c.Z,(0,r.Z)((0,r.Z)({id:g,type:w?"text":"password",label:a(n),"aria-describedby":g},b(n,{required:"This field is required."})),{},{endAdornment:(0,Z.jsx)(d.Z,{position:"end",children:(0,Z.jsx)(l.Z,{"aria-label":"toggle password visibility",onClick:function(){A(!w)},onMouseDown:function(e){e.preventDefault()},edge:"end",children:w?(0,Z.jsx)(m.Z,{}):(0,Z.jsx)(h.Z,{})})})})),(0,Z.jsx)(u.Z,{component:f.B,id:g,errors:v,name:n,render:function(e){var n=e.message;return(0,Z.jsx)(x.Z,{sx:j.error,children:n})}})]})})}},8955:function(e,n,t){t.d(n,{$:function(){return c}});var r=t(8870),i=t(1614),a=t(890),s={section:{paddingTop:"20px",paddingBottom:"20px"},title:{textAlign:"center"}},o=t(3329),c=function(e){var n=e.title,t=e.children;return(0,o.jsx)(r.Z,{component:"section",sx:s.section,children:(0,o.jsxs)(i.Z,{children:[n&&(0,o.jsx)(a.Z,{component:"h2",variant:"h2",sx:s.title,children:n}),t]})})}},4322:function(e,n,t){t.d(n,{O:function(){return a}});var r=t(4942),i=t(1413),a=function(e){return e.reduce((function(e,n){return(0,i.Z)((0,i.Z)({},e),{},(0,r.Z)({},n.inputName,""))}),{})}},7329:function(e,n,t){t.r(n),t.d(n,{default:function(){return ce}});var r=t(9439),i=t(2791),a=t(1413),s=t(8217),o=t(4158),c=t(7689),d=t(3329),l=t(8955),u=t(3634),x=t(9434),p=t(3431),m=t(8870),h=t(3044),f=t(890),j=t(1917),Z=t(3400),g=t(1286),b=t(7247),v=t(717),y={wrap:{display:"inline-flex",bgcolor:"extra.modalBGC",padding:"20px",borderRadius:"3px",position:"absolute",top:{xs:"35%",sm:"50%"},left:"50%",transform:"translate(-50%, -50%)"}},C=function(e){var n=e.children,t=e.onCloseModal;return(0,d.jsx)(v.Z,{open:!0,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,d.jsx)(m.Z,{sx:y.wrap,children:n})})},w=t(1134),A=t(4695),M=t(6727),z=new RegExp("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"),I=M.Ry().shape({name:M.Z_().required("This field is required").matches(z,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),number:M.Z_().required("This field is required").matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")}),S=t(6151),k=t(1340),q=t(5984),N=[{inputName:"name",type:"text",id:(0,q.x0)()},{inputName:"number",type:"tel",id:(0,q.x0)()}],_={form:{display:"flex",flexDirection:"column",gap:"20px",width:{xs:"330px",sm:"400px"},margin:"0 auto"},btnList:{display:"flex",justifyContent:"center",gap:"20px"}},T=t(5985),F=function(e){var n=e.id,t=e.onCloseModal,r=(0,o.g)().contacts,i=r.find((function(e){return e.id===n})),s=i.name,c=i.number,l=(0,w.cI)({resolver:(0,A.X)(I),defaultValues:{name:s,number:c}}),p=l.register,h=l.formState.errors,f=l.handleSubmit,j=l.reset,Z=(0,x.I0)();return(0,d.jsxs)(m.Z,{component:"form",sx:_.form,onSubmit:f((function(e){return e.name===s&&e.number===c?t():r.find((function(n){return n.name===e.name}))?(0,T.Am)("".concat(e.name," is already in your contacts")):(Z((0,u.Tk)((0,a.Z)({id:n},e))),(0,T.Am)("".concat(e.name," was updated")),j(),void t())})),children:[N.map((function(e){var n=e.inputName,t=e.type,r=e.id;return(0,d.jsx)(k.W,{inputName:n,type:t,id:r,register:p,errors:h},r)})),(0,d.jsxs)(m.Z,{sx:_.btnList,children:[(0,d.jsx)(S.Z,{type:"submit",variant:"contained",children:"Update Contact"}),(0,d.jsx)(S.Z,{type:"button",variant:"outlined",onClick:function(){return t()},children:"Cancel"})]})]})},L={item:{padding:"10px",bgcolor:"extra.contactItemBGC",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"space-between"},itemContentWrap:{display:"flex",gap:"10px",alignItems:"center"},btnList:{display:"flex",gap:"5px",alignItems:"center"}},D=(0,i.memo)((function(e){var n=e.contact,t=(0,i.useState)(!1),a=(0,r.Z)(t,2),s=a[0],o=a[1],c=n.id,l=n.name,p=n.number,v=n.avatar,y=(0,x.I0)(),w=function(){return o(!s)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(m.Z,{component:"li",sx:L.item,children:[(0,d.jsxs)(m.Z,{sx:L.itemContentWrap,children:[(0,d.jsx)(h.Z,{alt:v.alt,src:v.src}),(0,d.jsxs)(m.Z,{children:[(0,d.jsx)(f.Z,{children:l}),(0,d.jsx)(f.Z,{children:p})]})]}),(0,d.jsxs)(m.Z,{component:"ul",sx:L.btnList,children:[(0,d.jsx)(j.Z,{title:"Update contact",children:(0,d.jsx)(Z.Z,{"aria-label":"update",onClick:w,children:(0,d.jsx)(g.Z,{})})}),(0,d.jsx)(j.Z,{title:"Dlete contact",children:(0,d.jsx)(Z.Z,{"aria-label":"delete",onClick:function(){y((0,u.GK)(c)),(0,T.Am)("".concat(l," was deleted from your contatcs"))},children:(0,d.jsx)(b.Z,{})})})]})]}),s&&(0,d.jsx)(C,{onCloseModal:w,children:(0,d.jsx)(F,{id:c,onCloseModal:w})})]})})),R=t(5225),$={textAlign:"center",padding:"30px"},B=function(e){var n=e.children,t=e.color,r=void 0===t?"getContrastText":t;return(0,d.jsx)(f.Z,{component:"p",sx:(0,a.Z)((0,a.Z)({},$),{},{color:r}),children:n})},V=t(493),H={list:{display:"flex",flexDirection:"column",gap:"10px"}},W=function(){var e=(0,o.g)(),n=e.isLoading,t=e.error,r=e.contacts,a=(0,x.v9)(p.A),s=(0,x.I0)();(0,i.useEffect)((function(){s((0,u.yF)())}),[s]);var c=!n&&!t,l=!n&&t,m=c&&""===a&&0===r.length,h=c&&""!==a&&0===r.length,f=!t&&0!==r.length;return(0,d.jsxs)(d.Fragment,{children:[f&&(0,d.jsx)(V.Z,{sx:H.list,children:r.map((function(e){return(0,d.jsx)(D,{contact:e},e.id)}))}),n&&(0,d.jsx)(R.a,{}),l&&(0,d.jsx)(B,{children:"Sorry, something went wrong"}),m&&(0,d.jsx)(B,{children:"Your contacts list is empty"}),h&&(0,d.jsx)(B,{children:"Sorry, there is no such contacts"})]})},E=t(1273),O=t(8096),G=t(4925),P=t(635),U={wrap:{display:"flex",justifyContent:"center",alignItems:"center"},input:{width:"350px"}},J=(0,q.x0)(),K=function(){var e=(0,x.I0)();return(0,d.jsx)(m.Z,{sx:U.wrap,children:(0,d.jsxs)(O.Z,{sx:U.input,children:[(0,d.jsx)(G.Z,{htmlFor:J,children:"Search"}),(0,d.jsx)(P.Z,{id:J,type:"text",label:"Search",onChange:function(n){return e((0,E.T)(n.currentTarget.value.trim()))}})]})})},X=t(7750),Y={btn:{display:"flex",justifyContent:"center",alignItems:"center",padding:"14px",bgcolor:"primary.400",color:"common.white",position:"fixed",top:"87%",left:{xs:"80%",sm:"90%"},"&:hover":{bgcolor:"primary.300"}}},Q=function(e){var n=e.onOpenModal;return(0,d.jsx)(j.Z,{title:"Add contact",children:(0,d.jsx)(Z.Z,{variant:"contained",sx:Y.btn,type:"button",onClick:n,children:(0,d.jsx)(X.Z,{})})})},ee=new RegExp("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"),ne=M.Ry().shape({name:M.Z_().required("This field is required").matches(ee,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),number:M.Z_().required("This field is required").matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")}),te=t(4322),re=[{inputName:"name",type:"text",id:(0,q.x0)()},{inputName:"number",type:"tel",id:(0,q.x0)()}],ie={form:{display:"flex",flexDirection:"column",gap:"20px",width:{xs:"330px",sm:"400px"},margin:"0 auto"},btnList:{display:"flex",justifyContent:"center",gap:"20px"}},ae=(0,te.O)(re),se=function(e){var n=e.onCloseModal,t=(0,w.cI)({resolver:(0,A.X)(ne),defaultValues:ae}),r=t.register,i=t.formState.errors,a=t.handleSubmit,s=t.reset,c=(0,o.g)().contacts,l=(0,x.I0)();return(0,d.jsxs)(m.Z,{component:"form",sx:ie.form,onSubmit:a((function(e){if(c.find((function(n){return n.name===e.name})))return(0,T.Am)("".concat(e.name," is already in your contacts"));l((0,u.uK)(e)),(0,T.Am)("".concat(e.name," was added to your contacts")),s(),n()})),children:[re.map((function(e){var n=e.inputName,t=e.type,a=e.id;return(0,d.jsx)(k.W,{inputName:n,type:t,id:a,register:r,errors:i},a)})),(0,d.jsxs)(m.Z,{sx:ie.btnList,children:[(0,d.jsx)(S.Z,{type:"submit",variant:"contained",children:"Add Contact"}),(0,d.jsx)(S.Z,{type:"button",variant:"outlined",onClick:function(){return n()},children:"Cancel"})]})]})},oe=t(4270),ce=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.ef,t=function(t){var r=(0,o.a)(),i=r.isLoggedIn,s=r.isRefreshing;return!i&&!s?(0,d.jsx)(c.Fg,{to:n}):(0,d.jsx)(e,(0,a.Z)({},t))};return t}((function(){var e=(0,i.useState)(!1),n=(0,r.Z)(e,2),t=n[0],a=n[1],s=function(){return a(!t)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(oe.q,{children:(0,d.jsx)("title",{children:"Contacts"})}),(0,d.jsx)(l.$,{children:(0,d.jsx)(K,{})}),(0,d.jsxs)(l.$,{children:[(0,d.jsx)(W,{}),(0,d.jsx)(Q,{onOpenModal:s})]}),t&&(0,d.jsx)(C,{onCloseModal:s,children:(0,d.jsx)(se,{onCloseModal:s})})]})}),"/login")},7247:function(e,n,t){var r=t(4836);n.Z=void 0;var i=r(t(5649)),a=t(3329),s=(0,i.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=s},1286:function(e,n,t){var r=t(4836);n.Z=void 0;var i=r(t(5649)),a=t(3329),s=(0,i.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.Z=s},7750:function(e,n,t){var r=t(4836);n.Z=void 0;var i=r(t(5649)),a=t(3329),s=(0,i.default)((0,a.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAdd");n.Z=s}}]);
//# sourceMappingURL=329.7e7ad88a.chunk.js.map