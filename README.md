# 🛍️ E-commerce Platform in Next.js

This project was carried out over 4 weeks by a group of four people. The goal was to create a minimalist e-commerce platform built with **Next.js 15 App Router** and **TypeScript**. We created a fictional company and a platform for selling electronics, drawing some design inspiration from Komplett's website. We used Figma to plan the layout and for team referencing. We utilized GitHub Projects to structure and plan the work. The site fetches data from [dummyjson.com/products](https://dummyjson.com/products). We host our website on [Vercel](https://new-tech-beryl.vercel.app/)

---

## 📑 Table of Contents
- 📖 [About the Project](#-about-the-project)
- ✨ [Features](#-features)
- 🛠 [Technologies](#-technologies)
- ⚙️ [Installation](#-installation)
- 🚀 [Usage](#-usage)
- 📂 [Project Structure](#-project-structure)
- 📈 [Workflow](#-workflow)
- 🗓 [Sprint Plan](#-sprint-plan)
- 🛠️ My Contribution
- 📚 [Lessons Learned](#-lessons-learned)
- ✍️ [Contact](#-contact)


---

## 📖 About the Project
This was a group exercise with the goal of building a **minimalist e-commerce platform**.
The purpose was to practice:
- Working with Server Components, Client Components, static and dynamic routes
- Handling asynchronous data
- Practical agile teamwork

---

## ✨ Features
- ✅ Homepage with product overview
- ✅ Hero section with CTA
- ✅ Product page with an "Add to Cart" button
- ✅ Shopping Cart
- ✅ Search bar
- ✅ About the company page
- ✅ Contact page with a contact form
- ✅ Admin page for adding, updating, and deleting products

---

## 🛠 Technologies
- [Next.js 15 (App Router)](https://nextjs.org/)
- [WAVE](https://wave.webaim.org/)
- [API](https://dummyjson.com/products)
- [Vercel](https://vercel.com)

---

## ⚙️ Installation
```bash
# Clone the repository
git clone https://github.com/Frawser/new-tech

# Navigate to the project directory
cd new-tech

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 🚀 Usage
* Homepage -> displays products + hero section
* About -> static page with text and image
* Contact -> static page with contact form
* Products page -> list of products
* Cart -> ability to add products
* Search bar -> search for products
* Admin -> add, delete, and update products

---

## 📂 Project Structure

```
|-- app/
|  |-- page.tsx            # Home page
|  |-- about/page.tsx      # About us
|  |-- admin/page.tsx      # Admin
|  |-- cart/page.tsx       # Cart
|  |-- contact/page.tsx    # Contact
|  |-- products/page.tsx   # Products
|-- components/            # Reusable components              
|-- lib/utils              # Utils
```

---

## 📈 Workflow

* 👥 Group work in agile sprints (SCRUM)
* 📑 GitHub Projects (Kanban board)
* 🌱 Feature branches
* 🔍 PR + code review

---

## 🗓 Sprintplan

### Sprint 1 - Basic structure

* Set up the Next.js project
* Created menus & static pages
* Hämta data från api:et och rendera enkel lista

### Sprint 2 - Functionality

* Created components such as product card and pagination buttons

### Sprint 3 - Interactivity

* Continued work on components
* Created forms for the admin page
* Fixed things such as ensuring the number above the cart icon updates when the shopping cart is updated

### Sprint 4 - Polish and Responsiveness

* Final adjustments to styling
* Fine-tuned responsiveness
* Created the README file
* Presented the results

---
### 🛠️ My Contribution

* **Frontend & UI Development:**
    * Designed and implemented the **Hero section** and **Product Swiper** on the homepage.
    * Developed the **Footer** and the reusable **Product Card** component.
    * Enhanced the **Product List** component with additional product details and logic.

* **Cart State Persistence & Rendering (Client Logic):**
    * **Implemented the mechanism** for the shopping cart by developing the logic to **read and write data to `localStorage`**.
    * Developed the dedicated **Cart component** (client component) on the cart page, implementing core functionality such as:
      * Retrieving the stored data from `localStorage`.
      * Rendering the product list and calculating the total price.
      * Allowing users to change the quantity of each product.
      * Providing functionality to delete products from the cart.

* **Admin Functionality:**
    * Developed the **update functionality** (integrated with Server Actions) for editing existing product data on the Admin page.

* **Responsiveness & Polish:**
    * Ensured **full responsiveness** for all my created components, as well as the entire Admin page layout.

---

## 📚 Lessons Learned

* The difference between Server & Client Components in Next.js
* Agile work methods
* API integration with dummyjson
* Responsiveness
* CSS Modules
* Reusable Components
* Vercel hosting
* GitHub Projects

---

## ✍️ Contact

👤 Anders
🔗[anderszone](https://github.com/anderszone)

👤 Karl Ragnar
🔗[presidentkg](https://github.com/presidentkg)

👤 Mikael
🔗[Frawser](https://github.com/Frawser)

👤 Valeriia
🔗[avreally](https://github.com/avreally)
