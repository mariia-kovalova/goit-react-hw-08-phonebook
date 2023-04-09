"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[584],{1340:function(e,n,r){r.d(n,{W:function(){return g}});var i=r(1413),t=r(9439);function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}var s=r(8096),c=r(4925),a=r(635),d=r(3466),u=r(3400),l=r(7071),x=r(890),p=r(2791),f=r(3710),h=r(9569),m=r(5970),j={error:{color:"error.main",fontSize:"12px"}},Z=r(3329),g=function(e){var n=e.inputName,r=e.type,g=e.id,v=e.register,b=e.errors,y=(0,p.useState)(!1),w=(0,t.Z)(y,2),_=w[0],q=w[1];return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(s.Z,{error:function(e){return!!b[e]}(n),children:[(0,Z.jsx)(c.Z,{htmlFor:g,children:o(n)}),"password"!==r?(0,Z.jsx)(a.Z,(0,i.Z)({id:g,type:r,label:o(n),"aria-describedby":g},v(n,{required:"This field is required."}))):(0,Z.jsx)(a.Z,(0,i.Z)((0,i.Z)({id:g,type:_?"text":"password",label:o(n),"aria-describedby":g},v(n,{required:"This field is required."})),{},{endAdornment:(0,Z.jsx)(d.Z,{position:"end",children:(0,Z.jsx)(u.Z,{"aria-label":"toggle password visibility",onClick:function(){q(!_)},onMouseDown:function(e){e.preventDefault()},edge:"end",children:_?(0,Z.jsx)(f.Z,{}):(0,Z.jsx)(h.Z,{})})})})),(0,Z.jsx)(l.Z,{component:m.B,id:g,errors:b,name:n,render:function(e){var n=e.message;return(0,Z.jsx)(x.Z,{sx:j.error,children:n})}})]})})}},8955:function(e,n,r){r.d(n,{$:function(){return a}});var i=r(8870),t=r(1614),o=r(890),s={section:{paddingTop:"20px",paddingBottom:"20px"},title:{textAlign:"center"}},c=r(3329),a=function(e){var n=e.title,r=e.children;return(0,c.jsx)(i.Z,{component:"section",sx:s.section,children:(0,c.jsxs)(t.Z,{children:[n&&(0,c.jsx)(o.Z,{component:"h2",variant:"h2",sx:s.title,children:n}),r]})})}},4752:function(e,n,r){r.d(n,{j:function(){return a}});var i=r(1413),t=r(8217),o=r(4158),s=r(7689),c=r(3329),a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.ef,r=function(r){return(0,o.a)().isLoggedIn?(0,c.jsx)(s.Fg,{to:n}):(0,c.jsx)(e,(0,i.Z)({},r))};return r}},4322:function(e,n,r){r.d(n,{O:function(){return o}});var i=r(4942),t=r(1413),o=function(e){return e.reduce((function(e,n){return(0,t.Z)((0,t.Z)({},e),{},(0,i.Z)({},n.inputName,""))}),{})}},1584:function(e,n,r){r.r(n),r.d(n,{default:function(){return I}});var i=r(4270),t=r(8955),o=r(8870),s=r(3044),c=r(890),a=r(533),d=r(403),u=r(4752),l=r(9434),x=r(9273),p=r(1134),f=r(4695),h=r(6727),m=h.Ry().shape({email:h.Z_().required("This field is required").email("Invalid email format"),password:h.Z_().required("This field is required")}),j=r(4322),Z=r(6151),g=r(1340),v=r(5984),b=[{inputName:"email",type:"email",id:(0,v.x0)()},{inputName:"password",type:"password",id:(0,v.x0)()}],y={form:{display:"flex",flexDirection:"column",gap:"20px",width:{xs:"330px",sm:"400px"},margin:"0 auto"}},w=r(3329),_=(0,j.O)(b),q=function(){var e=(0,p.cI)({resolver:(0,f.X)(m),defaultValues:_}),n=e.register,r=e.formState.errors,i=e.handleSubmit,t=e.reset,s=(0,l.I0)();return(0,w.jsxs)(o.Z,{component:"form",sx:y.form,onSubmit:i((function(e){s((0,x.Ib)(e)),t()})),children:[b.map((function(e){var i=e.inputName,t=e.type,o=e.id;return(0,w.jsx)(g.W,{inputName:i,type:t,id:o,register:n,errors:r},o)})),(0,w.jsx)(Z.Z,{type:"submit",fullWidth:!0,variant:"contained",children:"Log in"})]})},k=r(2959),I=(0,u.j)((function(){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(i.q,{children:(0,w.jsx)("title",{children:"Log In"})}),(0,w.jsx)(t.$,{children:(0,w.jsxs)(o.Z,{sx:{marginTop:6,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,w.jsx)(s.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,w.jsx)(d.Z,{})}),(0,w.jsx)(c.Z,{component:"h1",variant:"h5",sx:{mb:3},children:"Sign in"}),(0,w.jsx)(q,{}),(0,w.jsx)(a.Z,{component:k.b,sx:{mt:3},to:"/register",children:"Don't have an account? Register"})]})})]})}),"/contacts")},403:function(e,n,r){var i=r(4836);n.Z=void 0;var t=i(r(5649)),o=r(3329),s=(0,t.default)((0,o.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");n.Z=s}}]);
//# sourceMappingURL=584.8eca4b66.chunk.js.map