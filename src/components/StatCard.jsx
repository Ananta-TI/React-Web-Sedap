// components/StatCard.jsx
export default function StatCard({ icon, color, value, label }) {
    return (
        <div className="flex items-center bg-white shadow rounded-xl p-4">
            <div className={`text-white rounded-full p-3 mr-4 text-xl ${color}`}>
                {icon}
            </div>
            <div>
                <div className="text-2xl font-bold">{value}</div>
                <div className="text-gray-500 text-sm">{label}</div>
            </div>
        </div>
    );
}
