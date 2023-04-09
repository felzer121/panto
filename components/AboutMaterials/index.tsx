import React from "react";
import styles from './style.module.scss'
import Image from "next/image";
import picture1 from '@/public/image/materials_1.jpg'
import picture2 from '@/public/image/materials_2.jpg'
import picture3 from '@/public/image/materials_3.jpg'


const AboutMaterials = () => {
  return (
    <section className={styles.materials} id="materials">
      <div className={styles.materialsContent}>
        <span className={styles.materialsSubtitle}>Материалы</span>
        <h2>Очень серьезные <br /> материалы для изготовления<br /> мебели</h2>
        <p className={styles.materialsText}>Потому что Panto очень серьезно относился к разработке мебели для нашей среды, используя очень дорогой и известный капитал, но по относительно низкой цене.</p>
      </div>
      <div className={styles.materialsPicture}>
        <div className={styles.materialsPictureLeft}>
          <Image src={picture2} alt="" />
          <Image src={picture3} alt="" />
        </div>
        <picture className={styles.materialsPictureRight}>
          <Image src={picture1} alt="" />
        </picture>
      </div>
    </section>
  )
}

export default AboutMaterials
