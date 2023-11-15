import { useEffect } from 'react';

import { Header, Footer, Container } from './components/layout'
import { Navigation, Login } from './components/util';
import Books , { BookCounter } from './components/Books';

import { Provider } from 'react-redux';
import { store, useDispatch } from './components/State'
import { fetchBooksAction } from './components/State/Books';


function App() {

  const dispatch = useDispatch()
  useEffect(() => { dispatch(fetchBooksAction()) }, [])

  return (
    <div className="App">
      <Header title={"My Bookshelf"}>
        <Navigation menuItems={["All Books", "Advanced Search", "Profile"]} />
        <Login/>
        <BookCounter />
      </Header>
      <Container>
        <Books/>
      </Container>
      <Footer/>
    </div>
  );
}

const ReduxApp = () => <Provider store={store}> <App /> </Provider>

export default ReduxApp;
