import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Title from "./components/Title";
import './assets/styles/App.scss'; 

function App() {
  return (
    <>
      <main>
        <Header />
        <Title />
        <Counter />
        <Footer />
      </main>
    </>
  )
}

export default App
