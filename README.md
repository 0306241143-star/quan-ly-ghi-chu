# 📝 Quản Lý Ghi Chú (Monorepo)

Ứng dụng quản lý ghi chú cá nhân full-stack, áp dụng mô hình kiến trúc Monorepo kết hợp Backend Node.js/Express và Frontend React (Vite). Hỗ trợ phân loại ghi chú theo chủ đề, tùy biến giao diện theo người dùng, và một khu vực "Vùng riêng tư" được bảo vệ bằng mật khẩu riêng.

---

## 🛠️ Công Nghệ Sử Dụng

* **Backend:** Node.js, Express, Bcrypt, CORS, Dotenv
* **Frontend:** React, Vite, React Router DOM, Axios, Lucide React
* **Lưu trữ dữ liệu:** File JSON (ghi an toàn theo cơ chế atomic write)
* **Môi trường & Công cụ:** Git, GitHub, VS Code, Postman

---

## 📂 Cấu Trúc Dự Án

```text
quan-ly-ghi-chu/
├── backend/
│   ├── data/
│   │   └── users/
│   │       └── [username]/
│   │           ├── notes/
│   │           ├── profile.json
│   │           └── private.json
│   ├── src/
│   │   ├── config/
│   │   │   └── constants.js       # Khai báo DATA_DIR
│   │   ├── controllers/
│   │   │   ├── profileController.js
│   │   │   ├── topicController.js
│   │   │   ├── noteController.js
│   │   │   └── privateController.js
│   │   ├── middlewares/
│   │   │   └── verifyPrivateAccess.js
│   │   ├── routes/
│   │   │   ├── profileRoutes.js
│   │   │   ├── topicRoutes.js
│   │   │   ├── noteRoutes.js
│   │   │   └── privateRoutes.js
│   │   ├── utils/
│   │   │   ├── fileHelper.js       # readJson, atomicWriteJson
│   │   │   └── encryption.js       # hashPassword, comparePassword
│   │   └── app.js
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js                   # Entry point cho Backend (port 5000)
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/              # Button, Input, LoadingSpinner, Toast
│   │   │   ├── layout/              # Sidebar, Header, MainLayout
│   │   │   └── notes/                # NoteCard, NoteFormModal, PrivateLockModal
│   │   ├── context/
│   │   │   ├── ThemeContext.jsx
│   │   │   ├── NoteContext.jsx
│   │   │   └── AuthPrivateContext.jsx
│   │   ├── hooks/
│   │   │   └── useDebounce.js
│   │   ├── pages/
│   │   │   ├── NotesPage.jsx
│   │   │   ├── PrivateNotesPage.jsx
│   │   │   └── SettingsPage.jsx
│   │   ├── services/
│   │   │   ├── api.js                # Axios instance + interceptors
│   │   │   ├── profileService.js
│   │   │   ├── noteService.js
│   │   │   └── privateService.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

---

## 🚀 Hướng Dẫn Cài Đặt & Khởi Chạy

### 1. Clone repository về máy

```bash
git clone https://github.com/0306241143-star/quan-ly-ghi-chu.git
cd quan-ly-ghi-chu
```

### 2. Khởi chạy Backend

Mở Terminal tại thư mục gốc và thực thi:

```bash
cd backend
npm install
node server.js
```

Backend Server sẽ chạy tại cổng: `http://localhost:5000`

### 3. Khởi chạy Frontend

Mở một cửa sổ Terminal mới tại thư mục gốc và thực thi:

```bash
cd frontend
npm install
npm run dev
```

Frontend sẽ hoạt động tại địa chỉ local do Vite cấp (thường là `http://localhost:5173`).

---

## ✨ Tính Năng Chính

* **Quản lý chủ đề & ghi chú:** Tạo chủ đề mới, CRUD ghi chú theo từng chủ đề, tự động cập nhật `createdAt`/`updatedAt`.
* **Vùng riêng tư có mật khẩu:** Mật khẩu được băm bằng `bcrypt`, xác thực qua token và middleware `verifyPrivateAccess`, tự động khóa lại sau 15 phút không thao tác.
* **Tùy biến giao diện:** Đổi tên hiển thị, theme và màu chủ đạo (`primaryColor`) ngay lập tức không cần reload trang.
* **Tìm kiếm tối ưu:** Dùng `useDebounce` để trì hoãn gọi API khi người dùng gõ tìm kiếm, tránh quá tải.
* **Ghi dữ liệu an toàn:** Cơ chế `atomicWriteJson` (ghi ra file `.tmp` rồi `rename`) giúp tránh mất dữ liệu khi có sự cố hoặc nhiều request cùng lúc.

---

## 📌 Lộ Trình Phát Triển (Roadmap)

* [x] **Giai đoạn 1:** Khởi tạo Workspace & môi trường cơ sở (Monorepo setup, Express + Vite)
* [x] **Giai đoạn 2:** Nền tảng File I/O Backend (cấu trúc dữ liệu, `fileHelper.js`, `encryption.js`)
* [x] **Giai đoạn 3:** API nghiệp vụ Backend (profile, topics, notes, private, auth guard)
* [x] **Giai đoạn 4:** Thiết lập Core Frontend & tầng giao tiếp (Axios, Services, `useDebounce`)
* [x] **Giai đoạn 5:** Quản lý trạng thái với Context API (Theme, Note, AuthPrivate)
* [x] **Giai đoạn 6:** Xây dựng giao diện Components (Common, Layout, Nghiệp vụ)
* [ ] **Giai đoạn 7:** Ráp nối trang & khởi chạy (Router, hoàn thiện App.jsx)

---

## 📄 Giấy Phép

Dự án cá nhân, phục vụ mục đích học tập và sử dụng nội bộ.