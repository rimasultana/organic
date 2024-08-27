import aboutImage from "../assets/images/about.jpg";
export default function Caragory() {
  return (
    <>
      <section className="bg-black w-full">
        <div className="w-11/12 mx-auto py-5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-5 py-6">
            <div className="w-[300px] bg-[#1e272e] flex items-center gap-5 p-5">
              <div className="text-3xl text-lime-400">
                <i className="fa-solid fa-car-side"></i>
              </div>
              <div className="flex items-center flex-col ">
                <h3 className="text-white font-semibold text-lg">
                  Free Shipping
                </h3>
                <p className="text-gray-400 ">Above $5 Only</p>
              </div>
            </div>
            <div className="w-[300px] bg-[#1e272e] flex items-center gap-5 p-5">
              <div className="text-3xl text-lime-400">
                <i className="fa-solid fa-certificate"></i>
              </div>
              <div className="flex items-center flex-col ">
                <h3 className="text-white font-semibold text-lg">
                  Certificate
                </h3>
                <p className="text-gray-400 ">100% Organic</p>
              </div>
            </div>
            <div className="w-[300px] bg-[#1e272e] flex items-center gap-5 p-5">
              <div className="text-3xl text-lime-400">
                <i className="fa-solid fa-piggy-bank"></i>{" "}
              </div>
              <div className="flex items-center flex-col ">
                <h3 className="text-white font-semibold text-lg">
                  Huge Savings
                </h3>
                <p className="text-gray-400 ">At lowest Prize</p>
              </div>
            </div>
            <div className="w-[300px] bg-[#1e272e] flex items-center gap-5 p-5">
              <div className="text-3xl text-lime-400">
                <i className="fa-solid fa-rotate-left"></i>
              </div>
              <div className="flex items-center flex-col ">
                <h3 className="text-white font-semibold text-lg">
                  Easy Returns
                </h3>
                <p className="text-gray-400 ">No Question Asked</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5 ">
          <div className="flex-1 pl-5 ">
            <h3 className="font-semibold text-lg pt-3">About Us</h3>
            <h2 className="lg:text-5xl text-3xl font-semibold mb-5">
              Tell Website Visitors Who You And Why They Should Choose Your
              Bassness
            </h2>
            <p className="text-gray-600 text-lg mb-8 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates maxime placeat nulla. Quos nulla veniam molestiae,
              officia reprehenderit dolore repellat maxime quod ullam natus sunt
              mollitia iste, cum veritatis tenetur?
            </p>
            <button className="btn bg-lime-600 px-8 font-bold text-white">Find Out More</button>
          </div>
          <div className="flex-1">
            <img className="" src={aboutImage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
