import { Search, Bell } from 'lucide-react'

export function Header() {
  return (
    <header className="flex items-center text-gray-900">
      <h1 className="mr-16 text-3xl font-semibold">Wallet</h1>
      <div className="space-x-6">
        <button
          type="button"
          className="bg-white-100 hover:text-white-100 rounded-full px-8 py-1 transition-colors duration-200 hover:bg-orange-500"
        >
          Day
        </button>
        <button type="button" className="bg-white-100 rounded-full px-8 py-1">
          Week
        </button>
        <button type="button" className="bg-white-100 rounded-full px-8 py-1">
          Month
        </button>
        <button type="button" className="bg-white-100 rounded-full px-8 py-1">
          Year
        </button>
      </div>
      <div className="ml-auto flex items-center gap-6">
        <button type="button">
          <Search className="h-5 w-5 text-gray-900" />
        </button>
        <button type="button">
          <Bell className="h-5 w-5 fill-gray-900 text-gray-900" />
        </button>
        <div className="flex items-center gap-3">
          <strong className="text-lg font-medium">Jonathan Castro</strong>
          <img
            src="https://github.com/johnncaastro.png"
            alt="Perfil do Github"
            className="h-10 w-10 rounded-full"
          />
        </div>
      </div>
    </header>
  )
}
