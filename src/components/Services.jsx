import React, { useEffect } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import { HandIcon } from '../subComponents/AllSvg.jsx';

// Framer Motion
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Services = () => {

  const { ref, inView } = useInView({
    threshold: 0.2
  });

  const animationLeft = useAnimation();
  const fade = useAnimation();

  useEffect(() => {
    if (inView) {
      animationLeft.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 1, bounce: 0.3
        }
      });
      fade.start({
        opacity: 1
      })
    }

    if (!inView) {
      animationLeft.start({
        x: '-100px',
        opacity: 0
      });
      fade.start({
        opacity: 0
      })
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

        <div className="services__container--section--img bg-green-800 max-w-[90vw] w-full h-auto custom:h-[10px] -mt-2">
          <div ref={ref} className="services__container--section--images max-w-2xl grid grid-cols-3 justify-items-center p-8 gap-4 custom:hidden -mt-4">

            <motion.div
              animate={fade}
              transition={{ type: 'fade', duration: 0.25, delay: 0 }}
            >
              <LazyLoadImage
                className="h-[145px]"
                alt="Service 1"
                src={'https://images.unsplash.com/photo-1614308456595-a59d48697ea8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=200'}
              />
            </motion.div>

            <motion.div
              animate={fade}
              transition={{ type: 'fade', duration: 0.25, delay: 0.05 }}
            >
              <LazyLoadImage
                className="h-[175px]"
                alt="Service 2"
                src={'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWNnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=200&q=200'}
              />
            </motion.div>

            <motion.div
              animate={fade}
              transition={{ type: 'fade', duration: 0.25, delay: 0.1 }}
            >
              <LazyLoadImage
                className="h-[205px]"
                alt="Service 3"
                src={'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=200'}
              />
            </motion.div>

            <motion.div
              animate={fade}
              transition={{ type: 'fade', duration: 0.25, delay: 0.15 }}
            >
              <LazyLoadImage
                className="h-[205px] -mt-16"
                alt="Service 4"
                src={'https://images.unsplash.com/photo-1630531210843-d6f343ad1f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dWx0cmFzb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=200&q=200'}
              />
            </motion.div>

            <motion.div
              animate={fade}
              transition={{ type: 'fade', duration: 0.25, delay: 0.2 }}
            >
              <LazyLoadImage
                className="h-[175px] -mt-8"
                alt="Service 5"
                src={'https://images.unsplash.com/photo-1626736985932-c0df2ae07a2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=200'}
              />
            </motion.div>

            <motion.div
              animate={fade}
              transition={{ type: 'fade', duration: 0.25, delay: 0.25 }}
            >
              <LazyLoadImage
                className="h-[150px] -mt-[0.4rem]"
                alt="Service 6"
                src={'https://images.unsplash.com/photo-1605549188315-8aa899c3d35f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvdmlkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=200&q=200'}
              />
            </motion.div>

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
                <HandIcon />
                <h1 className="text-xl font-medium md:text-xl sm:text-3xl lg:text-2xl xl:text-2xl 2xl:text-2xl custom:text-lg">Laboratory Facility</h1>
              </motion.div>

              <motion.div animate={animationLeft} className="flex gap-5 mb-4">
                <HandIcon />
                <h1 animate={animationLeft} className="text-xl font-medium md:text-xl sm:text-3xl lg:text-2xl xl:text-2xl 2xl:text-2xl custom:text-lg">Medical Consultation</h1>
              </motion.div>

              <motion.div animate={animationLeft} className="flex gap-5 mb-4">
                <HandIcon />
                <h1 animate={animationLeft} className="text-xl font-medium md:text-xl sm:text-3xl lg:text-2xl xl:text-2xl 2xl:text-2xl custom:text-lg">Electrocardiogram</h1>
              </motion.div>

              <motion.div animate={animationLeft} className="flex gap-5 mb-4">
                <HandIcon />
                <h1 animate={animationLeft} className="text-xl font-medium md:text-xl sm:text-3xl lg:text-2xl xl:text-2xl 2xl:text-2xl custom:text-lg">Dental Services</h1>
              </motion.div>

              <motion.div animate={animationLeft} className="flex gap-5 mb-4">
                <HandIcon />
                <h1 animate={animationLeft} className="text-xl font-medium md:text-xl sm:text-3xl lg:text-2xl xl:text-2xl 2xl:text-2xl custom:text-lg">Pre Employment Medical Examination</h1>
              </motion.div>

              <motion.div animate={animationLeft} className="flex gap-5 mb-4">
                <HandIcon />
                <h1 animate={animationLeft} className="text-xl font-medium md:text-xl sm:text-3xl lg:text-2xl xl:text-2xl 2xl:text-2xl custom:text-lg">Seafarer's Medical Examination</h1>
              </motion.div>

              <motion.div animate={animationLeft} className="flex gap-5 mb-4">
                <HandIcon />
                <h1 animate={animationLeft} className="text-xl font-medium md:text-xl sm:text-3xl lg:text-2xl xl:text-2xl 2xl:text-2xl custom:text-lg">Ultrasound</h1>
              </motion.div>

              <motion.div animate={animationLeft} className="flex gap-4">
                <HandIcon />
                <div className="flex flex-col">
                  <h1 animate={animationLeft} className="text-xl font-medium md:text-xl sm:text-3xl lg:text-2xl xl:text-2xl 2xl:text-2xl custom:text-lg">RTPCR Testing</h1>
                  <a href="https://alliedmolecular.com/home/index" rel="noreferrer" target="_blank">
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
