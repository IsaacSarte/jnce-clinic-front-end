import React, { useEffect } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';

// Framer Motion
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

// SVG
import mission from '../assets/svg/mission.svg';
import vision from '../assets/svg/vision.svg';

const About = () => {

    const { ref, inView } = useInView({
        threshold: 0.25
    });

    const animationLeft = useAnimation();
    const animationRight = useAnimation();
    const fade = useAnimation();

    useEffect(() => {
        if (inView) {
            fade.start({
                opacity: 1
            });
            animationLeft.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            });
            animationRight.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            });
        }

        if (!inView) {
            fade.start({
                opacity: 0
            });
            animationLeft.start({
                x: '-100px',
            });
            animationRight.start({
                x: '100px'
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    return (
        <div className="about__container" id="about">
            <div className="about__container--section h-auto p-4 flex flex-col items-center justify-center">
                <div className="about__container--header w-11/12">
                    <h2 className="text-5xl font-bold lg:text-5xl md:text-5xl sm:text-4xl custom:text-2xl">
                        We Are
                        <br />
                        <span className="text-green-800">JNCE MEDICAL & </span>
                        <br />
                        <span className="text-green-800">DIAGNOSTIC CLINIC</span>
                    </h2>
                </div><br /><br />
                <div className="about__container--body overflow-hidden w-11/12 flex flex-col justify-center lg:block md:hidden sm:hidden custom:hidden">
                    <div className="about__container--quality--policy">
                        <h1 className="text-3xl text-center font-bold">QUALITY POLICY</h1>
                    </div><br />
                    <div>
                        <p className="text-2xl indent-8">JNCE Medical and Diagnostic Clinic shall strive to satisfy our clients by providing them quality medical service at reasonable cost. We shall continually strive to maintaiin excellence by maintaining a high qualified, efficient and competent medical staffs.</p>
                    </div><br />
                    <div className="about__container--quality--objective">
                        <h1 className="text-3xl text-center font-bold">QUALITY OBJECTIVES</h1>
                    </div><br />
                    <div>
                        <p className="text-2xl indent-8">To satisfy clients thru prompt delivery of medical services. To delivery PEME results within 24 hours after completion of required PEME package. To comply 100% to legal regulatory requirement for medical clinics. To control repartriation rate not to exceed 0.1% annually.</p>
                    </div><br /><br />


                    <div className="about__container--mission grid grid-cols-2 place-items-center">
                        <div ref={ref} className="about__mission">
                            <motion.h1 animate={animationLeft} className="text-4xl text-center font-bold">Mission</motion.h1>
                            <motion.p animate={fade} className="text-xl indent-8 mt-4 text-center italic leading-10">"To render quality medical service to satisfy our client's needs.<br /> To maintain excellence and professionalism in the delivery of medical service<br /> in accordance with the national and international standards."</motion.p>
                        </div>
                        <div className="about_mission--img">
                            <LazyLoadImage
                                alt="mission svg"
                                src={mission}
                            />
                        </div><br />
                    </div>
                    <div className="about__container--vision grid grid-cols-2 place-items-center">
                        <div className="about_vision--img">
                            <img src={vision} alt="vision svg" />
                        </div>
                        <div ref={ref} className="about__vision">
                            <motion.h1 animate={animationRight} className="text-4xl text-center font-bold">Vision</motion.h1>
                            <motion.p animate={fade} className="text-xl indent-8 mt-4 text-center italic leading-10">"JNCE Medical and Diagnostic Clinic envisions<br /> to become a high-standard provider of pre-employment<br /> medical services for local and overseas workers."</motion.p>
                        </div>
                    </div>
                </div> <br />
                <Accordion allowZeroExpanded className="w-full lg:hidden md:block sm:block custom:block">
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                QUALITY POLICY
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className="indent-8">JNCE Medical and Diagnostic Clinic shall strive to satisfy our clients by providing them quality medical service at reasonable cost. We shall continually strive to maintaiin excellence by maintaining a high qualified, efficient and competent medical staffs.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                QUALITY OBJECTIVES
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className="indent-8">To satisfy clients thru prompt delivery of medical services. To delivery PEME results within 24 hours after completion of required PEME package. To comply 100% to legal regulatory requirement for medical clinics. To control repartriation rate not to exceed 0.1% annually.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                MISSION
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <LazyLoadImage
                                alt="mission svg"
                                src={mission}
                            />
                            <p className="indent-8">To render quality medical service to satisfy our client's needs. To maintain excellence and professionalism in the delivery of medical service in accordance with the national and international standards.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                VISION
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <img src={vision} alt="vision svg" />
                            <p className="indent-8">JNCE Medical and Diagnostic Clinic envisions to become a high-standard provider of pre-employment medical services for local and overseas workers.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>

            </div>
        </div>
    )
}

export default About
