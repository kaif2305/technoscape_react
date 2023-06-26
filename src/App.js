import Nav from './Pages/Header/nav'
import Footer from './Pages/footer'
// import Colab_clg from './Pages/Header/colab_clg'
import Partners from './Pages/partners'

import PaperSubmission from './Pages/Paper submission/paper_submission'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Partners />} />
          <Route path='/abstract-submission' element={<PaperSubmission />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
