import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <NavBar title="BeRealEstate" aboutText="Know more about the team" />
      <div className="container my-4">
        <TextForm heading="Enter your details " />
      </div>
    </>
  );
}

export default App;
