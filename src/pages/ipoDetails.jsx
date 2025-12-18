import { useParams, useNavigate } from "react-router-dom";
import ipoListDetailsData from "../data/ipoListDetailsData";
import IPOTimeline from "./ipoTimeLine";
import downloadPDF from "../downloadPDF";

import { Download } from "lucide-react";

const timelineData = [
  { title: "Bidding Starts", date: "12 Sep 2025", done: true },
  { title: "Bidding Ends", date: "15 Sep 2025", done: true },
  { title: "Allotment Finalization", date: "18 Sep 2025", done: true },
  { title: "Refund Initiation", date: "19 Sep 2025", done: true },
  { title: "Demat Transfer", date: "20 Sep 2025", done: true },
  { title: "Listing Date", date: "21 Sep 2025", done: true },
];

const IPODetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const ipo = ipoListDetailsData.find((item) => item.id === Number(id));

  if (!ipo) return <p className="text-center mt-10">IPO not found</p>;

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center gap-4 border-b pb-4">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-gray-800"
        >
          ←
        </button>
        <img
          src={ipo.image}
          alt={ipo.name}
          className="w-14 h-14 rounded-full"
        />
        <div>
          <h2 className="text-xl font-bold">{ipo.name}</h2>
          <p className="text-gray-500">{ipo.company}</p>
        </div>
        <div className="ml-auto flex gap-3">
          <button
            onClick={() => downloadPDF(ipo)}
            className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            <Download size={18} className="text-gray-700 sm:size-8" />

          </button>
        </div>
      </div>

      {/* IPO Details */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-6 bg-gray-50 p-4 rounded-lg">
        <Detail label="Issue Size" value={ipo.issueSize} />
        <Detail label="Price Range" value={ipo.priceRange} />
        <Detail label="Minimum Amount" value={ipo.minInvest} />
        <Detail label="Lot Size" value={`${ipo.qty} shares`} />
        <Detail label="Issue Dates" value={ipo.issueDates} />
        <Detail label="Listing Date" value={ipo.listingDate} />
        <Detail label="Listed Price" value={ipo.listedPrice} />
        <Detail label="Listing Gains" value={ipo.gains} />
      </div>

      {/* Timeline */}
      <div className="mt-8 overflow-x-auto">
        <IPOTimeline timeline={timelineData} />
      </div>

      {/* About */}
      <div className="mt-8">
        <h3 className="font-semibold mb-2">About the Company</h3>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          {ipo.about}
        </p>
      </div>
    </div>
  );
};

const Detail = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-500">{label}</p>
    <p className="font-semibold text-gray-800">{value}</p>
  </div>
);

const Step = ({ title, date }) => (
  <div className="text-center">
    <div className="w-8 h-8 mx-auto rounded-full bg-green-500 mb-1"></div>
    <p className="font-medium">{title}</p>
    <p className="text-xs">{date}</p>
  </div>
);

export default IPODetails;
