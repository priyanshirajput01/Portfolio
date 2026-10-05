
# Priyanshi Rajput | Portfolio

A modern, responsive personal portfolio website built with plain **HTML, CSS, and JavaScript**. No frameworks and no build step, just open .

> **Live demo:** [portfolio-priyanshi-rajput.vercel.app](https://portfolio-priyanshi-rajput.vercel.app/)

<!-- Add a screenshot of the site here:
![Portfolio preview](screenshot.png)
-->

## About

This is the personal portfolio of **Priyanshi Rajput**, a Full Stack Web Developer and B.Tech Computer Science & Engineering (Cyber Security) student at Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore. It showcases her skills, projects, achievements, and contact details in one single-page site.

## Features

- Hero section with photo, typing animation, animated stats, and orbiting tech icons
- Sections: Home, About, Skills, Projects, Achievements, Contact
- Skills page with real technology logos
- Animated background: aurora gradient, moving particle network, and a soft glow that follows the mouse
- Scroll-reveal animations, 3D card tilt, scroll progress bar, and back-to-top button
- Active menu highlighting while scrolling
- Fully responsive with a hamburger menu on mobile
- Contact form that opens the visitor's email app with the message filled in
- Respects `prefers-reduced-motion` for visitors who want less animation

## Tech Stack

| Area      | Tools                                                       |
| --------- | ----------------------------------------------------------- |
| Structure | HTML5                                                       |
| Styling   | CSS3 (Grid, Flexbox, custom properties, animations)         |
| Behavior  | Vanilla JavaScript (ES6+), Canvas API, IntersectionObserver |
| Icons     | [Devicon](https://devicon.dev/)                              |
| Fonts     | Space Grotesk and Outfit from Google Fonts                  |

## Project Structure

```
Priyanshi-Portfolio/
├── index.html      # All sections of the page
├── style.css       # Design, layout, animations, responsive rules
├── script.js       # Interactions and background animation
├── priyanshi.jpg   # Profile photo
└── README.md
```

## Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```
2. Open `index.html` in your browser (double-click it, or use the Live Server extension in VS Code).

The icons and fonts load from a CDN, so you need an internet connection to see them.

## Customize

- **Text and content:** edit the sections in `index.html`.
- **Colors:** change the variables at the top of `style.css`:
  ```css
  :root { --a: #8b5cf6; --b: #22d3ee; --c: #f472b6; }
  ```
- **Photo:** replace `priyanshi.jpg` with another image of the same name.
- **Typing roles:** edit the `roles` array in `script.js`.
- **Email for the contact form:** update the `mailto:` address in `script.js`.

## Deploy on GitHub Pages

1. Push the project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then click **Save**.
5. After a minute, your site is live at `https://<your-username>.github.io/<your-repo-name>/`.

## Contact

- **Email:** priyanshirajput220@gmail.com
- **LinkedIn:** [linkedin.com/in/priyanshi-rajput-016643335](https://linkedin.com/in/priyanshi-rajput-016643335)
- **Location:** Indore, Madhya Pradesh, India

## Credits

- Technology icons by [Devicon](https://devicon.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)

---

Made by Priyanshi Rajput
