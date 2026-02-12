# 🚀 INSTALLATION & SETUP GUIDE

## Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

## Step-by-Step Installation

### 1. Install Dependencies
```bash
npm install
```

### 2. Create Resume PDF
- Use the content from `/public/resume/resume-content.txt`
- Create a professional PDF resume
- Save as `Abhinav_Dikshit_Resume.pdf`
- Place in `/public/resume/` directory

### 3. Run Development Server
```bash
npm run dev
```

### 4. Open in Browser
Navigate to: http://localhost:3000

## 🎯 Key Features to Test

### Resume Download
- Click any "Download Resume" button
- Press 'R' key anywhere on the site
- Check the resume section

### Animations
- Scroll through sections to see GSAP animations
- Hover over interactive elements
- Test the custom cursor

### Responsive Design
- Test on mobile, tablet, and desktop
- Check navigation menu on mobile
- Verify all sections are responsive

## 🚀 Production Build

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## 📊 Performance Optimization

### Check Lighthouse Scores
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit for Performance, Accessibility, Best Practices, SEO
4. Target: 90+ scores across all metrics

### Optimization Tips
- Images are automatically optimized by Next.js
- CSS is purged by Tailwind
- JavaScript is code-split by Next.js
- Fonts are optimized with next/font

## 🎨 Customization

### Update Personal Information
1. Edit `components/sections/Hero.tsx` - Name and tagline
2. Edit `components/sections/About.tsx` - Personal story
3. Edit `components/sections/Projects.tsx` - Project details
4. Edit `components/sections/Experience.tsx` - Work experience
5. Edit `components/sections/Contact.tsx` - Contact information

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  neon: {
    blue: '#00f5ff',    // Change to your preferred colors
    purple: '#bf00ff',
    pink: '#ff0080',
    green: '#00ff88',
  },
}
```

### Modify Animations
Edit `app/globals.css` for custom animations and effects.

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify: Works out of the box
- AWS Amplify: Compatible
- Traditional hosting: Use `npm run build` and serve the `out` folder

## 🔧 Troubleshooting

### Common Issues

**Dependencies not installing:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
- Check TypeScript errors: `npm run lint`
- Ensure all imports are correct
- Verify file paths are accurate

**Resume download not working:**
- Ensure PDF file exists in `/public/resume/`
- Check file name matches exactly: `Abhinav_Dikshit_Resume.pdf`
- Verify file permissions

**Animations not working:**
- Check browser compatibility
- Ensure GSAP and Framer Motion are installed
- Test in different browsers

## 📞 Support

If you encounter any issues:
1. Check the console for errors
2. Verify all dependencies are installed
3. Ensure Node.js version is 18+
4. Check the GitHub repository for updates

## 🎉 You're Ready!

Your ultimate portfolio website is now ready to impress recruiters and showcase your skills. The combination of modern design, smooth animations, and professional presentation will make you stand out in the competitive developer market.

Good luck with your job search! 🚀