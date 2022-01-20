Installation
1 Install brew https://brew.sh/
2 Install Node
*brew install node
*brew install watchman
3 Install JDK
https://www.oracle.com/java/technologies/downloads/
4 Clone the project
5 Go to project and run was #NPM Install
For Android


Install Android Studio
Download and install Android Studio. While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:
Android SDK
Android SDK Platform
Android Virtual Device


Install the Android SDK
Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 10 (Q) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.
To do that, open Android Studio, click on "Configure" button and select "SDK Manager".


Configure the ANDROID_HOME environment variable
The React Native tools require some environment variables to be set up in order to build apps with native code.
Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc (if you are using zsh then ~/.zprofile or ~/.zshrc) config file:
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools


4 Command for Run #react-native run-android
For IOS
1 Install Xcode
2 Run comand cd ios && pod install
3 Command for Run #react-native run-ios or run from xcode

For Android 

1 React-native run-android



First Screen

<img width="325" alt="Screenshot 2022-01-20 at 4 30 00 PM" src="https://user-images.githubusercontent.com/12965388/150338706-4241c031-49af-4f91-8cbb-ac126be479f1.png">

Second Screen for set the limit


<img width="329" alt="Screenshot 2022-01-20 at 4 30 12 PM" src="https://user-images.githubusercontent.com/12965388/150338928-cd90b282-36af-4fe8-aa20-37f538fe0b08.png">

<img width="322" alt="Screenshot 2022-01-20 at 6 00 56 PM" src="https://user-images.githubusercontent.com/12965388/150339140-8bd16951-0ffc-4078-9a1d-d39c116f9476.png">

 
