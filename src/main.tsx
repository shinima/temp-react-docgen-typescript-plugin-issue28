import React from 'react';
import ReactDOM from 'react-dom';
import { MyButton } from './my-button'

const hot = (module as any).hot;

if (hot) {
  hot.accept();
}

function App() {
  return (
    <div>
      <h1>edit source code in src/my-button.tsx</h1>
      <p>MyButton docgenInfo:</p>
      <pre style={{whiteSpace:'break-spaces'}}>
        {JSON.stringify(MyButton.__docgenInfo)}
      </pre>

      <MyButton />
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('container'));
