(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{df9066923737f7d6d23f:function(e,t,i){"use strict";i.r(t);var n=i("8af190b70a6bc55c6f1b"),a=i.n(n),l=i("1c63112c967e33335e26"),r=i("6ca708da5cb701b10925"),o=i("02a04198e0ff5ab16cc0"),c=(Object(l.c)(["font-family:'metropolis',Arial,Helvetica,sans-serif;"]),Object(l.c)([""," cursor:pointer;&:hover{opacity:0.7;}&:active{transition:none;opacity:0.4;}"],Object(o.transitions)(["opacity"],"0.2s"))),s=i("005e16297589c5d24e22");function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=[],n=!0,a=!1,l=void 0;try{for(var r,o=e[Symbol.iterator]();!(n=(r=o.next()).done)&&(i.push(r.value),!t||i.length!==t);n=!0);}catch(e){a=!0,l=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw l}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=Object(l.d)(s.a).withConfig({displayName:"Item__LeftIcon",componentId:"nv875-0"})(["display:flex;width:2rem;height:2rem;margin-top:0.2rem;margin-right:0.5rem;color:red;opacity:",";"],function(e){return e.disabled?.3:1}),p=l.d.div.withConfig({displayName:"Item__NotAvailableWrapper",componentId:"nv875-1"})([""," display:flex;justify-content:center;align-items:center;& span{font-size:0.8rem;}"],Object(o.cover)()),d=l.d.span.withConfig({displayName:"Item__Subtitle",componentId:"nv875-2"})(["font-size:0.7rem;text-align:left;color:",";"],function(e){return e.theme.textSecondary}),f=l.d.span.withConfig({displayName:"Item__Title",componentId:"nv875-3"})(["font-size:1rem;font-weight:500;text-align:left;margin-bottom:0.5rem;"]),b=l.d.div.withConfig({displayName:"Item__TitleWrapper",componentId:"nv875-4"})(["display:flex;flex-direction:column;padding:0 0.2rem 0.2rem 0.2rem;opacity:",";"],function(e){return e.disabled?.3:1}),h=l.d.a.withConfig({displayName:"Item__Wrapper",componentId:"nv875-5"})(["display:flex;position:relative;text-decoration:none;color:",";margin:1rem 0rem;",""],function(e){return e.theme.text},function(e){return e.isAvailable?c:""}),g=Object(n.memo)(function(e){var t=m(Object(n.useState)(),2),i=t[0],l=t[1];function r(){l(!i)}return a.a.createElement(h,{onClick:function(t){t.preventDefault(),e.onItemClick()},onMouseEnter:r,onMouseLeave:r,isAvailable:e.isAvailable},!e.isAvailable&&a.a.createElement(p,null,a.a.createElement("span",null,"Available Soon...")),a.a.createElement(u,{disabled:!e.isAvailable,iconType:e.icon}),a.a.createElement(b,{disabled:!e.isAvailable},a.a.createElement(f,null,e.title),a.a.createElement(d,null,e.subtitle)))}),v=l.d.span.withConfig({displayName:"Section__MainPageSection",componentId:"trml85-0"})(["color:",";font-size:0.8rem;text-align:center;margin-bottom:0.5rem;"],function(e){return e.theme.brand}),y=[{title:"Calculators",items:[{icon:"unit_converter",path:"unit-converter",title:"Unit Converter",subtitle:"Convert mass, length and force into other units",isAvailable:!0},{icon:"tension",path:"tension-calculator",title:"Tension Calculator",subtitle:"Calculate the tension of the line",isAvailable:!0},{icon:"stability_calculator",path:"",title:"Stability Calculator",subtitle:"Calculate the stability of the anchors",isAvailable:!0},{icon:"backup_simulator",path:"",title:"Backup Fall Simulator",subtitle:"Simulate the backup fall for your highline",isAvailable:!0},{icon:"maps_distance",path:"",title:"Distance Measurer",subtitle:"Measure the distance between two points using google maps",isAvailable:!1}]},{title:"Gears",items:[{icon:"stretch_chart",path:"",title:"Webbing Comparison",subtitle:"Compare webbings by stretch ratio, price, weight etc...",isAvailable:!0},{icon:"scatter_graph",path:"",title:"Weblock Comparison",subtitle:"Compare weblocks by price and weight",isAvailable:!0}]},{title:"Knowledge",items:[{icon:"recommended",path:"",title:"Recommended Articles",subtitle:"Essential Articles & Publications in your pocket",isAvailable:!0},{icon:"tutorial",path:"",title:"Tutorials",subtitle:"Online tutorials for everyone",isAvailable:!1}]},{title:"Community",items:[{icon:"maps",path:"",title:"Slackmap",subtitle:"Find slackliners, groups and spots on slackmap.com",isAvailable:!1}]},{title:"Personal",items:[{icon:"collection",path:"",title:"My Bookmarks",subtitle:"Bookmark your own links, pdfs, posts etc... to access later",isAvailable:!1}]}],w=[{title:"Certificates",items:[{icon:"instructor_certificate",path:"instructor-certificate-explorer",title:"Instructor Certificate Explorer",subtitle:"Check the certificate of an instructor",isAvailable:!0},{icon:"rigger_certificate",path:"",title:"Rigger Certificate Explorer",subtitle:"Check the certificate of a rigger",isAvailable:!1},{icon:"gear_certificate",path:"",title:"Gear Certificate Explorer",subtitle:"Check the certificate of a gear",isAvailable:!1}]},{title:"Miscellaneous",items:[{icon:"risk_builder",path:"",title:"Risk Management Builder",subtitle:"Construct a risk management document",isAvailable:!1}]}],C=i("d10f0e2a072e2f2b3620"),_=i("d7dd51e1bf6bfc2c9c3d"),k=i("3aced5b508e7389026da");function x(){var e=j(["\n    margin-top: 5em;\n    margin-bottom: 2em;\n    align-items: flex-start;\n  "]);return x=function(){return e},e}function A(){var e=j(["\n    display: none;\n  "]);return A=function(){return e},e}function E(){var e=j(["\n    flex-direction: row;\n    flex-wrap: wrap;\n  "]);return E=function(){return e},e}function I(){var e=j(["\n    margin: 0em 3em 2em 0em;\n    width: 15em;\n  "]);return I=function(){return e},e}function j(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function N(e){var t=y;"/isa"===e.location.pathname&&(t=w);var i=Object(_.useDispatch)();return n.createElement(C.a,null,n.createElement(M,null,n.createElement(T,null,n.createElement(W,null,"Tools and resources you need ",n.createElement("br",null),n.createElement(W,{style:{fontWeight:"bold"}},"ACCESS OFFLINE"))),n.createElement(P,null,t.map(function(e,t){return n.createElement(n.Fragment,{key:t},n.createElement(O,null,n.createElement(v,null,e.title),e.items.map(function(t,a){return n.createElement(n.Fragment,{key:a},n.createElement(g,{key:a,onItemClick:(l=t.path,function(){i(Object(k.push)(l))}),icon:t.icon,title:t.title,subtitle:t.subtitle,isAvailable:t.isAvailable}),a!==e.items.length-1&&n.createElement(S,null));var l})))}))))}i.d(t,"default",function(){return N});var S=l.d.div.withConfig({displayName:"HomePage__Divider",componentId:"sc-5uhj72-0"})(["display:flex;height:1px;background-color:",";"],function(e){return e.theme.border}),O=l.d.div.withConfig({displayName:"HomePage__SectionWrapper",componentId:"sc-5uhj72-1"})(["display:flex;flex-direction:column;margin:0em 1em 1.5em 1em;max-width:66vw;",";"],r.a.desktop(I())),P=l.d.div.withConfig({displayName:"HomePage__ItemsWrapper",componentId:"sc-5uhj72-2"})(["display:flex;flex-direction:column;",";"],r.a.desktop(E())),T=l.d.span.withConfig({displayName:"HomePage__TextSection",componentId:"sc-5uhj72-3"})(["display:flex;margin-bottom:2em;",";"],r.a.desktop(A())),W=l.d.span.withConfig({displayName:"HomePage__Text",componentId:"sc-5uhj72-4"})(["align-self:center;font-size:1em;text-align:center;line-height:2em;"]),M=l.d.div.withConfig({displayName:"HomePage__Wrapper",componentId:"sc-5uhj72-5"})(["display:flex;flex-direction:column;align-items:center;width:100%;",";"],r.a.desktop(x()))}}]);