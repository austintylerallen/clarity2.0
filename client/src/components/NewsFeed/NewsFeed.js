import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_NEWS = gql`
  query GetNews {
    news {
      id
      title
      content
    }
  }
`;

const NewsFeed = () => {
  const { loading, error, data } = useQuery(GET_NEWS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>News Feed</h2>
      {data.news.map(newsItem => (
        <div key={newsItem.id}>
          <h3>{newsItem.title}</h3>
          <p>{newsItem.content}</p> 
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
