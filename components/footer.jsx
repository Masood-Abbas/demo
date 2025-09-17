

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer=()=> {
  return (
    <footer className="bg-white">
      <div className="w-[95%] mx-auto px-3 py-8 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        
        {/* Explore */}
        <div>
          <h4 className="font-semibold mb-4 text-black">Explore</h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="#">Featured Hotels</Link></li>
            <li><Link href="#">Popular Destinations</Link></li>
            <li><Link href="#">Travel Guides</Link></li>
            <li><Link href="#">Special Offers</Link></li>
            <li><Link href="#">Blog</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-4 text-black">Support</h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">Help Center</Link></li>
            <li><Link href="#">FAQs</Link></li>
            <li><Link href="#">Booking Policies</Link></li>
            <li><Link href="#">Cancellation</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4 text-black">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Partners</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Downloads */}
        <div>
          <h4 className="font-semibold mb-4 text-black">Downloads</h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="#">iOS</Link></li>
            <li><Link href="#">Android</Link></li>
            <li><Link href="#">Mac</Link></li>
            <li><Link href="#">Windows</Link></li>
            <li><Link href="#">Chrome</Link></li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h4 className="font-semibold mb-4 text-black">Stay Connected</h4>
          <p className="text-gray-600 mb-4">
            Subscribe to get travel tips, exclusive deals, and the latest updates.
          </p>
          <form className="flex flex-col gap-2  ">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 flex-grow border text-black  text-sm rounded-2xl "
            />
            <button
              type="submit"
              className="bg-[#1D4ED8] md:w-[50%] text-white px-4 py-2 text-sm rounded-2xl font-medium "
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
        <p>© 2025 PHPtravels All rights reserved.</p>
        
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          {/* Language + Currency */}
          <div className="flex gap-4">
            <span>English ▼</span>
            <span>USD ▼</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-600">
            <Link href="#"><FaFacebookF className="hover:text-[#1D4ED8] cursor-pointer" /></Link>
            <Link href="#"><FaTwitter className="hover:text-[#1D4ED8] cursor-pointer" /></Link>
            <Link href="#"><FaInstagram className="hover:text-[#1D4ED8] cursor-pointer" /></Link>
            <Link href="#"><FaLinkedinIn className="hover:text-[#1D4ED8] cursor-pointer" /></Link>
            <Link href="#"><FaYoutube className="hover:text-[#1D4ED8] cursor-pointer" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default  Footer