import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [cvData, setCvData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/cv')
      .then(res => res.json())
      .then(data => setCvData(data))
      .catch(err => console.error('Error al obtener el CV:', err));
  }, []);

  if (!cvData) return <div style={{ textAlign: 'center', marginTop: '50px' }}>Cargando CV...</div>;

  const { persona, formacion } = cvData;

  return (
    <div className="container" style={{ fontFamily: 'Arial', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <img src={persona?.foto} alt="Perfil" style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }} />
        <h1>{persona?.nombre} {persona?.apellido}</h1>
        <p>Ciudad: {persona?.ciudad}</p>
      </header>
      
      <section>
        <h2>Formación Académica</h2>
        <ul>
          {formacion.map((item) => (
            <li key={item.id} style={{ marginBottom: '10px' }}>
              <strong>{item.titulo}</strong> - {item.institucion} ({item.anio})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;