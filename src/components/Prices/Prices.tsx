import PriceCard from "../PriceCard/PriceCard";

const priceInfo = [
  {
    title: "Starter",
    price: "4.99",
    description: "For an individual and beginner",
    btText: "Buy Plan",
    button: (
      <button className="w-full border border-gray-lighter font-medium rounded-full px-4 py-3 text-sm">
        <span>Buy Plan</span>
      </button>
    ),
    points: [
      "10 sites hosting",
      "200 cms items",
      "200 cms items",
      "500 form submissions",
      "Learning resources and help",
    ],
  },
  {
    title: "Starter",
    price: "9.99",
    description: "For a professional",
    btText: "Buy Plan",
    popular: true,
    button: (
      <button className="w-full bg-black text-white font-medium rounded-full px-4 py-3 text-sm">
        <span>Buy Plan</span>
      </button>
    ),
    points: [
      "10 sites hosting",
      "200 cms items",
      "200 cms items",
      "500 form submissions",
      "Learning resources and help",
      "10 sites hosting",
      "200 cms items",
      "200 cms items",
    ],
  },
  {
    title: "Starter",
    price: "19.99",
    description: "For a premium user and expert",
    btText: "Buy Plan",
    button: (
      <button className="w-full bg-black text-white font-medium rounded-full px-4 py-3 text-sm">
        <span>Buy Plan</span>
      </button>
    ),
    points: [
      "10 sites hosting",
      "200 cms items",
      "200 cms items",
      "500 form submissions",
      "Learning resources and help",
      "10 sites hosting",
      "200 cms items",
      "200 cms items",
      "10 sites hosting",
      "200 cms items",
    ],
  },
];

const points = [
  "10 sites hosting",
  "200 cms items",
  "200 cms items",
  "500 form submissions",
  "Learning resources and help",
];

const Prices = () => {
  return (
    <>
      <div className="flex justify-between">
        {priceInfo.map((priceInfo, index) => (
          <PriceCard
            key={"price" + index}
            title={priceInfo.title}
            price={priceInfo.price}
            description={priceInfo.description}
            points={priceInfo.points}
            popular={priceInfo.popular}
            button={priceInfo.button}
          />
        ))}
        <div>
          <div className="flex flex-row gap-3 items-end font-medium text-gray-dark mb-3">
            <div className="p-[7px] h-0 bg-light-green rounded-full mb-2" />
            <div className="flex gap-5 items-end">
              <span className="font-medium text-xl">Enterprises</span>
            </div>
          </div>
          <div className="text-gray-dark mb-4">
            <span className="text-3xl font-medium">Contact us</span>
          </div>
          <div className="text-gray mb-4">For enterprises and companies</div>
          <div className="mb-4">
            <button className="w-full bg-light-green font-medium rounded-full px-4 py-3 text-sm text-gray">
              <span>Contact us</span>
            </button>
          </div>
          <div>
            {points.map((point, index) => (
              <div
                className="text-gray text-sm flex gap-4 items-center"
                key={"point-" + index}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-3 h-3 text-gray-lighter"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border my-14 flex-1 border-gray-lighter" />
    </>
  );
};

export default Prices;
