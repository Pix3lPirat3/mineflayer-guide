"use strict";(self.webpackChunkmineflayer_guide=self.webpackChunkmineflayer_guide||[]).push([[3109],{9034:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=i(5893),t=i(1151);const s={},c="Cuboid Mining",r={id:"snippets/cuboid_mining",title:"Cuboid Mining",description:"I created a tool for defining a cuboid to make it easier to define and interact with a cuboid region. You'll need to use vec3 aswell.",source:"@site/docs/snippets/cuboid_mining.mdx",sourceDirName:"snippets",slug:"/snippets/cuboid_mining",permalink:"/mineflayer-guide/snippets/snippets/cuboid_mining",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Buckets",permalink:"/mineflayer-guide/snippets/snippets/buckets"},next:{title:"onMsaCode",permalink:"/mineflayer-guide/snippets/snippets/onMsaCode"}},a={},l=[];function d(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"cuboid-mining",children:"Cuboid Mining"}),"\n",(0,o.jsx)(n.h1,{id:"cuboid-class",children:"Cuboid Class"}),"\n",(0,o.jsxs)(n.p,{children:["I created a ",(0,o.jsx)(n.a,{href:"https://github.com/Pix3lPirat3/mineflayer-cuboid",children:"tool"})," for defining a cuboid to make it easier to define and interact with a cuboid region. You'll need to use ",(0,o.jsx)(n.a,{href:"https://github.com/PrismarineJS/node-vec3",children:"vec3"})," aswell."]}),"\n",(0,o.jsx)(n.h1,{id:"installing",children:"Installing"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"copy",children:"npm install mineflayer-cuboid\nnpm install node-vec3\n"})}),"\n",(0,o.jsx)(n.h1,{id:"defining",children:"Defining"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:"copy",children:"const Cuboid = require('mineflayer-cuboid');\nvar v = require('vec3');\n"})}),"\n",(0,o.jsx)(n.h1,{id:"defining-cuboid",children:"Defining Cuboid"}),"\n",(0,o.jsxs)(n.p,{children:["You'll need to define your cuboid, meaning the two corners ",(0,o.jsx)(n.code,{children:"point1"})," and ",(0,o.jsx)(n.code,{children:"point2"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:"copy",children:"let cube = new Cuboid(v(0, 0, 0), v(5, 5, 5));\n"})}),"\n",(0,o.jsx)(n.h1,{id:"cuboid-positions",children:"Cuboid Positions"}),"\n",(0,o.jsxs)(n.p,{children:["You'll then use ",(0,o.jsx)(n.code,{children:"getPositions()"})," to return an Array of block positions in your cube."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:"copy",children:"let positions = cube.getPositions(); // [vec3]\n"})}),"\n",(0,o.jsx)(n.h1,{id:"position-looping",children:"Position Looping"}),"\n",(0,o.jsxs)(n.p,{children:["Then by looping through all the positions in the cube, we'll get the block at that position using ",(0,o.jsx)(n.code,{children:"bot.blockAt(vec3)"}),", and dig it out. If it's an air block we can ignore it, so we use ",(0,o.jsx)(n.code,{children:"continue"})," to skip to the next position."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:"copy",children:"for(let a = 0; a < positions.length; a++) {\n  let pos = positions[a];\n  let block = bot.blockAt(pos);\n  if(block.name === 'air') continue;\n  await bot.dig(block);\n}\n"})}),"\n",(0,o.jsx)(n.h1,{id:"pathfinding",children:"Pathfinding"}),"\n",(0,o.jsxs)(n.p,{children:["If you're out of reach of blocks then you'll need to use the library ",(0,o.jsx)(n.a,{href:"https://github.com/PrismarineJS/mineflayer-pathfinder",children:"mineflayer-pathfinder"})," to navigate to blocks."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:"copy",children:"for(let a = 0; a < positions.length; a++) {\n  let pos = positions[a];\n  let block = bot.blockAt(pos);\n  if(block.name === 'air') continue;\n  await bot.pathfinder.goto(new GoalLookAtBlock(pos, bot.world, { reach: 4.5 }))\n  await bot.dig(block);\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>c});var o=i(7294);const t={},s=o.createContext(t);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);