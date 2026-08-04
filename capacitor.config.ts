import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mohit.ecampus',
  appName: 'ECampus',
  webDir: 'www',

  server: {
    allowNavigation: [
      'mohitasdeveloper.github.io'
    ]
  },

  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      backgroundColor: "#ffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP"
    },

    StatusBar: {
      overlaysWebView: false,
      backgroundColor: "#ffffff",
      style: "LIGHT"
    },

    Keyboard: {
      resize: "body",
      resizeOnFullScreen: true
    }
  }
};

export default config;
