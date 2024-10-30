import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";

function Footer() {
  return (
    <footer className={`container mx-auto px-10 py-10`}>
      <div className="flex justify-between">
        <div className={``}>
          <h3 className={`text-[24px] font-bold`}>Explore</h3>
          <p className={`text-[#737373] mt-2 text-[16px]`}>
            About FYTOBYTE LIMITED
          </p>
          <p className={`text-[#737373] mt-2 text-[16px]`}>Our Solution</p>
          <p className={`text-[#737373] mt-2 text-[16px]`}>Our Blog</p>
        </div>
        <div className={``}>
          <h3 className={`text-[24px] font-bold`}>Expertise</h3>
          <p className={`text-[#737373] mt-2 text-[16px]`}>
            Cloud Integration Solutions
          </p>
          <p className={`text-[#737373] mt-2 text-[16px]`}>
            Custom Web Development
          </p>
          <p className={`text-[#737373] mt-2 text-[16px]`}>
            Data Analytics and Insights
          </p>
        </div>
        <div className={``}>
          <h3 className={`text-[24px] font-bold`}>Services</h3>
          <p className={`text-[#737373] mt-2 text-[16px]`}>
            Cybersecurity & Compliance
          </p>
          <p className={`text-[#737373] mt-2 text-[16px]`}>
            AI-Powered Automation
          </p>
          <p className={`text-[#737373] mt-2 text-[16px]`}>
            User Experience Design
          </p>
        </div>

        <div className={``}>
          <h3 className={`text-[24px] font-bold`}>Info</h3>
          <p className={`text-[#737373] mt-2 text-[16px]`}>FAQ</p>
          <p className={`text-[#737373] mt-2 text-[16px]`}>Documentation</p>
          <p className={`text-[#737373] mt-2 text-[16px]`}>Get in touch</p>
        </div>
      </div>
      <div className={`mx-auto mt-6 w-fit`}>
        <img src="/logo-footer.png" alt="" className="block w-[182px]" />
        <div className="flex justify-between items-center my-6">
          <TiSocialFacebook className={`w-[27px]`} />{" "}
          <FaTwitter className={`w-[27px]`} />{" "}
          <FaLinkedin className={`w-[27px]`} />{" "}
          <BsDiscord className={`w-[27px]`} />
        </div>
      </div>
      <p className={`text-center`}>© 2023 Fytobyte. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
