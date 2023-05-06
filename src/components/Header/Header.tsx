const Header = () => {
  return (
    <>
      <div className="font-medium text-3xl mb-3">
        <div className="mb-1">Unbeatable Pricing</div>
        <div>Find Your Perfect Plan Now</div>
      </div>
      <div className="flex justify-between">
        <div className="text-gray-medium text-xs">
          Discover How Our Innovative Approach Can Save You Money and Boost Your
          Business Performance!
        </div>
        <div className="flex">
          <label
            htmlFor="toggleFour"
            className="flex cursor-pointer select-none items-center"
          >
            <div className="relative">
              <input type="checkbox" id="toggleFour" className="sr-only" />
              <div className="box bg-dark block h-8 w-14 rounded-full"></div>
              <div className="dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition"></div>
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

export default Header;
