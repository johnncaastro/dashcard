import { NavItem } from './nav-item'
import { Home, Bolt, PieChart, CreditCard, Star, MapPin } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="flex flex-col items-center justify-between bg-gray-700 pb-10 pt-14">
      <div className="flex flex-col gap-10">
        <NavItem icon={Home} />
        <NavItem icon={PieChart} />
        <NavItem icon={CreditCard} />
        <NavItem icon={Star} />
        <NavItem icon={MapPin} />
      </div>
      <div>
        <a href="">
          <NavItem icon={Bolt} />
        </a>
      </div>
    </aside>
  )
}
