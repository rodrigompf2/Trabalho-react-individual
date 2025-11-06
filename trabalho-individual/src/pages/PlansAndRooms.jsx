import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import AlertMessage from '../components/AlertMessage.jsx';

const roomData = [
  {
    title: "Sala de Reunião 'Focus'",
    description: "Ideal para 4-6 pessoas. Equipada com TV 4K.",
    imageUrl: "https://deltabc.com.br/wp-content/uploads/2025/04/coworking-no-brasil-1-1024x682.webp",
    price: "R$ 150/3h"
  },
  {
    title: "Escritório Privativo 'Alpha'",
    description: "Espaço para 2 pessoas com total privacidade.",
    imageUrl: "https://nex.work/wp-content/uploads/EM_180220_NEX_9104-5-scaled.jpg",
    price: "R$ 300/3h"
  },
  {
    title: "Área 'Hot Desk'",
    description: "Chegue e escolha qualquer lugar disponível.",
    imageUrl: "https://www.direcional.com.br/wp-content/uploads/2024/02/espaco-de-coworking.webp",
    price: "R$ 40/3h"
  },
  {
    title: "Sala de Conferência 'Zygos'",
    description: "A nossa maior sala, para até 20 pessoas.",
    imageUrl: "https://cdn.eurekacoworking.com/wp-content/uploads/2020/10/21233518/escritorio-flexivel.jpg",
    price: "R$ 450/3h"
  },
  {
    title: "Cabine 'Call'",
    description: "Espaço individual à prova de som para chamadas.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDfArKgI3IAQA-edX_gd4v_rLqqdMHQ4KqIg&s",
    price: "R$ 90/3h"
  },
  {
    title: "Lounge & Café",
    description: "Área de descontração para networking.",
    imageUrl: "https://www.shoppingcasaedesign.com.br/gerente/files/blogPostagem-imagem/capafabricaworkingbar.jpg",
    price: "Incluído"
  },
  {
    title: "Escritório Privativo 'Beta'",
    description: "Espaço confortável para equipas de 4 a 6 pessoas.",
    imageUrl: "https://i0.wp.com/catagua.com.br/wp-content/uploads/2022/08/coworking-no-condominio-saiba-quais-as-vantagens.jpg?fit=1200%2C800&ssl=1",
    price: "R$ 600/3h"
  },
  {
    title: "Mini Auditório",
    description: "Perfeito para palestras e workshops.",
    imageUrl: "https://www.apexcoworking.com/wp-content/uploads/2023/02/auditorio-locacao-apex-coworking-1920-1080.jpeg",
    price: "R$ 600/3h"
  }
];

const PlansAndRooms = () => {
  const [status, setStatus] = useState({
    loading: true,
    apiData: [], 
    error: null,
  });

  const navigate = useNavigate();
  
  const handleBookClick = (roomName) => {
    navigate('/book', { state: { roomName: roomName } });
  };

  useEffect(() => {
    const fetchRequirement = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=8');
        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }
        const data = await response.json();
        setStatus({ loading: false, apiData: data, error: null });
      } catch (error) {
        setStatus({ loading: false, apiData: [], error: error.message });
      }
    };
    fetchRequirement();
  }, []);

  const { loading, error } = status;

  return (
    <div className="container page-animate-fade-in">
      <h1 className="text-center">Nossos Planos e Salas</h1>
      
      <section id="salas" className="rooms-section">
        <h2 className="text-center" style={{marginTop: 0}}>Demonstração das Salas</h2>
        
        {loading && <LoadingSpinner />}
        {error && <AlertMessage type="error" message={`Falha ao carregar dados: ${error}`} />}
        
        {!loading && !error && (
          <div className="gallery-grid">
            {roomData.map((room) => (
              <div key={room.title} className="gallery-card">
                <img src={room.imageUrl} alt={room.title} />
                <div className="gallery-content">
                  <h3>{room.title}</h3>
                  <p>{room.description}</p>
                  <p className="gallery-price">{room.price}</p>
                  <button className="gallery-book-button" onClick={() => handleBookClick(room.title)}>
                    Agendar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default PlansAndRooms;