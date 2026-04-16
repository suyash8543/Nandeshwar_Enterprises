# Nandeshwar Enterprises Frontend - Complete Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Project Architecture](#project-architecture)
3. [Technology Stack](#technology-stack)
4. [Features Overview](#features-overview)
5. [File Structure](#file-structure)
6. [Setup Instructions](#setup-instructions)
7. [API Integration](#api-integration)
8. [User Features](#user-features)
9. [Admin Features](#admin-features)
10. [FAQ & Troubleshooting](#faq--troubleshooting)

---

## Project Overview

### **Project Name**
Nandeshwar Enterprises Frontend

### **Project Description**
A modern, responsive React-based web application for Nandeshwar Enterprises, a solar panel and renewable energy solutions company. The application serves both end-users and administrators with features for project showcasing, contact management, and product cataloguing.

### **Purpose**
- Showcase solar projects and services to potential customers
- Manage contacts and inquiries from clients
- Display products and services through a comprehensive catalogue
- Provide an admin panel for managing projects and viewing contact messages

### **Target Users**
1. **End Users** - General public viewing projects, services, and contacting the company
2. **Admins** - Company employees managing projects and reviewing customer contacts

---

## Project Architecture

### **High-Level Architecture**

```
┌─────────────────────────────────────────────────────┐
│           Nandeshwar Enterprises Frontend           │
├─────────────────────────────────────────────────────┤
│                    React App                         │
├─────────────────────────────────────────────────────┤
│  Navbar  │ Routing (React Router) │ Sidebar (Admin) │
├─────────────────────────────────────────────────────┤
│                  API Layer (Axios)                   │
├─────────────────────────────────────────────────────┤
│         Backend API (Node.js/Express)               │
│  http://localhost:5028/api                          │
├─────────────────────────────────────────────────────┤
│              Database (MongoDB/SQL)                  │
└─────────────────────────────────────────────────────┘
```

### **Component Hierarchy**

```
App.js (Main Component with Global Navbar)
├── Navbar (Global Navigation)
├── Routes
│   ├── Public Routes
│   │   ├── Home (/)
│   │   ├── Projects (/projects)
│   │   ├── Contact (/contact)
│   │   ├── Offers (/offers)
│   │   └── Schemes (/schemes)
│   ├── Admin Routes
│   │   ├── Login (/admin/login)
│   │   ├── Dashboard (/admin) - Protected
│   │   ├── ManageProjects (/admin/projects) - Protected
│   │   └── ManageContacts (/admin/contacts) - Protected
│   └── PrivateRoute (Protection)
└── Footer/WhatsApp Widget
```

---

## Technology Stack

### **Frontend Technologies**

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.x | UI Framework |
| React Router | 6.x | Client-side routing |
| Axios | Latest | HTTP requests to API |
| Tailwind CSS | 3.x | Styling and responsive design |
| React Icons | Latest | Icon library (FontAwesome) |
| JavaScript (ES6+) | Modern | Programming language |

### **Development Tools**

| Tool | Purpose |
|------|---------|
| npm | Package manager |
| Create React App | Project scaffolding |
| PostCSS | CSS processing |
| ESLint | Code linting |

### **Backend API**

- **Base URL**: `http://localhost:5028/api`
- **Framework**: Express.js (Node.js)
- **Authentication**: JWT Tokens
- **Database**: MongoDB (assumed)

---

## Features Overview

### **User-Facing Features**

#### **1. Home Page**
- Hero section with company introduction
- Statistics display (200+ projects, 18+ years, 50+ team members)
- Services showcase (Solar Panels, Solar Lighting, Maintenance)
- **Featured Projects Section** - Displays top 3 projects from admin
- Product catalogue with Read Now and Download PDF options
- Location and contact information
- Map integration with directions
- Floating WhatsApp widget

#### **2. Projects Page**
- Dynamic project display from backend
- Image support for each project
- Responsive grid layout (3 columns)
- Project filtering and sorting
- "View Details" link for each project
- Loading states and error handling

#### **3. Contact Page**
- Contact form with fields:
  - Name
  - Email
  - Phone
  - Message
- Form validation
- Success/error messages
- Contact information display
- WhatsApp integration with dropdown for multiple numbers
- Map and directions

#### **4. Additional Pages**
- Offers (/offers)
- Schemes (/schemes)
- Catalogue (PDF download section)

### **Admin Features**

#### **1. Authentication**
- Email-based OTP login
- JWT token storage
- Protected routes using PrivateRoute component
- Automatic token attachment to API requests

#### **2. Dashboard**
- Overview of total projects
- Overview of total contacts received
- Quick statistics

#### **3. Manage Projects**
- **View Projects** - List all projects in grid layout
- **Add Projects** - Form to create new projects
  - Title (required)
  - Description (required)
  - Image upload (optional)
  - Form validation
  - Success/error feedback
- **Delete Projects** - Confirmation dialog before deletion
- Auto-refresh after adding/deleting
- Loading states

#### **4. Manage Contacts**
- **View Contacts** - List all received messages
  - Numbered display (#1, #2, etc.)
  - Latest contacts displayed first
  - Clickable email (opens mail client)
  - Clickable phone (opens phone dialer)
  - Message text with formatting preserved
  - Total count display
- **Refresh** - Reload contacts manually
- Error handling

---

## File Structure

```
frontend/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   ├── solar.jpg
│   ├── Nandeshwar Enterprises Catslogue.pdf
│   └── Final Bright Solar-1.pdf
│
├── src/
│   ├── components/
│   │   ├── AdminSidebar.js      # Admin navigation sidebar
│   │   ├── Footer.js            # Footer component
│   │   └── Navbar.js            # Global navigation bar
│   │
│   ├── pages/
│   │   ├── Home.js              # Landing page
│   │   ├── Projects.js          # Projects listing page
│   │   ├── Contact.js           # Contact form page
│   │   ├── Offers.js            # Offers page
│   │   ├── Schemes.js           # Schemes page
│   │   │
│   │   └── Admin/
│   │       ├── Dashboard.js     # Admin dashboard
│   │       ├── Login.js         # Admin login with OTP
│   │       ├── ManageProjects.js # Project management
│   │       ├── ManageContacts.js # Contact messages view
│   │       └── Signup.js        # Admin registration (optional)
│   │
│   ├── services/
│   │   ├── api.js               # Axios instance config
│   │   ├── authService.js       # Authentication functions
│   │   ├── contactService.js    # Contact API calls
│   │   ├── projectService.js    # Project API calls
│   │   └── productService.js    # Product API calls
│   │
│   ├── routes/
│   │   └── PrivateRoute.js      # Protected route wrapper
│   │
│   ├── styles/
│   │   └── global.css           # Global styles
│   │
│   ├── App.js                   # Main app component
│   ├── App.test.js              # App tests
│   ├── index.js                 # React DOM render
│   ├── index.css                # Global CSS
│   └── reportWebVitals.js       # Performance metrics
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## Setup Instructions

### **Prerequisites**
- Node.js (v14 or higher)
- npm or yarn
- Backend API running on `http://localhost:5028`

### **Installation Steps**

```bash
# 1. Navigate to project directory
cd frontend

# 2. Install dependencies
npm install

# 3. Start development server
npm start

# 4. Open browser
# Navigate to http://localhost:3000
```

### **Build for Production**

```bash
npm run build
# Creates optimized build in 'build/' folder
```

### **Environment Configuration**

Backend API URL is configured in `src/services/api.js`:

```javascript
const API = axios.create({
    baseURL: "http://localhost:5028/api",
    headers: {
        "Content-Type": "application/json"
    }
});
```

Change the `baseURL` if your backend runs on a different port.

---

## API Integration

### **Base Configuration**

**File**: `src/services/api.js`

```javascript
const API = axios.create({
    baseURL: "http://localhost:5028/api",
    headers: {
        "Content-Type": "application/json"
    }
});

// Automatic JWT token attachment
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
```

### **Available API Endpoints**

#### **Authentication**

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/send-otp` | Send OTP to email |
| POST | `/auth/verify-otp` | Verify OTP and get token |
| POST | `/auth/login` | User login |

**Service File**: `authService.js`

#### **Contacts**

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/contact` | Submit contact form |
| GET | `/contact` | Get all contacts (Admin) |

**Service File**: `contactService.js`

```javascript
export const sendContact = async (data) => {
    // data: { name, email, phone, message }
};

export const getContacts = async () => {
    // Returns array of contacts
};
```

#### **Projects**

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/projects` | Get all projects |
| POST | `/projects` | Create new project (Admin) |
| DELETE | `/projects/{id}` | Delete project (Admin) |

**Service File**: `projectService.js`

```javascript
export const getProjects = async () => {
    // Returns array of projects
};

export const addProject = async (data) => {
    // data: { title, description, imageBase64 }
};

export const deleteProject = async (id) => {
    // Deletes project with given id
};
```

### **Data Models**

#### **Contact Object**

```javascript
{
    id: unique_identifier,
    name: string,
    email: string,
    phone: string,
    message: string,
    createdAt: timestamp (optional)
}
```

#### **Project Object**

```javascript
{
    id: unique_identifier,
    title: string,
    description: string,
    imageBase64: base64_image_string (optional),
    createdAt: timestamp (optional)
}
```

#### **User/Admin Object**

```javascript
{
    id: unique_identifier,
    email: string,
    token: jwt_token,
    adminEmail: string (from localStorage),
    isAdmin: boolean (from localStorage)
}
```

---

## User Features

### **Feature: Browse Projects**

**Page**: `/projects`

**Functionality**:
- Fetches projects from API
- Displays in responsive grid (3 columns on medium+ screens)
- Shows project image, title, and description
- Click "View Details" to navigate to projects page (full list)
- Loading state while fetching
- Error handling with user-friendly messages

**Technical Details**:
- Uses `getProjects()` from `projectService`
- Loads on component mount with `useEffect`
- Displays first 3 projects on home page
- Displays all projects on dedicated projects page

### **Feature: Send Contact Message**

**Page**: `/contact`

**Functionality**:
- User fills contact form with name, email, phone, message
- Form validates required fields
- Shows loading indicator during submission
- Displays success message on successful submission
- Form resets after successful submission
- Shows error message if submission fails

**Technical Details**:
- Uses `sendContact()` from `contactService`
- Validates email format
- Sends data to `/api/contact` endpoint
- Handles form state with React hooks

### **Feature: View Company Info**

**Page**: `/` (Home)

**Includes**:
- Company description and tagline
- Services overview
- Statistics (projects, experience, team size)
- Contact information
- Location and map
- WhatsApp contact options
- Product catalogue (PDF)

### **Feature: Download Catalogue**

**Location**: Home page and multiple places

**Functionality**:
- Click "Read Now" to open PDF in new tab
- Click "Download PDF" to download file
- File: `Nandeshwar Enterprises Catslogue.pdf`

---

## Admin Features

### **Feature: Admin Login**

**Page**: `/admin/login`

**Process**:
1. Enter email address
2. Click "Send OTP"
3. Check email for OTP
4. Enter OTP in form
5. Click "Verify OTP"
6. JWT token saved to localStorage
7. Redirected to `/admin` dashboard

**Technical Details**:
- Uses `sendOTP()` endpoint
- Uses `verifyOTP()` endpoint
- JWT token stored in `localStorage` with key `token`
- Admin status stored as `isAdmin: true`
- Admin email stored as `adminEmail`

### **Feature: View Dashboard**

**Page**: `/admin`

**Displays**:
- Total count of projects
- Total count of contacts
- Quick overview cards

**Functionality**:
- Auto-loads on page visit
- Updates when projects/contacts change
- Shows loading state

### **Feature: Manage Projects**

**Page**: `/admin/projects`

#### **Sub-Feature: Add New Project**

**Steps**:
1. Click "+ Add Project" button
2. Fill form fields:
   - Project Title (required)
   - Project Description (required)
   - Project Image (optional, file upload)
3. See image preview after upload
4. Click "Add Project" to submit
5. Success message displays
6. Form auto-closes and resets
7. Project list refreshes

**Validation**:
- Title required
- Description required
- File size and type validation (optional)

#### **Sub-Feature: View Projects**

**Display**:
- Grid layout (3 columns)
- Project image, title, description
- Delete button for each project

#### **Sub-Feature: Delete Project**

**Steps**:
1. Click "Delete" button on project
2. Confirm action in dialog
3. Project deleted from database
4. List refreshes automatically

### **Feature: Manage Contacts**

**Page**: `/admin/contacts`

**Display**:
- List of all contact messages
- Sorted with newest first
- Numbered (#1, #2, #3, etc.)
- Latest contact shows as #1

**Information Shown**:
- Contact number
- Customer name
- Email (clickable - opens email client)
- Phone (clickable - opens phone dialer)
- Message text (full message with formatting)

**Functionality**:
- Click "Refresh" button to reload contacts
- Loading state while fetching
- Error handling with user messages
- Empty state if no contacts

---

## FAQ & Troubleshooting

### **Q1: How do I run the project locally?**

**A**: 
```bash
cd frontend
npm install
npm start
```
The app will open at `http://localhost:3000`

---

### **Q2: The API is not connecting. What should I do?**

**A**: 
- Check if backend is running on `http://localhost:5028`
- Verify the `baseURL` in `src/services/api.js`
- Check browser console for error messages (F12)
- Ensure backend is returning data in expected format

---

### **Q3: How do I add a new project as admin?**

**A**:
1. Login to admin panel (`/admin/login`)
2. Navigate to `/admin/projects`
3. Click "+ Add Project"
4. Fill in title, description, and image
5. Click "Add Project"

---

### **Q4: Why is the map not displaying?**

**A**:
- Map URL might be incorrect
- Browser console shows error details
- Check if Google Maps embed is accessible
- Update map URL with correct coordinates

---

### **Q5: How do I deploy this to production?**

**A**:
```bash
# Build optimized version
npm run build

# Deploy 'build' folder to hosting service:
# - Netlify
# - Vercel
# - GitHub Pages
# - AWS S3 + CloudFront
# - etc.
```

---

### **Q6: How do I add more pages (like About Us)?**

**A**:
1. Create component file: `src/pages/About.js`
2. Add route in `App.js`:
   ```jsx
   <Route path="/about" element={<About />} />
   ```
3. Add navigation link in `Navbar.js`

---

### **Q7: How do I change the PDF file?**

**A**:
- Replace `Nandeshwar Enterprises Catslogue.pdf` in `public/` folder
- Ensure filename matches exactly (including spaces)
- Update href in `Home.js` if filename changes

---

### **Q8: Why are contacts not showing in admin panel?**

**A**:
- Users haven't submitted contact form yet
- API endpoint `/api/contact` might not be working
- Check browser Network tab (F12) to see API response
- Verify backend is saving contacts to database

---

### **Q9: How do I customize colors (green, yellow, etc.)?**

**A**:
- Colors are defined in Tailwind CSS classes
- Search for `bg-green-500`, `text-yellow-500` etc.
- Replace with desired Tailwind color classes
- Tailwind color palette: https://tailwindcss.com/docs/customizing-colors

---

### **Q10: The contact form shows "Network error". What's wrong?**

**A**:
- Backend API might not be running
- CORS might be blocking the request
- Check backend logs for errors
- Verify API endpoint in `contactService.js`

---

### **Q11: How do I add authentication to other pages?**

**A**:
Use `PrivateRoute` component:
```jsx
<Route
  path="/page"
  element={
    <PrivateRoute>
      <YourComponent />
    </PrivateRoute>
  }
/>
```

---

### **Q12: How do I format the contact message display differently?**

**A**:
Edit message rendering in `ManageContacts.js`:
```jsx
<p className="bg-gray-50 p-3 rounded border border-gray-200 text-gray-700 whitespace-pre-wrap">
  {c.message || "N/A"}
</p>
```

---

## Key Concepts

### **React Hooks Used**
- `useState` - State management
- `useEffect` - Side effects and data fetching
- `useNavigate` - Routing navigation
- `useParams` - URL parameters

### **State Management Pattern**
- Local component state using `useState`
- Props passing between components
- Context (not currently used, but can be added)

### **Error Handling**
- Try-catch blocks in async functions
- User-friendly error messages
- Console logging for debugging
- Error states in UI

### **Performance Considerations**
- Lazy image loading
- Conditional rendering
- useEffect cleanup
- Component memoization (can be added)

### **Security**
- JWT token storage in localStorage
- Automatic token attachment to requests
- Protected routes with PrivateRoute
- Form validation and sanitization

---

## Best Practices Implemented

✅ Modular code structure  
✅ Separation of concerns (services vs components)  
✅ Consistent error handling  
✅ Loading states for better UX  
✅ Responsive design with Tailwind CSS  
✅ API abstraction layer  
✅ Protected admin routes  
✅ Form validation  
✅ Environment configuration  

---

## Future Enhancements

1. **User Dashboard** - Track submitted contacts
2. **Project Details Page** - Dedicated page for each project
3. **Search & Filter** - Search projects by name or category
4. **Pagination** - For large contact/project lists
5. **Email Notifications** - Alert admins of new contacts
6. **Project Reviews** - Customer ratings and reviews
7. **Blog Section** - Company news and updates
8. **Multi-language Support** - Hindi, English, etc.
9. **Dark Mode** - Theme switching
10. **Mobile App** - React Native version

---

## Contact & Support

For questions about the project:
- Project: Nandeshwar Enterprises Frontend
- Tech Stack: React + Tailwind CSS + Axios
- Backend: Express.js + MongoDB
- Version: 1.0.0
- Last Updated: April 2026

---

**End of Documentation**
