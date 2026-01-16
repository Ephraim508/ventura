import React from 'react';
import ipoListdata from '../data/ipoListdata';
import { useNavigate } from "react-router-dom";

const IPOList = () => {
    const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-gray-50 shadow-lg rounded-xl overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 py-6 border-b border-gray-300">
        IPO Lists
      </h2>

      {/* Desktop Table */}
      <div className="hidden sm:block">
        {/* Table Header */}
        <div className="grid grid-cols-4 gap-4 px-6 py-4 text-sm font-medium text-gray-600 bg-gray-100 border-b border-gray-300"
        >
          <div>Company / Issue date</div>
          <div>Issue size</div>
          <div>Price range</div>
          <div>Min invest/qty</div>
        </div>

        {/* Table Rows */}
        {ipoListdata.map((ipo) => (
          <div
            key={ipo.id}
             onClick={() => navigate(`/ipo/${ipo.id}`)}
            className="grid grid-cols-4 gap-4 px-6 py-5 items-center border-b border-gray-200 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-md cursor-pointer"
          >
            {/* Company */}
            <div className="flex items-center gap-4">
              <img
                src={ipo.image}
                alt={ipo.name}
                className="w-12 h-12 rounded-full object-cover border border-gray-200"
              />
              <div>
                <p className="font-semibold text-gray-800">{ipo.name}</p>
                <p className="text-sm text-gray-500">{ipo.date}</p>
              </div>
            </div>

            {/* Issue Size */}
            <div className="font-semibold text-gray-800">{ipo.issueSize}</div>

            {/* Price Range */}
            <div className="font-semibold text-gray-800">{ipo.priceRange}</div>

            {/* Min Invest */}
            <div>
              <p className="font-semibold text-gray-800">{ipo.minInvest}</p>
              <p className="text-sm text-gray-500">{ipo.qty} Shares</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Cards */}
      <div className="sm:hidden mt-4 space-y-4">
        {ipoListdata.map((ipo) => (
          <div
            key={ipo.id}
            className="bg-white rounded-lg shadow-sm p-4 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex items-center gap-4 mb-2">
              <img
                src={ipo.image}
                alt={ipo.name}
                className="w-12 h-12 rounded-full object-cover border border-gray-200"
              />
              <div>
                <p className="font-semibold text-gray-800">{ipo.name}</p>
                <p className="text-sm text-gray-500">{ipo.date}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <div>
                <p className="font-semibold">Issue Size</p>
                <p>{ipo.issueSize}</p>
              </div>
              <div>
                <p className="font-semibold">Price Range</p>
                <p>{ipo.priceRange}</p>
              </div>
              <div>
                <p className="font-semibold">Min Invest</p>
                <p>{ipo.minInvest}</p>
              </div>
              <div>
                <p className="font-semibold">Qty</p>
                <p>{ipo.qty} Shares</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IPOList;
