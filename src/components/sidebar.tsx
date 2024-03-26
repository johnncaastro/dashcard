import { Home, Bolt, PieChart, CreditCard, Star, MapPin } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="flex flex-col items-center justify-between bg-gray-700 pb-10 pt-14">
      <nav className="flex flex-col gap-10">
        <a href="" className="group">
          <Home className="group-hover:text-white-300 h-6 w-6 text-gray-500" />
        </a>
        <a href="">
          <Bolt className="h-6 w-6 text-gray-500" />
        </a>
        <a href="">
          <PieChart className="h-6 w-6 text-gray-500" />
        </a>
        <a href="">
          <CreditCard className="h-6 w-6 text-gray-500" />
        </a>
        <a href="">
          <Star className="h-6 w-6 text-gray-500" />
        </a>
        <a href="">
          <MapPin className="h-6 w-6 text-gray-500" />
        </a>
      </nav>
      <div>
        <a href="">
          <Bolt className="h-6 w-6 text-gray-500" />
        </a>
      </div>
    </aside>
  )
}
