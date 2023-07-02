import React, { useState, useEffect }from "react";
import axios from "axios";
import "./Admin.css";

const AdminPage = () => {
    const [blog,setBlog]=useState(null);
    const [reportedBlogsCount, setReportedBlogsCount] = useState(0);
   
    useEffect(() => {
        fetchReportedBlogsCount();
        
      }, []);
    
      const fetchReportedBlogsCount = async () => {
        try {
          const response = await axios.get("/admin/reported/${blogs}");
          const reportedBlogs = response.data;
          setReportedBlogsCount(reportedBlogs.length);
        } catch (error) {
          console.log("Failed to fetch reported blogs count:", error);
        }
      };

  return (
    <div>
      <div className="profile__left"></div>
      <div className="profile__right">
        <h3>Admin Profile</h3>
        <div className="user_articles">
          <h3>User Articles</h3>
          <p>Number of Reported Blogs: {reportedBlogsCount}</p>
          <div className="user_articles_list">            
            {/* Render user articles */}
            <div className="user_article">
            <h4 className="user_article_title">Blog title</h4>
                <p className="user_article_content">Blog Content</p>
              <button className="user_article_edit_btn">Edit</button>
            </div>
            {/* Add more user articles */}
          </div>
        </div>
        <div className="user_questions">
          <h3>User Questions</h3>
          <div className="user_questions_list">
            {/* Render user questions */}
            <div className="user_question">
              <h4 className="user_question_title">Question Title</h4>
              <p className="user_question_content">Question Content</p>
            </div>
            {/* Add more user questions */}
          </div>
        </div>
        <div className="user_answers">
          <h3>User Answers</h3>
          <div className="user_answers_list">
            {/* Render user answers */}
            <div className="user_answer">
              <div className="user_answer_question">
                <h4 className="user_answer_question_title">Question Title</h4>
                <p className="user_answer_question_topic">Question Topic</p>
                <p className="user_answer_question_content">
                  Question Content
                </p>
              </div>
              <div className="user_answer_question_answer">
                <p className="user_answer_question_answer_content">
                  Answer Content
                </p>
                <p className="user_answer_question_answer_date">
                  Answer Date
                </p>
              </div>
            </div>
            {/* Add more user answers */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
