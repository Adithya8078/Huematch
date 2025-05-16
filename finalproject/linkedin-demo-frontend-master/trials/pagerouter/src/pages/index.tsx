// pages/index.tsx
"use strict";
type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export async function getStaticProps() {
  // Fetch data from the API
  const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
  const comments: Comment[] = await res.json(); // Typecasting comments

  // Return the data as props to the page
  return {
    props: {
      comments,
    },
  };
}

interface HomeProps {
  comments: Comment[];  // Type the comments prop
}

export default function Home({ comments }: HomeProps) {
  return (
    <div>
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
            <small>{comment.email}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
