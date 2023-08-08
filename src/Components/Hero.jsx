import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import useTypewriter from 'react-typewriter-hook';
import dairyHero from '../Images/dairyHero.jpeg';
import bg3 from '../Images/bg3.jpg';

const Hero = () => {
  const functionalities = [
    {
      title: 'Farmer Management',
      text: 'Register and onboard farmers into the system. Store and manage essential farmer information such as contact details, milk production capacity, and location.',
    },
    {
      title: 'Milk Procurement',
      text: 'Capture milk quantity and quality data from farmers. Maintain a real-time record of milk procurement transactions.',
    },
    {
      title: 'Inventory Management',
      text: 'Track incoming milk quantities and quality. Manage dairy product inventory, including processing and packaging.',
    },
    {
      title: 'Order Processing',
      text: 'Enable customers to place orders for dairy products. Process orders, manage stock availability, and track order status.',
    },
    {
      title: 'Payment and Billing',
      text: 'Generate invoices for dairy product sales and milk procurement. Calculate payments to farmers based on milk quantity and quality. Provide an automated payment system to ensure timely and accurate disbursements.',
    },
    {
      title: 'Reporting and Analytics',
      text: 'Generate reports on milk procurement, sales, inventory levels, and financial transactions. Provide insights into milk production trends, product demand, and financial performance.',
    },
    {
      title: 'Communication and Notifications',
      text: 'Send automated notifications to farmers about milk procurement schedules and payments. Notify customers about order confirmations, deliveries, and promotions.',
    },
    {
      title: 'User Roles and Security',
      text: 'Implement user authentication and authorization for admin, employees, farmers, and customers. Control access to specific functionalities based on user roles.',
    },
  ];

  const [currentFunctionality, setCurrentFunctionality] = useState(0);
  const intervalRef = React.useRef({});
  const animatedTitle = useTypewriter(functionalities[currentFunctionality].title);

  useEffect(() => {
    document.title = "Dairy Company Management System";
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentFunctionality((prevIndex) => (prevIndex + 1) % functionalities.length);
    }, 6000); // Switch to the next functionality every 6 seconds

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${bg3})`, // Replace with actual logo path
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Card className="text-center hero-card" style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", color: "white", padding: "30px" }}>
              <Card.Body>
                <h1 className="hero-title">{animatedTitle}</h1>
                <p className="functionality-text">{functionalities[currentFunctionality].text}</p>
                <Button variant="primary">Get Started</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
