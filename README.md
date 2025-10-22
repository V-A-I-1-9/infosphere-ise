# 🎯 Infosphere - ISE Department Club Portal (Redesigned)

A modern, highly-interactive web platform for managing Sports, Technical, and Cultural club activities at MIT Mysore, featuring a stunning UI built with Tailwind CSS, Aceternity UI, and 21st.dev components.

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-yellowgreen?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-blueviolet?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📋 Table of Contents

* [About](#about)
* [UI/UX Enhancements](#uiux-enhancements)
* [Core Features](#core-features)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Google Sheets Integration](#google-sheets-integration)
* [Project Structure](#project-structure)
* [Contributing](#contributing)
* [Authors](#authors)
* [License](#license)
* [Acknowledgments](#acknowledgments)

## 🌟 About

**Infosphere** is a comprehensive web portal for the Information Science & Engineering Department at Maharaja Institute of Technology, Mysore. Originally designed as a centralized platform for managing club activities, this version features a complete **frontend redesign** focused on delivering a highly engaging and visually appealing user experience.

It showcases activities across three major clubs:
* ⚽ **Sports Club:** Athletic events, team rosters, achievements.
* 💻 **Technical Club:** Workshops, hackathons, projects, technical achievements.
* 🎭 **Cultural Club:** Dance, music, drama events, cultural performances.

The platform continues to leverage **Google Sheets as a CMS**, making content updates easy for non-technical staff without requiring code deployment.

## ✨ UI/UX Enhancements

This redesigned version elevates the user experience with modern UI components and animations:
* **Interactive Background:** A subtle, cursor-following gradient provides a dynamic feel throughout the site.
* **Animated Hero:** Gooey text morphing and staggered animations create a captivating landing experience.
* **Modern Navigation:** Features a sleek "Tubelight" navbar (desktop) that transitions to a bottom-fixed icon bar (mobile).
* **Engaging Visuals:** Includes a 3D Photo Carousel, interactive Comet Cards for coordinators, and dynamic Wobble Cards with glassmorphism effects.
* **Elegant Events Timeline:** Presents events chronologically using Aceternity's Timeline, featuring interactive "Focus Cards" with glassmorphism effects.
* **Professional Footer:** A glassmorphism footer provides essential links and contact information seamlessly.
* **Smooth Loading:** Replaced the default spinner with an animated Gooey Loader.
* **Fully Responsive:** Built mobile-first with Tailwind CSS, ensuring a perfect experience on all devices.

## ✅ Core Features (Backend/Data)

* **Real-time Data Sync:** Automatic updates from Google Sheets.
* **Smart Caching:** React Query for optimal performance (30-min cache).
* **Google Sheets CMS:** Easy content management for non-technical users.
* **Centralized Data:** Manages events, teams, achievements, and projects across all clubs.

## 🛠️ Tech Stack

### Frontend
* **React 18.2.0:** UI library with hooks.
* **Vite 6.3.5:** Build tool and dev server.
* **Tailwind CSS 3.x:** Utility-first CSS framework for rapid UI development.
* **shadcn/ui:** Re-usable components built using Radix UI and Tailwind CSS.
* **Aceternity UI:** Beautifully crafted UI components for React & Tailwind.
* **21st.dev Components:** Community-contributed modern UI elements.
* **Framer Motion:** Animation library for React.
* **React Router 6.30.0:** Client-side routing.
* **React Query 4.36.1:** Server state management.
* **Lucide React:** Icon library.
* **PapaParse 5.5.2:** CSV parsing for Google Sheets integration.

### Backend/CMS
* **Google Sheets:** Content management system.
* **Google Apps Script:** Automated data fetching and validation (as per original setup).
* **Google Drive:** File storage for images/posters (as per original setup).

### Development Tools
* **ESLint:** Code linting.
* **React Query Devtools:** Query debugging.

## 🚀 Getting Started

### Prerequisites
* Node.js (v18 or higher) - [Download](https://nodejs.org/)
* npm or yarn (comes with Node.js)
* Git - [Download](https://git-scm.com/)
* Google Account (for Google Sheets integration)

### Installation
1.  Clone the repository:
    ```bash
    git clone [https://github.com/V-A-I-1-9/infosphere-ise.git](https://github.com/V-A-I-1-9/infosphere-ise.git)
    cd infosphere-ise
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  Set up environment variables (see below).
4.  Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
5.  Open in browser: Navigate to `http://localhost:5173` (or the port specified).

### Environment Variables
Create a `.env` file in the project root (`touch .env`) with the following variables, pointing to your Google Sheets CSV export URLs:

```env
# Sports Club Google Sheets URLs
VITE_SPORTS_EVENTS_URL=[https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=EVENTS_GID](https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=EVENTS_GID)
VITE_SPORTS_TEAM_URL=[https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=TEAM_GID](https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=TEAM_GID)
VITE_SPORTS_ACHIEVEMENT_URL=[https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=ACHIEVEMENTS_GID](https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=ACHIEVEMENTS_GID)

# Technical Club Google Sheets URLs
VITE_TECHNICAL_EVENTS_URL=[https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=EVENTS_GID](https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=EVENTS_GID)
VITE_TECHNICAL_TEAM_URL=[https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=TEAM_GID](https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=TEAM_GID)
VITE_TECHNICAL_ACHIEVEMENT_URL=[https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=ACHIEVEMENTS_GID](https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=ACHIEVEMENTS_GID)
VITE_TECHNICAL_PROJECT_URL=[https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=PROJECTS_GID](https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=PROJECTS_GID)

# Cultural Club Google Sheets URLs
VITE_CULTURAL_EVENTS_URL=[https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=EVENTS_GID](https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=EVENTS_GID)
VITE_CULTURAL_TEAM_URL=[https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=TEAM_GID](https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=TEAM_GID)
VITE_CULTURAL_ACHIEVEMENT_URL=[https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=ACHIEVEMENTS_GID](https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=ACHIEVEMENTS_GID)

(How to get these URLs: Open Google Sheet -> File -> Share -> Publish to web -> Select tab & CSV -> Publish -> Copy URL)

# 📊 Google Sheets Integration
(Refer to the original README or project documentation for details on Sheet Structure and Google Apps Script Setup, as this backend logic remains unchanged.)

## 📁 Project Structure
infosphere-ise/
├── public/
├── src/
│   ├── assets/         # Images, logos (clubs, gallery, profiles)
│   ├── components/
│   │   ├── cultural/     # Cultural page component
│   │   ├── events/       # Events page & EventTimelineCard component
│   │   ├── home/         # Home page component
│   │   ├── sports/       # Sports page component
│   │   ├── technical/    # Technical page component
│   │   └── ui/           # Reusable UI components (shadcn, Aceternity, 21st.dev)
│   ├── hooks/          # React Query data fetching hooks
│   ├── lib/            # Utilities (e.g., cn function from shadcn)
│   ├── pages/          # Layout, Footer, Header, Spinner, PageNotFound
│   ├── services/       # API layer (fetching CSV data)
│   ├── App.jsx
│   ├── App.css         # Global styles & Tailwind directives
│   └── main.jsx
├── .env
├── .gitignore
├── components.json     # shadcn/ui config
├── jsconfig.json       # JS path aliases
├── package.json
├── postcss.config.js   # PostCSS config
├── tailwind.config.js  # Tailwind config
├── vite.config.js
└── README.md

## 🤝 Contributing
Contributions are welcome! Here’s how you can contribute:

1. **Fork** the repository.
2. **Create** your feature branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit** your changes:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push** to the branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a **Pull Request**.

## 🧑‍💻 Authors
- **V-A-I-1-9** - UI Redesign & Implementation
- **R-Pradhyumna** - Initial Backend/Data Structure

(Feel free to add more contributors or adjust roles.)

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments
- **MIT Mysore ISE Department** faculty and students.
- **Aceternity UI** & **21st.dev** for their amazing UI components.
- **shadcn/ui** for the component structure and tooling.
- **Tailwind CSS** team.
- **React Query** team.
- **Google Workspace** for Sheets integration.
- **Unsplash** for placeholder images.


# Event Calendar (Consolidated)
VITE_EVENT_URL=[https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=CALENDAR_GID](https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=CALENDAR_GID)
