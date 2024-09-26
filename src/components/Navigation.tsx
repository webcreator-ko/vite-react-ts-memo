// const Navigation = () => {
//   console.log('Navigation');
//   return <div>Navigation</div>;
// };
// export default Navigation;

import { memo } from 'react';

const Navigation = memo(() => {
  console.log('memo Navigation');
  return <div>Navigation Memo</div>;
});

export default Navigation;
