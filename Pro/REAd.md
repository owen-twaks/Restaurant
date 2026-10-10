# Bella Tavola

A responsive, single-page website for a family-owned Italian restaurant. Built with plain HTML, CSS and a small amount of JavaScript. No frameworks or build tools.

## Features

- Sticky navigation with a mobile hamburger menu
- Hero section with a "Reserve a Table" call to action
- Menu section (Starters, Main Courses, Desserts) in a responsive grid
- About Us section
- Reservation form with a confirmation message
- Footer with opening hours and location
- Responsive layout for desktop, tablet and mobile with no horizontal scrolling

## Project Structure

```
bella-tavola/
├── index.html   # Page structure and content
├── Style.css    # All styling and responsive rules
├── main.js      # Mobile menu, active nav link, reservation form
└── README.md    # This file
```

## Getting Started

1. Put all files in the same folder.
2. In `index.html`, make sure the script tag reads:
   ```html
   <script src="./main.js" defer></script>
   ```
   (A `type="module"` script is blocked when opening the file directly in a browser.)
3. Open `index.html` in your browser, or use the **Live Server** extension in VS Code.

## Design System

| Item | Value |
|------|-------|
| Primary green | `#1B5E3B` |
| Background | `#F7F5EE` |
| Text | `#333333` |
| Borders | `#E0E0E0` |
| Headings font | Poppins |
| Body font | Inter |

Fonts are loaded from Google Fonts. Images are loaded from Pexels.

## Responsive Breakpoints

| Width | Layout |
|-------|--------|
| Above 960px | 3-column menu, 4-field reservation row, 3-column footer |
| 960px and below | 2-column menu and form |
| 720px and below | Single column, hamburger menu, stacked form |

## JavaScript Behaviour (`main.js`)

- Opens and closes the mobile menu
- Highlights the nav link for the section in view
- Prevents booking past dates
- Prevents booking on Sundays (the restaurant is closed)
- Shows a success or error message on form submit

## Known Limitations

The reservation form only shows a confirmation on screen. It does not yet send or store bookings. To receive real reservations, connect the form to a service such as Formspree or EmailJS, or to a back-end.

## Customising

- **Colours and fonts:** edit the variables in the `:root` block at the top of `Style.css`.
- **Menu items:** copy a `.menu-item` block in `index.html` and change the image, name, price and description.
- **Opening hours and address:** edit the footer in `index.html`.
- **Closed days:** change the Sunday check in `main.js`.

## Credits

Images from [Pexels](https://www.pexels.com). Fonts from [Google Fonts](https://fonts.google.com).