"use strict";(self.webpackChunkmineflayer_guide=self.webpackChunkmineflayer_guide||[]).push([[815],{1193:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var t=n(5893),o=n(1151);const r={},s="Placing Blocks",i={id:"snippets/block_place",title:"Placing Blocks",description:"Targeting Blocks",source:"@site/docs/snippets/block_place.mdx",sourceDirName:"snippets",slug:"/snippets/block_place",permalink:"/mineflayer-guide/snippets/block_place",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/snippets/block_place.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Breaking Blocks",permalink:"/mineflayer-guide/snippets/block_break"},next:{title:"Using Buckets",permalink:"/mineflayer-guide/snippets/buckets"}},l={},a=[{value:"Targeting Blocks",id:"targeting-blocks",level:2},{value:"referenceBlock and faceVector",id:"referenceblock-and-facevector",level:2},{value:"Placing",id:"placing",level:2}];function d(e){const c={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.h1,{id:"placing-blocks",children:"Placing Blocks"}),"\n",(0,t.jsx)(c.h2,{id:"targeting-blocks",children:"Targeting Blocks"}),"\n",(0,t.jsxs)(c.p,{children:["You can target blocks by using functions such as ",(0,t.jsx)(c.code,{children:"bot.blockAtCursor()"}),", ",(0,t.jsx)(c.code,{children:"bot.findBlock()"}),"/",(0,t.jsx)(c.code,{children:"bot.findBlocks()"}),", ",(0,t.jsx)(c.code,{children:"bot.blockAt(vec3)"}),", and other methods."]}),"\n",(0,t.jsx)(c.h2,{id:"referenceblock-and-facevector",children:"referenceBlock and faceVector"}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.code,{children:"referenceBlock"})," is the block you want to place a new block against (next to, on top of, on bottom of)\n",(0,t.jsx)(c.code,{children:"faceVector"})," is one of the six cardinal directions, such as ",(0,t.jsx)(c.code,{children:"new Vec3(0, 1, 0)"})," for the top face, indicating which face of the referenceBlock to place the block against."]}),"\n",(0,t.jsx)(c.h2,{id:"placing",children:"Placing"}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",metastring:"copy",children:"const vec3 = require('vec3');\nlet referenceBlock = bot.blockAtCursor();\nlet faceVectorTop = new vec3(0, 1, 0);\nbot.placeBlock(referenceBlock, faceVectorTop);\n"})})]})}function p(e={}){const{wrapper:c}={...(0,o.a)(),...e.components};return c?(0,t.jsx)(c,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,c,n)=>{n.d(c,{Z:()=>i,a:()=>s});var t=n(7294);const o={},r=t.createContext(o);function s(e){const c=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function i(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:c},e.children)}}}]);