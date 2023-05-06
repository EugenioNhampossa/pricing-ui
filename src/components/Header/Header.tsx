const Header = () => {
  return (
    <>
      <div className="font-medium text-3xl mb-3">
        <div className="mb-1">Unbeatable Pricing</div>
        <div>Find Your Perfect Plan Now</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-gray-medium text-xs">
          Discover How Our Innovative Approach Can Save You Money and Boost Your
          Business Performance!
        </div>
        <div className="flex gap-3 items-center">
          <span>Billed Monthly</span>
          <div>
            <label className="relative flex-row items-center mb-4 cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-14 h-7 rounded-full peer bg-gray peer-checked:after:translate-x-7 after:absolute after:mx-1 after:top-[19px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all" />
            </label>
          </div>
          <div className="flex gap-1 items-center">
            <span>Billed Yearly</span>
            <span className="p-1 text-xs bg-light-green rounded-full">
              Save up to 20%
            </span>
          </div>
        </div>
      </div>
      <div className="border my-14 flex-1 border-gray-lighter" />
    </>
  );
};

export default Header;
