
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

## **Deployment**

### **Hosting**
- **Frontend**: Host on [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).
- **Backend**: Deploy on [Render](https://render.com/) or [Heroku](https://www.heroku.com/).

### **Steps to Deploy**
1. **Frontend**:
   - Build the frontend using:
     ```bash
     npm run build
     ```
   - Deploy the `build/` folder to your preferred hosting service.
2. **Backend**:
   - Deploy the backend directory with your hosting provider, ensuring `.env` variables are configured correctly.

---

## **Screenshots**
### **Home Page**
- A beautiful, responsive layout for uploading files and generating synthesized voices.

![Home Page](https://via.placeholder.com/800x400)

### **File Upload Section**
- Intuitive file upload UI with error handling.

![File Upload Section](https://via.placeholder.com/800x400)

### **Generated Audio**
- Play or download the synthesized audio file.

![Generated Audio](https://via.placeholder.com/800x400)

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
│   │   ├── styles/
│   ├── package.json
├── README.md
```

---

## **Contributing**
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## **Contact**
- **Developer**: [Your Name](mailto:your.email@example.com)
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- **GitHub**: [Your GitHub Profile](https://github.com/your-profile)
