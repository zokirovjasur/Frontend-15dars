import { BrowserRouter as Router } from "react-router-dom";
import ContactList from "./components/ContactList";

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Contact Management System</h1>
        <ContactList />
      </div>
    </Router>
  );
}

export default App;
