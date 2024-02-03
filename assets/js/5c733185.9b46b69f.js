"use strict";(self.webpackChunkmineflayer_guide=self.webpackChunkmineflayer_guide||[]).push([[7037],{8002:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var i=t(5893),r=t(1151);const s={},o="Using Armor",a={id:"snippets/armor",title:"Using Armor",description:"You can equip or unequip armor by passing an Item and Destination. (Destinations: head, torso, legs, feet)",source:"@site/docs/snippets/armor.mdx",sourceDirName:"snippets",slug:"/snippets/armor",permalink:"/mineflayer-guide/snippets/armor",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/snippets/armor.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Snippets",permalink:"/mineflayer-guide/category/snippets"},next:{title:"Attack Entities",permalink:"/mineflayer-guide/snippets/attack"}},c={},p=[{value:"Equipping Armor",id:"equipping-armor",level:2},{value:"Unequip Armor",id:"unequip-armor",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"using-armor",children:"Using Armor"}),"\n",(0,i.jsxs)(n.p,{children:["You can ",(0,i.jsx)(n.code,{children:"equip"})," or ",(0,i.jsx)(n.code,{children:"unequip"})," armor by passing an ",(0,i.jsx)(n.code,{children:"Item"})," and ",(0,i.jsx)(n.code,{children:"Destination"}),". (Destinations: head, torso, legs, feet)"]}),"\n",(0,i.jsx)(n.h2,{id:"equipping-armor",children:"Equipping Armor"}),"\n",(0,i.jsxs)(n.p,{children:["The basic function for equipping armor is ",(0,i.jsx)(n.code,{children:"bot.equip(item, destination)"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:"copy",children:"let item = bot.inventory.items().find(item => item.name === 'diamond_helmet');\nbot.equip(item, 'head')\n"})}),"\n",(0,i.jsx)(n.h2,{id:"unequip-armor",children:"Unequip Armor"}),"\n",(0,i.jsxs)(n.p,{children:["Passing a ",(0,i.jsx)(n.code,{children:"desination"})," will remove the item from that slot and place it into an empty inventory slot."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:"copy",children:"bot.unequip('head')\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(7294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);