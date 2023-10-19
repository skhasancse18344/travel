export default function About() {
  return (
    <section id="about" className="bg-whiteBone pb-6 lg:pb-10">
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container lg:px-8 lg:py-16 md:py-12 md:px-12 py-9 px-4 mx-1 sm:px-12">
          <div className="lg:flex md:mt-12 mt-8 items-center">
            <div className="flex lg:w-1/2 lg:ml-4 lg:mb-0 mb-10 flex-col justify-center order-last">
              <h3 className="text-lime-500 text-sm font-medium mb-2">
                About Us
              </h3>
              <h1 className="text-slate-800 font-semibold text-3xl mb-5 lg:mb-6">
              VW Borobudur Tourism
              </h1>
              <p className="text-slate-500 text-sm text-justify">
              VW tourism is carried out by riding in a classic car or often called Pak Camats car in 1970 with an open roof sensation. This VW tourist attraction is located in Borobudur, Magelang Regency. This location is not far from Jogja. After traveling to Borobudur Temple you can enjoy nature, culture and art at Borobudur. VW safari tour Borobudur is the solution for you to travel to Borobudur. VW Borobudur provides a variety of interesting tour package options such as exploring villages, visiting destinations, and exploring tourism in Borobudur. VW Borobudur serves you with private tours, gatherings and office meetings. Apart from that, we provide comfortable, nice and affordable accommodation.
              </p>
            </div>

            <div className="flex lg:w-1/2 xl:px-10 lg:px-5">
              <iframe
                height="auto"
                src="https://www.youtube.com/embed/9QVIEaWf6vM?controls=0&showinfo=0&modestbranding=0"
                title="About Us Video"
                allowFullScreen
                className="w-full md:mx-20 lg:mx-0 sm:block mx-auto aspect-video shadow-xl shadow-slate-300 rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
