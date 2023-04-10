"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[329],{1340:function(e,n,t){t.d(n,{W:function(){return g}});var r=t(1413),i=t(9439);function a(e){return e.charAt(0).toUpperCase()+e.slice(1)}var s=t(8096),o=t(4925),c=t(635),d=t(3466),l=t(3400),u=t(7071),x=t(890),p=t(2791),m=t(3710),h=t(9569),f=t(5970),j={error:{color:"error.main",fontSize:"12px"}},Z=t(3329),g=function(e){var n=e.inputName,t=e.type,g=e.id,b=e.register,v=e.errors,y=(0,p.useState)(!1),C=(0,i.Z)(y,2),w=C[0],A=C[1];return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(s.Z,{error:function(e){return!!v[e]}(n),children:[(0,Z.jsx)(o.Z,{htmlFor:g,children:a(n)}),"password"!==t?(0,Z.jsx)(c.Z,(0,r.Z)({id:g,type:t,label:a(n),"aria-describedby":g},b(n,{required:"This field is required."}))):(0,Z.jsx)(c.Z,(0,r.Z)((0,r.Z)({id:g,type:w?"text":"password",label:a(n),"aria-describedby":g},b(n,{required:"This field is required."})),{},{endAdornment:(0,Z.jsx)(d.Z,{position:"end",children:(0,Z.jsx)(l.Z,{"aria-label":"toggle password visibility",onClick:function(){A(!w)},onMouseDown:function(e){e.preventDefault()},edge:"end",children:w?(0,Z.jsx)(m.Z,{}):(0,Z.jsx)(h.Z,{})})})})),(0,Z.jsx)(u.Z,{component:f.B,id:g,errors:v,name:n,render:function(e){var n=e.message;return(0,Z.jsx)(x.Z,{sx:j.error,children:n})}})]})})}},8955:function(e,n,t){t.d(n,{$:function(){return c}});var r=t(8870),i=t(1614),a=t(890),s={section:{paddingTop:"20px",paddingBottom:"20px"},title:{textAlign:"center"}},o=t(3329),c=function(e){var n=e.title,t=e.children;return(0,o.jsx)(r.Z,{component:"section",sx:s.section,children:(0,o.jsxs)(i.Z,{children:[n&&(0,o.jsx)(a.Z,{component:"h2",variant:"h2",sx:s.title,children:n}),t]})})}},4322:function(e,n,t){t.d(n,{O:function(){return a}});var r=t(4942),i=t(1413),a=function(e){return e.reduce((function(e,n){return(0,i.Z)((0,i.Z)({},e),{},(0,r.Z)({},n.inputName,""))}),{})}},7329:function(e,n,t){t.r(n),t.d(n,{default:function(){return ce}});var r=t(9439),i=t(2791),a=t(4270),s=t(1413),o=t(8217),c=t(4158),d=t(7689),l=t(3329),u=t(8955),x=t(3634),p=t(9434),m=t(3431),h=t(8870),f=t(3044),j=t(890),Z=t(1917),g=t(3400),b=t(1286),v=t(7247),y=t(717),C={wrap:{display:"inline-flex",bgcolor:"extra.modalBGC",padding:"20px",borderRadius:"3px",position:"absolute",top:{xs:"35%",sm:"50%"},left:"50%",transform:"translate(-50%, -50%)"}},w=function(e){var n=e.children,t=e.onCloseModal;return(0,l.jsx)(y.Z,{open:!0,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsx)(h.Z,{sx:C.wrap,children:n})})},A=t(1134),M=t(4695),z=t(6727),I=new RegExp("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"),S=z.Ry().shape({name:z.Z_().required("This field is required").matches(I,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),number:z.Z_().required("This field is required").matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")}),k=t(6151),q=t(1340),_=t(5984),N=[{inputName:"name",type:"text",id:(0,_.x0)()},{inputName:"number",type:"tel",id:(0,_.x0)()}],T={form:{display:"flex",flexDirection:"column",gap:"20px",width:{xs:"330px",sm:"400px"},margin:"0 auto"},btnList:{display:"flex",justifyContent:"center",gap:"20px"}},F=t(5985),L=function(e){var n=e.id,t=e.onCloseModal,r=(0,c.g)().contacts,i=r.find((function(e){return e.id===n})),a=i.name,o=i.number,d=(0,A.cI)({resolver:(0,M.X)(S),defaultValues:{name:a,number:o}}),u=d.register,m=d.formState.errors,f=d.handleSubmit,j=d.reset,Z=(0,p.I0)();return(0,l.jsxs)(h.Z,{component:"form",sx:T.form,onSubmit:f((function(e){return e.name===a&&e.number===o?t():r.find((function(n){return n.name===e.name}))?(0,F.Am)("".concat(e.name," is already in your contacts")):(Z((0,x.Tk)((0,s.Z)({id:n},e))),(0,F.Am)("".concat(e.name," was updated")),j(),void t())})),children:[N.map((function(e){var n=e.inputName,t=e.type,r=e.id;return(0,l.jsx)(q.W,{inputName:n,type:t,id:r,register:u,errors:m},r)})),(0,l.jsxs)(h.Z,{sx:T.btnList,children:[(0,l.jsx)(k.Z,{type:"submit",variant:"contained",children:"Update Contact"}),(0,l.jsx)(k.Z,{type:"button",variant:"outlined",onClick:function(){return t()},children:"Cancel"})]})]})},D={item:{padding:"10px",bgcolor:"extra.contactItemBGC",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"space-between"},itemContentWrap:{display:"flex",gap:"10px",alignItems:"center"},btnList:{display:"flex",gap:"5px",alignItems:"center"}},R=(0,i.memo)((function(e){var n=e.contact,t=(0,i.useState)(!1),a=(0,r.Z)(t,2),s=a[0],o=a[1],c=n.id,d=n.name,u=n.number,m=n.avatar,y=(0,p.I0)(),C=function(){return o(!s)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(h.Z,{component:"li",sx:D.item,children:[(0,l.jsxs)(h.Z,{sx:D.itemContentWrap,children:[(0,l.jsx)(f.Z,{alt:m.alt,src:m.src}),(0,l.jsxs)(h.Z,{children:[(0,l.jsx)(j.Z,{children:d}),(0,l.jsx)(j.Z,{children:u})]})]}),(0,l.jsxs)(h.Z,{component:"ul",sx:D.btnList,children:[(0,l.jsx)(Z.Z,{title:"Update contact",children:(0,l.jsx)(g.Z,{"aria-label":"update",onClick:C,children:(0,l.jsx)(b.Z,{})})}),(0,l.jsx)(Z.Z,{title:"Dlete contact",children:(0,l.jsx)(g.Z,{"aria-label":"delete",onClick:function(){y((0,x.GK)(c)),(0,F.Am)("".concat(d," was deleted from your contatcs"))},children:(0,l.jsx)(v.Z,{})})})]})]}),s&&(0,l.jsx)(w,{onCloseModal:C,children:(0,l.jsx)(L,{id:c,onCloseModal:C})})]})})),$=t(5225),B={textAlign:"center",padding:"30px"},V=function(e){var n=e.children,t=e.color,r=void 0===t?"getContrastText":t;return(0,l.jsx)(j.Z,{component:"p",sx:(0,s.Z)((0,s.Z)({},B),{},{color:r}),children:n})},H=t(493),W={list:{display:"flex",flexDirection:"column",gap:"10px"}},E=function(){var e=(0,c.g)(),n=e.isLoading,t=e.error,r=e.contacts,a=(0,p.v9)(m.A),s=(0,p.I0)();(0,i.useEffect)((function(){s((0,x.yF)())}),[s]);var o=!n&&!t,d=!n&&t,u=o&&""===a&&0===r.length,h=o&&""!==a&&0===r.length,f=!t&&0!==r.length;return(0,l.jsxs)(l.Fragment,{children:[f&&(0,l.jsx)(H.Z,{sx:W.list,children:r.map((function(e){return(0,l.jsx)(R,{contact:e},e.id)}))}),n&&(0,l.jsx)($.a,{}),d&&(0,l.jsx)(V,{children:"Sorry, something went wrong"}),u&&(0,l.jsx)(V,{children:"Your contacts list is empty"}),h&&(0,l.jsx)(V,{children:"Sorry, there is no such contacts"})]})},O=t(1273),G=t(8096),P=t(4925),U=t(635),J={wrap:{display:"flex",justifyContent:"center",alignItems:"center"},input:{width:"350px"}},K=(0,_.x0)(),X=function(){var e=(0,p.I0)();return(0,l.jsx)(h.Z,{sx:J.wrap,children:(0,l.jsxs)(G.Z,{sx:J.input,children:[(0,l.jsx)(P.Z,{htmlFor:K,children:"Search"}),(0,l.jsx)(U.Z,{id:K,type:"text",label:"Search",onChange:function(n){return e((0,O.T)(n.currentTarget.value.trim()))}})]})})},Y=t(7750),Q={btn:{display:"flex",justifyContent:"center",alignItems:"center",padding:"14px",bgcolor:"primary.400",color:"common.white",position:"fixed",top:"87%",left:{xs:"80%",sm:"90%"},"&:hover":{bgcolor:"primary.300"}}},ee=function(e){var n=e.onOpenModal;return(0,l.jsx)(Z.Z,{title:"Add contact",children:(0,l.jsx)(g.Z,{variant:"contained",sx:Q.btn,type:"button",onClick:n,children:(0,l.jsx)(Y.Z,{})})})},ne=new RegExp("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"),te=z.Ry().shape({name:z.Z_().required("This field is required").matches(ne,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),number:z.Z_().required("This field is required").matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")}),re=t(4322),ie=[{inputName:"name",type:"text",id:(0,_.x0)()},{inputName:"number",type:"tel",id:(0,_.x0)()}],ae={form:{display:"flex",flexDirection:"column",gap:"20px",width:{xs:"330px",sm:"400px"},margin:"0 auto"},btnList:{display:"flex",justifyContent:"center",gap:"20px"}},se=(0,re.O)(ie),oe=function(e){var n=e.onCloseModal,t=(0,A.cI)({resolver:(0,M.X)(te),defaultValues:se}),r=t.register,i=t.formState.errors,a=t.handleSubmit,s=t.reset,o=(0,c.g)().contacts,d=(0,p.I0)();return(0,l.jsxs)(h.Z,{component:"form",sx:ae.form,onSubmit:a((function(e){if(o.find((function(n){return n.name===e.name})))return(0,F.Am)("".concat(e.name," is already in your contacts"));d((0,x.uK)(e)),(0,F.Am)("".concat(e.name," was added to your contacts")),s(),n()})),children:[ie.map((function(e){var n=e.inputName,t=e.type,a=e.id;return(0,l.jsx)(q.W,{inputName:n,type:t,id:a,register:r,errors:i},a)})),(0,l.jsxs)(h.Z,{sx:ae.btnList,children:[(0,l.jsx)(k.Z,{type:"submit",variant:"contained",children:"Add Contact"}),(0,l.jsx)(k.Z,{type:"button",variant:"outlined",onClick:function(){return n()},children:"Cancel"})]})]})},ce=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.ef,t=function(t){var r=(0,c.a)(),i=r.isLoggedIn,a=r.isRefreshing;return!i&&!a?(0,l.jsx)(d.Fg,{to:n}):(0,l.jsx)(e,(0,s.Z)({},t))};return t}((function(){var e=(0,i.useState)(!1),n=(0,r.Z)(e,2),t=n[0],s=n[1],o=function(){return s(!t)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.q,{children:(0,l.jsx)("title",{children:"Contacts"})}),(0,l.jsx)(u.$,{children:(0,l.jsx)(X,{})}),(0,l.jsxs)(u.$,{children:[(0,l.jsx)(E,{}),(0,l.jsx)(ee,{onOpenModal:o})]}),t&&(0,l.jsx)(w,{onCloseModal:o,children:(0,l.jsx)(oe,{onCloseModal:o})})]})}),o._e)},7247:function(e,n,t){var r=t(4836);n.Z=void 0;var i=r(t(5649)),a=t(3329),s=(0,i.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=s},1286:function(e,n,t){var r=t(4836);n.Z=void 0;var i=r(t(5649)),a=t(3329),s=(0,i.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.Z=s},7750:function(e,n,t){var r=t(4836);n.Z=void 0;var i=r(t(5649)),a=t(3329),s=(0,i.default)((0,a.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAdd");n.Z=s}}]);
//# sourceMappingURL=329.0775f52c.chunk.js.map