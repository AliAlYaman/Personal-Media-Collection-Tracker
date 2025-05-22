# 🎥 Personal Media Collection Tracker

A full-stack web application to manage your personal collection of **movies**, **music**, and **games** — built using **React**, **Tailwind CSS**, **Laravel**, and **OpenAI integration**.

---

## 🌐 Live Demo

Access the live frontend here:  
👉 [https://personal-media-collection-tracker.vercel.app/login](https://personal-media-collection-tracker.vercel.app)

---

## 🚀 Features

### 🔐 Authentication

- Laravel Fortify-powered login and registration
- Secure CSRF protection using Laravel Sanctum

### 📦 Media Management

- Add, edit, and delete media items
- Supports movies, music, and games
- Stores title, creator, and release date

### 🤖 AI Integration

- Smart recommender system powered by OpenAI
- Suggests new media based on your favorites

### ⚙️ Tech Stack

| Frontend     | Backend           | AI           |
| ------------ | ----------------- | ------------ |
| React + Vite | Laravel 10        | OpenAI GPT-4 |
| Tailwind CSS | Sanctum + Fortify |              |
| Axios        | Sqlite            |              |

---

## 🛠️ Local Setup

### 🔧 Prerequisites

- Node.js + npm
- PHP 8+
- Composer
- Sqlite

---

### 🚩 Backend Setup (Laravel)

```bash
git clone <repo-url>
cd backend
cp .env.example .env
composer install
php artisan key:generate

# Setup DB
php artisan migrate

# Serve
php artisan serve
```
