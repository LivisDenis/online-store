import React from 'react';
import { useBearStore } from '../store/store';

const Pages = () => {
  const { totalCount, page, setPage, limit } = useBearStore();
  const pageCount = Math.ceil(totalCount / limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <div>
      {pages.map((i) => (
        <div
          key={i}
          // active={page === i}
          onClick={() => setPage(i)}
        >
          {i}
        </div>
      ))}
    </div>
  );
};

export default Pages;
