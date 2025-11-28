# Healthcare Staff Shift Scheduler & Attendance Tracker (MVP)
A lightweight full-stack application designed for hospitals and clinics to manage staff shifts, prevent scheduling conflicts, and track attendance efficiently.


## 📌 1. Tech Stack

### **Frontend**

* React.js
* React Router
* Axios
* CSS

### **Backend**

* Node.js
* Express

### **Database**

* PostgreSQL

### **Communication**

* REST API

---

## 📌 2. Pages in UI

### **Authentication**

* Login Page (Admin Only)

---

### **Staff Management**

* Staff List Page
* Add Staff Page
* Edit Staff Details Page

---

### **Shift Management**

* Create Shift Page
* Daily Shift View (Morning / Afternoon / Night)

---

### **Staff Assignment**

* Assign Staff to Shift Page

---

### **Attendance**

* Attendance Marking Page

  * Mark Present / Absent

---

### **Export** (Stretch)

* Export Shifts / Attendance (CSV) Page

---

## 📌 3. Sample REST API Endpoints

### **Auth**

```
POST /api/auth/login
```

### **Users**

```
GET    /api/users
POST   /api/users
PUT    /api/users/:id
```

### **Shifts**

```
POST   /api/shifts
GET    /api/shifts?date=YYYY-MM-DD
```

### **Assignments**

```
POST   /api/shifts/:id/assign
GET    /api/shifts/:id/assignments
```

### **Attendance**

```
POST   /api/attendance/:assignment_id
```

### **Export**

```
GET    /api/export/shifts?date=YYYY-MM-DD
```

---

## 📌 4. Task Breakdown

### **1. Project Setup**

* Initialize backend (Node.js + Express)
* Initialize frontend (React + Vite)
* Create shared `.env` and configs
* Setup PostgreSQL database
* Create folder structure for both apps

---

### **2. Authentication**

* Build Admin Login UI
* Implement login API
* Add JWT token creation
* Implement authentication middleware
* Protect all secure routes

---

### **3. Staff Management**

* Create `users` table
* Build API: get, create, update users
* Build Staff List Page
* Build Add Staff Form
* Build Edit Staff Page

---

### **4. Shift Types & Fixed Timings**

* Insert shift types: Morning, Afternoon, Night
* Store fixed 8-hour timings
* Backend lookup for each type

---

### **5. Create Shifts**

* Create `shifts` table
* Build Create Shift API
* Build Create Shift UI form
* Add basic validations (date, capacity, type)

---

### **6. Daily Shift View**

* API to fetch shifts by date
* UI to display:

  * Morning shift
  * Afternoon shift
  * Night shift
* Show assigned staff and remaining capacity

---

### **7. Staff Assignment**

* Create `shift_assignments` table
* API to assign staff to a shift
* Add rule:
  * A staff cannot be assigned to more than one shift on the same date
* Add UI for staff assignment (dropdown + button)
* Show list of assigned staff

---

### **8. Attendance**

* Create attendance table
* API to update attendance
* Build Attendance Page
* UI toggle for Present / Absent

---

### **9. Export**

* CSV generation for shifts + attendance
* Build export API
* Add export button on UI

---

### **10. Testing & Validation**

* Test API endpoints
* Validate shift capacity logic
* Validate double-booking rule
* Test UI forms and flows manually
* Testing pipelines for UTs/STs

---

### **11. Deployment (Optional)**

* Set production environment variables
* Enable CORS correctly
* TBD
  * Scaling & Containerization
