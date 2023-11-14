// Import the Navbar component
import AppNavbar from "./components/AppNavbar";
import Welcome from "./components/Welcome";


// Your main component where you want to use the Navbar
const App = () => {
  return (
    <div>
      {/* Other components or content */}
      <AppNavbar />
      <Welcome />
      {/* More content */}
    </div>
  );
};

export default App;
