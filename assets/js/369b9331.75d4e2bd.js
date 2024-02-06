"use strict";(self.webpackChunkmineflayer_guide=self.webpackChunkmineflayer_guide||[]).push([[187],{5177:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var i=t(5893),s=t(1151);const o={},c="Breaking Blocks",r={id:"snippets/block_break",title:"Breaking Blocks",description:"Targeting Blocks",source:"@site/docs/snippets/block_break.mdx",sourceDirName:"snippets",slug:"/snippets/block_break",permalink:"/mineflayer-guide/snippets/block_break",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/snippets/block_break.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Attack Entities",permalink:"/mineflayer-guide/snippets/attack"},next:{title:"Placing Blocks",permalink:"/mineflayer-guide/snippets/block_place"}},l={},a=[{value:"Targeting Blocks",id:"targeting-blocks",level:2},{value:"Breaking Blocks",id:"breaking-blocks-1",level:2},{value:"Recursive Digging",id:"recursive-digging",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"breaking-blocks",children:"Breaking Blocks"}),"\n",(0,i.jsx)(n.h2,{id:"targeting-blocks",children:"Targeting Blocks"}),"\n",(0,i.jsxs)(n.p,{children:["You can target blocks by using functions such as ",(0,i.jsx)(n.code,{children:"bot.blockAtCursor()"}),", ",(0,i.jsx)(n.code,{children:"bot.findBlock()"}),"/",(0,i.jsx)(n.code,{children:"bot.findBlocks()"}),", ",(0,i.jsx)(n.code,{children:"bot.blockAt(vec3)"}),", and other methods."]}),"\n",(0,i.jsx)(n.h2,{id:"breaking-blocks-1",children:"Breaking Blocks"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:"copy",children:"let block = bot.blockAtCursor(3.5); // Max Distance: 3.5\nif(!block) return console.log('There is no reachable block at my cursor');\nbot.dig(bot.blockAtCursor());\n"})}),"\n",(0,i.jsx)(n.h2,{id:"recursive-digging",children:"Recursive Digging"}),"\n",(0,i.jsxs)(n.p,{children:['This is a simple method of "Recursive Digging" (',(0,i.jsx)(n.a,{href:"https://github.com/Pix3lPirat3/mineflayer-consistent-miner/",children:"Consistent Miner by Pix3lPirat3"}),")"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:"copy",children:"bot.on('physicsTick', async function() {\n    if(bot.targetDigBlock) return;\n    let block = bot.blockAtCursor(4.5);\n    if(!block) console.log('No block at cursor');\n    await bot.dig(block);\n});\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>c});var i=t(7294);const s={},o=i.createContext(s);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);