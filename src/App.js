import { Fragment } from 'react';

import './index.css';
import Header from './components/Header';
import PageHeader from './components/PageHeader';
import ContactDetails from './components/ContactDetails';

function App() {
  return (
    <Fragment>
      <Header />
      <PageHeader />
      <ContactDetails/>
    </Fragment>
  );
}

export default App;
