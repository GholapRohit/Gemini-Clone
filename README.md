# Gemini Clone

A smart AI assistant web app that answers questions and chats with users just like Google Gemini.

## **Brief Overview**

The **Gemini Clone** is a modern web application that replicates the core conversational and Q&A features of Google Gemini. Users can interact with an AI assistant, ask questions, generate content, and view recent chats in a clean, responsive interface. The app leverages the Gemini API for AI responses and is built with React and Vite for a fast, seamless user experience.

## **Technologies Used**

1. **React.js**: Frontend library for building interactive UIs.
2. **Vite**: Fast frontend build tool and development server.
3. **@google/genai**: Gemini API client for AI-powered responses.
4. **DOMPurify**: Sanitizes HTML to prevent XSS attacks.
5. **marked**: Converts markdown responses from the API to HTML.
6. **CSS**: Custom and modular CSS for styling and responsiveness.
7. **dotenv**: For managing environment variables securely.

## **Functions and Variables in Each File**

### **1. `src/App.jsx`**

- **Purpose**: Main entry point for the React app.
- **Key Functions and Variables**:
  - Renders the `Sidebar` and `Main` components.
  - Wraps the app with the context provider for global state.

---

### **2. `src/context/Context.jsx`**

- **Purpose**: Provides global state and logic for the app.
- **Key Functions and Variables**:
  - `input`, `setInput`: Manages the user's current input.
  - `recentPrompt`, `setRecentPrompt`: Tracks the most recent prompt.
  - `prevPrompts`, `setPrevPrompts`: Stores recent chat history.
  - `showResult`, `setShowResult`: Controls result display.
  - `loading`, `setLoading`: Indicates loading state.
  - `resultData`, `setResultData`: Stores AI response.
  - `onSent`: Handles sending prompts to the Gemini API.
  - `newChat`: Resets the chat state.
  - `delayPara`: Animates the AI response word by word.

---

### **3. `src/config/gemini.js`**

- **Purpose**: Handles communication with the Gemini API.
- **Key Functions**:
  - `main(prompt)`: Sends a prompt to the Gemini API and returns the response.

---

### **4. `src/components/Sidebar/Sidebar.jsx`**

- **Purpose**: Displays navigation and recent chats.
- **Key Features**:
  - Toggleable sidebar (extended/collapsed).
  - "New Chat" button.
  - List of recent prompts for quick access.

---

### **5. `src/components/Main/Main.jsx`**

- **Purpose**: Main chat interface for user interaction.
- **Key Features**:
  - Greeting and quick action cards.
  - Input box for user queries.
  - Displays AI responses with markdown formatting.
  - Loader animation during API calls.
  - Shows recent prompt and chat history.

---

### **6. `src/assets/assets.js`**

- **Purpose**: Centralizes image and icon imports for easy use in components.

---

### **7. `src/components/Main/Main.css`**

- **Purpose**: Styles the main chat interface and ensures responsive design.
- **Key Features**:
  - Responsive layout for desktop and mobile.
  - Loader animation styles.
  - Card and input styling.

---

### **8. `.env`**

- **Purpose**: Stores environment variables.
- **Variables**:
  - `VITE_GEMINI_API_KEY`: Your Gemini API key.

## **Setup Instructions**

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the project root:

   ```
   VITE_GEMINI_API_KEY=your-gemini-api-key
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## **Future Improvements**

- **User Authentication:** Allow users to save chat history and personalize the experience.
- **Voice Input/Output:** Add speech-to-text and text-to-speech features.
- **File Uploads:** Enable users to upload files for AI analysis.
- **Theme Customization:** Support for dark mode and custom themes.
- **Multi-language Support:** Allow chatting in different languages.
- **Advanced AI Features:** Summarization, translation, and more.

## **Other Important Information**

- **Security:** The API key is stored in `.env` and accessed via Vite's environment variables. Never expose sensitive keys in production.
- **Markdown Rendering:** Uses `marked` and `DOMPurify` to safely render markdown from the AI.
- **Responsive Design:** The app is fully responsive and works well on mobile and desktop.
- **Error Handling:** Handles API errors and invalid input gracefully.

---

Thank you for exploring this Gemini Clone project! Feel free to contribute, customize, and extend its features for your own
