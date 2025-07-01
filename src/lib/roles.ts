interface User {
  emailAddresses?: { emailAddress?: string }[]
}
export type UserRole = 'admin' | 'hr_manager' | 'finance_manager' | 'supervisor' | 'employee'

export const roleDisplayNames: Record<UserRole, string> = {
  admin: 'Administrator',
  hr_manager: 'HR Manager',
  finance_manager: 'Finance Manager',
  supervisor: 'Supervisor',
  employee: 'Employee'
}

export const roleColors: Record<UserRole, string> = {
  admin: 'bg-red-500',
  hr_manager: 'bg-blue-500',
  finance_manager: 'bg-green-500',
  supervisor: 'bg-purple-500',
  employee: 'bg-gray-500'
}

export function getUserRole(user: User): UserRole {
  // In real app, get from user metadata
  // For demo, assign role based on email
  const userEmail = user?.emailAddresses?.[0]?.emailAddress || ''
  
  // Simple role assignment based on email
  if (userEmail.includes('admin')) return 'admin'
  if (userEmail.includes('hr')) return 'hr_manager'
  if (userEmail.includes('finance')) return 'finance_manager'
  if (userEmail.includes('supervisor')) return 'supervisor'
  
  // Default role
  return 'employee'
}