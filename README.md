# ecommerce_website

This is a modern and responsive eCommerce dashboard built with **Vue 3** and **Vite**. It features interactive data visualization using `vue-chartjs`, icon integration with `Lucide Icons`, and real-time notifications using `Toaster`. The dashboard provides clear insights into sales, inventory status, and product performance.

## Dashboard Navigation

The dashboard is divided into the following key sections:

### 📊 Revenue Analysis Page
- View total orders and total revenue in real-time.
- Apply category filters to break down revenue by product types.
- Interactive line and pie charts help visualize revenue trends over time (daily, weekly, monthly, annually).

### 📦 Inventory Management Page
- Monitor inventory status with summary cards for total products, low stock, and out-of-stock items.
- Includes low stock alerts.
- Filterable and searchable product table based on name, category, and status.

### 📝 Product Registration Page
- Form to register new products with fields for name, price, description, and initial stock.
- Supports image upload for product visuals.

### 🔔 Alert Notifications
- Real-time alerts about inventory status, new orders, and achievement milestones.
- Toaster notifications ensure users stay updated without being disrupted.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
