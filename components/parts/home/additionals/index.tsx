import { AdditionalInterface } from "lib/models/additionals";
import AdditionalCard from "./additionalCard";

interface Props {
  data: AdditionalInterface[];
}

export default function Additionals({ data }: Props) {
  return (
    <section id="additionals">
      <div className="bg-white">
        <div className="container px-5 md:px-8 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h3 className="sm:text-4xl text-3xl font-semibold mb-4 text-gray-900">
            Additional Services
            </h3>
            <p className="lg:w-2/3 xl:w-1/2 mx-auto leading-relaxed text-base text-gray-500">
            You can immortalize holiday moments with satisfying results with the additional services we provide
            </p>
          </div>

          <div className="mt-6 space-y-3 xl:mt-12">
            {data.map((additional, index) => (
              <AdditionalCard key={index.toString()} data={additional} />
            ))}
          </div>

          <div className="flex max-w-2xl mt-8 mx-auto text-[10px] text-slate-400 space-x-1">
            <span>*</span>
            <span>
            Price increase of 500k when there is Destination Enam Langit, Gereja Ayam, or Puthuk Setumbu
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
