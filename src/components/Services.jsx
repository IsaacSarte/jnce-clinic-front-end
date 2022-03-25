import React, { useEffect } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';

// Framer Motion
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

// SVG
import 'boxicons';

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.2
  });

  const animationLeft = useAnimation();

  useEffect(() => {
    if (inView) {
      animationLeft.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 1, bounce: 0.3
        }
      });
    }

    if (!inView) {
      animationLeft.start({
        x: '-100px',
        opacity: 0
      });
    }
  })

  return (
    <div className="services__container" id="services">
      <div className="services__container--section h-auto p-4 flex flex-col items-center justify-center">
        <div className="services__container--header text-right w-11/12">
          <h2 className="text-5xl font-bold lg:text-5xl md:text-5xl sm:text-4xl custom:text-2xl">
            Our {" "}
            <span className="text-green-800">Services </span>
          </h2>
        </div>

        <br /><br />

        <div className="services__container--section--img bg-green-800 w-full h-auto">
          <div className="flex items-center justify-center gap-20 mb-10">

            <div className="">
              <div className="service__container--img h-40 text-white">
                Image 1
              </div>
              <div className="text-white">
                Image 2
              </div>
            </div>

            <div className="">
              <div className="service__container--img h-48 mt-8 text-white">
                Image 3
              </div>
              <div className="text-white">
                Image 4
              </div>
            </div>

            <div className="">
              <div className="service__container--img h-56 mt-16 text-white">
                Image 5
              </div>
              <div className="text-white">
                Image 6
              </div>
            </div>

          </div>
        </div>

        <br /><br />

        {/* Service Title */}
        <h2 className="text-4xl font-bold custom:text-lg md:text-2xl xl:text-4xl">What does JNCE Medical Clinic Offers?</h2>

        <br /><br />

        <div className="service__container--body1 w-11/12 flex flex-col justify-center lg:block">

          <div ref={ref} className="service__container--num1 flex items-center justify-around sm:flex-col sm:justify-center custom:flex-col custom:justify-center custom:gap-5 mb-10 xl:gap-0">

            {/* Service Descriptions */}
            <div className="flex flex-col sm:order-2 sm:pt-12 custom:order-2 custom:pt-12">

              <motion.div animate={animationLeft} className="flex gap-5 mb-4">
                <box-icon name='hand-right' type='solid' color='#b2856a' size='md'></box-icon>
                <h1 className="text-xl font-medium md:text-xl sm:text-3xl lg:text-2xl xl:text-2xl 2xl:text-2xl custom:text-lg">Laboratory Facility</h1>
              </motion.div>

              <motion.div animate={animationLeft} className="flex gap-5 mb-4">
                <box-icon name='hand-right' type='solid' color='#b2856a' size='md'></box-icon>
                <h1 animate={animationLeft} className="text-xl font-medium md:text-xl sm:text-3xl lg:text-2xl xl:text-2xl 2xl:text-2xl custom:text-lg">Medical Consultation</h1>
              </motion.div>

              <motion.div animate={animationLeft} className="flex gap-5 mb-4">
                <box-icon name='hand-right' type='solid' color='#b2856a' size='md'></box-icon>
                <h1 animate={animationLeft} className="text-xl font-medium md:text-xl sm:text-3xl lg:text-2xl xl:text-2xl 2xl:text-2xl custom:text-lg">Electrocardiogram</h1>
              </motion.div>

              <motion.div animate={animationLeft} className="flex gap-5 mb-4">
                <box-icon name='hand-right' type='solid' color='#b2856a' size='md'></box-icon>
                <h1 animate={animationLeft} className="text-xl font-medium md:text-xl sm:text-3xl lg:text-2xl xl:text-2xl 2xl:text-2xl custom:text-lg">Dental Services</h1>
              </motion.div>

              <motion.div animate={animationLeft} className="flex gap-5 mb-4">
                <box-icon name='hand-right' type='solid' color='#b2856a' size='md'></box-icon>
                <h1 animate={animationLeft} className="text-xl font-medium md:text-xl sm:text-3xl lg:text-2xl xl:text-2xl 2xl:text-2xl custom:text-lg">Pre Employment Medical Examination</h1>
              </motion.div>

              <motion.div animate={animationLeft} className="flex gap-5 mb-4">
                <box-icon name='hand-right' type='solid' color='#b2856a' size='md'></box-icon>
                <h1 animate={animationLeft} className="text-xl font-medium md:text-xl sm:text-3xl lg:text-2xl xl:text-2xl 2xl:text-2xl custom:text-lg">Seafarer's Medical Examination</h1>
              </motion.div>

              <motion.div animate={animationLeft} className="flex gap-5 mb-4">
                <box-icon name='hand-right' type='solid' color='#b2856a' size='md'></box-icon>
                <h1 animate={animationLeft} className="text-xl font-medium md:text-xl sm:text-3xl lg:text-2xl xl:text-2xl 2xl:text-2xl custom:text-lg">Ultrasound</h1>
              </motion.div>

              <motion.div animate={animationLeft} className="flex gap-4">
                <box-icon name='hand-right' type='solid' color='#b2856a' size='md'></box-icon>
                <div className="flex flex-col">    
                  <h1 animate={animationLeft} className="text-xl font-medium md:text-xl sm:text-3xl lg:text-2xl xl:text-2xl 2xl:text-2xl custom:text-lg">RTPCR Testing</h1>
                  <a href="https://alliedmolecular.com/home/index" target="_blank">
                    <small><span className="text-base text-blue-600 hover:text-green-400 sm:text-sm custom:text-sm">(in Partnership with Allied Molecular Laboratory)</span></small>
                  </a>
                </div>
              </motion.div>

            </div>

            {/* Service Image */}
            <div className="service__container--img sm:order-1 custom:order-1">
              <LazyLoadImage
                className="w-11/12 md:w-11/12 sm:w-full custom:w-90"
                alt="Lab Image"
                src={'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=144'}
              />
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Services;
