import { ElementType } from 'react'

interface NavItemProps {
  icon: ElementType
}

export function NavItem({ icon: Icon }: NavItemProps) {
  return (
    <a href="" className="group">
      <Icon className="group-hover:text-white-300 h-6 w-6 text-gray-500" />
    </a>
  )
}
