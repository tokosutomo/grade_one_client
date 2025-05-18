import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 mt-10 border-t-1">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <span className="text-3xl monofont font-bold">gradeone.id</span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Pages
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/testimoni" className="hover:underline">
                    Testimoni
                  </Link>
                </li>
                <li>
                  <Link to="/order" className="hover:underline">
                    Keranjang
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Sosial Media
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/gradeone.id"
                    className="hover:underline "
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline " target="_blank">
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@gradeone.id"
                    className="hover:underline "
                    target="_blank"
                  >
                    Tiktok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Grade One
            </a>
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0"></div>
        </div>
      </div>
    </footer>
  );
}
