# React Native Bank App

## Project Setup Note

This repo is initialized from [Expo TypeScript template](https://docs.expo.dev/more/create-expo/#--template). I opted for this template instead of default one because for the sake's of learning and refreshing my React Native and Expo knowledge, starting from bare minimum is better.

Besides, I also opted to just use [Expo Go](https://expo.dev/go) when developing this app instead of development build, due to I don't want to deal with the Android/iOS emulator setup, which I assume will take quite some time last time, based on past experience when I was doing React Native development back in 2021-22.

## Expo Router

[Expo Router](https://docs.expo.dev/router/introduction/) is chosen for routing. I worked with [React Navigation](https://reactnavigation.org/) last time, but it's been a while, and this time I want to try something new. First impression is it looks similar with Next routing, which is nice.

## Transactions Data

The dummy transactions data are located in `/data/transaction-data.json`, which contains 20 fake transactions. They are wrapped in a container object rather than a plain array, to mimic typical API response:

```json
{
  "transactions": [
    /* array of transactions */
  ]
}
```

The data structure follows `Transaction` type declared in `/types.ts`
