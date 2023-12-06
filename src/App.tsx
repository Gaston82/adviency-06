import "./App.css";
import Form from "./components/Form/Form";
import GiftList from "./components/GiftList/GiftList";

const App = (): React.ReactElement => {
  return (
    <section className="container">
      <h1 className="app-title">Regalos</h1>
      <Form />
      <GiftList />
    </section>
  );
};
export default App;
