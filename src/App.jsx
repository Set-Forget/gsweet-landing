import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';
import PrivacyPolicy from './components/privacyPolicy/privacyPolicy';
import TermsAndConditions from './components/termsAndConditions/termsAndConditions'; 
import GoogleDisclosure from './components/GoogleDisclosure/GoogleDisclosure';


export default function App() {
  return (
    <Router>
      <div className="App flex flex-col">
        <Header />
        <div className='flex-1'>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/tc" element={<TermsAndConditions />} />
            <Route path="/google-disclosure" element={<GoogleDisclosure />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}


