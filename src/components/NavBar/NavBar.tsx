const NavBar = () => {
  return (
    <div className="flex flex-row justify-between items-center mb-16">
      <div className="flex flex-row items-center gap-4 font-semibold font-logo text-black text-xl">
        <div className="flex ">
          <div className="h-7 w-7 relative">
            <div className="p-3 bg-light-green z-10 absolute rounded-bl-2xl top-0 right-0"></div>
            <div className="p-3 border-solid border-black absolute border z-0 rounded-bl-2xl left-0 bottom-0"></div>
          </div>
        </div>
        <span>Pieceup</span>
      </div>
      <nav>
        <ul className="flex flex-row gap-14 text-gray-light text-sm">
          <li>Home</li>
          <li className="flex gap-2 items-center justify-center">
            <span>Product</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </li>
          <li>About</li>
          <li className="flex gap-2 items-center font-medium text-black">
            <div className="p-1 h-0 bg-light-green rounded-full"></div>
            <span>Pricing</span>
          </li>
        </ul>
      </nav>
      <div>
        <button className="border border-gray-lighter rounded-full px-4 py-2 text-xs">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavBar;
