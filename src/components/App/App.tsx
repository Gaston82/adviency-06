import "./App.css";
import Form from "../Form/Form";
import GiftList from "../GiftList/GiftList";

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