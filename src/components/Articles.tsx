import Article from './Article';
import ArticleMemo from './ArticleMemo';

type Props = {
  onClickTest?: VoidFunction;
};

const Articles = ({ onClickTest }: Props) => {
  console.log('%cArticles', 'color: red');

  return (
    <>
      <Article />
      <ArticleMemo />
      <button onClick={onClickTest}>Articles Click Me!</button>
    </>
  );
};

export default Articles;
