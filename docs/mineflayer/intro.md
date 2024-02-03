---
title: Introduction
sidebar_position: 0
---

# Introduction

Here you can find a collection of guides ranging from what users consider requiring basic to expert amount of knowledge.

```JS

let vec = require('vec3');
let { GoalLookAtBlock } = require('mineflayer-pathfinder').goals;

let sugar_cane = bot.findBlocks({
    matching: bot.registry.blocksByName['sugar_cane'].id,
    useExtraInfo: function(block) {
        return bot.blockAt(block.position.offset(0, -1, 0)).name === 'sugar_cane' && bot.blockAt(block.position.offset(0, -2, 0)).name !== 'sugar_cane'
    },
    count: 64
})

console.log(sugar_cane)

for(let a = 0; a < sugar_cane.length; a++) {
  let pos = sugar_cane[a];
  let block = bot.blockAt(pos);
  if(block.name !== 'sugar_cane') {
    console.log('The block is no longer sugar cane')
    continue;
  }

  await bot.pathfinder.goto(new GoalLookAtBlock(pos, bot.world, { reach: 3 })).catch(console.log)

  //await bot.lookAt(pos, true);
  await bot.dig(block).catch(console.log);

}
```