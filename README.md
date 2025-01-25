# React Native Auth App

A simple React Native authentication app built with Expo.

## Features

- User authentication (Login/Signup)
- Form validation using Zod
- State management with Zustand
- Persistent storage with AsyncStorage
- Clean and responsive UI using React Native Paper

## Project Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for Mac) or Android Studio (for Android development)
- Git

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd AuthApp
```

2. Install dependencies:

```bash
npm install --legacy-peer-deps
```

3. Install iOS pods (if developing for iOS):

```bash
cd ios && pod install && cd ..
```

### Running the App

1. Start the development server:

```bash
npm start
```

2. Run on specific platform:

```bash
# iOS
npm run ios

# Android
npm run android
```

## Project Structure

```
AuthApp/
├── .github/
│   └── workflows/    # CI/CD workflow configurations
├── src/
│   ├── components/   # Reusable components
│   ├── screens/      # Screen components
│   ├── store/        # Zustand store configurations
│   ├── theme/        # Theme and styling
│   ├── types/        # TypeScript type definitions
│   ├── validation/   # Zod schemas
│   └── tests/        # Test files
├── App.tsx          # Root component
└── package.json
```

[Addtional Documentation](additional-documentation/files-and-technical-decisions.md)

## Dependencies

### Core Dependencies

- react-native: "0.76.6"
- expo: "~52.0.27"
- react-native-paper: "^5.13.1"
- @react-navigation/native: "^7.0.14"

### State Management & Storage

- zustand: "^5.0.3"
- @react-native-async-storage/async-storage: "1.23.1"

### Form Handling & Validation

- react-hook-form: "^7.54.2"
- zod: "^3.24.1"

### Development Dependencies

- typescript: "^5.3.3"
- eslint: "^8.57.0"
- vitest: "^3.0.4"

## CI/CD Setup

### Tools Used

- GitHub Actions for automation
- ESLint for code quality
- Vitest for testing
- Expo CLI for builds

### Workflow Configuration

#### Continuous Integration

Triggers:

- On push to any branch
- On pull requests to main branch

Steps:

1. Code checkout
2. Node.js setup
3. Dependencies installation
4. Linting check
5. Test execution

```yaml
# Example CI workflow
name: CI
on:
  push:
    branches: ["**"]
  pull_request:
    branches: [main]
```

#### Build Pipeline

Triggers:

- On push to main branch
- On pull requests to main branch

Steps:

1. Android build generation
2. iOS build generation (on macOS runner)
3. Artifact upload

#### Potential Expansions

- Adding automated code quality checks.
- Implement more comprehensive testing stages, eg: unit, integration.
- Implement automated rollback.

### Running Tests & Linting

```bash
# Run tests
npm run test

# Run tests in CI mode
npm run test:ci

# Run linting
npm run lint
```

## Development Workflow

1. Create a new branch:

```bash
git checkout -b feature/your-feature
```

2. Make changes and test locally:

```bash
npm run test
npm run lint
```

3. Push changes and create PR:

```bash
git push origin feature/your-feature
```

4. CI/CD pipeline will automatically:

- Run linting checks
- Execute tests
- Generate builds (on main branch)

## Troubleshooting

Common issues and solutions:

1. Dependency Issues

```bash
npm install --legacy-peer-deps
```

2. iOS Build Issues

```bash
cd ios
pod install
cd ..
```

3. Android Build Issues

```bash
cd android
./gradlew clean
cd ..
```

## License

MIT

# React Native Auth App

A simple React Native authentication app built with Expo, featuring a clean UI and modern development practices.

## Features

- User authentication (Login/Signup)
- Form validation using Zod
- State management with Zustand
- Persistent storage with AsyncStorage
- Clean and responsive UI using React Native Paper

## Project Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for Mac) or Android Studio (for Android development)
- Git

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd AuthApp
```

2. Install dependencies:

```bash
npm install --legacy-peer-deps
```

3. Install iOS pods (if developing for iOS):

```bash
cd ios && pod install && cd ..
```

### Running the App

1. Start the development server:

```bash
npm start
```

2. Run on specific platform:

```bash
# iOS
npm run ios

# Android
npm run android
```

## Project Structure

```
AuthApp/
├── .github/
│   └── workflows/    # CI/CD workflow configurations
├── src/
│   ├── components/   # Reusable components
│   ├── screens/      # Screen components
│   ├── store/        # Zustand store configurations
│   ├── theme/        # Theme and styling
│   ├── types/        # TypeScript type definitions
│   ├── validation/   # Zod schemas
│   └── tests/        # Test files
├── App.tsx          # Root component
└── package.json
```

## Dependencies

### Core Dependencies

- react-native: "0.76.6"
- expo: "~52.0.27"
- react-native-paper: "^5.13.1"
- @react-navigation/native: "^7.0.14"

### State Management & Storage

- zustand: "^5.0.3"
- @react-native-async-storage/async-storage: "1.23.1"

### Form Handling & Validation

- react-hook-form: "^7.54.2"
- zod: "^3.24.1"

### Development Dependencies

- typescript: "^5.3.3"
- eslint: "^8.57.0"
- vitest: "^3.0.4"

## CI/CD Setup

### Tools Used

- GitHub Actions for automation
- ESLint for code quality
- Vitest for testing
- Expo CLI for builds

### Workflow Configuration

#### Continuous Integration

Triggers:

- On push to any branch
- On pull requests to main branch

Steps:

1. Code checkout
2. Node.js setup
3. Dependencies installation
4. Linting check
5. Test execution

```yaml
# Example CI workflow
name: CI
on:
  push:
    branches: ["**"]
  pull_request:
    branches: [main]
```

#### Build Pipeline

Triggers:

- On push to main branch
- On pull requests to main branch

Steps:

1. Android build generation
2. iOS build generation (on macOS runner)
3. Artifact upload

#### Potential Expansions

- Adding automated code quality checks.
- Implement more comprehensive testing stages, eg: unit, integration.
- Implement automated rollback.

### Running Tests & Linting

```bash
# Run tests
npm run test

# Run tests in CI mode
npm run test:ci

# Run linting
npm run lint
```

## Development Workflow

1. Create a new branch:

```bash
git checkout -b feature/your-feature
```

2. Make changes and test locally:

```bash
npm run test
npm run lint
```

3. Push changes and create PR:

```bash
git push origin feature/your-feature
```

4. CI/CD pipeline will automatically:

- Run linting checks
- Execute tests
- Generate builds (on main branch)

## Troubleshooting

Common issues and solutions:

1. Dependency Issues

```bash
npm install --legacy-peer-deps
```

2. iOS Build Issues

```bash
cd ios
pod install
cd ..
```

3. Android Build Issues

```bash
cd android
./gradlew clean
cd ..
```

## License

MIT
