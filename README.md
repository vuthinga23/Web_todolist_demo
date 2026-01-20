# Web_todolist_demo
**1. Setting Project:**
Step1: Tạo cấu trúc thư mục dự án
# Tạo thư mục gốc
mkdir todo-app
cd todo-app

# Tạo thư mục backend và frontend
mkdir backend
mkdir frontend

Step2: Setup Backend (NestJS)
# Di chuyển vào thư mục backend
cd backend

# Cài NestJS CLI globally
npm install -g @nestjs/cli

# Tạo project NestJS
nest new . --skip-git

# Cài các package cần thiết
npm install @nestjs/typeorm typeorm pg class-validator class-transformer
# Tạo module, controller, service cho Todo
nest generate module todo
nest generate controller todo
nest generate service todo
Step3:  Setup Frontend (Next.js)
Mở terminal mới, quay về thư mục gốc todo-app:
cd ..

# Di chuyển vào thư mục frontend
cd frontend

# Tạo Next.js project
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir

# Cài axios để gọi API
npm install axios

# Cài types cho development
npm install --save-dev @types/jest @types/node @types/supertest
**2. Run web**
**Mở terminal trong thư mục backend:**
cd backend
npm run start:dev
```
**Kết quả mong đợi:**
```
 Backend running on http://localhost:3001
 
 **Mở terminal MỚI trong thư mục frontend:**
 cd frontend
npm run dev
```
**Kết quả mong đợi:**
```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
```
### 4. Mở trình duyệt

Truy cập: **http://localhost:3000**
