import { useCallback, useEffect, useState } from 'react';
import appStyles from './app.module.scss';
import Articles from './components/Articles';
import ArticlesCallback from './components/ArticlesCallback';
import Navigation from './components/Navigation';

function App() {
  const [toggleBoolean, setToggleBoolean] = useState(false);

  const onClickTest = () => {
    setToggleBoolean((e) => !e);
  };

  const onClickTestCallback = useCallback(() => {
    setToggleBoolean((e) => !e);
  }, [setToggleBoolean]);

  useEffect(() => {
    console.log('onClickTest が再生成されました');
  }, [onClickTest]);

  useEffect(() => {
    // ここは useCallback を使用してるので再生成されず最初のレンダリング時しか確認できない
    console.log('onClickTestCallback が再生成されました');
  }, [onClickTestCallback]);

  return (
    <div className={appStyles.wrap}>
      <Navigation />
      <Articles onClickTest={onClickTest} />
      <ArticlesCallback onClickTestCallback={onClickTestCallback} />
    </div>
  );
}

export default App;
