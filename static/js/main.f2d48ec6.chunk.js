(this["webpackJsonpreact-dnd-players"]=this["webpackJsonpreact-dnd-players"]||[]).push([[0],{99:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),i=r(73),c=r.n(i),o=r(121),l=r(12),d=r(4),u=r(115),s=r(116),b=r(122),j=r(117),x=r(123),g=r(120),O=r(29),p=r(119),m=r(5),f=function(e){var t=e.item,r=e.playerType,n=e.onDropPlayer,a=e.index,i=Object(p.a)({type:r,item:function(){return Object(O.a)(Object(O.a)({},t),{},{index:a})},end:function(e,t){var r=t.getDropResult();e&&r&&n(e)},collect:function(e){return{isDragging:e.isDragging()}}}),c=Object(d.a)(i,2),o=c[0].isDragging,l=c[1];return Object(m.jsx)(x.b,{p:"2",borderRadius:"md",boxShadow:"md",mb:"2",textAlign:"center",ref:l,bg:o?"player"===r?"yellow.600":"teal.400":"white",color:o?"white":"black",children:t.name})},h=r(124),y=r(125),v="card",w={border:"1px dashed gray",padding:"0.5rem 1rem",marginBottom:".5rem",backgroundColor:"white",cursor:"move"},D=Object(n.forwardRef)((function(e,t){var r=e.text,a=e.isDragging,i=e.connectDragSource,c=e.connectDropTarget,o=Object(n.useRef)(null);i(o),c(o);var l=a?0:1;return Object(n.useImperativeHandle)(t,(function(){return{getNode:function(){return o.current}}})),Object(m.jsx)("div",{ref:o,style:Object(O.a)(Object(O.a)({},w),{},{opacity:l}),children:r})})),S=Object(h.a)(v,{hover:function(e,t,r){if(!r)return null;var n=r.getNode();if(!n)return null;var a=t.getItem().index,i=e.index;if(a!==i){var c=n.getBoundingClientRect(),o=(c.bottom-c.top)/2,l=t.getClientOffset().y-c.top;a<i&&l<o||a>i&&l>o||(e.moveCard(a,i),t.getItem().index=i)}}},(function(e){return{connectDropTarget:e.dropTarget()}}))(Object(y.a)(v,{beginDrag:function(e){return{id:e.id,index:e.index}}},(function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}))(D)),P=r(97);var R=function(){var e=Object(n.useState)([{name:"Player 1"},{name:"Player 2"},{name:"Player 3"},{name:"Player 4"},{name:"Player 5"},{name:"Player 6"},{name:"Player 7"},{name:"Player 8"}]),t=Object(d.a)(e,2),r=t[0],a=t[1],i=Object(n.useState)([{id:1,text:"Write a cool JS library"},{id:2,text:"Make it generic enough"},{id:3,text:"Write README"},{id:4,text:"Create some examples"},{id:5,text:"Spam in Twitter and IRC to promote it (note that this element is taller than the others)"},{id:6,text:"???"},{id:7,text:"PROFIT"}]),c=Object(d.a)(i,2),o=c[0],O=c[1],p=function(e,t){var r=o[e];O(P(o,{$splice:[[e,1],[t,0,r]]}))},h=Object(n.useState)([]),y=Object(d.a)(h,2),v=y[0],w=y[1],D=Object(g.a)({accept:"player",collect:function(e){return{isOver:!!e.isOver()}}}),R=Object(d.a)(D,2),T=R[0].isOver,C=R[1];console.log(T);var A=Object(g.a)({accept:"team",collect:function(e){return{isOver:!!e.isOver()}}}),k=Object(d.a)(A,2),I=k[0].isOver,E=k[1],M=function(e){console.log(e),a((function(t){return t.filter((function(t,r){return e.index!==r}))})),w((function(t){return[].concat(Object(l.a)(t),[e])}))},z=function(e){w((function(t){return t.filter((function(t,r){return e.index!==r}))})),a((function(t){return[].concat(Object(l.a)(t),[e])}))};return Object(m.jsxs)(u.a,{maxW:"800px",children:[Object(m.jsxs)(s.a,{justify:"space-between",height:"90vh",align:"center",children:[Object(m.jsxs)(b.a,{width:"300px",children:[Object(m.jsx)(j.a,{fontSize:"3xl",color:"teal.800",textAlign:"center",children:"TEAM"}),Object(m.jsx)(x.a,{bgGradient:T?"linear(to-b, teal.300, teal.500)":"linear(to-b, teal.100, teal.200)",ref:C,minH:"70vh",boxShadow:"xl",borderRadius:"md",p:"4",children:v.map((function(e,t){return Object(m.jsx)(f,{item:e,index:t,playerType:"team",onDropPlayer:z},t)}))})]}),Object(m.jsxs)(b.a,{width:"300px",children:[Object(m.jsx)(j.a,{fontSize:"3xl",color:"",textAlign:"center",children:"PLAYERS"}),Object(m.jsx)(x.a,{bgGradient:I?"linear(to-b, yellow.300, yellow.500)":"linear(to-b, yellow.100, yellow.200)",ref:E,p:"4",minH:"70vh",boxShadow:"",borderRadius:"md",children:r.map((function(e,t){return Object(m.jsx)(f,{item:e,playerType:"player",onDropPlayer:M,index:t},t)}))})]})]}),Object(m.jsxs)("div",{style:{marginTop:"40px"},children:[Object(m.jsx)(j.a,{fontSize:"3xl",color:"",textAlign:"center",children:"Sorting Cards and Dragging order"}),o.map((function(e,t){return Object(m.jsx)(S,{index:t,id:e.id,text:e.text,moveCard:p},e.id)}))]})]})},T=r(118),C=r(80);c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(T.a,{backend:C.a,children:Object(m.jsx)(o.a,{children:Object(m.jsx)(R,{})})})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.f2d48ec6.chunk.js.map