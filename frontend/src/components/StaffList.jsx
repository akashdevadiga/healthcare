import { useEffect, useState } from 'react'
import axios from 'axios'
import AddStaffModal from './AddStaffModal'

const API_URL = 'http://localhost:4000/users'

const FALLBACK = [
    {
        id: '35c840f5-0dfd-4d5b-a825-a12e24daee75',
        name: 'User 1',
        id_role: '4e4a62b3-7021-4977-abd1-828963141198',
        contact_number: '+11000012345',
        shift_preference: 'morning',
        created_at: '2025-11-28T08:49:43.355798+00:00',
    },
    {
        id: 'd02fdc68-5c46-4514-8d50-ae0e496d25c1',
        name: 'User 2',
        id_role: 'bb30f929-6a25-4ba4-a848-889fa966942a',
        contact_number: '+11000024690',
        shift_preference: 'evening',
        created_at: '2025-11-28T08:49:43.355798+00:00',
    },
    {
        id: 'eb6ddee9-cc52-4088-8ae4-bd4f85c0c45b',
        name: 'User 3',
        id_role: 'a9ee884c-57f8-4a63-adeb-86f5221066b0',
        contact_number: '+11000037035',
        shift_preference: 'night',
        created_at: '2025-11-28T08:49:43.355798+00:00',
    },
]

export default function StaffList() {
    const [staff, setStaff] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        fetchStaffData();
    }, [])

    async function fetchStaffData() {
        setLoading(true)
        try {
            const res = await axios.get(API_URL);
            setStaff(res.data);
            setLoading(false)
        } catch (err) {
            console.log("err:", err);
            console.warn('Failed to fetch users, using fallback', err.message)
            setStaff(FALLBACK)
            setError('Failed to load users from API; using local mock data')
        } finally {
            setLoading(false);
        }
    }

    function handleAddStaffSuccess(newStaff) {
        setStaff([...staff, newStaff])
    }

    function exportCsv() {
        const rows = [['id', 'name', 'id_role', 'contact_number', 'shift_preference', 'created_at']]
        staff.forEach((s) => rows.push([s.id, s.name, s.id_role, s.contact_number, s.shift_preference, s.created_at]))
        const csv = rows.map((r) => r.map((c) => `"${String(c || '').replace(/"/g, '""')}"`).join(',')).join('\n')
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `staff-${new Date().toISOString().slice(0, 10)}.csv`
        a.click()
        URL.revokeObjectURL(url)
    }

    return (
        <div className="min-h-screen p-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold">Staff List</h1>
                    <div className="flex items-center gap-2">
                        <button onClick={exportCsv} className="bg-indigo-600 text-white px-3 py-1.5 rounded">Export CSV</button>
                        <button onClick={() => setIsModalOpen(true)} className="bg-green-600 text-white px-3 py-1.5 rounded">Add Staff</button>
                    </div>
                </div>

                {loading ? (
                    <div className="text-gray-600">Loading...</div>
                ) : (
                    <div className="bg-white rounded shadow overflow-x-auto">
                        {error && <div className="p-3 text-sm text-yellow-800 bg-yellow-50">{error}</div>}
                        <table className="min-w-full text-left">
                            <thead className="border-b bg-gray-50">
                                <tr>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Role ID</th>
                                    <th className="px-4 py-2">Contact</th>
                                    <th className="px-4 py-2">Shift Preference</th>
                                    <th className="px-4 py-2">Created</th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {staff.map((s) => (
                                    <tr key={s.id} className="border-b hover:bg-gray-50">
                                        <td className="px-4 py-3">{s.name}</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">{s.id_role}</td>
                                        <td className="px-4 py-3">{s.contact_number}</td>
                                        <td className="px-4 py-3">{s.shift_preference}</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">{new Date(s.created_at).toLocaleString()}</td>
                                        <td className="px-4 py-3">
                                            <button className="text-indigo-600 hover:underline mr-3">Edit</button>
                                            <button className="text-red-600 hover:underline">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <AddStaffModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
                onSuccess={handleAddStaffSuccess}
            />
        </div>
    )
}
