# Replit.md

## Overview

This is a professional portfolio website for Abhijeet Bangade, a Senior Technical Program Manager with 21+ years of experience in the BFSI (Banking, Financial Services, and Insurance) sector, specializing in Digital Transformation. The application showcases his professional achievements, certifications, technical competencies, and project experience through an interactive, responsive web interface. The site includes a contact form for potential employers and clients to reach out directly.

## Recent Changes (August 13, 2025)

- Updated professional title from "Senior Program Manager" to "Senior Technical Program Manager | Digital Transformation | BFSI Expert" across all components and meta tags
- Updated header, footer, and HTML title to reflect the enhanced positioning
- Fixed all component import issues by creating complete shadcn/ui component library
- Resolved LSP diagnostics and type safety issues in contact form handling
- Enhanced SEO meta tags to include "Digital Transformation" keywords

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and API interactions
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

### Backend Architecture
- **Server**: Express.js with TypeScript running on Node.js
- **Development Setup**: Hot module replacement with Vite integration for seamless development
- **API Design**: RESTful endpoints following standard HTTP conventions
- **Request Processing**: JSON body parsing with URL-encoded form data support
- **Logging**: Custom middleware for API request/response logging with timing metrics

### Data Storage
- **Primary Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle ORM with type-safe schema definitions and migrations
- **Development Storage**: In-memory storage implementation for development/testing
- **Schema Management**: Shared schema definitions between client and server using Zod for validation

### Contact Management System
- **Contact Form**: Validated contact submissions with name, email, company, and message fields
- **Data Persistence**: Contact submissions stored in PostgreSQL with timestamps
- **Validation**: Client and server-side validation using Zod schemas
- **API Endpoints**: RESTful contact submission and retrieval endpoints

### Development & Build Process
- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript**: Full TypeScript support across client, server, and shared code
- **Path Mapping**: Configured aliases for clean imports (@/, @shared/, @assets/)
- **Asset Management**: Static asset handling with proper resolution
- **Production Build**: Separate client and server builds with ESM modules

## External Dependencies

### UI & Styling
- **shadcn/ui**: Complete component library with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Inter, Source Sans Pro, and Poppins for typography

### Database & ORM
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe ORM with schema management and migrations
- **Drizzle Zod**: Integration between Drizzle and Zod for validation

### Development Tools
- **Replit Integration**: Development environment integration with runtime error handling
- **TSX**: TypeScript execution for server-side development
- **ESBuild**: Fast bundling for production server builds

### Form & Validation
- **React Hook Form**: Performance-focused form library
- **Zod**: TypeScript-first schema validation
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### Query & State Management
- **TanStack React Query**: Server state management with caching and synchronization
- **Wouter**: Lightweight routing solution for single-page application navigation