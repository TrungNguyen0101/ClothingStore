import React from 'react';
import { useSearchParams } from 'next/navigation';

const page = ({ params }) => {
  return (
    <div>
      <h1>Post detail page</h1>
      <div>Query : {params.id}</div>
      {/* <div>Query : {userName}</div> */}
    </div>
  );
};

export default page;
