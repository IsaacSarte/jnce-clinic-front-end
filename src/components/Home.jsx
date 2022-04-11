import React, { useEffect } from 'react';

import ImageGallery from 'react-image-gallery';

import { LazyLoadImage } from 'react-lazy-load-image-component';

// Framer Motion
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

// SVG
import accurate from '../assets/svg/accurate.svg';
import cheap from '../assets/svg/cheap.svg';
import quality from '../assets/svg/quality.svg';
import delivery from '../assets/svg/delivery.svg';

const images = [
  {
    original: 'https://images.unsplash.com/photo-1589279003513-467d320f47eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  },
  {
    original: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  },
  {
    original: 'https://images.unsplash.com/photo-1613377512507-92803ec4ef17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  },
];

const Home = () => {

  const { ref, inView } = useInView({
    threshold: 0.5
  });

  const fade = useAnimation();

  useEffect(() => {
    if (inView) {
      fade.start({
        opacity: 1
      });
    }

    if (!inView) {
      fade.start({
        opacity: 0
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <section className="home__container overflow-hidden" id="home">

      {/* Home Title */}
      <div className="home__container--title flex justify-center custom:flex-col sm:flex-col md:flex-col lg:flex-row gap-20">
        <motion.h1
          initial={{ opacity: 0, marginTop: '50px' }}
          animate={{ opacity: 1, marginTop: '0px' }}
          transition={{ type: 'spring', duration: 2, delay: 0.5 }}
          className="text-5xl whitespace-nowrap custom:text-2xl md:text-4xl ">
          <strong>Accuracy and Quality<br />
            <motion.span
              initial={{ opacity: 0, marginTop: '50px' }}
              animate={{ opacity: 1, marginTop: '0px' }}
              transition={{ type: 'spring', duration: 1, delay: 2 }}
            >
              Need <span className="text-green-700">not</span> to be <span className="text-green-700">Expensive</span>
            </motion.span>
          </strong>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, marginTop: '50px' }}
          animate={{ opacity: 1, marginTop: '80px' }}
          transition={{ type: 'spring', duration: 1, delay: 2 }}
          className="text-3xl my-20 custom:text-xl md:my-10 mx-5 text-1xl lg:text-2xl my-15 2xl:text-3xl my-15"
        >
          JNCE is modern laboratory services Delivering newer flows<br /> by their place website is the first impression.
        </motion.p>
      </div>

      <br />

      {/* Image Carousel */}
      <ImageGallery
        items={images}
        autoPlay={true}
        infinite={true}
        showThumbnails={false}
        slideDuration={1000}
        slideInterval={5000}
        showFullscreenButton={false}
        showGalleryFullscreenButton={false}
        showPlayButton={true}
        showGalleryPlayButton={true}
      />

      <br /><br /><br /><br />

      {/* Basic Info */}
      <div ref={ref} className="info__container max-w-7xl w-full grid grid-cols-4 justify-items-center gap-4 custom:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

        <motion.div animate={fade} className="card hover:bg-green-800 hover:text-white">
          <div className="info__container--img absolute top-6">
            <LazyLoadImage
              className="w-64"
              alt="accurate svg"
              src={accurate}
            />
          </div>
          <div className="info__container--text mt-28 flex flex-col items-center justify-center text-center gap-4">
            <h1 className="text-2xl text-center lg:text-xl 2xl:text-2xl"><strong>Accurate</strong></h1>
            <span className="text-xl lg:text-lg 2xl:text-xl">Providing accurate<br /> lab results</span>
          </div>
        </motion.div>

        <motion.div animate={fade} transition={{ type: 'fade', delay: 0.25 }} className="card hover:bg-green-800 hover:text-white">
          <div className="info__container--img absolute top-4 -left-12">
            <LazyLoadImage
              className="w-64"
              alt="cheap svg"
              src={cheap}
            />
          </div>
          <div className="info__container--text mt-28 flex flex-col items-center justify-center text-center gap-4">
            <h1 className="text-2xl text-center lg:text-xl 2xl:text-2xl"><strong>Not Expensive</strong></h1>
            <span className="text-xl lg:text-lg 2xl:text-xl">Accurate but<br /> not expensive</span>
          </div>
        </motion.div>

        <motion.div animate={fade} transition={{ type: 'fade', delay: 0.35 }} className="card hover:bg-green-800 hover:text-white">
          <div className="info__container--img absolute -top-16 -left-36">
            <LazyLoadImage
              className="w-64"
              alt="quality svg"
              src={quality}
            />
          </div>
          <div className="info__container--text mt-28 flex flex-col items-center justify-center text-center gap-4">
            <h1 className="text-2xl text-center lg:text-xl 2xl:text-2xl"><strong>Quality</strong></h1>
            <span className="text-xl lg:text-base 2xl:text-xl">High quality<br /> laboratory equipments</span>
          </div>
        </motion.div>

        <motion.div animate={fade} transition={{ type: 'fade', delay: 0.45 }} className="card hover:bg-green-800 hover:text-white">
          <div className="info__container--img absolute">
            <LazyLoadImage
              className="w-52"
              alt="delivery svg"
              src={delivery}
            />
          </div>
          <div className="info__container--text mt-28 flex flex-col items-center justify-center text-center gap-4">
            <h1 className="text-2xl text-center lg:text-xl 2xl:text-2xl"><strong>Prompt Delivery</strong></h1>
            <span className="text-xl lg:text-base 2xl:text-xl">Satisfy clients<br /> through prompt delivery</span>
          </div>
        </motion.div>

      </div>

    </section>
  )
}

export default Home;
