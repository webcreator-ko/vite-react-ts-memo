import Article from './Article';
import ArticleMemo from './ArticleMemo';

type Props = {
  onClickTestCallback?: VoidFunction;
};

const ArticlesCallback = ({ onClickTestCallback }: Props) => {
  console.log('%cArticlesCallback', 'color: gold');

  return (
    <>
      <Article />
      <ArticleMemo />
      <button onClick={onClickTestCallback}>ArticlesCallback Click Me!</button>
    </>
  );
};

export default ArticlesCallback;
