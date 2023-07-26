# Expo Firebase Email Authentication
This project is a mobile application developed using Expo React Native, integrated with Firebase services for authentication.

## Key Features:
- _User Authentication:_ The app allows users to sign up and log in securely using their email and password. Firebase Authentication is used to manage user registration and login processes.

## Technologies Used:
- _Expo:_ Expo is a development framework that enables rapid prototyping and development of cross-platform mobile applications.

- _React Native:_ React Native is used to build the user interface of the app, allowing the app to run on both iOS and Android devices.

- _Firebase:_ Firebase provides various cloud-based services, including authentication and real-time database, which are integrated into the app to store user data and enable user authentication.

## Dependencies:
- @react-navigation/native : "^6.1.7",
- @react-navigation/native-stack : "^6.9.13",
- expo : "~49.0.5",
- expo-status-bar : "~1.6.0",
- firebase : "^10.1.0",
- react : "18.2.0",
- react-native : "0.72.3",
- react-native-safe-area-context : "4.6.3",
- react-native-screens : "~3.22.0"

## Setup Instructions:
1. Clone this repository to your local machine.
2. Install Node.js and npm if not already installed.
3. Run `npm install` to install project dependencies.
4. Add your Firebase configuration to the app.

## Steps to configure Firebase for your mobile app:

1. Create a Firebase Project:
    - Go to the Firebase Console (https://console.firebase.google.com/) and sign in with your Google account.
    - Click on the "Add project" button to create a new Firebase project.
    - Follow the on-screen instructions to set a project name and enable Google Analytics (optional).
    - Once the project is created, you will be redirected to the project dashboard.

2. Register Your App with Firebase:
    - In the Firebase project dashboard, click on the "Add app" button (web, Android, or iOS) to register your app with Firebase.
    - Provide the necessary information for your platform (e.g., Android package name or iOS bundle identifier).

## Running the App:
- To run the app on a local development server, execute `expo start` in the project directory. This will open the Expo Developer Tools in your web browser. You can then use the Expo Go app on your mobile device or an emulator to preview the app.
