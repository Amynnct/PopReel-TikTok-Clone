# PopReel-TikTok Clone

A TikTok-like platform built using modern web technologies, with short content recommendation system using vector embeddings, combining video content analysis with transcription and text detection for improved recommendation accuracy.

## Problem Statement
Most video embeddings are primarily based on visual content (e.g., image frames). However, the true essence of many videos lies in their conversations, dialogues, or text. By combining video labels, speech transcriptions, and text detections into a unified embedding, we can create a more comprehensive representation of each video. This allows us to match user interests more effectively when embeding user preferences as queries to find the most relevant content.


## Features
- **Video Uploads**: Store video blobs on Google Cloud Storage (GCS).
- **AI-Powered Video Analysis**:
  - **Google Cloud Video Intelligence**: Labels video content and detects text in video frames.
  - **Speech-to-Text**: Converts video speech to text.
  - **Gemini (Google Gen AI)**: Combines video labels, transcriptions, and text and create a unified embeddings for the video.
- **Vector Storage**: Utilize ChromaDB for embedding vector storage.
- **Database Management**: Use Appwrite for managing posts, comments, video metadata (ID from ChromaDB, GCS link).
- **User Authentication**: Use Clerk for user login, logout, registration, and management.
- **Responsive UI**: Built with Next.js, React, and Tailwind CSS for a modern, mobile-friendly user experience.

---

## Installation

### Prerequisites
- Node.js (v16+)
- Google Cloud account with GCS, Video Intelligence API, and Speech-to-Text API enabled.
- Appwrite instance.
- ChromaDB instance.
- Clerk account and project setup.

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tiktok-clone.git
   cd tiktok-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following variables:
   ```env
   NEXT_PUBLIC_GCP_PROJECT_ID=your-google-cloud-project-id
   NEXT_PUBLIC_GCS_BUCKET_NAME=your-gcs-bucket-name
   NEXT_PUBLIC_VIDEO_INTELLIGENCE_API_KEY=your-api-key
   NEXT_PUBLIC_SPEECH_API_KEY=your-api-key
   NEXT_PUBLIC_GEMINI_API_KEY=your-api-key
   NEXT_PUBLIC_CHROMADB_URL=your-chromadb-instance-url
   NEXT_PUBLIC_APPWRITE_ENDPOINT=your-appwrite-endpoint
   NEXT_PUBLIC_APPWRITE_PROJECT_ID=your-appwrite-project-id
   NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api
   NEXT_PUBLIC_CLERK_API_KEY=your-clerk-api-key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Usage
1. Register or log in via the Clerk-powered authentication system.
2. Upload a video via the UI.
3. The video is stored in Google Cloud Storage.
4. AI processes the video to generate:
   - Content labels.
   - Speech-to-text transcription.
   - Text detected in video frames.
5. Gemini combines the labels and transcriptions into embeddings.
6. Embeddings are stored in ChromaDB.
7. Metadata, including the GCS video link and associated IDs, are saved in Appwrite.

---

## Directory Structure
```
/
├── components        # Reusable React components
├── pages             # Next.js pages
├── styles            # Global and component-specific styles
├── utils             # Utility functions
├── public            # Static assets
└── services          # API integrations and backend logic
```

---


## License
This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments
- [Google Cloud Platform](https://cloud.google.com)
- [Appwrite](https://appwrite.io)
- [ChromaDB](https://docs.trychroma.com)
- [Clerk](https://clerk.dev)
- [Tailwind CSS](https://tailwindcss.com)
