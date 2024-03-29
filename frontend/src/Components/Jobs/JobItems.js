import React, { useState } from 'react';
import './JobItems.css';
import JobDate from './JobDate';

const JobItems = (props) => {
  const [isJobDetails, setIsJobDetails] = useState(false);

  const startReadmore = () => {
    setIsJobDetails(true);
    props.onSeeMore(props.id);
  };

  return (
    <div className='job_item'>
      <div>
        <div className='details'>
          <div className='title'>{props.title}</div>
          <div className='font_size'>
            <div className='company'>{props.company}</div>
            {props.jobDesc}
            <div>{props.location}</div>
            <span>
              <div className='amount'>${props.amount} {props.jobType}</div>
            </span>
          </div>
          <div>{props.prerequisite}</div>
          <div className='date'>{new Date(props.dateOfPosting).toLocaleDateString(undefined, {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}</div>
          <button onClick={startReadmore} className='job_readmore_btn'>
            See Details
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default JobItems;
