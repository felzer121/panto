import React from 'react'
import styles from './style.module.scss'

const menus = [
  { name: 'Мебель', href: 'catalog' },
  { name: 'О нас', href: 'aboutUs' },
  { name: 'Материалы', href: 'materials' },
  { name: 'Отзывы', href: 'testimonials' },
  { name: 'Контакты', href: 'contacts' }
]

const Header = () => {

  const skipLink = (id: string) => {
    const container: (HTMLElement | null) = document.querySelector(`#${id}`)
    if (container) {
      container.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }

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

    </header>
  )
}

export default Header
