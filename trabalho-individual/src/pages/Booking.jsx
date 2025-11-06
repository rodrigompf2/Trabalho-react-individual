import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import AlertMessage from '../components/AlertMessage.jsx';

const Booking = ({ setBookings }) => {
  const location = useLocation();
  const selectedRoom = location.state?.roomName || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    horario: '',
    room: selectedRoom,
  });

  useEffect(() => {
    setFormData(prev => ({ ...prev, room: selectedRoom }));
  }, [selectedRoom]);

  const [postStatus, setPostStatus] = useState({
    loading: false,
    error: null,
    success: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPostStatus({ loading: true, error: null, success: null });

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      await response.json(); 
      
      setPostStatus({ loading: false, error: null, success: `Obrigado, ${formData.name}! Sua visita para ${formData.date} foi agendada.` });
      
      setBookings(currentBookings => [...currentBookings, formData]);
      
      setFormData({ name: '', email: '', date: '', horario: '', room: selectedRoom });
    } catch (error) {
      setPostStatus({ loading: false, error: error.message, success: null });
    }
  };

  return (
    <div className="container page-animate-fade-in booking-page">
      <h1 className="text-center">Agende sua Visita</h1>
      <form onSubmit={handleSubmit} className="booking-form">

        <div className="form-group">
          <label htmlFor="room">Sala Selecionada</label>
          <input
            type="text"
            id="room"
            name="room"
            value={formData.room}
            onChange={handleChange}
            placeholder="Selecione uma sala na página anterior"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Data Preferida</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="horario">Horário (Blocos de 3h)</label>
          <select
            id="horario"
            name="horario"
            value={formData.horario}
            onChange={handleChange}
            required
          >
            <option value="">Selecione um horário</option>
            <option value="09:00 - 12:00">09:00 - 12:00</option>
            <option value="13:00 - 16:00">13:00 - 16:00</option>
            <option value="17:00 - 20:00">17:00 - 20:00</option>
          </select>
        </div>

        <button type="submit" className="submit-button" disabled={postStatus.loading}>
          {postStatus.loading ? 'Enviando...' : 'Agendar'}
        </button>
      </form>
      
      <div className="feedback-messages">
        {postStatus.loading && <LoadingSpinner />}
        {postStatus.error && <AlertMessage type="error" message={`Falha no agendamento: ${postStatus.error}`} />}
        {postStatus.success && <AlertMessage type="success" message={postStatus.success} />}
      </div>
    </div>
  );
};

export default Booking;