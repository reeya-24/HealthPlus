import React, { useState, useEffect } from 'react';
import axios from "../config/axios";
import '../styles/Home.css';
import image1 from '../assets/logo/patientregistration.avif' 
import image2 from "../assets/logo/Healthregistration.avif"
import image3 from "../assets/logo/HealthCare Professional Registration.png"
import image4 from"../assets/logo/blooddonation.png";
function Home() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const tabContent = [
    {
      id: 1,
      title: 'Paitent Registration Number',
      image: image1,
      content: 'Tab 1 Content',
    },
    {
      id: 2,
      title: 'Health Facility Registration',
      image: image2,
      content: 'Tab 2 Content',
    },
    {
      id: 3,
      title: 'HealthCare Professional Registration ',
      image: image3,
      content: 'Tab 3 Content',
    },
    {
      id: 4,
      title: 'Blood Donation ',
      image: image4,
      content: 'Tab  Content',
    },
  ];

  const [userCount, setUserCount]= useState(null);


  async function fetchUserCount() {
    const response = await axios.get("/users/analysis");
    setUserCount(response.data.countUser);
  }

  useEffect(() => {
    fetchUserCount();
    const interval = setInterval(fetchUserCount, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <>
    <div className="Homecontainer">
      <div className="top-section">
        {tabContent.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            <img src={tab.image} alt={tab.title} />
            <h3>{tab.title}</h3>
          </div>
        ))}
      </div>
      <div className="bottom-section">
        {tabContent.map((tab) => (
          <div
            key={tab.id}
            className={`content ${activeTab === tab.id ? 'active' : ''}`}
          >
            <h2>{tab.content}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        ))}
      </div>
    </div>
    <div>
      Number Of Users: {userCount}
    </div>
    </>
  );
}

export default Home;

