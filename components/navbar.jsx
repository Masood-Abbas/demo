import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-[95%] mx-auto flex justify-between items-center  py-4 ">
      <div className="flex items-center space-x-10">
        <div className="text-xl font-bold text-blue-800">Top Tier Travel</div>
        <div className="space-x-6 text-gray-700">
          <Link href="/hotels" className="hover:text-blue-600">
            Hotels
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
          <Link href="/support" className="hover:text-blue-600">
            Support
          </Link>
        </div>
      </div>
      <div className="space-x-4">
        <Link
          href="/signup"
          className="border border-blue-800 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-50"
        >
          Sign up
        </Link>
        <Link
          href="/login"
          className="bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-900"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
