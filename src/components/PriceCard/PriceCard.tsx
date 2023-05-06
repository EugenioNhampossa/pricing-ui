import { ReactNode } from "react";

type props = {
  title: string;
  price: string;
  popular?: boolean;
  description: string;
  points: string[];
  button: ReactNode
};

const PriceCard = ({ title, price, popular, description, points,button }: props) => {
  return (
    <>
      <div>
        <div className="flex relative flex-row gap-3 items-end font-medium text-gray-dark mb-3">
          <div className="p-[7px] h-0 bg-light-green rounded-full mb-2" />
          <div className="flex gap-5 items-end">
            <span className="font-medium text-xl">{title}</span>
            {popular && (
              <div className="font-medium p-3 text-[10px] bg-light-green rounded-full absolute right-0">
                <div>Most</div>
                <div>popular</div>
              </div>
            )}
          </div>
        </div>
        <div className="text-gray-dark mb-4">
          $<span className="text-3xl font-medium p-1">{price}</span>/mth
        </div>
        <div className="text-gray mb-4">{description}</div>
        <div className="mb-4">
          {button}
        </div>
        <div>
          {points.map((point, index) => (
            <div
              className="flex gap-4 items-center text-gray text-sm"
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
    </>
  );
};

export default PriceCard;
