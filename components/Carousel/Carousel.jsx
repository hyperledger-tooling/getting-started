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

import { Grid, Typography, Card, CardHeader, CardContent, Box } from '@mui/material';
import { sizing, shadows, positions } from '@mui/system';

import Button from '../Buttons/index';

export default ({ title, description, url }) => {
  // console.log("Props are",title)
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={
        {
          width: '100%',
        }
      }
    >
      <Grid
        item
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
              <div>
                <Image
                  src="/images/banner/banner1.jpg"
                  alt="banner2"
                  height="700px"
                  width="1300px"
                  // layout='fill' 
                  className={classes.imageBox}
                />
              </div>

              <Box
                sx={
                  {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "red",
                    // height: "500px"
                  }
                }
              >
                <CardContent
                  sx={
                    {
                      // backgroundColor: 'green',
                      position: 'absolute',
                      borderRadius: '20px',
                      top: '0px'
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
                        top: '100px',
                        position: 'relative',
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
                      gutterBottom

                    >
                      A global enterprise blockchain project that offers <br />
                      the necessary framework, standards, guidelines,<br />
                      and tools to build open-source blockchains and <br />
                      related applications for use across various industries
                    </Typography>

                    <Box
                      // sx={
                      //   {
                      //     position: 'absolute',
                      //     top: '400px',
                      //     backgroundColor: 'red',
                      //     width: '100%',
                      //   }
                      // }
                    >
                      <Button type="Secondary" text="Learn More"/>
                    </Box>

                  </Grid>

                </CardContent>
              </Box>

            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card
            >
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

              <Box
                sx={
                  {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "red",
                    // height: "500px"
                  }
                }
              >
                <CardContent
                  sx={
                    {
                      // backgroundColor: 'green',
                      position: 'absolute',
                      borderRadius: '20px',
                      top: '0px'
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
                    >
                      A global enterprise blockchain project that offers <br />
                      the necessary framework, standards, guidelines,<br />
                      and tools to build open-source blockchains and <br />
                      related applications for use across various industries
                    </Typography>
                  </Grid>

                </CardContent>
              </Box>

            </Card>
          </SwiperSlide>


          <SwiperSlide>
            <Card
            >
              <div>
                <Image
                  src="/images/banner/banner3.png"
                  alt="banner2"
                  height="700px"
                  width="1300px"
                  // layout='fill' 
                  className={classes.imageBox}
                />
              </div>

              <Box
                sx={
                  {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "red",
                    // height: "500px"
                  }
                }
              >
                <CardContent
                  sx={
                    {
                      // backgroundColor: 'green',
                      position: 'absolute',
                      borderRadius: '20px',
                      top: '0px'
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
                    >
                      A global enterprise blockchain project that offers <br />
                      the necessary framework, standards, guidelines,<br />
                      and tools to build open-source blockchains and <br />
                      related applications for use across various industries
                    </Typography>
                  </Grid>

                </CardContent>
              </Box>

            </Card>
          </SwiperSlide>


        </Swiper>
      </Grid>

    </Grid >

  );
};