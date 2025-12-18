const IPOTimeline = ({ timeline }) => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-6">IPO Timeline</h3>

      {/* Mobile: Vertical | Desktop: Horizontal */}
      <div className="flex flex-col sm:flex-row sm:justify-between relative">
        
        {/* Vertical line for mobile */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 sm:hidden"></div>

        {timeline.map((step, index) => (
          <div
            key={index}
            className="flex sm:flex-col items-start sm:items-center gap-4 sm:gap-2 mb-6 sm:mb-0 relative"
          >
            {/* Horizontal line for desktop */}
            {index !== timeline.length - 1 && (
              <div className="hidden sm:block absolute top-4 left-1/2 w-full h-0.5 bg-gray-300"></div>
            )}

            {/* Circle */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center z-10
              ${step.done ? "bg-green-500" : "bg-gray-300"}`}
            >
              {step.done && (
                <span className="text-white text-sm font-bold">✓</span>
              )}
            </div>

            {/* Text */}
            <div className="sm:text-center">
              <p className="text-sm font-medium text-gray-800">
                {step.title}
              </p>
              <p className="text-xs text-gray-500">{step.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IPOTimeline;
