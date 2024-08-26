import logo from "../assets/images/logo.svg";
import leafImage from "../assets/images/leaf01.png";
import bgImage from "../assets/images/bannerbg.png";
export default function Header() {
  return (
    <header>
      <nav className="w-11/12 mx-auto py-5">
        <div className="navbar">
          <div className="navbar-start">
            <a href="#">
              <img className="w-3/4" src={logo} alt="Logos" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-medium">
              <li>
                <a className="hover:text-lime-600 text-lg" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-lime-600 text-lg" href="#">
                  Everything
                </a>
              </li>
              <li>
                <a className="hover:text-lime-600 text-lg" href="#">
                  Grocers
                </a>
              </li>
              <li>
                <a className="hover:text-lime-600 text-lg" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-lime-600 text-lg" href="#">
                  Contract
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex items-center gap-5 text-lg hidden lg:flex">
              <button className="flex items-center gap-2 font-bold text-lime-700">
                <span>$20.00</span>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
              <button>
                <i className="fa-solid fa-user"></i>
              </button>
            </div>
            <div className="dropdown">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <i className="fa-solid fa-bars p-3 bg-lime-500 rounded-lg border-gray-200 border-2"></i>
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0 gap-3"
              >
                <li>
                  <a className="hover:text-lime-600 text-lg" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-lime-600 text-lg" href="#">
                    Everything
                  </a>
                </li>
                <li>
                  <a className="hover:text-lime-600 text-lg" href="#">
                    Grocers
                  </a>
                </li>
                <li>
                  <a className="hover:text-lime-600 text-lg" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-lime-600 text-lg" href="#">
                    Contract
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <section
        style={{ backgroundImage: `url(${leafImage})` }}
        className="bg-no-repeat bg-right-bottom"
      >
        <div className="w-full h-full bg-white bg-opacity-90">
          <div className="w-9/12 mx-auto py-28 flex items-center sm:flex-row flex-col gap-5">
            <div className="flex-1">
              <img src={bgImage} alt="Banner Background" />
            </div>
            <div className="flex-1 sm:text-left text-center">
              <h3 className="text-xl font-bold">Best Quality Product</h3>
              <h1 className="lg:text-6xl text-4xl font-bold leading-tight">
                Join The Organic Movement
              </h1>
              <p className="my-5 text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi unde, nam eligendi laboriosam ducimus ipsum.
              </p>
              <div className="flex sm:justify-start justify-center pb-10 ">
                <button className="rounded-md bg-lime-600 text-white px-10 py-5 text-lg">
                  <i className="fa-solid fa-cart-shopping"></i> Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>

  );
}
