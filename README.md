# StudyBuddy 📚

StudyBuddy is an AI-powered learning assistant that helps you generate concise study guides and flashcards in seconds. It features a cross-platform **Flutter** frontend and a **Node.js Express** backend powered by the **Google Gemini API** (`gemini-2.5-flash`).

---

## 📱 Screenshots

Here is a preview of the application in action:

<!-- Replace 'path/to/your/screenshot.png' with the actual relative path to your screenshot file in the repository -->
| Generate Study Guide | Study Guide Results |
| :---: | :---: |
| ![Generate Guide Screen](screenshots/generate_screen.png) | ![Results Screen](screenshots/results_screen.png) |

> [!TIP]
> To display screenshots on GitHub:
> 1. Create a `screenshots` folder in the root of this project.
> 2. Move your screenshot images into that folder.
> 3. Update the paths above (e.g. change `screenshots/generate_screen.png` to your actual file names).

---

## ✨ Features

- **AI-Powered Generation**: Generates 3 highly structured, factual flashcards for any given study topic.
- **Dynamic Platform Adaptation**: The Flutter client automatically routes requests to the correct backend IP depending on whether you're running on the Web, Desktop, or the Android Emulator.
- **Modern Theme**: Premium dark-mode user interface with responsive layouts.

---

## 🛠️ Tech Stack

- **Frontend**: [Flutter](https://flutter.dev) (Dart)
- **Backend**: [Node.js](https://nodejs.org) + [Express](https://expressjs.com)
- **AI Engine**: [Google Gemini API](https://ai.google.dev) (`gemini-2.5-flash`) via the official `@google/genai` SDK

---

## 🚀 Getting Started

### 1. Prerequisites
- [Flutter SDK](https://docs.flutter.dev/get-started/install) installed.
- [Node.js](https://nodejs.org) installed.
- A **Gemini API Key** from [Google AI Studio](https://aistudio.google.com/).

### 2. Setting Up the Backend
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set your Gemini API key environment variable:
   ```bash
   export GEMINI_API_KEY="your-api-key-here"
   ```
4. Start the backend:
   ```bash
   npm start
   ```
   The backend will be running on `http://localhost:3000`.

### 3. Setting Up the Frontend
1. Navigate to the `flutter_app` folder:
   ```bash
   cd flutter_app
   ```
2. Get Flutter dependencies:
   ```bash
   flutter pub get
   ```
3. Run the application:
   ```bash
   flutter run
   ```
