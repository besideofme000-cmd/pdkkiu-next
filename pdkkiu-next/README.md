# PDK Kiu – Next.js Website

Website untuk **Pemulihan Dalam Komuniti (PDK) Kiu**  
Dibina dengan Next.js + Tailwind CSS, siap deploy ke GitHub Pages.

## Cara Guna

### 1. Install dependencies
```bash
npm install
```

### 2. Run local
```bash
npm run dev
```
Buka http://localhost:3000

### 3. Build (static export)
```bash
npm run build
```
Hasil ada dalam folder `out/`

### 4. Deploy ke GitHub Pages

1. Buat repo baru di GitHub (contoh: `pdkkiu-next`)
2. Update `basePath` dalam `next.config.mjs` supaya sama dengan nama repo
3. Push code:
```bash
git init
git add .
git commit -m "PDK Kiu website"
git branch -M main
git remote add origin https://github.com/USERNAME/pdkkiu-next.git
git push -u origin main
```
4. Pergi ke **Settings → Pages** → Source: **GitHub Actions**
5. Tunggu Actions selesai
6. Website live di: `https://USERNAME.github.io/pdkkiu-next/`

## Struktur
- `pages/index.js` – Homepage lengkap
- `styles/globals.css` – Tailwind + custom styles
- `next.config.mjs` – Static export + basePath untuk GitHub Pages
- `.github/workflows/deploy.yml` – Auto deploy

## Nota
- Gambar masih dari arkib 2017
- Ganti `basePath` jika nama repo berbeza
