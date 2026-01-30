import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import awsLogo from './assets/aws.png'
import { useState, useRef } from 'react'
import './App.css'
import archiImg from './assets/archi.png'

function App() {
  const [showPopup, setShowPopup] = useState(false)
  const buildRef = useRef<HTMLDivElement>(null)

  const scrollToBuild = () => {
    if (buildRef.current) {
      buildRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div>

      {/* First viewport: landing content */}
      <div style={{ height: '100vh' }}>
        <div className="landing">
          <h1>👋 Hey!</h1>

          <p className="subtitle">
            While you’re here, take a look at how
            <span className="highlight"> ITPF Commander </span>
            came to life.
          </p>

          <div className="cards">
            <div
              className="card"
              onClick={() => setShowPopup(true)}
              style={{ cursor: 'pointer' }}
            >
              <h3>The Idea</h3>
              <p className="idea-text">
                At PMI, keeping applications secure and compliant is one of the most critical tasks.
              </p>

              <p className="idea-text">
                Manual assessment of applications consumes up to <strong>64,000 hours</strong> of manpower yearly. Frustrated by this time sink, <br />
                <span className="highlight1">ITPF Compliance Commander was born</span>.
              </p>
            </div>

            {/* Pop-up */}
            {showPopup && (
              <div className="popup-overlay" onClick={() => setShowPopup(false)}>
                <div className="popup" onClick={e => e.stopPropagation()}>
                  <h2>💡 Did you know?</h2>
                  <p>Each application assessment takes up to 320 hours. At P&C function alone, with 200+ applications, this adds up to 48,000-64,000 hours yearly – <em>enough to power many other projects</em>!</p>
                  <p className="idea-text">
                    Huge shoutout to <span className="highlight">Inez, Thom, Vic, and Zack</span> for inspiring this optimization. This product won the 2025 Manila Gen AI Hackathon, selected from over 220 colleagues.<br /> <br /> 
                    It was an honor to bring it to life! <span className="spin-emoji">🌸</span>
                  </p>
                  <button onClick={() => setShowPopup(false)}>Close</button>
                </div>
              </div>
            )}

            <div
              className="card"
              onClick={scrollToBuild}
              style={{ cursor: 'pointer' }}
            >
              <h3>The Build</h3>
              <p>
                React, AWS, automation, and a lot of “wait… why is this failing?”
              </p>
              <div className="card-logos">
                <a href="https://vite.dev" target="_blank" rel="noreferrer">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <a href="https://aws.amazon.com" target="_blank" rel="noreferrer">
                  <img src={awsLogo} className="logo aws" alt="AWS logo" />
                </a>
              </div>
            </div>

            <div className="card">
              <h3>The Mission</h3>
              <p>Make tedious assessments simple, fast, and time-saving.</p>
            </div>
          </div>

          <p className="footer">
            Scroll around. Click things. This is the story behind the tool. <br /><br /><br /><br />
          </p>

          <p className="dedication">
            This project would not exist without <span className="highlight">Jen Macrohon</span>, whose guidance, support, and wisdom made everything possible.
          </p>
        </div>
      </div>

      {/* Second viewport: Build Details */}
      <div
        ref={buildRef}
        style={{
          height: '100vh',
          width: '100wh',
          padding: '2rem 1rem',
        }}
      >
        <h2>The Build Details</h2>
        <p>Time to dive into the nitty-gritty… and yes, it’s as fun as it sounds! </p>

        <img
          src={archiImg}
          alt="Architecture diagram"
          style={{ width: '100%', maxWidth: '1200px', marginTop: '1rem' }}
        />
      </div>
    </div>
  )
}

export default App
