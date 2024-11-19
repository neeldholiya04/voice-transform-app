
# **Voice Synthesizer Web Application**

A web application that allows users to upload a voice sample, input text, and generate a synthesized voice file mimicking the original voice using Play.ht API. The application is visually appealing, responsive, and easy to use.

## **Features**
- **Upload Voice File**: Upload a small audio recording (up to 5MB).
- **Text-to-Speech**: Input text (up to 500 characters) to be synthesized.
- **Generate Voice File**: Create a new voice file mimicking the uploaded sample.
- **Download File**: Download the synthesized voice file.
- **Responsive Design**: Modern, mobile-friendly UI with a clean user experience.

---

## **Technologies Used**

### **Frontend**
- **React**: Component-based architecture.
- **Tailwind CSS**: For responsive and modern styling.
- **React Hot Toast**: To display success and error notifications.

### **Backend**
- **Node.js & Express**: REST API development.
- **Play.ht SDK**: Text-to-Speech API integration.
- **Multer**: File upload handling.
- **Supabase**: Cloud storage for audio files.

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/neeldholiya04/voice-transform-app.git
cd voice-transform-app
```

---

### **2. Backend Setup**
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add the following variables:
   ```plaintext
   PLAYHT_API_KEY=<your_playht_api_key>
   PLAYHT_USER_ID=<your_playht_user_id>
   SUPABASE_URL=<your_supabase_url>
   SUPABASE_KEY=<your_supabase_key>
   ```
4. Start the backend server:
   ```bash
   node src/app.js
   ```

---

### **3. Frontend Setup**
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

---

## **Usage**
1. **Upload Voice File**:
   - Click on "Upload File".
   - Select an audio file (e.g., `.mp3`, `.wav`).
2. **Input Text**:
   - Enter text in the text box to be synthesized.
3. **Generate Voice File**:
   - Click on "Generate Voice".
   - Wait for the file to be generated (status displayed).
4. **Download Audio**:
   - Play or download the generated file from the link displayed.

---


## **Folder Structure**
```
project-root/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   ├── package.json
│   ├── .env
├── frontend/
│   ├── public/
│   │   ├── index.html
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   ├── package.json
├── README.md
```

---