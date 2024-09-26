import { memo } from 'react';

const ArticleMemo = memo(() => {
  console.log('Article Memo');
  return <div>Article</div>;
});

export default ArticleMemo;
