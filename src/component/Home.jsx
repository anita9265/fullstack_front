import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Home() {
  return (
    <>
     <Header />
      <section className="hero-section">
        <div className="hero-content">
          <h1>Student Management System</h1>

          <p>
            Manage students, attendance, subjects, results and academic
            records from a single dashboard.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Our Features</h2>

        <div className="feature-cards">

          <div className="card">
            <h3>Student Management</h3>
            <p>
              Add, update and manage student information easily.
            </p>
          </div>

          <div className="card">
            <h3>Attendance Tracking</h3>
            <p>
              Monitor daily attendance and generate reports.
            </p>
          </div>

          <div className="card">
            <h3>Result Management</h3>
            <p>
              View marks, percentages and student performance.
            </p>
          </div>

        </div>
      </section>

      <Footer />


    </>
  )
}
export default Home