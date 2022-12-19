import React from 'react'
import classes from './style.module.scss'
import Link from 'next/link';
import Image from 'next/image'


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

export default function Index() {
  return (
    <div className={classes.mainBox}>
      <div className={classes.communityBox}>
        <div className={classes.communityContent}>
          <h3>
            #HyperledgerPayments: Applications Making Financial Transactions Easier, Faster and More Accessible
          </h3>
          <p>
            June 30,2022 in Blog, Finance,
            Hyperledger Fabric,
            Hyperledger Iroha,
            Hyperledger Sawtooth
          </p>
          <h6>
            Bitcoin, Ethereum and other altcoins have sparked a range of investments, industries and even emotions. However, there is a fast-growing array of digital currencies
          </h6>
          <div>
            Read More 
          </div>
        </div>
        <div className={classes.communityContent}>
          <h3>
            #HyperledgerPayments: Applications Making Financial Transactions Easier, Faster and More Accessible
          </h3>
          <p>
            June 30,2022 in Blog, Finance,
            Hyperledger Fabric,
            Hyperledger Iroha,
            Hyperledger Sawtooth
          </p>
          <h6>
            Bitcoin, Ethereum and other altcoins have sparked a range of investments, industries and even emotions. However, there is a fast-growing array of digital currencies
          </h6>
          <div>
            Read More 
          </div>
        </div>
        <div className={classes.communityContent}>
          <h3>
            #HyperledgerPayments: Applications Making Financial Transactions Easier, Faster and More Accessible
          </h3>
          <p>
            June 30,2022 in Blog, Finance,
            Hyperledger Fabric,
            Hyperledger Iroha,
            Hyperledger Sawtooth
          </p>
          <h6>
            Bitcoin, Ethereum and other altcoins have sparked a range of investments, industries and even emotions. However, there is a fast-growing array of digital currencies
          </h6>
          <div>
            Read More
          </div>
        </div>

      </div>
    </div>
  )
}
