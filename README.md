# Full-Stack Product Management System 🚀

Yeh ek professional Product Management System hai jise **React.js** (Frontend) aur **Node.js/Express** (Backend) ko connect karke banaya gaya hai. Is project mein CRUD operations aur real-time UI updates ka istemal kiya gaya hai.

## 🛠 Tech Stack

- **Frontend:** React.js, Context API, Tailwind CSS / CSS3
- **Backend:** Node.js, Express.js
- **Database:** Static JSON Data (Custom API)
- **Notification:** React-Toastify
- **Icons & Images:** Lucide-react / Font-Awesome & Unsplash/Pexels

## ✨ Features (Assignment Requirements)

- [cite_start]**Fetch Products:** Backend se 30+ relevant products fetch karke display karna. [cite: 13, 21]
- [cite_start]**Add Product:** Form ke zariye naya product add karna aur UI ko bina refresh kiye update karna. [cite: 25, 27]
- [cite_start]**Update Product:** Maujooda product ki details edit karna aur changes instantly reflect karna. [cite: 29, 32]
- [cite_start]**Delete Product:** Kisi bhi product ko list se foran remove karna. [cite: 33, 36]
- [cite_start]**Toasts:** Success aur Error messages ke liye `react-toastify` ka istemal. 
- [cite_start]**Search:** Title ke mutabiq products ko filter karne ki salahiyat. 
- **Responsive Design:** Mobile aur Desktop dono ke liye behtareen UI.

## 📁 Project Structure

```text
Full-Stack Product Management System/
├── Backend/
│   ├── src/
│   │   ├── controllers/    # Business logic
│   │   ├── routes/         # API Endpoints
│   │   └── data/           # Static Product Data (15+ items)
│   └── app.js              # Server Entry Point
├── Frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI Components
│   │   ├── context/        # Global State Management
│   │   └── pages/          # Add, Edit, List Pages
│   └── App.jsx
└── README.md
