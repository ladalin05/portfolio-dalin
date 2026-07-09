import homeImage from "../assets/images/pureclean/home.png"
import loginImage from "../assets/images/pureclean/login.png"
import profileImage from "../assets/images/pureclean/profile.png"

import mainImagePos from "../assets/images/pos-project/mainImage.png"
import dashboardImage from "../assets/images/pos-project/dashboard.png"
import loginPosImage from "../assets/images/pos-project/login.png"
import PosImage from "../assets/images/pos-project/pos.png"

import mainImaged2d from '../assets/images/d2d-laundry/d2d-laundry.png'
import webSite from "../assets/images/d2d-laundry/website.png"
import adminDsh from "../assets/images/d2d-laundry/adminDashboard.png"
import driverDsh from "../assets/images/d2d-laundry/driver.png"

import REWebsite from "../assets/images/real-estate/website.png"
import RELogin from "../assets/images/real-estate/login.png"
import REDashboard from "../assets/images/real-estate/dashboard.png"


export const projects = [

  {
    id: 1,
    title: 'D2D Laundry',
    category: 'Full-Stack App',
    subcategory: 'Door-to-door laundry platform',
    desc: 'A full-stack door-to-door laundry platform with a customer-facing site, admin dashboard, driver portal, and REST API backend enabling end-to-end order management from pickup scheduling to delivery.',
    overview: `D2D Laundry is a full-stack, multi-interface laundry platform built to digitize and automate the entire door-to-door laundry workflow. The system is composed of four connected layers a public-facing website, an admin dashboard, a driver portal, and a REST API backend each serving a distinct role in the operation.
      Customers interact with the public website to browse services, view transparent pricing tiers (Wash & Fold at $1.55/kg, Wash & Iron at $2.50/kg), and place laundry pickup requests. Once an order is submitted, they can track its real-time status as it moves through pickup, cleaning, and delivery stages no phone calls required.
      The admin dashboard is the operational command center. Staff can manage the full order lifecycle, monitor active customers and drivers, configure laundry services and pricing, set driver zones and time slots, handle payments, and view performance metrics like total revenue, payment rate, and average order value all from a single interface.
      Drivers get their own dedicated portal a focused, mobile-friendly interface that shows their daily pickup schedule, active orders with customer details, earnings for the day, and a full order history. Status updates made by drivers are reflected instantly across the system, keeping customers and admins in sync without manual coordination.
      The backend is a REST API built with Node.js and MySQL, powering all three frontends. It handles authentication, order state management, driver assignment, payment tracking, and CMS content making the platform modular, scalable, and easy to extend as the business grows.`,
    highlights: [
      'Architected a multi-interface full-stack system: public site, admin dashboard, driver portal, and REST API',
      'Implemented real-time order tracking across pickup, cleaning, and delivery stages',
      'Built admin dashboard with full order, customer, driver, payment, and CMS management',
      'Developed a dedicated driver portal with daily schedule, active orders, and earnings tracking',
      'Designed pricing engine supporting multiple service tiers, delivery fees, and express surcharges',
      'Integrated REST APIs connecting all three frontends to a shared Node.js and MySQL backend',
    ],
    role: 'Frontend & Backend Developer',
    year: '2026',
    techs: ['React', 'Nuxt', 'Node.js', 'MySQL', 'Tailwind CSS'],
    gitUrl: [
      { title: 'Website', url: 'https://github.com/ladalin05/Bird-Laundry-Website' },
      { title: 'Admin Frontend', url: 'https://github.com/ladalin05/Bird-Laundry-Admin-Frontend' },
      { title: 'Backend API', url: 'https://github.com/ladalin05/Bird-Laundry-Admin-Backend' },
      { title: 'Driver Portal', url: 'https://github.com/ladalin05/Bird-Laundry-Delivery' },
    ],
    mainImage: mainImaged2d,
    imgs: [
      webSite,
      adminDsh,
      driverDsh,
    ],
    featured: false,
  },

  {
    id: 2,
    title: 'DLPOS - POS Management System',
    category: 'Business Management',
    subcategory: 'Point of Sale System',
    desc: 'A full-featured point-of-sale and inventory management system built for retail businesses handling sales, stock tracking, invoicing, and business analytics all in one place.',
    overview: `DLPOS is a complete point-of-sale and business management system designed for retail operations of all sizes. The system is split into two core experiences a clean cashier-facing POS terminal and a powerful admin dashboard giving both frontline staff and business owners exactly what they need without getting in each other's way.
      The POS terminal (FlowPOS) is built for speed. Cashiers can browse products by category, add items to the current order, select or create customers on the fly, and process payments via Cash, Card, or QR Pay all from one focused screen. It supports both Retail and Wholesale pricing modes, making it flexible for different types of transactions.
      On the admin side, the dashboard gives a live snapshot of the business total revenue, current stock levels, orders today, and low stock alerts that flag items needing attention. The performance timeline and revenue mix charts make it easy to spot trends and understand what's selling. Beyond analytics, admins can manage products, categories, stock adjustments and transfers, invoices, sales returns, and user accounts with role-based permissions.
      The system was built with a focus on clarity and practicality every screen is designed around real workflows that retail businesses actually use day to day.`,
    highlights: [
      'Built a dual-interface system a focused POS terminal for cashiers and a full admin dashboard for managers',
      'Implemented multi-payment support including Cash, Card, and QR Pay at checkout',
      'Designed business analytics dashboard with revenue tracking, stock levels, and low stock alerts',
      'Built inventory management with stock adjustment, stock transfer, and category management',
      'Implemented role-based access control with user management and permissions',
      'Supported Retail and Wholesale pricing modes within the same POS session',
      'Created invoicing, sales return, and full transaction history management',
    ],
    role: 'Solo Full Stack Developer',
    year: '2025',
    techs: ['Laravel', 'CSS', 'jQuery', 'MySQL'],
    gitUrl: [
      { title: 'POS System', url: 'https://github.com/ladalin05/POS-System' },
    ],
    mainImage: mainImagePos,
    imgs: [
      dashboardImage,
      loginPosImage,
      PosImage,
    ],
    featured: true,
  },

  {
    id: 3,
    title: 'Pureclean Laundry',
    category: 'Web App',
    subcategory: 'Laundry Loyalty Web App',
    desc: 'A mobile-first loyalty web app for Pureclean Laundry customers can track wash stamps, redeem free washes, present their personal QR code at checkout, and manage their profile all from their mobile browser.',
    overview: `Pureclean Laundry is a mobile-first web application built to modernize the customer experience for a local laundry service. Instead of paper stamp cards and manual tracking, customers can now manage everything digitally through their phone browser no app download required.
      The core feature is a digital loyalty card system where each wash is recorded and stamped automatically. Once a customer completes 10 washes, they unlock a free wash reward simple, transparent, and satisfying to watch fill up. Every registered user gets their own unique QR code that they simply show to the staff at the counter to log their visit and track their progress.
      On the rewards side, users can view their full redemption history and see exactly where they stand with their loyalty progress. The profile section lets users update their information, switch between languages, and toggle dark mode small touches that make the experience feel polished and personal.
      The app was designed with a clean, minimal UI and smooth bottom navigation to feel native-like on mobile, even though it runs entirely in the browser. Built with Nuxt on the frontend and Laravel powering the backend API, the system is fast, reliable, and easy to scale as the business grows.`,
    highlights: [
      'Built loyalty card system with stamp tracking (Complete 10 Washes, Get 1 Free)',
      'Generated personal QR codes for customers to present at merchant point-of-sale',
      'Implemented reward history tracking and redemption flow',
      'Designed mobile-first responsive UI with bottom navigation (Home, QR, Rewards, Profile)',
      'Added multi-language support and dark mode toggle in user settings',
    ],
    role: 'Frontend Developer',
    year: '2025',
    techs: ['Nuxt', 'Tailwind CSS', 'JQuery'],
    gitUrl: [
      { title: 'Web App', url: 'https://github.com/ladalin05/PureClean-UserLoyalty' },
    ],
    mainImage: homeImage,
    imgs: [
      homeImage,
      loginImage,
      profileImage,
    ],
    featured: false,
  },

  {
    id: 4,
    title: 'Real Estate',
    category: 'Full-Stack App',
    subcategory: 'Property listing platform',
    desc: 'A full-stack property listing platform for the Cambodian market buyers and renters can browse verified listings, filter by location, type, and price, and connect with agents through a built-in contact system, backed by a feature-rich admin dashboard.',
    overview: `Real Estate is a full-stack property listing platform built for the Cambodian market, connecting buyers, renters, and agents through a clean, searchable web interface. The platform covers the full lifecycle of a property listing from creation and verification to discovery and inquiry.
      On the public side, visitors land on a hero page with a location and property-type search bar, giving instant access to 2,000+ verified listings. They can browse by property category Residential, Office, Land, Industrial, House, Commercial, and Apartment each presented with dedicated category pages. The property listings page offers advanced filtering by keyword, purpose (sale or rent), property type, location, bedroom count, and price range, with results displayed in grid or list view and sortable by newest.
      Each property card shows key details at a glance: price, address, bed and bath count, square footage, listing status (Sale, Rent, Verified, Pending), and the assigned agent. A contact page with an integrated inquiry form lets visitors reach the team directly, with agent contact details and a 24-hour response guarantee.
      Authentication is handled through a clean sign-in and sign-up flow, giving users access to saved listings and personalized features once logged in.
      The admin dashboard is the operational backbone of the platform. It provides a real-time overview of property types (7), total listings (30), registered users, and system reports. A financial summary tracks daily, weekly, monthly, and yearly revenue. Admins can manage properties, locations, users, customer interactions, blog posts, reports, and platform settings all from a structured sidebar navigation. The latest property activity and system report feed keep admins informed at a glance.
      Built with React on the frontend and Laravel powering the backend API, with MySQL as the database and jQuery for interactive UI components.`,
    highlights: [
      'Built a multi-category property browsing experience covering 7 property types across Cambodian cities',
      'Developed advanced search and filtering by keyword, purpose, type, location, bedrooms, and price range',
      'Implemented property listing cards with status badges (Sale, Rent, Verified, Pending) and agent attribution',
      'Created a full admin dashboard with property, user, location, blog, revenue, and report management',
      'Designed a contact and inquiry system with agent details and integrated message form',
      'Built authentication flow with sign-in, sign-up, and remember-me functionality',
      'Optimized database queries with Laravel and MySQL for fast listing retrieval across 30+ properties',
    ],
    role: 'Full-Stack Developer',
    year: '2026',
    techs: ['React', 'Laravel', 'jQuery', 'MySQL', 'Tailwind CSS'],
    gitUrl: [
      { title: 'Frontend', url: 'https://github.com/ladalin05/RealEstate' },
      { title: 'Backend API', url: 'https://github.com/ladalin05/RealEstate-Backend' },
    ],
    mainImage: REWebsite,
    imgs: [
      REDashboard,
      REWebsite,
      RELogin,
    ],
    featured: false,
  },
]