
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
 const FirstN = "Juan"
 const MiddleN = "Santos"
 const LastN = "Dela Cruz"
  return (
    <>
    <Header />
    <main>this is the sample body
      <p>
        Hello {FirstN}! Your last name is {LastN}. Thank you!
      </p>
    </main>
    <Footer />
    </>
  );
}

export default App;
