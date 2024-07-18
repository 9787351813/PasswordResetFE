// src/components/Dashboard.js
import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Dashboard.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 20, 30, 40, 50, 60],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Dataset 2',
        data: [60, 50, 40, 30, 20, 10],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
      {
        label: 'Dataset 3',
        data: [70, 30, 40, 70, 60, 10],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <Navbar bg="light" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#dashboard">Oviya</Nav.Link>
              <NavDropdown
                title={<img src="https://via.placeholder.com/30" alt="Profile" className="profile-image" />}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="main-content">
        <Row>
          <Col md={2} className="sidebar">
            <Nav defaultActiveKey="/dashboard" className="flex-column">
              <Nav.Link href="#overview">Overview</Nav.Link>
              <Nav.Link href="#reports">Reports</Nav.Link>
              <Nav.Link href="#analytics">Analytics</Nav.Link>
              <Nav.Link href="#settings">Settings</Nav.Link>
            </Nav>
          </Col>
          <Col md={10} className="content">
            <Row>
              <Col md={6}>
                <div className="graph-box">
                  <h3>Graph 1</h3>
                  <Bar data={data} />
                </div>
              </Col>
              <Col md={6}>
                <div className="graph-box">
                  <h3>Graph 2</h3>
                  <Bar data={data} />
                </div>
              </Col>
              <Col md={6}>
                <div className="graph-box">
                  <h3>Graph 3</h3>
                  <Bar data={data} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
