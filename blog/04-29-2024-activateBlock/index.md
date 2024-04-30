---
slug: activateBlock
title: activateBlock
authors: [pix3lpirat3]
tags: [activateBlock, button, door, trapdoor]
---

# Activating Blocks

## Targeting Blocks
Remember to properly target your block, and catch if there is no found block.

Singular Block:
```js
let block = bot.findBlock({
  matching: bot.registry.blocksByName['oak_door'].id,
  maxDistance: 5
})
if(!block) return console.log('There were no blocks found!')
```

Multiple Blocks:
```JS
let blocks = bot.findBlocks({
  matching: bot.registry.blocksByName['oak_door'].id,
  maxDistance: 5,
  count: 3
}).map(loc => bot.blockAt(loc)) // returns a [Vec3], map to [Block]
if(!blocks) return console.log('There were no blocks found!')
```

Block at Cursor:
```JS
let block = bot.blockAtCursor(maxDistance);
```

Then remember to **look at** the block if needed
```jS
await bot.lookAt(block.position) // <-- and learn to use async/await
bot.activateBlock(block);
```

## Using Doors / Trapdoors

```js
let block = bot.findBlock({
  matching: bot.registry.blocksByName['oak_door'].id,
  maxDistance: 5
})
await bot.lookAt(block.position)
bot.activateBlock(block);
```

## Using Button
```js
let block = bot.findBlock({
  matching: bot.registry.blocksByName['oak_button'].id,
  maxDistance: 5
})
await bot.lookAt(block.position) // <-- buttons have a funny position, block face too
bot.activateBlock(block);
```