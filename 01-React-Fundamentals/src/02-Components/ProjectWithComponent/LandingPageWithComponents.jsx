import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function LandignPageWithComponents() {
  return (
    <div>
      <Header />
      <Section title="About Us" content="We provide amazing services to our customers worldwide." />
      <Section title="Our Services" content="Web Development, App Development, SEO Optimization." />
      <Section title="Contact Us" content="Email: contact@oursite.com" />
      <Footer />
    </div>
  );
}

export default LandignPageWithComponents;
