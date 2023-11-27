import { Header, Footer, Container } from './components/layout'
import { Navigation, Login } from './components/util';
import Books from './components/Books';

import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <div className="App">
      <Header title={"My Bookshelf"}>
        <Navigation menuItems={["All Books", "Advanced Search", "Profile"]} />
        <Login/>
      </Header>
      <Container>
        <Books/>
      </Container>
      <Footer/>
    </div>
  );
}

const RdxApp = () => 
  <Provider store={store}>
    <App/>
  </Provider>

export default RdxApp;
