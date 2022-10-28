// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from 'next/image';
import classes from './Carousel.module.scss'

import { Grid, Typography, Card, CardHeader, CardContent, Box } from '@mui/material';
import { sizing, shadows, positions } from '@mui/system';

import Button from '../Buttons/index';
import { orange } from '@mui/material/colors';

const data = [
  {
    id: 1,
    title: "Hyperledger Foundation",
    desc: "A global enterprise blockchain project that offers the necessary framework, standards, guidelines, and tools to build open- source blockchains and related applications for use across various industries",
    link: "https://www.hyperledger.org/",
    img: "/images/banner/banner1.jpg",
  },
  {
    id: 2,
    title: "Current Events",
    desc: "A global enterprise blockchain project that offers the necessary framework, standards, guidelines, and tools to build open- source blockchains and related applications for use across various industries",
    link: "https://www.hyperledger.org/",
    img: "/images/banner/banner2.jpg",
  },
  {
    id: 3,
    title: "Recent Releases",
    desc: "A global enterprise blockchain project that offers the necessary framework, standards, guidelines, and tools to build open- source blockchains and related applications for use across various industries",
    link: "https://www.hyperledger.org/",
    img: "/images/banner/banner3.png",
  },


]

export default ({ title, description, url }) => {
  // console.log("Props are",title)
  return (
    <Grid
      container
      className={classes.carousel}
    >
      <Grid
        item
        xs={10}
        className={classes.carouselItems}
      >
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {
            data.map((data, id) => (
              <SwiperSlide key={data.id}>
                <Card
                >
                  <div>
                    <Image
                      src={data.img}
                      alt="banner2"
                      height="700px"
                      width="1300px"
                      // layout='fill' 
                      className={classes.imageBox}
                    />
                  </div>

                  <Box
                  // sx={
                  //   {
                  //     display: "flex",
                  //     justifyContent: "center",
                  //     alignItems: "center",
                  //   }
                  // }
                  >
                    <CardContent
                      className={classes.card}
                    >
                      <div
                        className={classes.cardContent}
                      >
                        <h1>
                          {data.title}
                        </h1>
                        <p
                          variant="h5"
                          color="text"
                          gutterBottom
                          textAlign="center"
                          sx={
                            {
                              marginBottom: "40px",
                            }
                          }
                        >
                          {data.desc}
                        </p>
                        <Box>
                          <Button type="Secondary" text="Learn More" />
                        </Box>

                      </div>

                    </CardContent>
                  </Box>

                </Card>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Grid>

    </Grid >

  );
};