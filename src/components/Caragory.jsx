import aboutImage from "../assets/images/about.jpg";
import tomatoImage from "../assets/images/call.jpg";
import Product1 from "../assets/images/product01.jpg";

export default function Caragory() {
  return (
    <>
      <section className="bg-black w-full">
        <div className="w-11/12 mx-auto py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-5 py-6">
            {/* Repeating sections removed for brevity */}
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5">
          <div className="flex-1 pl-5">
            <h3 className="font-semibold text-lg pt-3">About Us</h3>
            <h2 className="lg:text-5xl text-3xl font-semibold mb-5">
              Tell Website Visitors Who You Are And Why They Should Choose Your
              Business
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates maxime placeat nulla. Quos nulla veniam molestiae,
              officia reprehenderit dolore repellat maxime quod ullam natus sunt
              mollitia iste, cum veritatis tenetur?
            </p>
            <button className="btn bg-lime-600 px-8 font-bold text-white">
              Find Out More
            </button>
          </div>
          <div className="flex-1">
            <img src={aboutImage} alt="About Us" />
          </div>
        </div>
      </section>

      <section
        style={{ backgroundImage: `url(${tomatoImage})` }}
        className="bg-no-repeat bg-cover bg-center"
      >
        <div className="w-3/6 mx-auto py-40 text-center text-white space-y-5">
          <h2 className="text-5xl font-bold">Insert A Call To Action</h2>
          <p className="text-lg">
            Think of what you want visitors to do next. Maybe they should
            contact you?
          </p>
          <button className="border-[1px] border-white p-4">
            Get in Touch
          </button>
        </div>
      </section>

      <section className="bg-[#f7f1e3] ">
        <h1 className="lg:text-5xl text-3xl font-bold py-10 text-center">
          Best Selling product
        </h1>
        <div className="w-11/12 mx-auto py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="space-y-1 py-8 px-8 bg-white w-auto rounded-lg">
              <img className=" rounded-lg" src={Product1} alt="" />
              <p className="text-gray-500 text-center">Groceries</p>
              <h2 className="text-center text-xl font-bold">Assorted Coffee</h2>
              <h4 className="text-center font-semibold">$35.00</h4>
              <div className="text-center">
                <button className="btn bg-lime-500">
                  Buy Now <i className="fa-solid fa-cart-shopping "></i>
                </button>
              </div>
            </div>
            <div className="space-y-1 py-8 px-8 bg-white w-auto rounded-lg">
              <img className=" rounded-lg" src={Product1} alt="" />
              <p className="text-gray-500 text-center">Groceries</p>
              <h2 className="text-center text-xl font-bold">Assorted Coffee</h2>
              <h4 className="text-center font-semibold">$35.00</h4>
              <div className="text-center">
                <button className="btn bg-lime-500">
                  Buy Now <i className="fa-solid fa-cart-shopping "></i>
                </button>
              </div>
            </div>
            <div className="space-y-1 py-8 px-8 bg-white w-auto rounded-lg">
              <img className=" rounded-lg" src={Product1} alt="" />
              <p className="text-gray-500 text-center">Groceries</p>
              <h2 className="text-center text-xl font-bold">Assorted Coffee</h2>
              <h4 className="text-center font-semibold">$35.00</h4>
              <div className="text-center">
                <button className="btn bg-lime-500">
                  Buy Now <i className="fa-solid fa-cart-shopping "></i>
                </button>
              </div>
            </div>
            <div className="space-y-1 py-8 px-8 bg-white w-auto rounded-lg">
              <img className=" rounded-lg" src={Product1} alt="" />
              <p className="text-gray-500 text-center">Groceries</p>
              <h2 className="text-center text-xl font-bold">Assorted Coffee</h2>
              <h4 className="text-center font-semibold">$35.00</h4>
              <div className="text-center">
                <button className="btn bg-lime-500">
                  Buy Now <i className="fa-solid fa-cart-shopping "></i>
                </button>
              </div>
            </div>
            <div className="space-y-1 py-8 px-8 bg-white w-auto rounded-lg">
              <img className=" rounded-lg" src={Product1} alt="" />
              <p className="text-gray-500 text-center">Groceries</p>
              <h2 className="text-center text-xl font-bold">Assorted Coffee</h2>
              <h4 className="text-center font-semibold">$35.00</h4>
              <div className="text-center">
                <button className="btn bg-lime-500">
                  Buy Now <i className="fa-solid fa-cart-shopping "></i>
                </button>
              </div>
            </div>
            <div className="space-y-1 py-8 px-8 bg-white w-auto rounded-lg">
              <img className=" rounded-lg" src={Product1} alt="" />
              <p className="text-gray-500 text-center">Groceries</p>
              <h2 className="text-center text-xl font-bold">Assorted Coffee</h2>
              <h4 className="text-center font-semibold">$35.00</h4>
              <div className="text-center">
                <button className="btn bg-lime-500">
                  Buy Now <i className="fa-solid fa-cart-shopping "></i>
                </button>
              </div>
            </div>
            <div className="space-y-1 py-8 px-8 bg-white w-auto rounded-lg">
              <img className=" rounded-lg" src={Product1} alt="" />
              <p className="text-gray-500 text-center">Groceries</p>
              <h2 className="text-center text-xl font-bold">Assorted Coffee</h2>
              <h4 className="text-center font-semibold">$35.00</h4>
              <div className="text-center">
                <button className="btn bg-lime-500">
                  Buy Now <i className="fa-solid fa-cart-shopping "></i>
                </button>
              </div>
            </div>
            <div className="space-y-1 py-8 px-8 bg-white w-auto rounded-lg">
              <img className="rounded-lg" src={Product1} alt="" />
              <p className="text-gray-500 text-center">Groceries</p>
              <h2 className="text-center text-xl font-bold">Assorted Coffee</h2>
              <h4 className="text-center font-semibold">$35.00</h4>
              <div className="text-center">
                <button className="btn bg-lime-500">
                  Buy Now <i className="fa-solid fa-cart-shopping "></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
