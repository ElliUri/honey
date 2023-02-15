import Header from '../Components/Layouts/Header/Header.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import OurHistoryPage from '../Pages/OurHistory/OurHistoryPage.jsx';
import HomePage from '../Pages/Home/HomePage.jsx';
import Products from '../Pages/Products/ProductsPage.jsx';
import UsefulArticlesPage from '../Pages/UsefulArticles/UsefulArticlesPage.jsx';
import Contacts from '../Pages/Contacts/ContactsPage.jsx';
import ProfilePage from '../Pages/Profile/ProfilePage.jsx';
import ShoppingCartPage from '../Pages/ShoppingCart/ShoppingCartPage.jsx';


function App() {
  return (
    <>
      <Router>
        <Header />
      <Switch>
        <Route exact component={OurHistoryPage} path="/our-history">
          <OurHistoryPage />
        </Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
