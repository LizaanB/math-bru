# 🎓 Math Bru - Mobile Learning App for School Kids

A fun and engaging math learning app designed for Grade 4-7 students, now available as a **native mobile app** for Android and iOS!

## ✨ Features

### 📚 Learning Content
- **8 Math Topics**: Addition, Subtraction, Multiplication, Division, Fractions, Decimals, Geometry, Algebra
- **3 Difficulty Levels**: Easy, Medium, Hard for progressive learning
- **Dynamic Questions**: Unlimited practice with randomly generated problems

### 🎮 Gamification Features
- **Coin System**: Earn 10-30 coins per correct answer based on difficulty
- **XP & Levels**: Level up as you learn (100 XP per level)
- **Streak Bonuses**: Consecutive correct answers multiply rewards up to 3x!
- **Power-Ups Shop**:
  - 💡 Hint (50 coins) - Get a helpful clue
  - 🎯 50/50 (100 coins) - Remove two wrong answers
- **10 Achievements**: Unlock achievements from "First Steps" to "Mathematics Master"
- **Progress Tracking**: Monitor performance across all topics

### 🌍 Multi-Language Support
Supports 6 languages: English, Spanish, French, Zulu, Xhosa, and Afrikaans

### 💰 Subscription Model
- **Free Trial**: 3 quizzes to try the app
- **Premium**: R300/year (R25/month) for unlimited access

## 📱 Native Mobile App

Your app is now a **native mobile application** using Capacitor!

### Quick Start - Mobile Development

#### For Android:
```bash
# Build and open in Android Studio
npm run mobile:android
```

Then in Android Studio:
1. Wait for Gradle sync to complete
2. Select your device (emulator or physical)
3. Click the Run button ▶️

#### For iOS (macOS only):
```bash
# Build and open in Xcode
npm run mobile:ios
```

### Available Scripts

```bash
npm run dev              # Start web development server
npm run build            # Build for production
npm run mobile:sync      # Build and sync to mobile platforms
npm run mobile:android   # Open in Android Studio
npm run mobile:ios       # Open in Xcode (macOS only)
```

## 🚀 Getting Started (Web Development)

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy to any web hosting service.

## 📱 Distribution to Schools

### Option 1: Google Play Store
1. Create Google Play Developer account ($25 one-time)
2. Build signed APK/AAB
3. Upload to Play Store
4. Share with schools

### Option 2: Direct APK Distribution
1. Build signed APK
2. Distribute via website or Drive
3. Schools install via APK

### Option 3: App as PWA
1. Deploy to web hosting (Vercel, Netlify, etc.)
2. Students add to home screen
3. Works offline after first visit

## 🎓 For Schools & Teachers

### Why Math Bru?
- ✅ **Engaging**: Game mechanics keep students motivated
- ✅ **Multi-lingual**: Supports 6 languages including SA languages
- ✅ **Affordable**: R300/year, less than a textbook
- ✅ **Progress Tracking**: Monitor student improvement
- ✅ **Offline Capable**: Works without constant internet
- ✅ **CAPS-aligned**: Covers Grade 4-7 math curriculum

### Implementation
1. Start with pilot classes (1-2 classes)
2. 30-minute teacher training
3. Daily 10-15 minute practice sessions
4. Monthly progress reviews

## 📁 Project Structure

```
math-bru/
├── src/
│   ├── components/       # React components (Home, Quiz, Results, etc.)
│   ├── contexts/         # Language context for i18n
│   ├── i18n/            # Translations (6 languages)
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Game logic, storage, subscriptions
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point with mobile init
├── android/             # Android native project (Capacitor)
├── dist/                # Production build output
├── capacitor.config.ts  # Mobile app configuration
└── MOBILE-BUILD.md      # Detailed mobile build guide

```

## 🔧 Technical Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Mobile**: Capacitor 8 (native iOS/Android)
- **Storage**: LocalStorage
- **PWA**: Service Worker for offline support

## 📖 Documentation

- [MOBILE-BUILD.md](MOBILE-BUILD.md) - Complete mobile build guide
- Includes: Android Studio setup, code signing, Play Store submission

## 🎯 Roadmap

### Current v1.0
- ✅ 8 math topics with 3 difficulty levels
- ✅ Gamification (coins, XP, achievements)
- ✅ 6-language support
- ✅ Native mobile app (Android ready)
- ✅ Subscription system

### Future Features
- 🔐 User authentication & cloud sync
- 👨‍🏫 Teacher dashboard for class monitoring
- 📊 Advanced analytics & reports
- 🎓 CAPS curriculum alignment markers
- 🏆 Class leaderboards (opt-in)
- 🔔 Daily practice reminders
- 📸 Scan & solve math problems

## 🤝 Support & Contact

For schools interested in bulk licensing or technical support:
- **Email**: support@mathbru.com (set up your support email)
- **WhatsApp**: +27 XXX XXX XXXX
- **Website**: mathbru.com (deploy your site)

## 📄 License

© 2026 Math Bru. All rights reserved.

---

**Ready to bring Math Bru to schools! 🚀📱**

For detailed mobile build instructions, see [MOBILE-BUILD.md](MOBILE-BUILD.md)

## 🎯 How to Use

1. **Choose a Topic**: Select from 8 different math topics
2. **Pick Difficulty**: Choose Easy, Medium, or Hard
3. **Take the Quiz**: Answer 10 questions with instant feedback
4. **View Results**: See your score and detailed breakdown
5. **Track Progress**: Check your overall performance across all topics

## 🛠️ Tech Stack

- **React 18** - Modern UI framework
- **TypeScript** - Type-safe code
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Local Storage** - Progress persistence

## 📚 Topics Covered

- **Addition** (Grades 4-5): Basic to advanced addition
- **Subtraction** (Grades 4-5): Subtraction with regrouping
- **Multiplication** (Grades 4-6): Times tables and beyond
- **Division** (Grades 4-6): Division with and without remainders
- **Fractions** (Grades 5-7): Adding, comparing fractions
- **Decimals** (Grades 5-7): Decimal operations
- **Geometry** (Grades 6-7): Area and perimeter
- **Algebra** (Grades 6-7): Basic equations

## 🎨 Customization

You can customize the app by modifying:

- `src/utils/questionGenerator.ts` - Add new question types
- `src/components/` - Modify UI components
- `tailwind.config.js` - Change colors and styling

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

---

Made with ❤️ for young mathematicians
