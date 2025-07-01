import { UserRole, roleDisplayNames, roleColors } from '@/lib/roles'

interface RoleDashboardProps {
  role: UserRole
  userName: string
}

export default function RoleDashboard({ role, userName }: RoleDashboardProps) {
  const dashboardContent = {
    admin: {
      title: 'Admin Dashboard',
      stats: [
        { label: 'Total Users', value: '250', color: 'text-red-600' },
        { label: 'System Health', value: '99.9%', color: 'text-green-600' },
        { label: 'Active Sessions', value: '45', color: 'text-blue-600' },
        { label: 'Pending Issues', value: '3', color: 'text-orange-600' }
      ],
      actions: [
        'Manage Users',
        'System Settings',
        'View Reports',
        'Security Center'
      ]
    },
    hr_manager: {
      title: 'HR Manager Dashboard',
      stats: [
        { label: 'Total Employees', value: '150', color: 'text-blue-600' },
        { label: 'New Hires (Month)', value: '8', color: 'text-green-600' },
        { label: 'Pending Leaves', value: '12', color: 'text-orange-600' },
        { label: 'Open Positions', value: '5', color: 'text-purple-600' }
      ],
      actions: [
        'Employee Management',
        'Recruitment',
        'Leave Approvals',
        'Payroll Processing'
      ]
    },
    finance_manager: {
      title: 'Finance Manager Dashboard',
      stats: [
        { label: 'Monthly Revenue', value: '₹25L', color: 'text-green-600' },
        { label: 'Expenses', value: '₹18L', color: 'text-red-600' },
        { label: 'Pending Invoices', value: '23', color: 'text-orange-600' },
        { label: 'Budget Utilization', value: '72%', color: 'text-blue-600' }
      ],
      actions: [
        'Financial Reports',
        'Budget Management',
        'Invoice Processing',
        'Expense Tracking'
      ]
    },
    supervisor: {
      title: 'Supervisor Dashboard',
      stats: [
        { label: 'Team Members', value: '12', color: 'text-purple-600' },
        { label: 'Projects Active', value: '4', color: 'text-blue-600' },
        { label: 'Tasks Pending', value: '18', color: 'text-orange-600' },
        { label: 'Team Performance', value: '92%', color: 'text-green-600' }
      ],
      actions: [
        'Team Management',
        'Task Assignment',
        'Performance Review',
        'Leave Approval'
      ]
    },
    employee: {
      title: 'Employee Dashboard',
      stats: [
        { label: 'Leave Balance', value: '15', color: 'text-blue-600' },
        { label: 'Tasks Assigned', value: '6', color: 'text-orange-600' },
        { label: 'Projects', value: '2', color: 'text-purple-600' },
        { label: 'Performance', value: '85%', color: 'text-green-600' }
      ],
      actions: [
        'Apply Leave',
        'View Payslips',
        'Update Profile',
        'Submit Timesheet'
      ]
    }
  }

  const content = dashboardContent[role]

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className={`w-4 h-4 rounded-full ${roleColors[role]}`}></div>
          <h1 className="text-3xl font-bold text-gray-900">{content.title}</h1>
        </div>
        <p className="text-gray-600">Welcome back, {userName}! Here`&apos;`s your {roleDisplayNames[role].toLowerCase()} overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {content.stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {content.actions.map((action, index) => (
            <button 
              key={index}
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left transition-colors"
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <span>Sample activity for {roleDisplayNames[role]}</span>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <span>Another activity logged</span>
            <span className="text-sm text-gray-500">1 day ago</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <span>Previous action completed</span>
            <span className="text-sm text-gray-500">3 days ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}