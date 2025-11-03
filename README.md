# Candy Cavern

Candy Cavern is a fake, online candy store to demonstrate my abilities in front-end web development.

## Features

- **Product browsing:** Products lists are separated by category and each product includes an image, name, price, description, and a button to add it to your basket.
- **Adding to and viewing basket:** When a product's "Add to Basket" button is clicked, it is added to a site-wide basket. If another of the same product has already been added, the count will simply increment. The basket be viewed via the button at the top right of the home/products page.
- **Manipulating basket:** On the basket page, all added products can be viewed. Their quantities can be adjusted by the plus and minus buttons (up to ten each), or all instances of the product can be removed by the red trash button. The price on each product card in the basket reflects the price of one, not the total for the quantity selected. The entire basket can be emptied via the "Clear Basket" button near the bottom of the screen.
- **Order summary:** On the checkout page, a summary of the cost of all the items in the basket plus shipping and tax can be seen, with the grand total emphasized in larger text near the bottom.
- **Helpful checkout forms:** Messages indicate and errors in the form before submission.
- **Order confirmation:** Upon placing the order, you will be automatically taken back to the product page with a modal message indicating that the order was successful. The basket will also be cleared automatically.

## Site Layout

- **Home/product page**
  - List of products (separated by category)
- **Basket page**
  - List of products in basket (same products are grouped into one card)
- **Checkout page**
  - Order summary
  - Billing information form
  - Shipping information form

## Future Ideas

- **Basket indicator:** A count for the number of products in the basket, viewable from the product page. Alternatively, some type of user feedback to indicate that the product was added after pressing the "Add to Basket" button.
- **Shipping same as billing:** A common feature in online checkout scenarios where a checkbox can be checked to automatically populate the shipping fields with the billing field information or vice versa.