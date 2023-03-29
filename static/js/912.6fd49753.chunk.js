"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[912],{7032:function(n,e,t){t.d(e,{W:function(){return f}});var r=t(1413),i=t(9439);function a(n){return n.charAt(0).toUpperCase()+n.slice(1)}var o=t(8096),s=t(4925),c=t(635),l=t(3466),d=t(3400),u=t(7071),p=t(2791),x=t(3710),h=t(9569),m=t(3329),f=function(n){var e=n.inputName,t=n.type,f=n.id,j=n.register,g=n.isError,Z=n.getErrorMassage,b=(0,p.useState)(!1),y=(0,i.Z)(b,2),v=y[0],C=y[1];return(0,m.jsxs)(o.Z,{error:g(e),children:[(0,m.jsx)(s.Z,{htmlFor:f,children:a(e)}),"password"!==t?(0,m.jsx)(c.Z,(0,r.Z)({id:f,type:t,label:a(e),"aria-describedby":f},j(e))):(0,m.jsx)(c.Z,(0,r.Z)((0,r.Z)({id:f,type:v?"text":"password",label:a(e),"aria-describedby":f},j(e)),{},{endAdornment:(0,m.jsx)(l.Z,{position:"end",children:(0,m.jsx)(d.Z,{"aria-label":"toggle password visibility",onClick:function(){C(!v)},onMouseDown:function(n){n.preventDefault()},edge:"end",children:v?(0,m.jsx)(x.Z,{}):(0,m.jsx)(h.Z,{})})})})),g(e)&&(0,m.jsx)(u.Z,{id:f,children:Z(e)})]})}},6587:function(n,e,t){t.d(e,{$:function(){return s}});var r=t(8870),i=t(1614),a=t(890),o=t(3329),s=function(n){var e=n.title,t=n.children;return(0,o.jsx)(r.Z,{component:"section",sx:{paddingTop:"20px",paddingBottom:"20px"},children:(0,o.jsxs)(i.Z,{children:[e&&(0,o.jsx)(a.Z,{component:"h2",variant:"h2",children:e}),t]})})}},4322:function(n,e,t){t.d(e,{O:function(){return a}});var r=t(4942),i=t(1413),a=function(n){return n.reduce((function(n,e){return(0,i.Z)((0,i.Z)({},n),{},(0,r.Z)({},e.inputName,""))}),{})}},9912:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,i,a,o=t(9439),s=t(2791),c=t(6587),l=t(9434),d=t(3431),u=t(3634),p=t(3400),x=t(7247),h=t(168),m=t(225),f=m.Z.li(r||(r=(0,h.Z)(["\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 20px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid black;\n"]))),j=t(3329),g=(0,s.memo)((function(n){var e=n.contact,t=(0,l.I0)(),r=e.id,i=e.name,a=e.number;return(0,j.jsxs)(f,{children:[(0,j.jsxs)("p",{children:[i,": ",a]}),(0,j.jsx)(p.Z,{"aria-label":"delete",onClick:function(){return t((0,u.GK)(r))},children:(0,j.jsx)(x.Z,{})})]})})),Z=m.Z.ul(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n\n  max-width: 350px;\n  margin: 0 auto;\n"]))),b=t(7058),y=m.Z.p(a||(a=(0,h.Z)(["\n  text-align: center;\n  color: black;\n  padding: 20px 0;\n"]))),v=function(n){var e=n.children;return(0,j.jsx)(y,{children:e})},C=t(603),w=function(){var n=(0,C.g)(),e=n.isLoading,t=n.error,r=n.contacts,i=(0,l.v9)(d.A),a=(0,l.I0)();(0,s.useEffect)((function(){a((0,u.yF)())}),[a]);var o=!e&&!t,c=!e&&t,p=o&&""===i&&0===r.length,x=o&&""!==i&&0===r.length,h=o&&0!==r.length;return(0,j.jsxs)(j.Fragment,{children:[e&&(0,j.jsx)(b.a,{open:e}),c&&(0,j.jsx)(v,{children:"Sorry, something went wrong."}),p&&(0,j.jsx)(v,{children:"Your contacts list is empty."}),x&&(0,j.jsx)(v,{children:"Sorry, there is no such contacs"}),h&&(0,j.jsx)(Z,{children:r.map((function(n){return(0,j.jsx)(g,{contact:n},n.id)}))})]})},k=t(1273),M=t(5984),_=t(8870),A=t(8096),S=t(4925),I=t(635),N=(0,M.x0)(),E=function(){var n=(0,l.I0)();return(0,j.jsx)(_.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,j.jsxs)(A.Z,{sx:{width:"350px"},children:[(0,j.jsx)(S.Z,{htmlFor:N,children:"Search"}),(0,j.jsx)(I.Z,{id:N,type:"text",label:"Search",onChange:function(e){return n((0,k.T)(e.currentTarget.value.trim()))}})]})})},F=t(7750),z=function(n){var e=n.onOpenModal;return(0,j.jsx)(p.Z,{variant:"contained",sx:{display:"flex",justifyContent:"center",alignItems:"center",padding:"14px",bgcolor:"primary.400",color:"common.white",position:"fixed",top:"80%",left:"90%"},type:"button",onClick:e,children:(0,j.jsx)(F.Z,{})})},O=t(4677),$=function(n){var e=n.children,t=n.onModalClose;return(0,j.jsx)(O.Z,{open:!0,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,j.jsx)(_.Z,{sx:{display:"inline-flex",bgcolor:"common.white",padding:"20px",borderRadius:"3px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:e})})},D=t(9195),R=t(4695),T=t(6727),q=new RegExp("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"),B=T.Ry().shape({name:T.Z_().matches(q,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),number:T.Z_().matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required()}),K=t(4322),W=t(6151),G=t(7032),J=[{inputName:"name",type:"text",id:(0,M.x0)()},{inputName:"number",type:"tel",id:(0,M.x0)()}],L=(0,K.O)(J),P=function(n){var e=n.onModalClose,t=(0,D.cI)({resolver:(0,R.X)(B),defaultValues:L}),r=t.register,i=t.formState.errors,a=t.handleSubmit,o=t.reset,s=(0,C.g)().contacts,c=(0,l.I0)(),d=function(n){return!!i[n]},p=function(n){return i[n].message};return(0,j.jsxs)(_.Z,{component:"form",sx:{display:"flex",flexDirection:"column",gap:"20px",width:"400px",margin:"0 auto"},onSubmit:a((function(n){if(s.find((function(e){return e.name===n.name})))return alert("".concat(n.name," is aready in contacts."));c((0,u.uK)(n)),o(),e()})),children:[J.map((function(n){var e=n.inputName,t=n.type,i=n.id;return(0,j.jsx)(G.W,{inputName:e,type:t,id:i,register:r,isError:d,getErrorMassage:p},i)})),(0,j.jsxs)(_.Z,{sx:{display:"flex",justifyContent:"center",gap:"20px"},children:[(0,j.jsx)(W.Z,{type:"submit",variant:"contained",children:"Add Contact"}),(0,j.jsx)(W.Z,{type:"button",variant:"outlined",onClick:function(){return e()},children:"Cancel"})]})]})},U=function(){var n=(0,s.useState)(!1),e=(0,o.Z)(n,2),t=e[0],r=e[1],i=function(){return r(!t)};return(0,j.jsxs)(c.$,{children:[(0,j.jsx)(E,{}),(0,j.jsx)(w,{}),(0,j.jsx)(z,{onOpenModal:i}),t&&(0,j.jsx)($,{onModalClose:i,children:(0,j.jsx)(P,{onModalClose:i})})]})}}}]);
//# sourceMappingURL=912.6fd49753.chunk.js.map