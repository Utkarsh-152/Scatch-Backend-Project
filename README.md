# Scatch Backend Project

A full-stack e-commerce application built with Node.js, Express.js, MongoDB, and EJS templating engine. This project demonstrates various backend functionalities including user authentication, shopping cart management, and data associations.

## Features

### User Authentication
- Secure user registration and login system
- JWT (JSON Web Token) based authentication
- Password encryption using bcrypt
- Protected routes with JWT verification

### Shopping Experience
- Product browsing with dynamic rendering
- Shopping cart functionality
  - Add/remove items
  - Update quantities
  - Calculate total price
- Persistent cart data tied to user sessions

### Data Management
- MongoDB database integration
- Complex data associations between:
  - Users and their shopping carts
  - Products and categories
  - Orders and user profiles

### Frontend Views
- Responsive EJS templates
- Clean and intuitive user interface
- Server-side rendering for improved performance

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **View Engine**: EJS
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **Data Modeling**: Mongoose

## Installation

1. Clone the repository
```bash
git clone https://github.com/Utkarsh-152/Scatch-Backend-Project.git
cd Scatch-Backend-Project
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000
```

4. Start the development server
```bash
npm run dev
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- GitHub: [@Utkarsh-152](https://github.com/Utkarsh-152)
- Project Link: [https://github.com/Utkarsh-152/Scatch-Backend-Project](https://github.com/Utkarsh-152/Scatch-Backend-Project)
