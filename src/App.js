import AppRoutes from './config/AppRoutes'; // Importing the main routing component
import "../src/assets/scss/theme.scss"; // Importing SCSS styles
import "../src/assets/css/theme.css"; // Importing CSS styles
import '../src/assets/css/custom.css'; // Importing custom CSS styles

const App = () => {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App; 
