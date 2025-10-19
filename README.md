# 🎯 Infosphere - ISE Department Club Portal

### A modern web platform for managing Sports, Technical, and Cultural club activities at MIT Mysore

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF.svg)](https://vitejs.dev/)
[![React Query](https://img.shields.io/badge/React_Query-4.36.1-FF4154.svg)](https://tanstack.com/query)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Google Sheets Integration](#google-sheets-integration)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Authors](#authors)
- [License](#license)

---

## 🌟 About

**Infosphere** is a comprehensive web portal for the Information Science & Engineering Department at Maharaja Institute of Technology, Mysore. It serves as a centralized platform for managing and showcasing activities across three major clubs:

- **⚽ Sports Club** - Athletic events, team rosters, and achievements
- **💻 Technical Club** - Workshops, hackathons, projects, and technical achievements
- **🎭 Cultural Club** - Dance, music, drama events, and cultural performances

The platform uses **Google Sheets as a CMS**, making it easy for non-technical staff to update content without code deployment.

---

## ✨ Features

### Core Functionality

- ✅ **Real-time Data Sync** - Automatic updates from Google Sheets
- ✅ **Smart Caching** - React Query for optimal performance (30-min cache)
- ✅ **Responsive Design** - Mobile-first approach, works on all devices
- ✅ **Event Calendar** - Centralized calendar for all club events
- ✅ **Team Management** - Display team members with contact info and social links
- ✅ **Achievement Showcase** - Highlight competition wins and awards
- ✅ **Project Gallery** - Technical club projects with GitHub/demo links
- ✅ **Fast Loading** - Code splitting and lazy loading for instant page loads

### Technical Features

- ⚡ **Vite Build Tool** - Lightning-fast development and build times
- 🔄 **React Query** - Server state management with automatic caching
- 🎨 **Modern CSS** - Responsive grid layouts with Flexbox/Grid
- 📊 **CSV Parsing** - PapaParse for Google Sheets integration
- 🧪 **Test Data Generator** - Built-in Google Apps Scripts for dummy data
- 🔐 **Environment Variables** - Secure configuration management

---

## 🛠️ Tech Stack

### Frontend

- **React 18.2.0** - UI library with hooks
- **React Router 6.30.0** - Client-side routing
- **React Query 4.36.1** - Server state management
- **Vite 6.3.5** - Build tool and dev server
- **PapaParse 5.5.2** - CSV parsing for Google Sheets
- **React Icons 5.5.0** - Icon library

### Backend/CMS

- **Google Sheets** - Content management system
- **Google Apps Script** - Automated data fetching and validation
- **Google Drive** - File storage for images/posters

### Development Tools

- **ESLint 9.25.0** - Code linting
- **React Query Devtools** - Query debugging

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)
- **Google Account** - For Google Sheets integration

### Installation

1. **Clone the repository**
   git clone https://github.com/your-username/infosphere-club-portal.git
   cd infosphere-club-portal

2. **Install dependencies**
   npm install or yarn install

3. **Set up environment variables**

Create a `.env` file in the project root:
touch .env

4. **Start development server**
   npm run dev or yarn dev

5. **Open in browser**

Navigate to `http://localhost:5173`

## ⚙️ Environment Variables

Create a `.env` file with the following variables:

Sports Club Google Sheets URLs
VITE_SPORTS_EVENTS_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=EVENTS_GID
VITE_SPORTS_TEAM_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=TEAM_GID
VITE_SPORTS_ACHIEVEMENT_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=ACHIEVEMENTS_GID

Technical Club Google Sheets URLs
VITE_TECHNICAL_EVENTS_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=EVENTS_GID
VITE_TECHNICAL_TEAM_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=TEAM_GID
VITE_TECHNICAL_ACHIEVEMENT_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=ACHIEVEMENTS_GID
VITE_TECHNICAL_PROJECT_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=PROJECTS_GID

Cultural Club Google Sheets URLs
VITE_CULTURAL_EVENTS_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=EVENTS_GID
VITE_CULTURAL_TEAM_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=TEAM_GID
VITE_CULTURAL_ACHIEVEMENT_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=ACHIEVEMENTS_GID

Event Calendar
VITE_EVENT_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=CALENDAR_GID

**How to get these URLs:**

1. Open your Google Sheet
2. Go to **File → Share → Publish to web**
3. Select the specific tab (e.g., "Events")
4. Choose **Comma-separated values (.csv)**
5. Click **Publish** and copy the URL

---

## 📁 Project Structure

infosphere-club-portal/
├── public/
│ ├── android-chrome-192x192.png
│ └── favicon.ico
├── src/
│ ├── components/
│ │ ├── home/
│ │ │ └── Home.jsx
│ │ ├── sports/
│ │ │ ├── Sports.jsx
│ │ │ └── Sports.css
│ │ ├── technical/
│ │ │ ├── Technical.jsx
│ │ │ └── Technical.css
│ │ ├── cultural/
│ │ │ ├── Cultural.jsx
│ │ │ └── Cultural.css
│ │ └── events/
│ │ ├── Events.jsx
│ │ └── Events.css
│ ├── hooks/
│ │ ├── useSportsData.js
│ │ ├── useTechnicalData.js
│ │ ├── useCulturalData.js
│ │ └── useEventsData.js
│ ├── services/
│ │ ├── apiSports.js
│ │ ├── apiTechnical.js
│ │ ├── apiCultural.js
│ │ └── apiEvents.js
│ ├── pages/
│ │ ├── AppLayout.jsx
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ ├── Spinner.jsx
│ │ └── PageNotFound.jsx
│ ├── App.jsx
│ ├── App.css
│ └── main.jsx
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

---

## 📊 Google Sheets Integration

### Sheet Structure

Each club has 3 Google Sheets with specific columns:

#### **Sports Club**

**Events Tab:**

- File_ID, File_Name, File_URL, Sport_Type, Event_Name, Event_Date, Match_Result, Venue, Description

**Team Tab:**

- File_ID, Photo_URL, Member_Name, Role, Sport_Type, Jersey_Number, Year, Bio, Contact_Email, Contact_Phone

**Achievements Tab:**

- File_ID, File_URL, Sport_Type, Achievement_Title, Achievement_Date, Achievement_Type, Level, Winner_Names, Description

#### **Technical Club**

**Events Tab:**

- File_ID, File_URL, Event_Type, Event_Name, Event_Date, Topic_Technology, Speaker_Instructor, Duration, Venue, Registration_Link, Description

**Team Tab:**

- File_ID, Photo_URL, Member_Name, Role, Specialization, Year, Bio, Contact_Email, GitHub_Profile, LinkedIn_Profile

**Achievements Tab:**

- File_ID, File_URL, Competition_Name, Achievement_Date, Achievement_Type, Level, Winner_Names, Project_Name, Description

**Projects Tab:** (Unique to Technical)

- File_ID, File_URL, Project_Name, Year, Category, Team_Members, Technology_Stack, Project_Abstract, GitHub_URL, Demo_URL, Status

#### **Cultural Club**

**Events Tab:**

- File_ID, File_URL, Event_Name, Event_Date, Event_Type, Venue, Description

**Team Tab:**

- File_ID, Photo_URL, Member_Name, Role, Category, Year, Bio, Contact_Email, Contact_Phone

**Achievements Tab:**

- File_ID, File_URL, Achievement_Title, Achievement_Date, Achievement_Type, Level, Winner_Names, Description

#### **Event Calendar**

- event_id, title, category, sub_category, start, end, venue, description, registration_link, poster_url, status, featured

### Google Apps Script Setup

1. Open your Google Sheet
2. Go to **Extensions → Apps Script**
3. Copy the provided script for each club (Sports, Technical, Cultural, Events)
4. Update `FOLDER_IDS` with your Google Drive folder IDs
5. Run **🧪 Generate Test Data** to populate with sample data
6. Use **🔄 Refresh Data** to sync from Drive folders

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- MIT Mysore ISE Department faculty and students
- React Query team for excellent documentation
- Unsplash for free stock images
- Google Workspace for Sheets integration

---

## 📞 Contact

For questions or support:

- Email: hodise@mitmysore.in
- Department: Information Science & Engineering, MIT Mysore

---

**Made with ❤️ by ISE Department, MIT Mysore**
