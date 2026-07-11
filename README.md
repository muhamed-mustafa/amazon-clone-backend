# Amazon Clone Backend

A backend API for an Amazon-like e-commerce application built with **NestJS** and **TypeScript**.

This project is created as an open-source educational backend to demonstrate how to structure a real-world e-commerce API using clean architecture, DTOs, validation, authentication, and modular NestJS patterns.

> This project is for learning and portfolio purposes only. It is not affiliated with Amazon.

---

## Project Goals

The goal of this project is to build a practical and maintainable backend for an e-commerce platform while helping developers learn production-style NestJS concepts.

The project aims to cover:

- Authentication and authorization
- User management
- Product management
- Categories
- Shopping cart
- Orders
- DTOs and validation
- Error handling
- Response serialization
- Database integration
- Docker-based development
- Clean and scalable module structure

---

## Tech Stack

- **Node.js**
- **NestJS**
- **TypeScript**
- **REST API**
- **Docker**

Additional tools such as database, ORM, authentication strategy, and testing setup can be added or updated as the project evolves.

---

## Project Status

This project is currently in active development.

The repository is intended to grow into a complete e-commerce backend with clear documentation, clean code structure, and practical examples for developers learning backend development with NestJS.

---

## Planned Features

### Authentication

- User registration
- User login
- Password hashing
- JWT authentication
- Role-based access control

### Users

- Get user profile
- Update user data
- Hide sensitive data such as passwords from API responses

### Products

- Create product
- Update product
- Delete product
- Get all products
- Get single product
- Product search and filtering

### Cart

- Add product to cart
- Remove product from cart
- Update quantity
- Get user cart

### Orders

- Create order
- Get user orders
- Get order details
- Admin order management

### Documentation and Quality

- API documentation
- Unit tests
- E2E tests
- Better error handling
- Improved README and contribution guide

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/muhamed-mustafa/amazon-clone-backend.git
cd amazon-clone-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory.

Example:

```env
PORT=3000
NODE_ENV=development

# Database
DATABASE_URL=your_database_url

# Auth
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
```

Update these values based on your local setup.

### 4. Run the project

```bash
npm run start:dev
```

The server should run on:

```text
http://localhost:3000
```

---

## Running with Docker

If Docker is configured in your environment, you can build and run the project using:

```bash
docker build -t amazon-clone-backend .
docker run -p 3000:3000 amazon-clone-backend
```

---

## Useful Scripts

```bash
# Development
npm run start:dev

# Build
npm run build

# Production
npm run start:prod

# Tests
npm run test

# E2E tests
npm run test:e2e

# Lint
npm run lint
```

Some scripts may depend on the current project configuration.

---

## Example Request Flow

```text
Client Request
   ↓
Middleware
   ↓
Guards
   ↓
Interceptors
   ↓
Pipes / Validation
   ↓
Controller
   ↓
Service
   ↓
Database
   ↓
Response
```

---

## Folder Structure

Example structure:

```text
src/
├── auth/
├── users/
├── products/
├── categories/
├── cart/
├── orders/
├── common/
├── config/
├── app.module.ts
└── main.ts
```

The structure may change as the project grows.

---

## Security Notes

This project aims to follow common backend security practices, including:

- Hashing passwords before storing them
- Never returning passwords in API responses
- Validating incoming request data
- Using environment variables for secrets
- Protecting private routes with authentication guards

---

## Contributing

Contributions are welcome.

You can contribute by:

- Reporting bugs
- Suggesting features
- Improving documentation
- Refactoring code
- Adding tests
- Opening pull requests

Before contributing, please make sure your changes are clear, tested, and aligned with the project goals.

---

## Author

**Muhamed Mustafa**

GitHub: [muhamed-mustafa](https://github.com/muhamed-mustafa)

---

## License

This project is open-source. Add a license file to define how others can use, modify, and distribute the code.
