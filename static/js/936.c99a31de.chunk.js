"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[936],{7032:function(e,n,r){r.d(n,{W:function(){return f}});var t=r(1413),i=r(9439);function a(e){return e.charAt(0).toUpperCase()+e.slice(1)}var o=r(8096),s=r(4925),c=r(635),d=r(3466),l=r(3400),u=r(7071),p=r(2791),m=r(3710),h=r(9569),x=r(3329),f=function(e){var n=e.inputName,r=e.type,f=e.id,Z=e.register,g=e.isError,v=e.getErrorMassage,j=(0,p.useState)(!1),y=(0,i.Z)(j,2),b=y[0],w=y[1];return(0,x.jsxs)(o.Z,{error:g(n),children:[(0,x.jsx)(s.Z,{htmlFor:f,children:a(n)}),"password"!==r?(0,x.jsx)(c.Z,(0,t.Z)({id:f,type:r,label:a(n),"aria-describedby":f},Z(n))):(0,x.jsx)(c.Z,(0,t.Z)((0,t.Z)({id:f,type:b?"text":"password",label:a(n),"aria-describedby":f},Z(n)),{},{endAdornment:(0,x.jsx)(d.Z,{position:"end",children:(0,x.jsx)(l.Z,{"aria-label":"toggle password visibility",onClick:function(){w(!b)},onMouseDown:function(e){e.preventDefault()},edge:"end",children:b?(0,x.jsx)(m.Z,{}):(0,x.jsx)(h.Z,{})})})})),g(n)&&(0,x.jsx)(u.Z,{id:f,children:v(n)})]})}},6587:function(e,n,r){r.d(n,{$:function(){return s}});var t=r(8870),i=r(1614),a=r(890),o=r(3329),s=function(e){var n=e.title,r=e.children;return(0,o.jsx)(t.Z,{component:"section",sx:{paddingTop:"20px",paddingBottom:"20px"},children:(0,o.jsxs)(i.Z,{children:[n&&(0,o.jsx)(a.Z,{component:"h2",variant:"h2",children:n}),r]})})}},4322:function(e,n,r){r.d(n,{O:function(){return a}});var t=r(4942),i=r(1413),a=function(e){return e.reduce((function(e,n){return(0,i.Z)((0,i.Z)({},e),{},(0,t.Z)({},n.inputName,""))}),{})}},1936:function(e,n,r){r.r(n),r.d(n,{default:function(){return A}});var t=r(8870),i=r(3044),a=r(890),o=r(533),s=r(403),c=r(6587),d=r(9434),l=r(9273),u=r(9195),p=r(4695),m=r(6727),h=new RegExp("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"),x=m.Ry().shape({name:m.Z_().matches(h,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),email:m.Z_().email("Invalid email format").required(),password:m.Z_().min(8,"Password is too short - should be 8 chars minimum.").matches(/[a-zA-Z]/,"Password can only contain Latin letters.").required()}),f=r(4322),Z=(0,r(3814).Z)(),g=r(7032),v=r(5984),j=[{inputName:"name",type:"text",id:(0,v.x0)()},{inputName:"email",type:"email",id:(0,v.x0)()},{inputName:"password",type:"password",id:(0,v.x0)()}],y=r(6151),b=r(3329),w=(0,f.O)(j),_=function(){var e=(0,u.cI)({resolver:(0,p.X)(x),defaultValues:w}),n=e.register,r=e.formState.errors,t=e.handleSubmit,i=e.reset,a=(0,d.I0)(),o=function(e){return!!r[e]},s=function(e){return r[e].message};return(0,b.jsxs)(Z,{component:"form",sx:{display:"flex",flexDirection:"column",gap:"20px",width:"400px",margin:"0 auto"},onSubmit:t((function(e){a((0,l.l9)(e)),console.log(e),i()})),children:[j.map((function(e){var r=e.inputName,t=e.type,i=e.id;return(0,b.jsx)(g.W,{inputName:r,type:t,id:i,register:n,isError:o,getErrorMassage:s},i)})),(0,b.jsx)(y.Z,{type:"submit",fullWidth:!0,variant:"contained",children:"Register"})]})},z=r(194),A=function(){return(0,b.jsx)(c.$,{children:(0,b.jsxs)(t.Z,{sx:{marginTop:6,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,b.jsx)(i.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,b.jsx)(s.Z,{})}),(0,b.jsx)(a.Z,{component:"h1",variant:"h5",sx:{mb:3},children:"Registration"}),(0,b.jsx)(_,{}),(0,b.jsx)(o.Z,{component:z.Fg,sx:{mt:3},to:"/login",children:"Already have an account? Log in"})]})})}},403:function(e,n,r){var t=r(4836);n.Z=void 0;var i=t(r(5649)),a=r(3329),o=(0,i.default)((0,a.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");n.Z=o}}]);
//# sourceMappingURL=936.c99a31de.chunk.js.map