"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[679],{7032:function(e,n,r){r.d(n,{W:function(){return f}});var t=r(1413),i=r(9439);function a(e){return e.charAt(0).toUpperCase()+e.slice(1)}var o=r(8096),s=r(4925),c=r(635),d=r(3466),l=r(3400),u=r(7071),p=r(2791),m=r(3710),x=r(9569),h=r(3329),f=function(e){var n=e.inputName,r=e.type,f=e.id,Z=e.register,g=e.isError,v=e.getErrorMassage,j=(0,p.useState)(!1),b=(0,i.Z)(j,2),y=b[0],w=b[1];return(0,h.jsxs)(o.Z,{error:g(n),children:[(0,h.jsx)(s.Z,{htmlFor:f,children:a(n)}),"password"!==r?(0,h.jsx)(c.Z,(0,t.Z)({id:f,type:r,label:a(n),"aria-describedby":f},Z(n))):(0,h.jsx)(c.Z,(0,t.Z)((0,t.Z)({id:f,type:y?"text":"password",label:a(n),"aria-describedby":f},Z(n)),{},{endAdornment:(0,h.jsx)(d.Z,{position:"end",children:(0,h.jsx)(l.Z,{"aria-label":"toggle password visibility",onClick:function(){w(!y)},onMouseDown:function(e){e.preventDefault()},edge:"end",children:y?(0,h.jsx)(m.Z,{}):(0,h.jsx)(x.Z,{})})})})),g(n)&&(0,h.jsx)(u.Z,{id:f,children:v(n)})]})}},6953:function(e,n,r){r.d(n,{$:function(){return c}});var t=r(8870),i=r(1614),a=r(890),o={section:{paddingTop:"20px",paddingBottom:"20px"},title:{textAlign:"center"}},s=r(3329),c=function(e){var n=e.title,r=e.children;return(0,s.jsx)(t.Z,{component:"section",sx:o.section,children:(0,s.jsxs)(i.Z,{children:[n&&(0,s.jsx)(a.Z,{component:"h2",variant:"h2",sx:o.title,children:n}),r]})})}},4322:function(e,n,r){r.d(n,{O:function(){return a}});var t=r(4942),i=r(1413),a=function(e){return e.reduce((function(e,n){return(0,i.Z)((0,i.Z)({},e),{},(0,t.Z)({},n.inputName,""))}),{})}},9679:function(e,n,r){r.r(n),r.d(n,{default:function(){return k}});var t=r(8870),i=r(3044),a=r(890),o=r(533),s=r(403),c=r(6953),d=r(9434),l=r(9273),u=r(9195),p=r(4695),m=r(6727),x=new RegExp("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"),h=m.Ry().shape({name:m.Z_().matches(x,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),email:m.Z_().email("Invalid email format").required(),password:m.Z_().min(8,"Password is too short - should be 8 chars minimum.").matches(/[a-zA-Z]/,"Password can only contain Latin letters.").required()}),f=r(4322),Z=(0,r(3814).Z)(),g=r(7032),v=r(5984),j=[{inputName:"name",type:"text",id:(0,v.x0)()},{inputName:"email",type:"email",id:(0,v.x0)()},{inputName:"password",type:"password",id:(0,v.x0)()}],b=r(6151),y={form:{display:"flex",flexDirection:"column",gap:"20px",width:{xs:"330px",sm:"400px"},margin:"0 auto"}},w=r(3329),_=(0,f.O)(j),A=function(){var e=(0,u.cI)({resolver:(0,p.X)(h),defaultValues:_}),n=e.register,r=e.formState.errors,t=e.handleSubmit,i=e.reset,a=(0,d.I0)(),o=function(e){return!!r[e]},s=function(e){return r[e].message};return(0,w.jsxs)(Z,{component:"form",sx:y.form,onSubmit:t((function(e){a((0,l.l9)(e)),console.log(e),i()})),children:[j.map((function(e){var r=e.inputName,t=e.type,i=e.id;return(0,w.jsx)(g.W,{inputName:r,type:t,id:i,register:n,isError:o,getErrorMassage:s},i)})),(0,w.jsx)(b.Z,{type:"submit",fullWidth:!0,variant:"contained",children:"Register"})]})},z=r(194),k=function(){return(0,w.jsx)(c.$,{children:(0,w.jsxs)(t.Z,{sx:{marginTop:6,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,w.jsx)(i.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,w.jsx)(s.Z,{})}),(0,w.jsx)(a.Z,{component:"h1",variant:"h5",sx:{mb:3},children:"Registration"}),(0,w.jsx)(A,{}),(0,w.jsx)(o.Z,{component:z.bm,sx:{mt:3},to:"/login",children:"Already have an account? Log in"})]})})}},403:function(e,n,r){var t=r(4836);n.Z=void 0;var i=t(r(5649)),a=r(3329),o=(0,i.default)((0,a.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");n.Z=o}}]);
//# sourceMappingURL=679.df263d40.chunk.js.map