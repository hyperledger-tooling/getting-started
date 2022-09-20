// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from 'next/image';
import classes from './Carousel.module.css'
import { Grid, Typography, CardMedia, Card, CardHeader, CardContent, Box } from '@mui/material';
import { sizing, shadows, positions } from '@mui/system';

export default ({ }) => {
  return (
    <Grid
      // className={classes.container}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      // backgroundColor="rgb(240, 92, 139)"
      sx={
        {
          width: '100%',
        }
      }
    >
      <Grid
        item
        // backgroundColor="rgb(92, 240, 134)"
        xs={10}
        sx={
          {
            boxShadow: 2.5,
            m: 2,
            borderRadius: '20px',
          }
        }
      >
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className={classes.swiper}
        >
          <SwiperSlide>
            <Card
            >
              <CardMedia
                component="img"
                alt="banner1"
                height="100%"
                image="/images/banner/banner1.jpg"
                sx={
                  {
                    borderRadius: '20px',
                    objectFit: 'contain',
                  }
                }
              />

              <CardContent
                sx={
                  {
                    // height: '0px',
                    // backgroundColor: 'green'
                  }
                }
              >
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center"
                  sx={
                    {
                      position: 'absolute',
                      top: '100px',
                    }
                  }
                >
                  <Typography
                    gutterBottom
                    variant="h1"
                    component="div"
                    color="#e3f2fd"
                  >
                    Hyperledger Foundation
                  </Typography>

                  <Typography
                    variant="h4"
                    color="#e3f2fd"
                    noWrap="false"
                  >
                    A global enterprise blockchain project that offers <br />
                    the necessary framework, standards, guidelines,<br />
                    and tools to build open-source blockchains and <br />
                    related applications for use across various industries
                  </Typography>
                </Grid>

              </CardContent>
            </Card>
          </SwiperSlide>

          <SwiperSlide  >
            <CardMedia
              component="img"
              alt="banner1"
              height="100%"
              image="/images/banner/banner1.jpg"
              sx={
                {
                  borderRadius: '20px',
                  objectFit: 'contain',
                }
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            {/* <CardMedia
              component="img"
              alt="banner1"
              height="100%"
              image="/images/banner/banner1.jpg"
              sx={
                {
                  borderRadius: '20px',
                  objectFit: 'contain',
                  backgroundColor: 'red'
                }
              }
            /> */}
            <div>
              <Image
                src="/images/banner/banner2.jpg"
                alt="banner2"
                height="700px"
                width="1300px"
                // layout='fill' 
                className={classes.imageBox}
                />
            </div>
          </SwiperSlide>

        </Swiper>
      </Grid>

    </Grid >

  );
};