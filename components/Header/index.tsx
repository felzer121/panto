import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import Drawler from '../Drawler'
const menus = [
  { name: 'Мебель', href: 'catalog' },
  { name: 'О нас', href: 'aboutUs' },
  { name: 'Материалы', href: 'materials' },
  { name: 'Отзывы', href: 'testimonials' },
  { name: 'Контакты', href: 'contacts' }
]

const Header = () => {
  const [open, setOpen] = React.useState(false)

  const skipLink = (id: string) => {
    setOpen(false)
    const container: (HTMLElement | null) = document.querySelector(`#${id}`)
    if (container) {
      container.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  
  const toggleNav = () => {
    setOpen(!open)
  }

  return (
    <header className={styles.header}>
      <a className={styles.logo}>Panto</a>
      <nav className={styles.navbar}>
        <ul className={styles.menu}>
          {menus.map(menu => <li key={menu.name}><a onClick={() => skipLink(menu.href)}>{menu.name}</a></li>)}
        </ul>
      </nav>
      <a className={styles.language}>RU</a>
      <button onClick={toggleNav} className={styles.burger}><Image src={'icon/menu.svg'} alt="menu" width={40} height={40} /></button>
      {open && <Drawler menus={menus} toggleNav={() => toggleNav()} skipLink={(href) => skipLink(href)} />}
    </header>
  )
}

export default Header
