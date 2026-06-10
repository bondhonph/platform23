# Platform 23 — Restaurant Website

> **Eat, You'll Feel Better**

## 🚀 Deploy করার Steps

### Step 1: GitHub-এ Upload করুন

1. [github.com](https://github.com) এ যান → **New Repository** করুন
2. Repository name: `platform23-website`
3. **Public** রাখুন
4. এই folder-এর সব files upload করুন (drag & drop করতে পারবেন)

### Step 2: Vercel-এ Deploy করুন

1. [vercel.com](https://vercel.com) এ যান → GitHub দিয়ে Login করুন
2. **"Add New Project"** click করুন
3. `platform23-website` repository select করুন
4. Framework: **Next.js** (auto-detect হবে)
5. **Deploy** click করুন — ব্যস! ✅

### Step 3: WhatsApp Number আপডেট করুন

`app/page.js` ফাইলে এই line খুঁজুন:
```
window.open(`https://wa.me/+8801XXXXXXXXX?text=${encoded}`, "_blank");
```
`+8801XXXXXXXXX` এর জায়গায় আপনার WhatsApp number দিন।

## 📁 Project Structure

```
platform23/
├── app/
│   ├── globals.css      # Styling
│   ├── layout.js        # HTML layout
│   ├── menuData.js      # All menu items
│   └── page.js          # Main website
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## ✏️ কী কী Edit করবেন

| কী পরিবর্তন করবেন | কোথায় |
|---|---|
| Menu items / দাম | `app/menuData.js` |
| Phone number, Address | `app/page.js` → Contact section |
| WhatsApp number | `app/page.js` → Order section |
| Colors / fonts | `app/globals.css` |
| Logo image | `public/` folder এ রেখে `<img>` tag দিন |
