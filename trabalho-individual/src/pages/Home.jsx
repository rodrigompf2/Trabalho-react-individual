import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleGoToBooking = () => {
    navigate('/book');
  };
  
  return (
    <div className="page-animate-fade-in">
      <section className="hero">
        <h1>Seu Novo Espaço de Trabalho</h1>
        <p>Conecte-se, crie e cresça em um ambiente inspirador.</p>
        <a href="#planos" className="cta-button">Ver Planos</a>
      </section>

      <section className="amenities-section container">
        <div className="amenities-grid">
          <div className="amenity-card">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
            <h3>Wi-Fi de Alta Velocidade</h3>
            <p>Conexão de fibra simétrica para máxima produtividade.</p>
          </div>
          <div className="amenity-card">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 12h-2.25M17.834 17.834l-1.591-1.591M12 21.75V19.5M6.166 17.834l1.591-1.591M3.75 12h2.25M6.166 6.166l1.591 1.591" />
            </svg>
            <h3>Café Ilimitado</h3>
            <p>Mantenha a energia com nosso café gourmet à vontade.</p>
          </div>
          <div className="amenity-card">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
            </svg>
            <h3>Acesso 24/7</h3>
            <p>Trabalhe no seu horário, quando a inspiração surgir.</p>
          </div>
        </div>
      </section>

      <section id="planos" className="plans-section container">
        <h2 className="text-center">Planos Flexíveis para Você</h2>
        <div className="plans-grid">
          <div className="plan-card">
            <h3>Plano Flex</h3>
            <p className="price">R$ 350/mês</p>
            <ul>
              <li>10 dias de acesso por mês</li>
              <li>Wi-Fi de Alta Velocidade</li>
              <li>Café à Vontade</li>
            </ul>
            <button className="plan-button" onClick={handleGoToBooking}>Comece Agora</button>
          </div>
          <div className="plan-card featured">
            <h3>Mesa Dedicada</h3>
            <p className="price">R$ 750/mês</p>
            <ul>
              <li>Sua Mesa Fixa</li>
              <li>Acesso 24/7</li>
              <li>4h de Sala de Reunião</li>
            </ul>
            <button className="plan-button featured-button" onClick={handleGoToBooking}>Comece Agora</button>
          </div>
          <div className="plan-card">
            <h3>Escritório Privado</h3>
            <p className="price">R$ 2.500/mês</p>
            <ul>
              <li>Sala para 4 pessoas</li>
              <li>Acesso 24/7</li>
              <li>10h de Sala de Reunião</li>
            </ul>
            <button className="plan-button" onClick={handleGoToBooking}>Comece Agora</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;