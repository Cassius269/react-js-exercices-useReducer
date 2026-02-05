import './assets/styles/App.scss'; 
import CounterFeature from './components/CounterFeature';
import CounterProvider from './components/CounterProvider';

function App() {

  return (
    <>
      <CounterProvider>
        <CounterFeature />
      </CounterProvider>
    </>
  )
}

export default App
