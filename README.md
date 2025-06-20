# React Native Food App

這是一個使用 React Native 開發的食物訂購應用，結合後端 Node.js + Express + MongoDB Atlas，提供即時菜單瀏覽與訂單處理功能。

---

## Features

- 手機介面 UI 設計（React Native）
- 使用 Redux 管理狀態
- 後端採用 Express 架設 API
- 使用 MongoDB Atlas 儲存使用者與訂單資料
- 支援環境變數 `.env` 管理機密設定

---

## 專案結構

```
.
├── backend/                # Express 後端 API
├── src/                   # React Native 前端原始碼
├── .env                   # 環境變數（請勿上傳）
├── .env.example           # 環境變數樣板
└── README.md
```

---

## 安裝與啟動

###  Clone 專案

```bash
git clone https://github.com/S4chan/react-native-food-app.git
cd react-native-food-app
```

###  安裝前端與後端依賴

```bash
cd backend && npm install
cd ../src && npm install
```

###  設定環境變數

請依照 `.env.example` 建立 `.env` 檔案並填入實際值：

```bash
cp .env.example .env
```

---

##  Environment Variables

`.env` 檔案範例如下：

```
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
PORT=8084
```

>  `.env` 已加入 `.gitignore`，請勿推送至 GitHub  
>  此 repo 已透過 `git-filter-repo` 清除歷史機密資料

---

##  Scripts

### 前端

```bash
cd src
npm start
```

### 後端

```bash
cd backend
npm run dev
```

---
