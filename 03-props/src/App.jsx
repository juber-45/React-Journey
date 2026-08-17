import Card from "./components/Card";
const App = () => {
  return (
    <div className="parent">
      <Card user='Aman' age={19} img="https://images.unsplash.com/photo-1778244305115-4dd2bf7c8e86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D" />
      <Card user='Juber' age={26} img="https://images.unsplash.com/photo-1784697335149-6081d07b1575?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" />
      <Card user='Ankush' age={22} img="https://images.unsplash.com/photo-1785907915571-bcdc89aa036b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" />
    </div>
  );
};

export default App;