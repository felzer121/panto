import React from "react";
import styles from './style.module.scss'

const ChoosingUs = () => {

  return (
    <section className={styles.choosingUs}>
      <h2 className={styles.choosingUsTitle}>Почему<br />Выбирают нас</h2>
      <div className={styles.choosingUsItem}>
        <h4 className={styles.choosingUsItemTitle}>Роскошные удобства</h4>
        <p className={styles.choosingUsItemDescription}>Преимущество аренды рабочего места у нас заключается в том, что вы получаете комфортный сервис и все удобства</p>
      </div>
      <div className={styles.choosingUsItem}>
        <h4 className={styles.choosingUsItemTitle}>Доступная цена</h4>
        <p className={styles.choosingUsItemDescription}>Вы можете получить рабочее место высочайшего качества по доступной цене и при этом пользоваться удобствами, которые есть только здесь.</p>
      </div>
      <div className={styles.choosingUsItem}>
        <h4 className={styles.choosingUsItemTitle}>Много вариантов</h4>
        <p className={styles.choosingUsItemDescription}>Мы предлагаем множество уникальных вариантов рабочего пространства, чтобы вы могли выбрать рабочее пространство по своему вкусу.</p>
      </div>
    </section>
  )
}

export default ChoosingUs
