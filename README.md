📘 Story Learning App (React + Tailwind)

An interactive story-based learning application built with React, TypeScript, Tailwind CSS, and React Router.
Users can explore stories, listen to narrated content, practice with AI characters, and take quizzes based on difficulty levels.

🚀 Features
🏠 Home Screen

Stories for You

Horizontally scrollable story cards

Tap a story to open the Now Playing screen

Practice with Humans

Join live practice sessions

Practice with AI

Talk with AI characters like Doraemon and Spider Man

Perfect image fit and clean card UI

🎧 Now Playing Screen

Story artwork with green UI effects

Play / Pause audio controls

Progress bar with duration

“Test Your Understanding” CTA

Smooth gradients, shadows, and borders for a premium feel

🧠 Quiz Level Screen

Choose difficulty:

Easy

Medium (highlighted)

Hard

Visual selection states

“What you’ll get” info section

Disabled/enabled CTA based on selection

🧭 Bottom Navigation

Persistent bottom navigation bar

Tabs:

Home

Learn

Call

Profile

Active tab highlighting using React Router

🛠 Tech Stack

React + TypeScript

Tailwind CSS

React Router DOM

Lucide Icons

Modern mobile-first UI design

📂 Project Structure
src/
│── pages/
│   ├── Home.tsx
│   ├── NowPlaying.tsx
│   ├── QuizLevel.tsx
│
│── components/
│   ├── BottomNav.tsx
│
│── AppLayout.tsx
│── App.tsx
│── main.tsx

🔀 Routes
Path	Screen
/	Home
/player	Now Playing
/quiz	Quiz Level
🧩 How Navigation Works

Clicking a Story Card → navigates to /player

Clicking Learn tab → opens story learning flow

Clicking Test Your Understanding → quiz flow (Quiz Level screen)

▶️ Getting Started
1️⃣ Install dependencies
npm install

2️⃣ Run the app
npm run dev

3️⃣ Open in browser
http://localhost:5173

🎨 UI Highlights

Consistent green theme

Soft shadows & gradients

Mobile-app-like layout

Smooth transitions

Clean card-based design

📌 Future Improvements

Audio streaming backend

User progress tracking

Real AI voice conversations

Quiz scoring & analytics

Authentication & profiles

🙌 Author

Harish Vasamsetti
Frontend Developer | React | UI/UX
