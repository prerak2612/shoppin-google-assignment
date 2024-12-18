export default function Footer() {
  
  return (
    <footer className="bg-[#171717]  py-2  bottom-0 w-full fixed">
      <div className="px-8 py-3 bg-[#171717] border-b border-[#303335]">
        <p className="text-[#E8E8E8] text-[15px]">India</p>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex space-x-6 p-2">
            <div
              className="text-[15px] text-[#E8E8E8]  hover:underline"
              title="Learn about advertising"
            >
              Advertising
            </div>
            <div
              className="text-[15px] text-[#E8E8E8]  hover:underline"
              title="Explore business solutions"
            >
              Business
            </div>
            <div
              className="text-[15px] text-[#E8E8E8]  hover:underline"
              title="Understand how Google Search works"
            >
              How Search Works
            </div>
          </div>
          <div className="flex space-x-6 p-2">
            <div
              className="text-[15px] text-[#E8E8E8] hover:underline"
              title="Read our privacy policy"
            >
              Privacy
            </div>
            <div
              className="text-[15px] text-[#E8E8E8] hover:underline"
              title="Review our terms of service"
            >
              Terms
            </div>
            <div
              className="text-[15px] text-[#E8E8E8] hover:underline"
              title="Adjust your settings"
            >
              Settings
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
