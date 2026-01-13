# 🎨 Math Bru - Branding & Icon Setup

## Brand Colors

Based on your awesome Math Bru logo, here are the official brand colors:

### Primary Colors
- **Math Bru Blue**: `#1E88E5` (Primary background, main brand color)
- **Math Bru Cyan**: `#00BCD4` ("BRU" text color, secondary)

### Accent Colors
- **Math Yellow**: `#FFB300` ("MATH" text, highlights)
- **Energy Orange**: `#FF9800` (Warm accents, buttons)
- **Cap Red**: `#E53935` (Character's cap, alerts)
- **Calculator Green**: `#4CAF50` (Success states, positive feedback)

### Usage Guide

```css
/* Headings & Titles */
background: linear-gradient(to right, #FFB300, #FF9800, #00BCD4);

/* Primary Buttons */
background: linear-gradient(to right, #FFB300, #FF9800);

/* Secondary Buttons */
background: linear-gradient(to right, #00BCD4, #1E88E5);

/* Success Messages */
background: #4CAF50;

/* Backgrounds */
background: linear-gradient(135deg, #1E88E5, #1565C0);
```

## 🖼️ App Icon Setup

### Current Logo
Your logo features:
- Cool kid character with sunglasses and red cap
- "MATH BRU" bold text
- Calculator, dice, protractor icons
- South African flag
- Energetic burst effect
- Pi symbol (π+)

### Creating App Icons

#### 1. Export Icon Sizes

You'll need to create various sizes from your logo:

**For Android:**
```
mdpi:    48x48 px
hdpi:    72x72 px
xhdpi:   96x96 px
xxhdpi:  144x144 px
xxxhdpi: 192x192 px
```

**For iOS:**
```
20x20, 29x29, 40x40, 58x58, 60x60, 76x76,
80x80, 87x87, 120x120, 152x152, 167x167, 180x180, 1024x1024
```

**Recommended Tool:** Use [Icon Kitchen](https://icon.kitchen/) to auto-generate all sizes!

#### 2. Replace Android Icons

Save your logo as PNG, then replace files in:
```
android/app/src/main/res/
├── mipmap-mdpi/ic_launcher.png
├── mipmap-hdpi/ic_launcher.png
├── mipmap-xhdpi/ic_launcher.png
├── mipmap-xxhdpi/ic_launcher.png
└── mipmap-xxxhdpi/ic_launcher.png
```

**Round Icons (for Android 8+):**
```
android/app/src/main/res/
├── mipmap-mdpi/ic_launcher_round.png
├── mipmap-hdpi/ic_launcher_round.png
├── mipmap-xhdpi/ic_launcher_round.png
├── mipmap-xxhdpi/ic_launcher_round.png
└── mipmap-xxxhdpi/ic_launcher_round.png
```

#### 3. Adaptive Icons (Android 8+)

Create a folder: `android/app/src/main/res/mipmap-anydpi-v26/`

Add `ic_launcher.xml`:
```xml
<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/ic_launcher_background"/>
    <foreground android:drawable="@mipmap/ic_launcher_foreground"/>
</adaptive-icon>
```

Add background color in `android/app/src/main/res/values/colors.xml`:
```xml
<color name="ic_launcher_background">#1E88E5</color>
```

## 🌠 Splash Screen Setup

### 1. Create Splash Screen Image

**Specifications:**
- Size: 2732x2732 px (to support all devices)
- Center safe area: 1200x1200 px
- Background: Math Bru Blue (#1E88E5)
- Content: Your logo centered

**Design Tips:**
- Keep important elements within center 60%
- Test on different aspect ratios
- Use solid background color

### 2. Android Splash Screen

Save splash screen as `splash.png` and place in:
```
android/app/src/main/res/drawable/splash.png
```

Update `android/app/src/main/res/values/styles.xml`:
```xml
<style name="AppTheme.NoActionBarLaunch" parent="AppTheme.NoActionBar">
    <item name="android:background">@drawable/splash</item>
    <item name="android:windowBackground">@color/splash_background</item>
</style>
```

Add to `colors.xml`:
```xml
<color name="splash_background">#1E88E5</color>
```

### 3. iOS Splash Screen

Place splash images in:
```
ios/App/App/Assets.xcassets/Splash.imageset/
```

## 🎨 Quick Icon Generation

### Option 1: Online Tool (Easiest)
1. Go to [Icon Kitchen](https://icon.kitchen/)
2. Upload your logo image
3. Set background color: `#1E88E5`
4. Download all sizes
5. Replace in `android/` and `ios/` folders

### Option 2: Manual Photoshop/GIMP
1. Start with 1024x1024 version
2. Add 10% padding around edges
3. Export at each required size
4. Save with transparency if possible

### Option 3: Command Line (ImageMagick)
```bash
# Install ImageMagick first
# Then batch convert:
convert logo-1024.png -resize 192x192 ic_launcher_xxxhdpi.png
convert logo-1024.png -resize 144x144 ic_launcher_xxhdpi.png
convert logo-1024.png -resize 96x96 ic_launcher_xhdpi.png
convert logo-1024.png -resize 72x72 ic_launcher_hdpi.png
convert logo-1024.png -resize 48x48 ic_launcher_mdpi.png
```

## 📱 PWA Icon (Web App)

Create `public/icons/` folder and add:
```
icon-72x72.png
icon-96x96.png
icon-128x128.png
icon-144x144.png
icon-152x152.png
icon-192x192.png
icon-384x384.png
icon-512x512.png
```

Update `index.html`:
```html
<link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192x192.png">
<link rel="apple-touch-icon" href="/icons/icon-180x180.png">
```

Create `public/manifest.json`:
```json
{
  "name": "Math Bru",
  "short_name": "Math Bru",
  "description": "Fun math learning for grades 4-7",
  "theme_color": "#1E88E5",
  "background_color": "#1E88E5",
  "display": "standalone",
  "orientation": "portrait",
  "icons": [
    {
      "src": "/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

## 🎯 Brand Guidelines Summary

### Do's ✅
- Use vibrant, energetic colors
- Keep text bold and clear
- Maintain playful, kid-friendly vibe
- Use high contrast for readability
- Include fun math-related icons

### Don'ts ❌
- Don't use dull or muted colors
- Don't make text too small
- Avoid serious or corporate look
- Don't overcrowd the design
- Keep it simple for kids

## 📸 Screenshot Template

For app stores, maintain branding:
- Background: Math Bru Blue gradient
- Borders: White with yellow/cyan accents
- Text: Bold, large, easy to read
- Show actual gameplay
- Include character/mascot elements

## 🚀 Quick Deploy Checklist

- [ ] Replace all app icons (Android & iOS)
- [ ] Add splash screen image
- [ ] Update theme colors in code
- [ ] Test on various devices
- [ ] Verify icons look good on home screen
- [ ] Check splash screen timing
- [ ] Update store listing with branded screenshots
- [ ] Consistent branding across all touchpoints

---

**Your branding is energetic, fun, and perfect for school kids! 🎉**
