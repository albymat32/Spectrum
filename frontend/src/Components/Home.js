import React, {useState, useEffect} from 'react';
import './Home.css';
import JobItems from './Jobs/JobItems';
import Articles from './Articles/Articles';
import Apartments from './Apartments/Apartments';
import NewArticle from './Articles/NewArticle';
import { Link } from 'react-router-dom';


const dummy_jobs =[
  {
  id: 'e1',
  title: 'Registrar Assistant',
  company: 'New York University',
  rating:'4.2',
  mode:'hybrid',
  location:'New York',
  amount: 94.12,
  timing:'full-time',
  skills:'Advanced level skills with computers and business/productivity software (MS Office, Google Suite), word processing and .......',
  date: new Date(2020, 7, 14),
},
{
  id: 'e2',
  title: 'Registrar Assistant',
  company: 'New York University',
  rating:'4.2',
  mode:'hybrid',
  location:'New York',
  amount: 94.12,
  timing:'full-time',
  skills:'Advanced level skills with computers and business/productivity software (MS Office, Google Suite), word processing and .......',
  date: new Date(2020, 7, 14),
},
{
  id: 'e3',
  title: 'Registrar Assistant',
  company: 'New York University',
  rating:'4.2',
  mode:'hybrid',
  location:'New York',
  amount: 94.12,
  timing:'full-time',
  skills:'Advanced level skills with computers and business/productivity software (MS Office, Google Suite), word processing and .......',
  date: new Date(2020, 7, 14),
},
]

const Home = () => {

  const apartments = [
    {
      id: 'e1',
      image:'/images/home1.jpg',
      title:'Kayappatta House',
      location: 'Lose Angeles, New York, NY 10012',
      rent: '$350 per month',
      facility: '1-3 Beds',
      details: '1 Month Free Cat Friendly Fitness Center Pool Dishwasher Refrigerator Kitchen In Unit Washer & Dryer Walk-In Closets....',
      date: new Date(2020, 12, 8),
    },
    {
      id: 'e1',
      image:'/images/home1.jpg',
      title:'Kayappatta House',
      location: 'Lose Angeles, New York, NY 10012',
      rent: '$350 per month',
      facility: '1-3 Beds',
      details: '1 Month Free Cat Friendly Fitness Center Pool Dishwasher Refrigerator Kitchen In Unit Washer & Dryer Walk-In Closets....',
      date: new Date(2020, 12, 8),
    },
    
  ]

    const token = localStorage.getItem("token");
    console.log(token);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  },);

  const fetchArticles = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/blogs/');
      if (response.ok) {
        const data = await response.json();
        setArticles(data);
      } else {
        console.log('Error fetching articles:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const addArticleHandler = (article) => {
    setArticles((prevArticles) => [article, ...prevArticles]);
  };

  const[enteredJobs, setEnteredJobs] = useState(dummy_jobs);

  return (
    <div>
      <div className='left_bar'>
          <h3>Trending Jobs</h3>
          {enteredJobs.map((job)=>(
            <JobItems
            key={job.id}
            title={job.title} company={job.company} rating={job.rating} mode={job.mode} location = {job.location}
            amount = {job.amount} timing={job.timing} skills={job.skills} date ={job.date} />
          ))}
      </div>
      

      <div className='middle_bar'>
        <h3>ARTICLES</h3>
        <NewArticle onAddArticle={addArticleHandler} className='new_article_button' />
        {/* {articles.map((article) => (
          <Articles
            key={article._id}
            id={article._id}
            title={article.title}
            image={article.image}
            article={article.content}
            author={
              article.author && article.author.name ? article.author.name : ""
            }
            date={article.createdAt}
            likes={
              article.likes && article.likes.length > 0
                ? article.likes.map((like) => ({ like }))
                : []
            }
            comments = {article.comments.map((comment)=>({comment}))}
          />
        ))} */}
        {articles.map((article) => (
          <Articles
            key={article._id}
            id={article._id}
            title={article.title}
            image={article.image}
            article={article.content}
            author={
              article.author && article.author.name ? article.author.name : ""
            }
            tags={article.tags}
            date={article.createdAt}
            likes={
              article.likes && article.likes.length > 0
                ? article.likes.map((like) => ({ like }))
                : []
            }
            comments={
              article.comments && article.comments.length > 0
                ? article.comments.map((comment) => ({ comment }))
                : []
            }
          />
        ))}
      </div>
      
        

      <div className='right_bar'>
          <h3>Apartments Nearby</h3>
          <Apartments image={apartments[0].image} title={apartments[0].title} location={apartments[0].location}
          rent={apartments[0].rent} facility ={apartments[0].facility} details={apartments[0].details} date={apartments[0].date} />
          <Apartments image={apartments[0].image} title={apartments[0].title} location={apartments[0].location}
          rent={apartments[0].rent} facility ={apartments[0].facility} details={apartments[0].details} date={apartments[0].date} />
      </div>


    </div>
  )
}

export default Home;
