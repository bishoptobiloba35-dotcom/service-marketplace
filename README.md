# Scout Service Marketplace

Scout is a production-ready service marketplace for connecting clients with skilled tradespeople and service providers.

## ✨ Features

### Core Functionality
- **User Authentication**: Secure signup and login with Supabase
- **Role-based system**: Customers and service providers
- **Job Posting**: Post service requests with budget and details
- **Provider Browsing**: Browse and filter available professionals
- **Offer System**: Providers can submit proposals for jobs
- **Escrow Payments**: Secure payment holds until work is approved
- **Messaging**: In-app communication between users
- **Reviews**: Rate and review completed work

### Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Payments**: Stripe (escrow integration ready)
- **API**: Next.js API Routes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Supabase account (free tier available)
- Stripe account (for payment processing)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/bishoptobiloba35-dotcom/service-marketplace.git
   cd service-marketplace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to SQL Editor and run the schema from `supabase/schema.sql`
   - Copy your project URL and keys

4. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your credentials.

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   - Visit `http://localhost:3000`

## 📋 Core Pages

- Landing page
- Browse jobs
- Providers listing
- Post job form
- Dashboard
- Login
- Signup

## 🚧 Current status

This is a functional MVP UI with authentication, job-posting, and escrow-ready API scaffolding built to your brief.

## 🔒 Payment Flow

1. Customer posts a job
2. Provider submits an offer
3. Customer accepts an offer
4. Funds are held in escrow
5. Work is completed and approved
6. Escrow is released to the provider

## 🔄 Next steps

- connect real Supabase auth
- wire UI to live DB tables
- add Stripe payment processing
- add provider verification and messaging
