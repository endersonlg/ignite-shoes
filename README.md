# Ignite Shoes - React Native Application with Expo

This is a React Native project developed with Expo that simulates an online shoe store. The primary focus of this project is the integration of push notifications and the use of deep linking to enhance the user experience.

## Features

- Intuitive navigation to explore a variety of shoes.
- Adding products to the shopping cart.
- **Push Notifications:**
  - Receiving push notifications even when the app is minimized or closed.
  - Displaying notifications as toasts when the app is in the foreground.
- **Deep Linking:**
  - Support for deep links that directly redirect to a specific product or the shopping cart.

## Installation and Usage

1. Clone this repository:

```
git clone https://github.com/endersonlg/ignite-shoes.git
cd ignite-shoes
```
2. Install dependencies:
   
```
npm install
```

3. After installing the dependencies, open the app.tsx file in your project and find the section related to configuring push notifications. Replace the code with your actual OneSignal App ID. Save the changes and proceed with running the project:
   
 ```
 npx expo run:android
 ```

4. Open the Expo app on your device or emulator.
   
## Push Notification Configuration
To test push notifications, you'll need to configure API keys for the notification service and handle the logic for sending notifications. Refer to the Expo documentation for more information on setting up push notifications: Expo Push Notifications Documentation.

## Deep Linking Configuration
Deep linking support enables you to redirect users to specific app screens based on URLs. To set up deep linking, consult the React Navigation documentation: React Navigation Deep Linking.

## Contribution
If you'd like to contribute to this project, feel free to submit a pull request. I'll be happy to review and merge contributions.
