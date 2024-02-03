---
title: createBot
sidebar_position: 1
---

# createBot

Once you've got the module defined you can then use the `createBot` function from the [Mineflayer API](https://github.com/PrismarineJS/mineflayer/blob/master/docs/api.md) to define your bot.

```js copy
let bot = mineflayer.createBot({ })
```

## createBot Settings

There are various settings for [createBot](https://github.com/PrismarineJS/mineflayer/blob/master/docs/api.md#mineflayercreatebotoptions), however the basic settings you'll need for this are; `username`, `host`, `port`, and `version`. 

```js copy
let bot = mineflayer.createBot({
  username: 'YourUsername',
  host: 'localhost',
  port: 25565,
  version: '1.20'
})

bot.on('error', console.log)
bot.on('kicked', console.log)
```

## Launching

If you launch the code at this point you may see an error message, kicked message, or an authentication request.