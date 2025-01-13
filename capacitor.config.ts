import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.diabetes.tracker',
  appName: 'DiabetesTracker',
  webDir: 'build',
  server: {
    androidScheme: 'https',
    cleartext: true,
  },
  plugins: {
    BluetoothLe: {
      displayStrings: {
        scanning: "Searching for devices...",
        cancel: "Cancel",
        availableDevices: "Available Devices",
        noDeviceFound: "No devices found",
        connecting: "Connecting...",
        cancel_scan: "Stop Scan",
      },
      androidConfiguration: {
        scanMode: "SCAN_MODE_LOW_LATENCY",
        callbackType: "CALLBACK_TYPE_ALL_MATCHES",
        matchMode: "MATCH_MODE_AGGRESSIVE",
        numOfMatches: "MATCH_NUM_MAX_ADVERTISEMENT",
        reportDelay: 0
      },
      services: [
        {
          uuid: '00001808-0000-1000-8000-00805f9b34fb', // Glucose Service
          characteristics: [
            {
              uuid: '00002a18-0000-1000-8000-00805f9b34fb', // Glucose Measurement
              permissions: ['read'],
              properties: ['notify']
            },
            {
              uuid: '00002a52-0000-1000-8000-00805f9b34fb', // Record Access Control Point
              permissions: ['read', 'write'],
              properties: ['indicate', 'write']
            }
          ]
        }
      ]
    },
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#488AFF",
      sound: "beep.wav",
    },
    App: {
      backgroundColor: "#FFFFFF",
      hideStatusBar: false,
      statusBarStyle: "dark",
    }
  },
  android: {
    backgroundColor: "#FFFFFF",
    allowMixedContent: true,
    buildOptions: {
      keystorePath: '../android/app/debug.keystore',
      keystorePassword: 'android',
      keystoreAlias: 'androiddebugkey',
      keystoreAliasPassword: 'android',
      kotlinVersion: '1.8.20',
    },
    minSdkVersion: 24,
    targetSdkVersion: 33,
    permissions: [
      {
        name: "android.permission.BLUETOOTH",
        maxSdkVersion: 30
      },
      {
        name: "android.permission.BLUETOOTH_ADMIN",
        maxSdkVersion: 30
      },
      {
        name: "android.permission.BLUETOOTH_SCAN",
        usesPermissionFlags: "neverForLocation"
      },
      {
        name: "android.permission.BLUETOOTH_CONNECT"
      },
      {
        name: "android.permission.ACCESS_COARSE_LOCATION",
        maxSdkVersion: 30
      },
      {
        name: "android.permission.ACCESS_FINE_LOCATION",
        maxSdkVersion: 30
      }
    ]
  },
  cordova: {
    preferences: {
      ScrollEnabled: 'false',
      'android-minSdkVersion': '24',
      BackupWebStorage: 'none',
      AndroidPersistentFileLocation: 'Compatibility'
    }
  }
};

export default config;