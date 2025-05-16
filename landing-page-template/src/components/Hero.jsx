export default function Hero() {
    return (
      <section className="h-screen w-full">
        <div className="h-full flex flex-col md:flex-row">
          
          {/* Text Section */}
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 gap-4 md:ml-10">
            <span className="text-gray-600">Welcome to a <span className="text-green-700 font-bold text-lg">greener</span> tomorrow.</span>
            <h1 className="text-6xl font-bold tracking-tighter bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent leading-[4rem] lg:leading-[4.5rem]">
              For a planet that thrives, not just survives.
            </h1>
            <p className="leading-7 text-gray-700">
              From everyday tips to science-backed insights, we make it easy to understand how your choices impact the Earth. Whether you're just getting started or deep into sustainable living, we're here to guide, inspire, and remind you that progress beats perfection.
            </p>
            <div className="flex gap-6 mt-5">
                <button className="pt-3 pl-5 pr-5 pb-3 rounded-3xl bg-green-700 text-white text-sm transform transition duration-300 hover:scale-105">Discover Green</button>
                <button className="pt-3 pl-5 pr-5 pb-3 outline outline-green-700 rounded rounded-3xl text-green-700 text-sm transform transition duration-300 hover:scale-105">Browse Facts<i className="fa-solid fa-arrow-right ml-3"></i></button>
            </div>
          </div>
  
            {/* Image Section */}
            <div className="relative hidden md:block md:w-1/2 h-full">
                {/* White shadow/fog overlay at top */}
                <div className="absolute top-0 left-0 w-full h-1/4 z-10 pointer-events-none">
                    <div className="w-full h-full bg-gradient-to-b from-white/50 to-transparent"></div>
                </div>

                <img
                    src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Healthy planet"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
      </section>
    );
  }
  