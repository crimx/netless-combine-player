# netless-combine-player

Synchronize video and whiteboard playback projects

[中文文档](/README-zh.md)

## Usages

```typescript
import CombinePlayerFactory from "netless-combine-player";

whiteWebSdk.replayRoom({ room, roomToken })
    .then(async (player) => {
        const combinePlayerFactory = new CombinePlayerFactory(player, {
            url: "video url",
            videoDOM: videoEle.current as HTMLVideoElement,
        });
        
        const combinePlayer = combinePlayerFactory.create();
        
        combinePlayer.setOnStatusChange((status, message) => {
            console.log("status change:", status, message);
        });


        await combinePlayer.play();
        await combinePlayer.seek(1000 * 60);
        await combinePlayer.pause();
    });
```

## API

### [CombinePlayerFactory](/src/index.ts#L8)

```typescript
new CombinePlayerFactory(whiteboard, videoOptions, debug);
```

#### [whiteboard](/src/index.ts#L10)

Generated by the `replayRoom` function

type: [Player](https://developer.netless.link/javascript-zh/home/player-methods#player-%E7%9A%84%E5%AE%9A%E4%B9%89)

#### [videoOptions](/src/index.ts#L9)

Video configuration items

type: [VideoOptions](a244cb8f9c5ab8570726bf33852c45/src/Types.ts#L4-L11)

**Type Details:**

```typescript
videoOptions: {
    url: string; // video url address
    videoDOM?: HTMLVideoElement // Which video tag to mount to(If you do not pass in, it will automatically create one)
    videoJsOptions?: import("video.js").VideoJsPlayerOptions // video.js options(see: https://docs.videojs.com/tutorial-options.html)
}
```

`videoJsOptions` defaults is:

```typescript
{
    preload: "auto"
}
```

#### [debug](/src/index.ts#L11)

Whether to enable debug log

type: `boolean`

default is: false

#### **Example:**

```typescript
whiteWebSdk.replayRoom({ room, roomToken })
    .then(player => {
        const combinePlayerFactory = new CombinePlayerFactory(player, {
            url: "video url",
            videoDOM: videoEle.current as HTMLVideoElement,
        });
    });
```

### [combinePlayerFactory.create](/src/index.ts#L39-L56)

Create an instance of the CombinePlayer and return

```typescript
const combinePlayer: CombinePlayer = combinePlayerFactory.create();
```

return type: [CombinePlayer](/src/Types.ts#L54-L60)

### [combinePlayerFactory.getVideoDOM](/src/index.ts#L58-L60)

Get the video element

This method can come in handy when the `CombinePlayerFactory` method is used and no `videoDOM` is passed in

```typescript
const videoDOM: HTMLVideoElement = combinePlayerFactory.getVideoDOM();
```

return type: `HTMLVideoElement`

### [combinePlayer.setOnStatusChange](/src/CombinePlayerImplement.ts#L55-L61)

Register a callback function to notify when the status changes

```typescript
combinePlayer.setOnStatusChange(statusOnChange);
```

#### [cb](/src/CombinePlayerImplement.ts#L59)

type: [StatusChangeHandle](/src/Types.ts#L52)

#### **Example:**

```typescript
const statusOnChange = (status: PublicCombinedStatus, message: string): void => {
   console.log("status change:", status, message);
}
combinePlayer.setOnStatusChange(statusOnChange);
```

### [combinePlayer.removeStatusChange](/src/CombinePlayerImplement.ts#L63-L71)

Remove the specified status notification callback

```typescript
combinePlayer.removeStatusChange(statusOnChange);
```

#### [cb](/src/CombinePlayerImplement.ts#L67)

type: [StatusChangeHandle](/src/Types.ts#L52)

#### **Example:**

```typescript
const statusOnChange = (status: PublicCombinedStatus, message: string): void => {
   console.log("status change:", status, message);
}
combinePlayer.setOnStatusChange(statusOnChange);

combinePlayer.removeStatusChange(statusOnChange);
```

### [combinePlayer.removeAllStatusChange](/src/CombinePlayerImplement.ts#L73-L78)

Remove all status notification callbacks

```typescript
combinePlayer.removeAllStatusChange();
```

### [combinePlayer.getStatus](/src/CombinePlayerImplement.ts#L80-L85)

Actively obtain the current status

```typescript
combinePlayer.getStatus()
```

return type: [PublicCombinedStatus](/src/Types.ts#L26-L34)

### [combinePlayer.play](/src/CombinePlayerImplement.ts#L90)

Start synchronized playback

return type: `Promise<void>`

#### **Example:**

```typescript
combinePlayer.play();
// or
await combinePlayer.play();
```

### [combinePlayer.pause](/src/CombinePlayerImplement.ts#L140)

Pause `video` and `whiteboard`

return type: `Promise<void>`

#### **Example:**

```typescript
combinePlayer.pause();
// or
await combinePlayer.pasue();
```

### [combinePlayer.seek](/src/CombinePlayerImplement.ts#L158)

```typescript
combinePlayer.seek(ms)
```

Synchronously jump to the specified millisecond timestamp

return type: `Promise<void>`

#### **Example:**

```typescript
combinePlayer.seek(1000);
// or
await combinePlayer.seek(1000);
```
