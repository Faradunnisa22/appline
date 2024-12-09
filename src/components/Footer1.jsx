import { Footer } from "flowbite-react";
import image from '../assets/image.png'
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer1= () =>{
  return (
    <Footer container>
      <div className="w-full md:mx-52 md:mt-0 -mt-96">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src={image}
              alt="Flowbite Logo"/>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Home" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Product</Footer.Link>
                <Footer.Link href="#">Pricing</Footer.Link>
                <Footer.Link href="#">Careers</Footer.Link>
                <Footer.Link href="#">Diversity</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="About Us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Company</Footer.Link>
                <Footer.Link href="#">Leadership</Footer.Link>
                <Footer.Link href="#">Careers</Footer.Link>
                <Footer.Link href="#">Diversity</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Resources" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Andy Guide</Footer.Link>
                <Footer.Link href="#">Forum</Footer.Link>
                <Footer.Link href="#">Support</Footer.Link>
                <Footer.Link href="#">App Directory</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Tutorial" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">10 Leadership Styles</Footer.Link>
                <Footer.Link href="#">Executive Summary Tips</Footer.Link>
                <Footer.Link href="#">Prevent Team Burnout</Footer.Link>
                <Footer.Link href="#">What are OKRs?</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center  sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  )}
export default Footer1
