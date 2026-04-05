# Deven Kalathiya - Interactive DevOps Portfolio 🚀

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

Welcome to my personal, interactive DevOps & Cloud Engineering Portfolio! This application is designed to act as a living showcase of my infrastructure capabilities, CI/CD expertise, and professional tenure, all wrapped in a sleek, hardware-themed Glassmorphism aesthetic.

## ✨ Features

- **Terminal-Style Navigation**: Linux-based UI elements and executable file links to mimic server shells.
- **Interactive 3D Elements**: A floating, interactive layout built on top of Three.js and Framer Motion.
- **Dynamic Easter Eggs**: Contains state-based user-interactions (e.g., hover-games) that trigger multi-media audio files and visual overlays.
- **Automated CI/CD**: Built-in GitHub Actions continuous deployment config mapping directly to GitHub Pages.
- **Dynamic Color Modes**: Clean transition capabilities between Dark Space/Terminal Mode and Light Server modes.

## 🛠️ Tech Stack

- **Frontend**: Vite, React (JSX), Vanilla CSS
- **Animations & 3D**: `framer-motion`, `@react-three/fiber`, `@react-three/drei`, `three.js`
- **Icons**: `lucide-react`
- **Deployment**: GitHub Actions + GitHub Pages

## 🚀 Local Development

To run this portfolio locally on your machine, simply pull the repository down and run node modules:

```bash
# 1. Clone the repository
git clone https://github.com/deven1003/devops-portfolio.git

# 2. Install Dependencies
npm install

# 3. Start the Vite development server
npm run dev
```

Your local application will boot up rapidly at `http://localhost:5173/`. 

## ☁️ Deployment Architecture

This portfolio is automatically deployed using a CI/CD pipeline integrated inside `.github/workflows/deploy.yml`. 
Every push to the `main` branch reliably triggers a GitHub Action runner that:
1. Installs Node.js & strictly pulls dependencies (`npm ci`)
2. Packages the production build layout (`npm run build`)
3. Uploads the artifact seamlessly via the `@actions/upload-pages-artifact` logic.
4. Auto-Deploys natively to GitHub Pages.

## 📫 Contact / Let's Connect

If you're interested in collaborating on scalable microservices, automated GitOps setups, or enterprise infrastructure:

- **Email**: devengkalathiya@gmail.com
- **LinkedIn**: [Deven Kalathiya](https://www.linkedin.com/in/deven-kalathiya/)
- **GeeksForGeeks**: [deven1003](https://auth.geeksforgeeks.org/user/deven1003)
