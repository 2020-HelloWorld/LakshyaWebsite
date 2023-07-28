import React from 'react';
import MentorList from './MentorList';
import NavBar from '../../layout/Navbar/studentNavBar';
import Footer from '../../layout/footer/footer';
const Mentor = () => {
  return (
    <div className="pt-8">
      <NavBar />
    <MentorList />
        <Footer/>
    </div>
  );
};

export default Mentor;
