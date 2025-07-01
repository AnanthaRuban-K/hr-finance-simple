import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">HR Finance System</h1>
            <div>
              <SignedOut>
                <SignInButton>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center gap-4">
                  <Link href="/dashboard" className="text-blue-600 hover:text-blue-800">
                    Dashboard
                  </Link>
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12 text-center">
        <SignedOut>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Welcome to HR & Finance System
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Manage your human resources and finances in one place
            </p>
            <SignInButton>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700">
                Get Started
              </button>
            </SignInButton>
          </div>
        </SignedOut>

        <SignedIn>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Welcome back! 👋
            </h2>
            <Link href="/dashboard">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700">
                Go to Dashboard
              </button>
            </Link>
          </div>
        </SignedIn>
      </main>
    </div>
  )
}