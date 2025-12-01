# GigBuddy

Your all-in-one gig app for delivery drivers. Built with React Native, Expo, and TypeScript.

## Features

- 🚀 Start and manage shifts
- 🗺️ View hot zones on interactive maps
- 📦 View and accept orders from multiple delivery apps
- 🛡️ Safe Mode for low-distraction driving
- 📊 Track shift summaries and earnings
- 👥 Community tips and peer support

## Prerequisites

### For Both Windows and Mac:

1. **Node.js** (v18 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

3. **Expo Go App** (for testing on your phone)
   - iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)
   - Android: [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

### For Mac Only:

1. **Watchman** (recommended for better file watching)
   ```bash
   brew install watchman
   ```

### For Windows Only:

1. **Git Bash** or **WSL** (Windows Subsystem for Linux) - recommended for better compatibility
   - Git Bash: [git-scm.com](https://git-scm.com/download/win)
   - WSL: Follow [Microsoft's WSL installation guide](https://docs.microsoft.com/en-us/windows/wsl/install)

## Installation

### Step 1: Clone the Repository

```bash
git clone <your-repo-url>
cd gigbuddy
```

### Step 2: Install Dependencies

```bash
npm install
```

**Note for Windows:** If you encounter peer dependency warnings, use:
```bash
npm install --legacy-peer-deps
```

### Step 3: Start the Development Server

```bash
npm start
# or
npx expo start
```

### Step 4: Run on Your Device

1. **Using Expo Go (Recommended for Development):**
   - Open the Expo Go app on your phone
   - Scan the QR code displayed in your terminal
   - The app will load on your device

2. **Using iOS Simulator (Mac only):**
   - Press `i` in the terminal to open iOS Simulator
   - Requires Xcode to be installed

3. **Using Android Emulator:**
   - Press `a` in the terminal to open Android Emulator
   - Requires Android Studio to be installed

## Troubleshooting

### Common Issues

#### "EMFILE: too many open files" Error (Mac)

This error occurs when the system file limit is too low. Fix it by:

```bash
# Increase file limit for current session
ulimit -n 4096

# Then start Expo
npx expo start
```

For a permanent fix, add to your `~/.zshrc` or `~/.bash_profile`:
```bash
ulimit -n 4096
```

#### "Cannot find module 'babel-preset-expo'"

Install the missing dependency:
```bash
npm install --save-dev babel-preset-expo --legacy-peer-deps
```

#### SDK Version Mismatch

If you see an SDK version error, update Expo:
```bash
npx expo install expo@latest
npx expo install --fix
```

#### Watchman Recrawl Warning (Mac)

If you see Watchman recrawl warnings:
```bash
watchman watch-del '/path/to/gigbuddy'
watchman watch-project '/path/to/gigbuddy'
```

#### Port Already in Use

If port 8081 is already in use:
```bash
# Kill the process using port 8081
lsof -ti:8081 | xargs kill -9

# Or on Windows (PowerShell)
netstat -ano | findstr :8081
taskkill /PID <PID> /F
```

#### Maps Not Showing

- Ensure `react-native-maps` is installed: `npx expo install react-native-maps`
- For iOS: Maps work out of the box
- For Android: You may need to add a Google Maps API key in `app.json` (optional for development)

## Project Structure

```
gigbuddy/
├── App.tsx                 # Main entry point
├── app.json                # Expo configuration
├── babel.config.js         # Babel configuration
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript configuration
├── navigation/
│   ├── RootNavigator.tsx   # Root navigation stack
│   └── MainTabs.tsx        # Bottom tab navigator
└── screens/
    ├── WelcomeScreen.tsx
    ├── SignUpScreen.tsx
    ├── LoginScreen.tsx
    ├── HomeScreen.tsx
    ├── QuickLinksScreen.tsx
    ├── DashboardScreen.tsx
    ├── AvailableOrdersScreen.tsx
    ├── SafeModeScreen.tsx
    ├── ShiftSummaryScreen.tsx
    └── CommunityScreen.tsx
```

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Start Expo and open Android emulator
- `npm run ios` - Start Expo and open iOS simulator (Mac only)
- `npm run web` - Start Expo for web (experimental)

## Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development platform (SDK 54)
- **TypeScript** - Type safety
- **React Navigation v6** - Navigation library
- **react-native-maps** - Maps integration
- **Watchman** - File watching (Mac, recommended)

## Development Notes

- The app uses placeholder data - no backend required
- Maps are centered on Hamilton, Ontario
- All navigation is pre-wired and functional
- Authentication screens use fake login (no real validation)

## Platform-Specific Notes

### Mac
- Watchman is highly recommended for better performance
- iOS Simulator requires Xcode
- Use `ulimit -n 4096` if you encounter file limit issues

### Windows
- Git Bash or WSL recommended for better compatibility
- Use `--legacy-peer-deps` flag if you encounter dependency conflicts
- Android development requires Android Studio

## Getting Help

If you encounter issues:
1. Check the [Expo documentation](https://docs.expo.dev/)
2. Review the troubleshooting section above
3. Check that all prerequisites are installed correctly
4. Ensure you're using Node.js v18 or higher

## License

Private project - All rights reserved

