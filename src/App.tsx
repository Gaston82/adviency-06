import "./App.css";
import GiftList from "./components/GiftList/GiftList";

const App = (): React.ReactElement => {
  return (
    <section className="container">
      <h1 className="app-title">Regalos</h1>
      <GiftList />
    </section>
  );
};
export default App;
