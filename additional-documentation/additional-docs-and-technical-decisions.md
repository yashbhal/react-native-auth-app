# Additional Documentation and Technical Decisions

Some additional documentation on how things work, and explanations of technical decisions.

### Theme Configuration (src/theme/index.tsx)

- Centralizes all theming configuration, provides consistent styling
- Extended Material Design 3 (MD3) themes from React Native Paper (UI Component Library being used)
- Enables light/dark mode support

### Type Definitions (src/types/auth.types.ts)

- Defines Typescript interfaces for authentication data
- AuthUser -> Logged in user's data structure
- LoginFormData -> Structure for login form inputs
- SignupFormData -> Extends login data to include password confirmation
- Provides type safety across the application

### Navigation Types (src/types/navigation.types.ts)

- Structure of the navigation stack
- undefined explains that the screens don't take in any parameters

### Main Navigation Screen (src/navigation/AuthNavigator.tsx)

- This is the central navigation hub that tells the app which screens exist
- Controls how to move between screens
- Bundles and keeps all authentication related screens together like a stack of cards

### Login Screen

- Shows email input, password input, and a link to the sign up screen for new users
- keyboardType = email -> shows a email keyboard
- secureTextEntry -> Hides password text
- autoCaptalize = None -> Prevents auto-capitalize in email

### Validation Schema Using Zod (src/validation/auth.schema.ts)

- Sets up a schema with rules for what it should look like
- Defines what the Login and Signup information should look like
- Creates a Typescript type from the schema

## Auth Store for State Management (src/store/auth.store.ts)

- Acts as a centralized store for the app's state, i.e, different pages in the app can look in here to understand what state the app is in
- Exposes an interface that other pages use that shares auth token, user data, loading state and authentication status
- It also exposes actions (functions) to update the current state

## Components

### Dismiss Screen Component

- Wrapper component
- When you tap anywhere outside a text input, the keyboard disappears
- 'TouchableWithoutFeedback' creates an invisible touchable area
- flex:1 makes sure it takes up all available space

## Technical Decisions

## Color Choices:

- Deep navy (#192231): Gives a professional, trustworthy feel - perfect for a login screen
- Grey (#404a42): Soft, not too harsh, good for secondary elements
- Gold (#c0b283): Adds a premium touch without being flashy
- Light grey background: Easy on the eyes, modern, clean look
- White: Clean and crisp for input fields
- Red: Clear signal for errors, but not too aggressive

## React Hook Form for Form Validation:

- Helps handles forms in React/React Native
- Manages form data that users type
- Handles form validation (form input validation)
- Keeps track of the form's state (valid versus error state)
- Without this, form validation will have to be written manually

## Zod for Schema Validation

- Defines what data should look like (in this case, the email and password)
- Checks if the data is following these rules and provides error message if something is not right

## Zustand for State Management

- Simple to use and easy to understand API
- Efficient since it only updates components that need data
- Typesafe since we're using Typescript
