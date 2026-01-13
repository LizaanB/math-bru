# Math Bru Mobile App - Build Guide

## 📱 Overview
Math Bru is now a native mobile app for Android (and iOS) built with Capacitor. This allows the app to be distributed through Google Play Store and Apple App Store.

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **Android Studio** (for Android builds)
  - Download from: https://developer.android.com/studio
  - Install Android SDK (API 33 or higher)
  - Set up Android emulator or connect physical device
- **Xcode** (for iOS builds - macOS only)

### Build Steps

#### 1. Install Dependencies
```bash
npm install
```

#### 2. Build Web Assets
```bash
npm run build
```

#### 3. Sync with Native Projects
```bash
npx cap sync
```

#### 4. Open in Android Studio
```bash
npx cap open android
```

#### 5. Run on Device/Emulator
- In Android Studio, click the "Run" button (green play icon)
- Select your target device (emulator or physical device)
- The app will be built and installed

### iOS Build (macOS only)
```bash
npx cap add ios
npx cap sync
npx cap open ios
```
Then build in Xcode.

## 🔄 Development Workflow

When you make changes to your code:

1. Build the web app:
   ```bash
   npm run build
   ```

2. Sync changes to native projects:
   ```bash
   npx cap sync
   ```

3. Rebuild in Android Studio or Xcode

### Live Reload (Optional)
For faster development, you can use live reload:

```bash
npm run dev
```

Then in Android Studio, update the server URL in the native app to point to your local dev server (e.g., `http://10.0.2.2:3001` for Android emulator).

## 📦 App Configuration

### Package Information
- **App Name**: Math Bru
- **Package ID**: com.mathbru.app
- **Version**: 1.0.0

### Customization
Edit `capacitor.config.ts` to customize:
- App ID
- Splash screen settings
- Status bar appearance
- Other native features

## 🎨 App Icon & Splash Screen

### Creating App Assets
1. Prepare your app icon (1024x1024 PNG)
2. Use a tool like:
   - [Icon Kitchen](https://icon.kitchen/)
   - [App Icon Generator](https://www.appicon.co/)
   
3. Replace default icons:
   - Android: `android/app/src/main/res/mipmap-*/ic_launcher.png`
   - iOS: `ios/App/Assets.xcassets/AppIcon.appiconset/`

### Splash Screen
- Android: `android/app/src/main/res/drawable/splash.png`
- iOS: `ios/App/Assets.xcassets/Splash.imageset/`

## 🚢 Release Build

### Android (APK/AAB)

1. Update version in `android/app/build.gradle`:
   ```gradle
   versionCode 1
   versionName "1.0.0"
   ```

2. Build release:
   ```bash
   cd android
   ./gradlew assembleRelease  # For APK
   ./gradlew bundleRelease    # For AAB (Play Store)
   ```

3. Find build output:
   - APK: `android/app/build/outputs/apk/release/`
   - AAB: `android/app/build/outputs/bundle/release/`

### Code Signing (Required for Play Store)

1. Create keystore:
   ```bash
   keytool -genkey -v -keystore math-bru.keystore -alias math-bru -keyalg RSA -keysize 2048 -validity 10000
   ```

2. Add to `android/gradle.properties`:
   ```
   MYAPP_RELEASE_STORE_FILE=math-bru.keystore
   MYAPP_RELEASE_KEY_ALIAS=math-bru
   MYAPP_RELEASE_STORE_PASSWORD=****
   MYAPP_RELEASE_KEY_PASSWORD=****
   ```

3. Update `android/app/build.gradle` signing config

## 🎓 Distribution to Schools

### Option 1: Google Play Store
1. Create Google Play Developer account ($25 one-time fee)
2. Upload AAB file
3. Complete store listing with screenshots, description
4. Submit for review
5. Share Play Store link with schools

### Option 2: Direct APK Distribution
1. Build signed APK
2. Host on your website or Google Drive
3. Share download link with schools
4. Users need to enable "Install from Unknown Sources"

### Option 3: App Bundle for Schools
- Use Google Play's managed distribution
- Create a private channel for schools
- Bulk deployment through MDM (Mobile Device Management)

## 🔧 Troubleshooting

### Build Errors
- **Gradle sync failed**: Update Android Studio and SDK
- **Module not found**: Run `npm install` and `npx cap sync`
- **Web assets not found**: Run `npm run build` first

### Device Connection Issues
- Enable USB debugging on Android device
- Check device is authorized: `adb devices`
- Try different USB cable/port

### App Crashes
- Check Android Logcat in Android Studio
- Look for JavaScript errors in Chrome DevTools (chrome://inspect)

## 📱 Native Features Available

Current native integrations:
- ✅ Splash Screen
- ✅ Status Bar styling
- ✅ Native app performance

Potential additions:
- 🔔 Push notifications (reminders for daily practice)
- 📊 Native analytics
- 💾 Native storage (encrypted user data)
- 📸 Camera (for scanning math problems)
- 🎮 Haptic feedback
- 📤 Share results with teachers/parents

## 🎮 Testing on Real Devices

### Android
1. Enable Developer Options on device
2. Enable USB Debugging
3. Connect via USB
4. Accept authorization prompt
5. Run from Android Studio

### iOS (macOS only)
1. Connect iPhone/iPad
2. Trust computer on device
3. Select device in Xcode
4. Run (may need Apple Developer account)

## 📈 Next Steps

1. **Test thoroughly** on various devices (phones/tablets, different Android versions)
2. **Gather feedback** from pilot group of students
3. **Add app icon and splash screen** with Math Bru branding
4. **Implement analytics** to track usage and improve UX
5. **Add offline mode** for schools with poor connectivity
6. **Create teacher dashboard** for monitoring student progress
7. **Submit to Play Store** for official distribution

## 🎓 School Deployment Best Practices

1. **Create demo video** showing app features
2. **Prepare teacher guide** for integration into curriculum
3. **Set up support channel** (email/WhatsApp) for technical help
4. **Pilot test** with one or two classes first
5. **Collect feedback** and iterate before wider rollout
6. **Consider offline capability** for low-connectivity environments

## 📞 Support

For mobile build issues or questions:
- Check Capacitor docs: https://capacitorjs.com/docs
- Android Studio help: https://developer.android.com/studio/intro
- Join Capacitor community: https://ionic.link/discord

---

**Ready to bring Math Bru to school kids! 🎉📱**
