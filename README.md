# React Native Bank App

A simple React Native bank app with the following features:

- Transaction History screen with pull to refresh functionality
- Transaction Detail screen to view detailed transaction information
- Biometric authentication

## Installation and Running the Project

1. Clone the repository:

```bash
git clone https://github.com/CharaeKeow/react-native-bank-app.git
cd react-native-bank-app
```

2. Install dependency using this command

```bash
  pnpm install
```

**Note:** I am using `pnpm` as my package manager. Due to time constraint, I did't test whether other package manager like `npm` or `yarn` can run installation command or start project

3. Start the development server by running `pnpm start`.

   **Note:** I am testing my app via Expo Go, so this command without flag is suffice. Due to time constraint, I also didn't test whether running `pnpm start` with flag will produce any error or not.

4. To view the app, download [Expo Go](https://expo.dev/go) app, and scan the QR code show on the console. You should expect to see the app in action

## Development Design Decision Log

This is the log for any development and design thought (such as which library I used, data structure, etc.) through out the development process

### Project Setup Note

This repo is initialized from [Expo TypeScript template](https://docs.expo.dev/more/create-expo/#--template). I opted for this template instead of default one because for the sake's of learning and refreshing my React Native and Expo knowledge, starting from bare minimum is better.

Besides, I also opted to just use [Expo Go](https://expo.dev/go) when developing this app instead of development build, due to I don't want to deal with the Android/iOS emulator setup, which I assume will take quite some time last time, based on past experience when I was doing React Native development back in 2021-22.

### Expo Router

[Expo Router](https://docs.expo.dev/router/introduction/) is chosen for routing. I worked with [React Navigation](https://reactnavigation.org/) last time, but it's been a while, and this time I want to try something new. First impression is it looks similar with Next routing, which is nice.

### Transactions Data

The dummy transactions data are located in `/data/transaction-data.json`, which contains 20 fake transactions. They are wrapped in a container object rather than a plain array, to mimic typical API response:

```json
{
  "transactions": [
    /* array of transactions */
  ]
}
```

The data structure follows `Transaction` type declared in `/types.ts`

### Pull to Refresh

For pull to refresh, I am utilizing [FlatList](https://reactnative.dev/docs/flatlist) component `refreshControl` props. To my surprise it's quite easy to setup. To simulate refreshing data, I removed 1 item (using `Array.splice()`) from the transactions data. Then on refresh, I replace the original data with full transactions data.

### Authentication

For authentication, I am using [Expo LocalAuthentication](https://docs.expo.dev/versions/latest/sdk/local-authentication/) library. For quick testing, there is a **"Login"** button at the top of the Transaction History page, which will trigger the biometric authentication on click. Once login, the same button can be used to logout - which is basically just resetting the `isAuthenticated` status in auth provider to false. This provider is used to store the login state through out different screens.

Besides, the Transaction Detail page also require user to be authenticated to view the content. Hence, if user is not authenticated and try to view the transaction detail, they will be prompted to login via biometrics.

### Device Used for Development

This development is using my Samsung Galaxy A54 via Expo Go.

### Things that are nice to include but didn't due to time constraint

- NativeWind - due to I am too used to Tailwind for CSS
- TypeScript import alias
- Sort transactions by date - currently the transactions data in `.json` file are in ascending order (by date).
- Data are being fetched on the fly. If on web I would use `react-query` or equivalent library so that we can cache the data
