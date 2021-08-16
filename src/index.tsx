import ReactDom from 'react-dom';
import App from './components/App';

// const App = () => {
//   return <div>
//     <h1>Hello</h1>
//   </div>
// };

ReactDom.render(
  <App />,
  document.querySelector('#root')
);