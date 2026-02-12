# 🚀 Abhinav Dikshit - Ultimate Portfolio Website

A cinematic, award-winning developer portfolio built with cutting-edge technologies and stunning animations. This portfolio showcases modern web development skills with a focus on performance, accessibility, and user experience.

## ✨ Features

### 🎨 Design & Animations
- **Dark Mode First** with neon accent colors
- **Glassmorphism** cards and components
- **Cinematic Typography** with gradient text effects
- **Magnetic Buttons** with hover interactions
- **Smooth Page Transitions** using Framer Motion
- **Custom Animated Cursor** with interactive elements
- **Scroll-triggered Animations** powered by GSAP

### 🧠 Sections
1. **Hero Section** - Full-screen immersive layout with animated particles
2. **About Section** - Scroll-based storytelling with floating profile card
3. **Skills Section** - Tilt-on-hover cards with animated progress bars
4. **Projects Section** - Horizontal scroll showcase with modal case studies
5. **Experience Section** - Vertical animated timeline
6. **Resume Section** - Dedicated section with glassmorphism resume card
7. **Contact Section** - Premium glass form with magnetic social icons

### ⚡ Advanced Features
- **Resume Download** with multiple trigger methods
- **Keyboard Shortcuts** (Press 'R' to download resume)
- **Smooth Scrolling** using Lenis
- **Performance Optimized** (Lighthouse 90+)
- **SEO Friendly** with proper meta tags
- **Responsive Design** for all devices
- **Accessibility Compliant** with proper ARIA labels

### 🔧 Tech Stack
- **Frontend:** React.js + Next.js 14 (App Router)
- **Styling:** Tailwind CSS + CSS Variables
- **Animations:** GSAP + Framer Motion + ScrollTrigger
- **Smooth Scroll:** Lenis
- **3D Effects:** Three.js (lightweight)
- **Icons:** Lucide React
- **Hosting:** Vercel Ready

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhinavdixit-97/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add Resume PDF**
   - Create a professional PDF resume
   - Save as `Abhinav_Dikshit_Resume.pdf`
   - Place in `/public/resume/` directory

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
abhinavportfolio/
├── app/
│   ├── globals.css          # Global styles with glassmorphism
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Main page component
├── components/
│   ├── animations/
│   │   └── SmoothScroll.tsx # Lenis smooth scrolling
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section with particles
│   │   ├── About.tsx        # About with floating cards
│   │   ├── Skills.tsx       # Skills with progress bars
│   │   ├── Projects.tsx     # Projects showcase
│   │   ├── Experience.tsx   # Timeline component
│   │   ├── Resume.tsx       # Resume download section
│   │   └── Contact.tsx      # Contact form
│   └── ui/
│       ├── CustomCursor.tsx # Animated cursor
│       ├── Navigation.tsx   # Glassmorphism navbar
│       └── KeyboardShortcuts.tsx # Keyboard controls
├── public/
│   ├── resume/
│   │   └── Abhinav_Dikshit_Resume.pdf
│   ├── images/              # Project images
│   └── projects/            # Project assets
└── lib/                     # Utility functions
```

## 🎯 Key Features Explained

### Resume Download System
- **Multiple Triggers:** Button clicks, keyboard shortcut (R key), navigation menu
- **Smart Detection:** Prevents accidental triggers while typing
- **Visual Feedback:** Success notifications and download counters
- **SEO Friendly:** Direct PDF serving with proper headers

### Animation System
- **GSAP ScrollTrigger:** Scroll-based animations for sections
- **Framer Motion:** Page transitions and micro-interactions
- **Custom Cursor:** Interactive cursor with magnetic effects
- **Smooth Scrolling:** Lenis for buttery smooth scroll experience

### Performance Optimizations
- **Lazy Loading:** Components load as needed
- **Image Optimization:** Next.js automatic image optimization
- **Code Splitting:** Automatic code splitting by Next.js
- **CSS Optimization:** Tailwind CSS purging unused styles

## 🎨 Customization

### Colors
Edit the color scheme in `tailwind.config.js`:
```javascript
colors: {
  neon: {
    blue: '#00f5ff',
    purple: '#bf00ff',
    pink: '#ff0080',
    green: '#00ff88',
  },
}
```

### Animations
Modify animations in `app/globals.css`:
```css
:root {
  --neon-blue: #00f5ff;
  --neon-purple: #bf00ff;
  /* Add your custom colors */
}
```

### Content
Update personal information in respective section components:
- `components/sections/Hero.tsx` - Name and tagline
- `components/sections/About.tsx` - Personal story and stats
- `components/sections/Projects.tsx` - Project details
- `components/sections/Experience.tsx` - Work experience and education

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile:** 320px - 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** 1024px+
- **Large Desktop:** 1440px+

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Manual Deployment
```bash
npm run build
npm start
```

## 🔧 Environment Variables

Create `.env.local` for any environment-specific configurations:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📊 Performance Metrics

Target Lighthouse Scores:
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 90+
- **SEO:** 95+

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **GSAP** for powerful animations
- **Framer Motion** for React animations
- **Tailwind CSS** for utility-first styling
- **Next.js** for the React framework
- **Vercel** for hosting platform

## 📞 Contact

**Abhinav Dikshit**
- Email: abhinavdixit093@gmail.com
- LinkedIn: [linkedin.com/in/abhinav-dikshit-91aa5327b](https://linkedin.com/in/abhinav-dikshit-91aa5327b)
- GitHub: [github.com/Abhinavdixit-97](https://github.com/Abhinavdixit-97)

---

⭐ **Star this repository if you found it helpful!**

Built with ❤️ by Abhinav Dikshit