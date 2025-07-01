import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import RoleDashboard from '@/components/RoleDashboard'
import { getUserRole } from '@/lib/roles'

export default async function DashboardPage() {
  const user = await currentUser()
  
  if (!user) {
    redirect('/')
  }

  const role = getUserRole(user)
  const userName = user.firstName || user.emailAddresses[0]?.emailAddress || 'User'

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-semibold text-gray-900">HR Finance System</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Logged in as: {userName}</span>
            </div>
          </div>
        </div>
      </nav>
      
      <RoleDashboard role={role} userName={userName} />
    </div>
  )
}