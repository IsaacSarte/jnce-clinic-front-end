import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// icons
import { CallIcon } from '../subComponents/AllSvg.jsx';
import { FacebookIcon } from '../subComponents/AllSvg.jsx';
import { YoutubeIcon } from '../subComponents/AllSvg.jsx';
import { MailIcon } from '../subComponents/AllSvg.jsx';

// Images
import jnce_logo from '../assets/images/jnce-logo.png';

const Footer = () => {
  return (
    <>
      <div className="footer__container h-auto">
        <div className="footer__header h-auto px-4 py-8 bg-green-700 flex justify-center">
          <div className="footer_header--detail w-3/5 flex justify-between lg:flex md:flex sm:flex-col sm:gap-4 sm:justify-center sm:items-center custom:gap-4 custom:flex-col custom:justify-center custom:items-center">
            <div className="footer__detail--assist text-white text-xs font-bold flex flex-col sm:order-2 sm:text-[.7rem] custom:order-1 custom:text-[.7rem]">
              <span>
                Need a Help for Check-up? Call for an Emergency
              </span>
              <span>
                Laboratory Services
              </span>

            </div>
            <div className="footer__detail--contact text-white text-xs font-bold flex gap-4 sm:order-1 custom:order-2">
              <div className="flex flex-col">
                <div className="text-[.7rem]">
                  <span>jnceclinic@yahoo.com</span>
                </div>
                <div>
                  <span>Tel. No. (63)2 8-5185156 (63)2 5-3105256</span>
                </div>
              </div>
              <div className="pt-2">
                <CallIcon className="h-10 w-10" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer__body h-auto px-8 py-12 bg-[#f6f6f9] text-slate-500 font-semibold flex justify-center">
          <div className="footer__body--container w-10/12 grid grid-cols-4 place-items-center text-sm">
            <div className="jnce flex flex-col gap-2">
              <div>
                <LazyLoadImage
                  className="h-10 w-auto sm:h-12"
                  alt="JNCE Logo"
                  src={jnce_logo}
                />
              </div>
              <div>
                <span>
                  We care about your families.
                </span>
              </div>
              <div className="flex gap-4">
                <div><a href="#"><span><FacebookIcon className="h-7 w-7" aria-hidden="true" /></span></a></div>
                <div><a href="#"><span><YoutubeIcon className="h-7 w-7" aria-hidden="true" /></span></a></div>
                <div><a href="#"><span><MailIcon className="h-7 w-7" aria-hidden="true" /></span></a></div>
              </div>
              <div><span>&nbsp;</span></div>
            </div>
            <div className="company flex flex-col gap-2">
              <div><span>COMPANY</span></div>
              <div><a href="#about">About</a></div>
              <div><a href="#services">Services</a></div>
              <div><a href="#">Blog</a></div>
              <div><span>&nbsp;</span></div>
            </div>
            <div className="product flex flex-col gap-2">
              <div><span>CONTACTS</span></div>
              <div><a href="#">Pricing</a></div>
              <div><a href="#">Features</a></div>
              <div><a href="#">Templates</a></div>
              <div><span>&nbsp;</span></div>
            </div>
            <div className="resources flex flex-col gap-2">
              <div><span>RESOURCES</span></div>
              <div><a href="#">Testimonials</a></div>
              <div><a href="#">Support</a></div>
              <div><a href="#">Terms</a></div>
              <div><a href="#">Privacy</a></div>
            </div>
          </div>
        </div>
        <div className="footer__copyright h-auto px-8 py-12 bg-[#f6f6f9] text-slate-500 font-semibold flex flex-col items-center justify-center
        custom:text-[.7rem]">
          <div className="footer__copyright--detail"><span>Copyright &copy; 2010 JNCE Medical and Diagnostic Clinic. All Rights Reserved</span></div>
          <div className="footer__copyright--creator"><span>Isaac Sarte | Argie Barcena</span></div>
        </div>
      </div>
    </>
  )
}

export default Footer;
