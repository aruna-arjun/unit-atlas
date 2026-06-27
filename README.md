<div align="center">

#  Unit Atlas
### Universal Unit Converter Every Unit, One Page, Zero Searching

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A single-page converter that turns one number into every unit in a category, instantly.**

</div>

---

## ✨ Features

| | |
|---|---|
| 🔢 **Live conversion** | Type once, every unit in the category updates in real time |
| 🎯 **Click-to-pivot** | Click any result card to make it the new starting value |
| 📋 **One-click copy** | Double-click a result to copy it to your clipboard |
| 🎨 **Category theming** | Each of the 12 categories has its own pastel accent color |
| 📱 **Fully responsive** | Works on desktop, tablet, and mobile |
| 🔌 **Zero dependencies** | No frameworks, no build step, works fully offline |
| ♿ **Accessible** | Keyboard navigable, screen-reader friendly, respects reduced-motion settings |

---

## 🛠️ Tech Stack

This project intentionally uses **no frameworks and no build tools** just the three core web technologies, kept dependency free so it runs anywhere a browser exists.

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure & semantic markup |
| **CSS3** | Styling — custom properties for theming, Flexbox & Grid for layout |
| **Vanilla JavaScript (ES6+)** | Conversion logic, state management, DOM rendering |

---

## ⚙️ How It Works

Every category converts through one shared **base unit**, instead of storing a conversion rate between every possible pair of units:

```mermaid
flowchart LR
    A["User types a value"] --> B["toBase()"]
    B --> C["Value in base unit"]
    C --> D["fromBase()"]
    D --> E["Converted result shown"]
```

## 📐 Supported Units

<details>
<summary><strong>Click to expand the full list of 12 categories and 80+ units</strong></summary>

| Category | Units |
|---|---|
| **Length** | Meter, Kilometer, Centimeter, Millimeter, Mile, Yard, Foot, Inch, Nautical Mile |
| **Weight** | Kilogram, Gram, Milligram, Metric Ton, Pound, Ounce, Stone, US Ton |
| **Temperature** | Celsius, Fahrenheit, Kelvin |
| **Volume** | Liter, Milliliter, Cubic Meter, US Gallon, Imperial Gallon, US Quart, US Pint, US Cup, US Fluid Ounce, Cubic Foot, Cubic Inch |
| **Area** | Square Meter, Square Kilometer, Square Centimeter, Hectare, Acre, Square Mile, Square Yard, Square Foot, Square Inch |
| **Time** | Millisecond, Second, Minute, Hour, Day, Week, Month, Year |
| **Speed** | m/s, km/h, mph, Knot, ft/s |
| **Digital Storage** | Bit, Byte, Kilobyte, Megabyte, Gigabyte, Terabyte, Petabyte |
| **Pressure** | Pascal, Kilopascal, Bar, Atmosphere, PSI, mmHg |
| **Energy** | Joule, Kilojoule, Calorie, Kilocalorie, Watt-hour, Kilowatt-hour, BTU |
| **Power** | Watt, Kilowatt, Megawatt, Horsepower, BTU/hour |
| **Angle** | Degree, Radian, Gradian, Arcminute, Arcsecond |

</details>

---

## 📁 Project Structure

```
unit-atlas/
├── index.html     # Page markup — links to style.css and script.js
├── style.css      # All styling: theming, layout, animations
├── script.js      # Unit data, conversion math, rendering, events
└── README.md      # You are here
```

---

## 🚀 Getting Started

No installation, no npm, no server required.

```bash
# 1. Clone the repo
git clone https://github.com/your-username/unit-atlas.git

# 2. Move into the folder
cd unit-atlas

# 3. Open it
# Just double-click index.html, or:
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

---

## 🤝 Contributing

Contributions are welcome!

---

## 🗺️ Roadmap

- [ ] Currency category with live exchange rates
- [ ] Dark mode toggle
- [ ] Remember last-used category/value (localStorage)
- [ ] Unit search/filter bar

