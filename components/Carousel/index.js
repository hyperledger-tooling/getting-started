import React from 'react'
import Carousel from './Carousel'

const content = [
    {
        title: "Hyperledger Foundation",
        description: "A global enterprise blockchain project that offers the necessary framework, standards, guidelines, and tools to build open-source blockchains and related applications for use across various industries.",
        buttonLink: "https://www.hyperledger.org/",
        url: "https://i.imgur.com/Ym4C3NJ.jpg",
    },
    {
        title: "Hyperledger Foundation",
        description: "A global enterprise blockchain project that offers the necessary framework, standards, guidelines, and tools to build open-source blockchains and related applications for use across various industries.",
        buttonLink: "https://www.hyperledger.org/",
        url: "https://i.imgur.com/Ym4C3NJ.jpg",
    },
    {
        title: "Hyperledger Foundation",
        description: "A global enterprise blockchain project that offers the necessary framework, standards, guidelines, and tools to build open-source blockchains and related applications for use across various industries.",
        buttonLink: "https://www.hyperledger.org/",
        url: "https://i.imgur.com/Ym4C3NJ.jpg",
    },
]

function index() {
    return (
        <div>
            {
                content.map((idx,res) => (
                    <Carousel title={res.title} description={res.description} url={res.url} />
                ))
            }
        </div>
    )
}

export default index