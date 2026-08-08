export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      
      {/* Header Section */}
      <header className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Billing Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">Manage monthly utility computations and submeters.</p>
        </div>
        
        {/* Placeholder for the PDF Upload Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
          Upload Monthly Bill (PDF)
        </button>
      </header>

      {/* Main Content: Responsive Submeter Grid */}
      <main>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Submeter Readings</h2>
        
        {/* The Grid: 1 column on mobile, 2 on tablets, 3 on desktops */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Example Card 1 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-gray-50 pb-3">
              <span className="font-semibold text-gray-800">Apt 101 - Meter A</span>
              <span className="bg-emerald-50 text-emerald-600 text-xs px-2.5 py-1 rounded-full font-medium">Active</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Previous Reading</label>
              <div className="text-gray-400 text-sm">3,450 kWh</div>
            </div>

            <div className="flex flex-col gap-1 mt-2">
              <label className="text-xs font-medium text-gray-700 uppercase tracking-wide">Present Reading</label>
              <input 
                type="number" 
                className="w-full border border-gray-200 rounded-lg p-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                placeholder="Enter kWh..." 
              />
            </div>
          </div>

          {/* Example Card 2 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-gray-50 pb-3">
              <span className="font-semibold text-gray-800">Apt 102 - Meter B</span>
              <span className="bg-emerald-50 text-emerald-600 text-xs px-2.5 py-1 rounded-full font-medium">Active</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Previous Reading</label>
              <div className="text-gray-400 text-sm">2,100 kWh</div>
            </div>

            <div className="flex flex-col gap-1 mt-2">
              <label className="text-xs font-medium text-gray-700 uppercase tracking-wide">Present Reading</label>
              <input 
                type="number" 
                className="w-full border border-gray-200 rounded-lg p-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                placeholder="Enter kWh..." 
              />
            </div>
          </div>

        </div>
      </main>

    </div>
  )
}