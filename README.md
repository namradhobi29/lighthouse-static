🌙 Lighthouse Experience — Cinematic Web Project
🚀 Overview

Lighthouse Experience is a visually immersive, cinematic web project that simulates a lighthouse guiding through darkness using interactive light beam animations, smooth UI transitions, and modern front-end techniques.

This project is not just a website — it's an interactive storytelling experience combining design, animation, and user interaction.

✨ Features
🎥 Full-screen Background Video Hero Section
🔦 Dynamic Lighthouse Beam Animation (Mouse Controlled)
✍️ Typewriter Text Animation
💡 Interactive Letter Reveal Effect
🎨 Modern UI with Custom Fonts
📱 Responsive Design
🌊 Cinematic Dark Theme
🧠 Key Concepts Used
DOM Manipulation
Event Handling (mousemove)
CSS Animations & Keyframes
Clip-path & Gradients
Responsive Web Design
Modular CSS Architecture
📂 Project Structure
📁 Lighthouse-Project
│
├── 📁 css
│   ├── hero.css
│   ├── section1.css
│   ├── section2.css
│   └── style.css
│
├── 📁 js
│   └── script.js
│
├── 📁 images
│   ├── section1.png
│   └── section_1.png
│
├── 📁 videos
│   └── hero.mp4
│
├── index.html
└── README.md
⚙️ How It Works
🔦 Lighthouse Beam (Hero Section)

The beam dynamically follows the mouse movement using trigonometry:

Calculates distance and angle using:
Math.sqrt(dx * dx + dy * dy)
Math.atan2(dy, dx)
Applies transformation:
rotate(angle) + dynamic width

👉 Code Reference:

✨ Letter Reveal Effect

Each letter in the heading is wrapped in <span> and revealed only when the beam passes over it.

Dynamic splitting:
text.innerText.split("")
Visibility logic:
(a < 5 && d < distance)
⌨️ Typewriter Animation

CSS-only animation using:

@keyframes typing
@keyframes blink

👉 Code Reference:

🎨 UI & Styling Highlights
Fonts Used:
Cinzel (Elegant Titles)
Josefin Sans (Clean UI)
Poppins (Readable Content)
Effects:
Blur + Gradient Beam
Smooth Fade-in Animation
Custom Scrollbar

👉 Code Reference:

📸 Screenshots
🌕 Hero Section
Fullscreen cinematic lighthouse with moving beam
🌊 Sections
Interactive exploration with animated text
Dark aesthetic storytelling layout
🛠️ Installation & Setup
Clone the repository:
git clone https://github.com/your-username/lighthouse-project.git
Open the project:
cd lighthouse-project
Run locally:
Open index.html in browser
🌐 Live Demo

👉 (Add your deployed link here — GitHub Pages recommended)

🚀 Future Enhancements
🌌 Add parallax scrolling
🔊 Add ambient ocean sound effects
🎮 Add keyboard navigation controls
⚡ Optimize performance (lazy loading, compression)
🌍 Deploy with animations optimized for mobile
👩‍💻 Author

Namra Dhobi
🎓 Aspiring Cyber Security Analyst
💻 Frontend Developer | Networking | Python

📜 License

This project is licensed under the MIT License — feel free to use and modify.

💡 Final Note

“Not all who wander are lost — some are guided by light.”

⭐ Support
