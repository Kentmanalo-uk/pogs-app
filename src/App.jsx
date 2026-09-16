import { useState } from 'react'

function App() {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2rem', margin: 0 }}>Pogs is now online</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '1rem', marginBottom: 0 }}>Kent Manalo</p>
      <p style={{ fontSize: '1.2rem', margin: 0 }}>BSIT</p>

      <button
        onClick={() => setShowDetails(!showDetails)}
        style={{
          marginTop: '1.5rem',
          padding: '0.5rem 1.5rem',
          fontSize: '1rem',
          cursor: 'pointer',
          borderRadius: '6px',
          border: 'none',
          backgroundColor: '#333',
          color: '#fff'
        }}
      >
        {showDetails ? 'Hide My Details' : 'See My Details'}
      </button>

      {showDetails && (
        <div style={{ marginTop: '1rem', fontSize: '1rem', lineHeight: '1.8' }}>
          <p style={{ margin: 0 }}>Status: Single</p>
          <p style={{ margin: 0 }}>Gender: Bi</p>
          <p style={{ margin: 0 }}>Age: 19</p>
          <p style={{ margin: 0 }}>Weight: 56kg</p>
          <p style={{ margin: 0 }}>Height: 4'11</p>
        </div>
      )}
    </div>
  )
}

export default App
