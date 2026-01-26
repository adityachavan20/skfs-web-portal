import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a111f] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between gap-12 mb-10">
          {/* Brand Section */}
          <div className="flex-1 min-w-[250px] space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#10b981] p-2 rounded-lg">
                <i className="ri-sofa-line text-white text-2xl"></i>
              </div>
              <span className="text-[#10b981] font-semibold text-xl">
                Shree Krishna Furniture
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Crafting custom furniture for your dream home. Quality materials,
              affordable pricing, and expert craftsmanship.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex-1 min-w-[150px]">
            <h3 className="text-[#10b981] font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:underline transition">
                  Our Store
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition">
                  Media
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition">
                  Testimonial
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/admin"
                  className="inline-block px-4 py-1.5 border border-gray-500 rounded text-xs hover:bg-white hover:text-black transition"
                >
                  Admin Login
                </Link>
              </li>
            </ul>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-lg">
              <i className="ri-facebook-fill cursor-pointer hover:text-white"></i>
              <i className="ri-instagram-line cursor-pointer hover:text-white"></i>
              <i className="ri-twitter-x-fill cursor-pointer hover:text-white"></i>
            </div>
          </div>

          {/* Our Products Section - Now perfectly aligned vertically */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-[#10b981] font-semibold mb-6">Our Products</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:underline transition">
                  Bed Room
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition">
                  Living Room
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition">
                  Dining Room
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition">
                  Accent Furniture
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition">
                  Sofa
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition">
                  Outdoor
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition">
                  Antique Furniture
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition">
                  Home Decor
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition">
                  Chandeliers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          © 2026 Shree Krishna Furniture Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
