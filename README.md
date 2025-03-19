# Gemini Chat Clone

A modern web application that replicates the Gemini chat interface, built with Next.js and TailwindCSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DanielEncoDev/gemini-server.git
cd gemini-test
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```
3. Create `.env` file in the project root with the following variables:
```env
# API URL
NEXT_PUBLIC_URL_BASE=http://localhost:3001/v1/
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
gemini-test/
├── src/
│   ├── app/
│   │   ├── gemini/         # Gemini chat interface
│   │   ├── layout.js       # Root layout
│   │   ├── page.js         # Login page
│   │   └── globals.css     # Global styles
│   └── components/         # Reusable components
│       ├── Header.js
│       ├── MessageInput.js
│       └── WelcomeMessage.js
```

## 🛠️ Technical Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **State Management**: React useState
- **Authentication**: Simple simulation (for demo purposes)

## 🎨 Design Decisions

### Component Architecture

The application follows a component-based architecture for better maintainability and reusability:

- **Header**: Contains the application's navigation and branding
- **MessageInput**: Handles user input with a tooltip feature
- **WelcomeMessage**: Displays the initial greeting
- **ResponseMessage**: Display the response 

### Styling Approach

- Used TailwindCSS for rapid development and consistent design
- Implemented responsive design principles
- Created custom animations for better UX (e.g., tooltip animations)

### Performance Optimizations

- Component-level code splitting
- Client-side state management for real-time interactions
- Optimized layout to prevent unnecessary scrolling

## 🔒 Authentication

Currently implements a simulated authentication flow:
- Basic email/password form
- Client-side validation
- Redirect to chat interface on successful login


## 🧪 Testing (TODO)

- Unit tests for components
- Integration tests for authentication flow
- E2E tests for user interactions

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop browsers
- Tablets

## 🚧 Future Improvements

- [ ] Implement real authentication system
- [ ] Add message history
- [ ] Implement dark/light theme toggle
- [ ] Add error handling and loading states
- [ ] Implement testing suite

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 👥 Authors

    - @danielencodev 

## 🤝 Support

For support, email daniel.enco12@gmail.com or open an issue in the repository.
