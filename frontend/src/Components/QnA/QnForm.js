import React,{useState} from 'react'
import './QnForm.css';
import Button from '../UI/Button';

const QnForm = (props) => {
//const { title, content, isAnonymous, topics } = req.body;
    const[enteredQn, setEnteredQn] = useState('');
    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredTopics, setEnteredTopics] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
  }

    const qnChangeHandler = (event) => {
      setEnteredQn(event.target.value);
    }

    const checkBoxChangeHandler = (event) => {
      setIsChecked(true);
      // setIsChecked(event.target.checked);
    }

    const topicsChangeHandler = (event) => {
      setEnteredTopics(event.target.value);
  }

    const qnSubmitHandler = async(event) => {
        event.preventDefault();
        
        const qnData = {
          title: enteredTitle,
          topics: enteredTopics,
          content: enteredQn,
          isAnonymous: isChecked,
        };

        props.onSaveQnData(qnData);
        setEnteredQn('');
        setEnteredTitle('');
        setEnteredTopics('');
        setIsChecked(false);
        const token = localStorage.getItem('token');
  
        try {
          const response = await fetch('http://localhost:5000/api/qna/postQuestion', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(qnData),
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log(data);

          } else {
            const errorText = await response.text();
            console.error('Error:', errorText);
          }
        } catch (error) {
          console.error('Error:', error);
        }
    }



  return (
    <div>
      <form className='qn_form_control' onSubmit={qnSubmitHandler}>
        <div className='qn_form'>
                    <div className='title_qn'>
                      <input required type='text' className='qn_title' placeholder='title' onChange={titleChangeHandler}></input>
                    </div>
                    <div className='qn_details'>
                        <textarea required type="text" id="qn_input" onChange={qnChangeHandler} className='question_area'  placeholder='Clear Your Doubts' />                    
                    </div>
                    <div className='b2'>
                        <label className='checkbox_description'>Ask Anonymously<input type='checkbox' className='qn_checkbox' checked={isChecked} onChange={checkBoxChangeHandler} /></label>
                        
                    </div>
                    <div className='topics_qn'>
                      <input type='text' className='qn_topic' placeholder='topics' onChange={topicsChangeHandler}></input>
                    </div>
                    <div className='b2'>
                        <button type='qn_submit' className='qn_button'>Submit</button>
                    </div>
        </div>      
      </form>
    </div>
  )
}

export default QnForm;
