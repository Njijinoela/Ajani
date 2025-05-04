# Ajani Center for Rights & Care - Website

![Ajani Center Logo](/images/logo.jpeg)

A React-based website for Ajani Center for Rights & Care, a Kenyan organization supporting survivors of sexual and gender-based violence through legal, counseling, and empowerment services.

## Table of Contents

- [Features](#features)
- [Components](#components)
- [Installation](#installation)
- [Configuration](#configuration)
- [Tech Stack](#tech-stack)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

✨ **Interactive UI Elements**

- Auto-rotating image slideshow with navigation controls
- Tabbed team member display by department
- Responsive mobile navigation menu

📝 **Functional Components**

- Contact form with real-time submission feedback
- Donation call-to-action
- Social media integration

🎨 **Consistent Design**

- Tailwind CSS styling throughout
- Accessibility-focused color scheme
- Responsive layouts for all devices

## Components

### Core Pages

| Component        | Description                        |
| ---------------- | ---------------------------------- |
| `Navigation.jsx` | Responsive header with mobile menu |
| `Hero.jsx`       | Landing page banner with logo      |
| `About.jsx`      | Organization overview and services |
| `Objectives.jsx` | Mission statement and goals list   |
| `Team.jsx`       | Interactive team member display    |
| `Contact.jsx`    | Functional contact form            |
| `Footer.jsx`     | Comprehensive footer with links    |

### Reusable Components

| Component       | Description              |
| --------------- | ------------------------ |
| `Card.jsx`      | Styled content container |
| `Slideshow.jsx` | Image carousel component |

## Article Management System

### Article Components

| Component           | Description                                  | API Endpoint        |
| ------------------- | -------------------------------------------- | ------------------- |
| `Admin.jsx`         | Admin interface for publishing new articles  | `POST /articles`    |
| `Articles.jsx`      | Displays list of all articles in card format | `GET /articles`     |
| `ArticleDetail.jsx` | Shows full article content with pagination   | `GET /articles/:id` |

### Features

- **Admin Publishing Interface**:

  - Form for creating new articles with title, summary and content
  - POST request to backend API
  - Success/error feedback

- **Article Listing**:

  - Responsive grid layout (1-3 columns based on screen size)
  - Card-based presentation with title and summary
  - "Read more" links to detailed view

- **Article Reader**:
  - Content pagination system (2000 characters per page)
  - Navigation controls (Previous/Next)
  - Current page indicator
  - Mobile-optimized reading experience

###

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Njijinoela/Ajani.git
   cd AJANI
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

## Configuration

### Data Files

- `src/data/slides.json` - Configure slideshow images
- `src/data/team.json` - Organize team member data

## Tech Stack

**Frontend**

- React 18
- Tailwind CSS
- Lucide Icons
- FormSubmit.co

**Build Tools**

- Vite
- ESLint
- Prettier

## Deployment

The project is configured for easy deployment to:

[![Deploy with Vercel](https://vercel.com/button)](https://ajani.vercel.app/)

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**Ajani Center for Rights & Care**  
📧 ajanicentre@gmail.com  
📞 +254 710 64 60 50  
📍 Kajiado, Kenya

[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://www.instagram.com/ajanicenter)

```

```
