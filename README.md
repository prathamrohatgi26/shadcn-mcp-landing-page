# StatsAI - AI-Driven Website Analytics & Sales Platform

A modern, responsive SaaS landing page built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Design**: Clean, professional SaaS landing page with dark mode by default
- **Responsive Layout**: Fully responsive design that works on all devices
- **Floating Glass Effects**: Modern glassmorphism design elements in navbar and stats section
- **Animated Elements**: Gradient text animations and smooth hover effects
- **Component Library**: Built using shadcn/ui components for consistency and maintainability
- **TypeScript**: Full type safety throughout the application
- **Dark Mode**: Default dark theme with seamless theme switching capability

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui v4
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Theme**: next-themes for theme management

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd statsai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 shadcn/ui Integration via MCP

This project extensively uses **shadcn/ui components** integrated through the **Model Context Protocol (MCP)**. The shadcn MCP server was used to fetch and integrate components directly during development.

### Components Used

The following shadcn/ui components were fetched and integrated via MCP:

#### Core UI Components
- **Button** - Primary and secondary action buttons with hover effects
- **Badge** - Section labels and status indicators
- **Card** - Feature cards, testimonials, and pricing tiers
- **Input** - Newsletter email input with enhanced styling
- **Label** - Form labels with accessibility features
- **Separator** - Visual dividers in pricing cards

#### Navigation Components
- **Navigation Menu** - Main navigation with dropdown support
- **Avatar** - User profile images in testimonials

#### Interactive Components
- **Accordion** - FAQ section with expandable questions
- **Tabs** - Potential future use for tabbed content

### MCP Integration Process

1. **Component Discovery**: Used `mcp_shadcn-ui_list_components` to explore available components
2. **Component Fetching**: Retrieved component source code via `mcp_shadcn-ui_get_component`
3. **Dependency Installation**: Automatically installed required Radix UI dependencies
4. **Integration**: Seamlessly integrated components into the application structure

### Benefits of MCP Integration

- **Rapid Development**: Instant access to production-ready components
- **Consistency**: All components follow the same design system
- **Type Safety**: Full TypeScript support out of the box
- **Accessibility**: Built-in accessibility features in all components
- **Customization**: Easy theme customization through CSS variables

## 🎯 Project Structure

```
statsai/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and theme variables
│   │   ├── layout.tsx           # Root layout with theme provider
│   │   └── page.tsx             # Main landing page
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   └── ...
│   │   ├── site-navbar.tsx      # Main navigation component
│   │   ├── site-footer.tsx      # Footer component
│   │   └── theme-provider.tsx   # Theme context provider
│   └── lib/
│       └── utils.ts             # Utility functions (cn helper)
├── components.json              # shadcn/ui configuration
└── package.json
```

## 🎨 Design System

### Color Palette
- **Primary**: Pink/Purple gradient (`oklch(0.6726 0.2904 341.4084)`)
- **Secondary**: Muted purple tones
- **Accent**: Teal highlights
- **Background**: Dark theme optimized

### Typography
- **Headings**: Geist Sans with gradient text effects
- **Body**: Geist Sans for readability
- **Code**: Geist Mono for technical content

### Layout
- **Width**: 80vw container for optimal readability
- **Spacing**: Consistent padding and margins
- **Grid**: Responsive grid layouts for all sections

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: 
  - `sm`: 640px (tablets)
  - `md`: 768px (small desktops)
  - `lg`: 1024px (large desktops)
- **Adaptive Navigation**: Hamburger menu on mobile (ready for implementation)

## 🌟 Key Sections

1. **Hero Section**: Full-height hero with animated gradient text
2. **Features**: 4-column grid showcasing platform capabilities
3. **Stats Band**: Floating glass container with key metrics
4. **Testimonials**: Customer feedback with avatar components
5. **Pricing**: 3-tier pricing table with highlighted popular plan
6. **FAQ**: Accordion-style frequently asked questions
7. **Newsletter**: Email signup with enhanced input styling

## 🚀 Performance Features

- **Next.js 15**: Latest framework optimizations
- **Tailwind CSS v4**: Improved build performance
- **Component Tree Shaking**: Only used components are bundled
- **Optimized Images**: Next.js Image optimization
- **CSS Variables**: Efficient theme switching

## 🛡️ Accessibility

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color combinations
- **Focus Management**: Visible focus indicators
- **Semantic HTML**: Proper heading hierarchy and landmarks

## 📝 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🔧 Configuration Files

- **`components.json`**: shadcn/ui configuration
- **`tailwind.config.js`**: Tailwind CSS configuration (auto-generated)
- **`tsconfig.json`**: TypeScript configuration
- **`next.config.ts`**: Next.js configuration

## 🎭 Theme Customization

The project uses CSS variables for theming, making it easy to customize colors and spacing:

```css
:root {
  --primary: oklch(0.6726 0.2904 341.4084);
  --background: oklch(0.1649 0.0352 281.8285);
  /* ... more variables */
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure all components are properly typed
5. Test responsive design
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ using shadcn/ui MCP integration for rapid component development**