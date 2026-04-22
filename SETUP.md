# Kareer — Hướng dẫn chạy dự án

## Yêu cầu

- [Node.js](https://nodejs.org/) v18+ đã được cài sẵn

Kiểm tra bằng lệnh:
```bash
node -v
```

---

## Cách chạy (3 bước)

### Bước 1 — Cài dependencies cho backend

```bash
cd backend
npm install
```

### Bước 2 — Khởi động server

```bash
node server.js
```

Khi thấy dòng sau là server đã chạy:
```
🚀 Kareer BACKEND
📡 http://localhost:3000
```

> Giữ terminal này mở trong suốt quá trình dùng.

### Bước 3 — Mở giao diện

Mở file `index.html` trong trình duyệt (Chrome/Edge/Firefox).

Hoặc dùng VS Code → chuột phải vào `index.html` → **Open with Live Server**.

---

## Cấu trúc dự án

```
homepage-career-main/
├── index.html          ← Trang chủ (Step 1: nhập thông tin)
├── script.js           ← Logic Step 1
├── style.css           ← Giao diện trang chủ
├── api-client.js       ← Kết nối backend (tự fallback localStorage)
├── admin.html          ← Trang quản trị thống kê
│
├── Step 2/
│   └── index.html      ← Bài trắc nghiệm 35 câu (RIASEC + Big Five + Schwartz)
│
├── Step 3_Matrix/
│   ├── index.html      ← Ma trận nghề nghiệp
│   ├── main.js         ← Logic orbit/satellite
│   ├── timeline.html   ← Chi tiết nghề nghiệp
│   └── roadmap.html    ← Lộ trình phát triển
│
└── backend/
    ├── server.js       ← Express API server
    ├── .env            ← Cấu hình Supabase (đã có sẵn)
    ├── migration.sql   ← Schema database (đã chạy, không cần chạy lại)
    └── package.json
```

---

## API Endpoints

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/api/health` | Kiểm tra server |
| POST | `/api/users` | Tạo/cập nhật người dùng |
| GET | `/api/users/:email` | Lấy thông tin người dùng |
| POST | `/api/assessments` | Lưu kết quả bài test |
| GET | `/api/assessments/:userId` | Lấy kết quả bài test |
| POST | `/api/career-selections` | Lưu lựa chọn nghề nghiệp |
| GET | `/api/stats` | Thống kê tổng quan (dành cho admin) |

---

## Lưu ý

- Database đã được tạo sẵn trên Supabase, không cần cấu hình thêm.
- Nếu không chạy backend, ứng dụng vẫn hoạt động bình thường — dữ liệu sẽ lưu tạm vào localStorage của trình duyệt.
- Trang admin (`admin.html`) hiển thị thống kê người dùng và nghề nghiệp phổ biến.
