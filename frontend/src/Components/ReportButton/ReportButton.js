import React, { useState } from "react";
import "./ReportButton.css"; // Import your CSS file for styling the report button

const ReportButton = ({ containerName, blogId, blogs}) => {
  const [showModal, setShowModal] = useState(false);
  const [reportReason, setReportReason] = useState("");

  const handleReportClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setReportReason("");
  };

  const handleSubmit = () => {
    const reportedBlogs = blogs.filter(blog => blog.isReported);
    const reportedBlogsCount = reportedBlogs.length;
    console.log("Reported Blogs Count:", reportedBlogsCount);
    // You can use the reportedBlogsCount value as per your requirements

    handleModalClose();
  };

  return (
    <div>
      {/* Display the report button/icon */}
      <span className="report-button" onClick={handleReportClick}>
        {/* Display a small red exclamatory mark */}
        <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
      </span>

      {/* Modal for reporting */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleModalClose}>
              &times;
            </span>
            <h3>Report Content</h3>
            <p>
              Reporting: <strong>{containerName}</strong>
            </p>
            <div>
              <label>Reason:</label>
              <textarea
                value={reportReason}
                onChange={(e) => setReportReason(e.target.value)}
              ></textarea>
            </div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportButton;
