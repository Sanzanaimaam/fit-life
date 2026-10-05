<div align="center">


<br />
<br />

A modern, dark-themed workout planner built with **Next.js App Router**.
Explore workouts, build your daily plan, and save sessions for later, all in one sleek interface.

<br />

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

[**Live Demo**](#) · [**Report Bug**](#) · [**Request Feature**](#)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Routes](#routes)
- [API Reference](#api-reference)
- [State Management](#state-management)
- [Dynamic Routing](#dynamic-routing)
- [My Plan](#my-plan)
- [Getting Started](#getting-started)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Overview

**FITlife** is a responsive fitness web app that helps users discover workouts, view detailed exercise information, organize a daily training plan, and bookmark sessions to revisit later.

This project was built to practice and showcase:

- Next.js **App Router** and **dynamic routes**
- Global state with the **Context API**
- Data fetching from a **REST API**
- **Reusable component** architecture
- **Responsive**, modern UI design

---

## Features

| | Feature | Description |
|---|---|---|
| 🏋️ | **Browse Workouts** | Explore a full library of workouts on the homepage and the all-workouts page |
| 🔎 | **Detailed View** | Muscle groups, equipment, difficulty, sets, reps, and step-by-step instructions |
| 📋 | **Today's Plan** | Add workouts to your daily plan with one click |
| 🔖 | **Save for Later** | Bookmark workouts you want to try another time |
| 📊 | **Live Stats** | Total exercises, total duration, and total calories burned |
| ↕️ | **Smart Sorting** | Sort by duration, calories, or rating |
| 🚫 | **No Duplicates** | Prevents the same workout from being added or saved twice |
| 🔢 | **Navbar Counters** | Plan and saved counts update in real time |
| 🔔 | **Toast Feedback** | Instant notifications powered by React Toastify |
| 📱 | **Fully Responsive** | Optimized for mobile, tablet, and desktop |
| 🎨 | **Dark Fitness UI** | Clean, modern, high-contrast design |

---

## Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js (App Router) |
| **Library** | React |
| **Language** | JavaScript |
| **Styling** | Tailwind CSS, DaisyUI |
| **State** | Context API |
| **Routing** | `next/link`, dynamic routes |
| **Images** | `next/image` |
| **Data** | REST API |
| **Notifications** | React Toastify |

---

## Project Structure

```text
src/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   │
│   ├── myplan/
│   │   └── page.jsx
│   │
│   └── viewAllCard/
│       ├── page.jsx
│       └── [id]/
│           └── page.jsx
│
├── assets/
│   ├── logo.png
│   └── banner.png
│
├── components/
│   ├── homepage/
│   │   ├── Banner.jsx
│   │   └── Workouts.jsx
│   │
│   ├── myplan/
│   │   └── PlanStats.jsx
│   │
│   ├── shared/
│   │   ├── Navbar.jsx
│   │   ├── WorkoutsCard.jsx
│   │   └── PlanWorkoutCard.jsx
│   │
│   └── workDetailsButton/
│       ├── AddToPlan.jsx
│       └── SaveForLater.jsx
│
└── context/
    └── WorklistContext.jsx
```

---

## Routes

| Route | Description |
|---|---|
| `/` | Homepage with featured workouts |
| `/viewAllCard` | All available workouts |
| `/viewAllCard/[id]` | Details of a specific workout |
| `/myplan` | Today's plan and saved workouts |

---

## API Reference

Workout data is fetched from:

```text
GET https://api.abcz.workers.dev/api/fitlog
```

**Each workout includes:**

| Field | Description |
|---|---|
| Name | Workout title |
| Muscle groups | Targeted muscles |
| Calories | Calories burned |
| Duration | Time in minutes |
| Equipment | Required equipment |
| Difficulty | Beginner / Intermediate / Advanced |
| Rating | User rating |
| Sets & Reps | Recommended volume |
| Instructions | Step-by-step guide |
| Image | Workout image |

---

## State Management

FITlife uses the **React Context API** to manage workout lists globally.

`WorklistContext` exposes:

```text
addToPlan
saveForLater
```

This lets the **Navbar**, **workout details page**, and **My Plan page** share and update the same data without prop drilling.

```text
                ┌──────────────────────┐
                │    WorklistContext   │
                │  addToPlan / saved   │
                └──────────┬───────────┘
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
     Navbar         Workout Details        My Plan
   (counters)       (Add / Save btn)    (lists + stats)
```

---

## Dynamic Routing

Workout details use a dynamic segment:

```text
/viewAllCard/[id]
```

Example:

```text
/viewAllCard/5
```

The `id` is received through Next.js `params`, and the matching workout is selected from the API data.

---

## My Plan

The **My Plan** page has two sections:

**Today's Plan**
Workouts added to the user's current plan.

**Saved**
Workouts bookmarked for later.

**Stats calculated automatically:**

```text
Total Exercises  ·  Total Minutes  ·  Total Calories
```

**Sorting options:**

```text
Duration  ·  Calories  ·  Rating
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.18 or later
- **npm**, **yarn**, or **pnpm**

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm run start
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production server |
| `npm run lint` | Run ESLint |

---

## Roadmap

- [x] Browse and view workouts
- [x] Add to plan / save for later
- [x] Duplicate prevention
- [x] Plan statistics and sorting
- [ ] Remove workouts from plan and saved lists
- [ ] Persist data with `localStorage`
- [ ] Search and filter by muscle group or difficulty
- [ ] Weekly planner view
- [ ] User authentication
- [ ] Progress tracking and charts

---

## Contributing

Contributions are welcome!

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## Author

**Your Name**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/YOUR_USERNAME)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/YOUR_USERNAME)

<div align="center">

<br />

If you like this project, give it a ⭐ on GitHub!

**Built with 💪 and Next.js**

</div>
