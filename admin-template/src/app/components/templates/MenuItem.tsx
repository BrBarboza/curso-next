//'use client'

import Link from 'next/link'

interface MenuItemProps {
  url?: string
  text: string
  icon: any
  className?: string
  onClick?: (e: any) => void
}

function MenuItem(props: MenuItemProps) {
  function renderContent() {
    return (
      <a
        href={props.url}
        className={`
        flex flex-col justify-center items-center
        h-20 w-20 text-gray-600 ${props.className}
      `}
      >
        {props.icon}
        <span
          className={`
          text-xs font-light
        `}
        >
          {props.text}
        </span>
      </a>
    )
  }

  return (
    <li
      onClick={props.onClick}
      className={`
    hover:bg-gray-200
    cursor-pointer
    `}
    >
      {props.url ? (
        <Link legacyBehavior href={props.url}>
          {renderContent()}
        </Link>
      ) : (
        renderContent()
      )}
    </li>
  )
}

export default MenuItem
