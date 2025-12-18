import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


const downloadPDF = (ipo) => {
  const doc = new jsPDF();

  // Title
  doc.setFontSize(18);
  doc.text(ipo.name, 14, 20);

  doc.setFontSize(12);
  doc.text(ipo.company, 14, 28);

  // IPO Details Table
  autoTable(doc, {
    startY: 35,
    head: [["Field", "Value"]],
    body: [
      ["Issue Size", ipo.issueSize],
      ["Price Range", ipo.priceRange],
      ["Minimum Investment", ipo.minInvest],
      ["Lot Size", `${ipo.qty} shares`],
      ["Issue Dates", ipo.issueDates],
      ["Listing Date", ipo.listingDate],
      ["Listed Price", ipo.listedPrice],
      ["Listing Gains", ipo.gains]
    ]
  });

  // About Section
  doc.text("About the Company", 14, doc.lastAutoTable.finalY + 10);
  doc.setFontSize(11);
  doc.text(
    ipo.about,
    14,
    doc.lastAutoTable.finalY + 18,
    { maxWidth: 180 }
  );

  // Save PDF
  doc.save(`${ipo.name.replace(/\s+/g, "_")}.pdf`);
};

export default downloadPDF