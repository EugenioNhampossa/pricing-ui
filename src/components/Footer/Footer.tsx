const Footer = () => {
  return (
    <div className="flex justify-between px-10 py-14 bg-[#f3f3f3] rounded-md mb-5 relative">
      <div>
        <div className="text-3xl font-medium">Have more questions?</div>
        <div className="text-sx font-medium text-gray-medium">
          Get the Best Coupons with AI:
        </div>
        <div className="text-sx font-medium text-gray-medium">
          Shop More, Spend Less
        </div>
      </div>
      <div className="absolute right-9 bottom-9">
        <button className="bg-light-green font-medium rounded-full px-4 py-3 text-sm text-gray">
          <span>Contact sales team</span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
