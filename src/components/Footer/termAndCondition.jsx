import { useParams } from "react-router-dom";
// import PDFViewer from "pdf-viewer-reactjs";
// import { useState } from "react";
// import { Document, Page } from "react-pdf";
import { Document } from "react-pdf";

const TermsAndConditions = () => {
  let { address } = useParams();

  console.log(address);
  // const [numPages, setNumPages] = useState();
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
  //   setNumPages(numPages);
  // }

  return (
    <div>
      {/* <Document file="../../public/AMXGeneralTermsandConditionsREV315.08.2023.pdf"></Document> */}
      <embed
        src="AMXGeneralTermsandConditionsREV315.08.2023.pdf"
        style={{ width: "100%", height: "100vh", border: "none" }}
      />
      {/* <PDFViewer
        document={{
          url: address,
        }}
      /> */}
    </div>
  );
};

export default TermsAndConditions;
