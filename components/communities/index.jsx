import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import classes from './style.module.scss'
import styles from '../../styles/globalStyle.module.scss'


const data = [
  {
    title: "Business",
    buttonLink: "https://www.hyperledger.org/",
    imgUrl: "/images/persona4.jpg",
  },
  {
    title: "Developer",
    buttonLink: "https://www.hyperledger.org/",
    imgUrl: "/images/persona5.jpg",
  },
  {
    title: "Enterprises",
    buttonLink: "https://www.hyperledger.org/",
    imgUrl: "/images/persona7.jpg",
  },
]

export default function Index({ title, buttonLink, imgUrl }) {
  return (
    <div className={classes.communityMainBox}>
      <div className={classes.communityBox}>
        <div className={classes.communityContent}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.
          </p>
        </div>
        <div className={classes.communityCardBox}>
          {
            (data.map((data, id) => (
              <div key={id} className={classes.communityMedia}>
                <Image src={data.imgUrl} height="300px" width="300px" alt="communities"/>
                <div className={classes.communityButton}>
                  <Link href={data.buttonLink}>
                  <button className={styles.secondaryButton} >
                        {data.title}
                  </button>
                  </Link>
                </div>
              </div>
            )))
          }

        </div>

      </div>
    </div>

  )
}