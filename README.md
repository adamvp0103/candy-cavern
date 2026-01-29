# Candy Cavern

A fake online candy store to demonstrate my ability to build a robust, modern, full-stack web application with React, TypeScript, Node, Express, and MongoDB.

## Development Features

- Type safety and autocompletion with TypeScript.
- Data fetching via a REST API with loading and error states.
- Safe and efficient data architecture with state, props, and context.
- Optimized navigation with React Router and Outlets.
- Unit testing with Vitest and React Testing Library.

## Problems & Solutions

- **The Header and Nav components were being rendered on each page individually.** Because each page was expeced to have the same Header and Nav component, I wanted to find a way to make my code more DRY. Upon learning more about React Router, I discovered the power of Outlets, and kept my repeated components in one Layout component with an Outlet as a placeholder for the rest of the page.

- **Many distant components needed access to the same product data.** First, I attempted to pass product data through the component tree as props, but I noticed that this architecture lead to prop drilling. To clean up the code, I stored the product data in context and consumed it only in components that needed it.

- **Image files were larger than neccessary.** I wanted to improve the site's performance by reducing the image file size without an obvious dip in quality. To do this, I used my browser's developer tools to determine the largest a product image ever appears on-screen. I then multiplied this size by 3 (to account for screens with higher pixel densities) and reduced each image's dimensions to that value.

## Installation

1. Fork [the repository on GitHub](https://github.com/adamvp0103/candy-cavern).
2. Clone the fork onto your file system:

```zsh
git clone <your-fork-url>
```

3. Install the project's dependencies:

```zsh
npm install
```

4. Start the local development server:

```zsh
npm run dev
```

## Usage

1. Open [the project](https://candy-cavern.netlify.app).
2. Use the search bar or scroll to browse products.
3. Press the "Add to Basket" button on the desired product's card to add it to your basket.
4. Use the navigation bar near the top of the screen to visit different pages.
5. On the Basket page, use the buttons on the desired product's card (if present) to adjust the quantity or remove the product from the basket.
6. On the Checkout page, enter billing and shipping information into the form, and press the "Place Order" button to simulate placing the order.

## Contributing

This project may be forked for analysis or practice, but pull requests will not be accepted because this is a personal portfolio project.

## License

Copyright 2026 Adam Parks

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contact

- **Website:** https://adam-parks-portfolio.netlify.app
- **Email:** adamvp0103@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/adam-parks-6825ab2bb/
- **GitHub:** https://github.com/adamvp0103/
