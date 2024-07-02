# Art & Craft Website

Welcome to the Art & Craft Website, an online platform for art enthusiasts to explore, add, and manage various art and craft items. This website offers a user-friendly interface and a range of features to enhance your art and craft experience.

## Live Site URL
[Visit the Live Site](https://craftera-29a5a.web.app/)

## Features

1. **User Authentication**
   - **Email & Password Login/Registration**: Secure authentication using email and password.
   - **OAuth Login**: Support for Google and GitHub
   - **Conditional Navbar**: Displays Login/Register for unauthenticated users and user profile/logout for authenticated users.

2. **Protected Routes**
   - **Add Craft Item**: Authenticated users can add new craft items.
   - **My Art & Craft List**: Authenticated users can view and manage their own craft items.
   - **View Details**: Authenticated users can view detailed information about craft items.

3. **Home Page**
   - **Banner/Slider**: A slider with meaningful information about art and craft.
   - **Craft Items Section**: Displays at least 6 craft items with a "View Details" button.
   - **Art & Craft Categories Section**: Showcases 6 art and craft subcategories with images and names.

4. **CRUD Operations**
   - **Add Craft Item**: Form to add new craft items with fields like image URL, item name, subcategory name, description, price, rating, customization options, processing time, stock status, user email, and user name.
   - **Update Craft Item**: Form to update existing craft items, with similar fields as the Add Craft Item form.
   - **Delete Craft Item**: Confirmation prompt before deleting an item.
   - **Success/Error Notifications**: Toast notifications for successful and failed operations.

5. **All Art & Craft Items Page**
   - Displays all craft items added by users in a tabular format with essential information and a "View Details" button.

6. **Dark/Light Theme Toggle**
   - Allows users to switch between dark and light themes for the home page.

## Getting Started

To get started with the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/arifadnan05/craftera-website.git
   cd art-and-craft-website
