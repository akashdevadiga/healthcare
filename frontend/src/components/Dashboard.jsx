import React from 'react'

// Static mock staff and assignments for UI-only dashboard
const MOCK_STAFF = [
  { id: 1, name: 'alice', role: 'Doctor', contact: '555-0101' },
  { id: 2, name: 'bob', role: 'Nurse', contact: '555-0102' },
  { id: 3, name: 'carol', role: 'Technician', contact: '555-0103' },
  { id: 4, name: 'dave', role: 'Nurse', contact: '555-0104' },
  { id: 5, name: 'eve', role: 'Doctor', contact: '555-0105' },
  { id: 6, name: 'frank', role: 'Technician', contact: '555-0106' },
]

const SHIFTS = [
  { id: 'morning', name: 'Morning', time: '08:00–16:00', capacity: 4 },
  { id: 'afternoon', name: 'Afternoon', time: '16:00–00:00', capacity: 4 },
  { id: 'night', name: 'Night', time: '00:00–08:00', capacity: 3 },
]

const SELECTED_DATE = new Date().toISOString().slice(0, 10)

// Static assignment mapping for the selected date (UI-only)
const ASSIGNMENTS = {
  [SELECTED_DATE]: {
    morning: [1, 4],
    afternoon: [2, 5],
    night: [3, 6],
  },
}

function staffById(id) {
  return MOCK_STAFF.find((s) => s.id === id) || { id, name: 'Unknown', role: '-', contact: '' }
}

export function Dashboard() {
  const dayAssignments = ASSIGNMENTS[SELECTED_DATE] || {}

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Shifts — {SELECTED_DATE}</h1>
            <p className="text-sm text-gray-600">Daily view with assigned staff and available slots (static)</p>
          </div>

          <div className="flex items-center gap-3">
            <input type="date" value={SELECTED_DATE} readOnly className="border px-3 py-2 rounded bg-white/60" />
            <button disabled className="bg-indigo-600 text-white px-3 py-2 rounded opacity-70">Export CSV</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SHIFTS.map((s) => {
            const assigned = (dayAssignments[s.id] || []).map(staffById)
            const used = assigned.length
            const remaining = Math.max(0, s.capacity - used)

            return (
              <div key={s.id} className="bg-white rounded shadow p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold">{s.name}</h3>
                    <p className="text-sm text-gray-500">{s.time}</p>
                  </div>
                  <div className="text-sm text-gray-600">{used}/{s.capacity} slots</div>
                </div>

                <div className="space-y-2 mb-3">
                  {assigned.map((a) => (
                    <div key={a.id} className="flex items-center justify-between border rounded px-3 py-2">
                      <div>
                        <div className="font-medium">{a.name} <span className="text-sm text-gray-500">({a.role})</span></div>
                        <div className="text-xs text-gray-500">{a.contact}</div>
                      </div>
                      <div className="text-sm text-gray-600">Present</div>
                    </div>
                  ))}

                  {assigned.length === 0 && (
                    <div className="text-sm text-gray-500">No staff assigned</div>
                  )}
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <div className="text-sm text-gray-600">Available slots: <strong className="text-gray-800">{remaining}</strong></div>
                  <button disabled className="bg-indigo-600 text-white px-3 py-1.5 rounded opacity-70">Assign</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
