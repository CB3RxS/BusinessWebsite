# Perk Up Cafe Website

A responsive, multi-page website for **Perk Up Cafe**, a coffee shop at Robinsons Place Jaro, Iloilo City. Built from scratch with HTML5, CSS3, and Vanilla JavaScript as the final project for **CCS 222: Web Design and Development**.

> **Demo notice:** This is a student project. The contact form checks the visitor's input but is not connected to any backend. Nothing is sent or stored, and the site is not officially operated by the cafe. The review cards on the Home page contain placeholder (lorem ipsum) text only.

**Live website:** [paste the Vercel URL]
**Repository:** https://github.com/CBRxS11/BusinessWebsite.git

## Business profile

- **Business:** Perk Up Cafe (coffee shop)
- **Location:** 2nd Floor Robinsons Place Jaro, Iloilo City, Philippines, 5000
- **Hours:** Monday to Sunday, 10:00 AM to 9:00 PM
- **Services:** Dine-in, in-store pickup
- **Online presence before this project:** https://www.facebook.com/profile.php?id=61558440020458
- **Target audience:** [use the wording from your preliminary submission]
- **Website objectives:** [use the wording from your preliminary submission]

## Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Home: purpose headline, call-to-action buttons, location, hours, services, must-try drinks, placeholder review cards |
| `products.html` | Featured drinks, full price menu with category filter, printed menu image, link to the contact page |
| `gallery.html` | Photo gallery of the cafe and drinks |
| `about.html` | Story, mission, vision, and values |
| `contact.html` | Contact form (demo only), address, hours, services, map link, Facebook link |

## JavaScript features

| Feature | File | What it does |
| --- | --- | --- |
| Mobile menu | `script.js` | The hamburger button opens and closes a sliding sidebar. It closes on an outside click, a link click, or the Escape key, and updates `aria-expanded` for screen readers. |
| Light / dark mode | `script.js` | Toggles a theme and remembers the choice in `localStorage` (key `perkup-theme`). |
| Menu filter | `products.js` | Buttons (All, Coffee, Non-Coffee, Smoothies, Juice) show or hide menu categories. The active button is marked with `aria-pressed`. |
| Form validation | `contact.js` | Checks name, email, phone (optional, format 09XXXXXXXXX), date (optional, not in the past), age (optional, 1 to 120), time (optional, within opening hours), subject, and message. Shows an error under each field and a demo-only confirmation when everything is valid. |
| Card reveal (bonus) | `about.js` | Mission, Vision, and Values cards reveal their text on hover or keyboard focus. |

## Design

- **Colors (light):** page `#fffbed`, text and buttons `#174f45`, accent `#d2b386`, sidebar `#c4b398`, panels `#edd9ad`
- **Colors (dark):** page `#171d19`, text `#e5eee8`, accent `#293b32`, sidebar `#222e27`, panels `#26362d`
- **Typography:** Arial, sans-serif
- **Responsive breakpoints:** 900px, 700px, 600px, 400px, and 360px
- **Accessibility:** one `<h1>` per page, alt text on images, labelled form fields, visible keyboard focus, reduced-motion support

## Technologies

HTML5, CSS3, Vanilla JavaScript, deployed on Vercel. No frameworks, CSS frameworks, or JavaScript libraries are used.

## Project structure

```text
BusinessWebsite/
├── index.html
├── products.html
├── gallery.html
├── about.html
├── contact.html
├── script.js        (menu + theme, loaded on every page)
├── products.js      (menu filter)
├── about.js         (card reveal)
├── contact.js       (form validation)
├── styles/
│   ├── style.css    (shared header, sidebar, footer, theme, buttons)
│   ├── style-home.css
│   ├── style-products.css
│   ├── style-gallery.css
│   ├── style-about.css
│   └── style-contact.css
└── assets/
    ├── Featured/    (Must-Try drink photos)
    └── (other images)
```

## Testing

- [list only what your group really did, for example: Chrome and Edge on desktop; browser dev tools at 360, 400, 600, 700, 900, and 1280 px; a real phone (name the phone and browser); keyboard-only navigation; form tested with empty, wrong, and valid input; the live Vercel URL after deployment]

## Credits and acknowledgments

- **Photos and logo:** Perk Up Cafe Robinsons Place Jaro Facebook Page. The cafe owner and the people in the group photo gave permission to use them. 
- **Menu and business information:** Copied from the cafe's printed menu / confirmed with the owner
- **Icons:** Perk Up Cafe Robinsons Place Jaro Facebook Page
- **Fonts:** Arial (system font), no external fonts.
- **AI assistance:** [confirm this wording with your group: "Claude (by Anthropic) was used for planning, code review, explanations, and debugging help. The team reviewed the code and can explain it."]

## Running locally

Open `index.html` in a browser. No build step is needed.