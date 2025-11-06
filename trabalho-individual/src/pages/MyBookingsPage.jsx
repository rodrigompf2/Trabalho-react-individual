import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import AlertMessage from '../components/AlertMessage.jsx';

const MyBookingsPage = ({ bookings, setBookings }) => {
  const [status, setStatus] = useState({
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchRequirement = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }
        await response.json();
        setStatus({ loading: false, error: null });
      } catch (error) {
        setStatus({ loading: false, error: error.message });
      }
    };
    fetchRequirement();
  }, []);

  const handleDelete = (indexToDelete) => {
    const newBookings = bookings.filter((_, index) => index !== indexToDelete);
    setBookings(newBookings);
  };

  return (
    <div className="container page-animate-fade-in">
      <h1 className="text-center">Meus Agendamentos</h1>
      
      {status.loading && <LoadingSpinner />}
      {status.error && <AlertMessage type="error" message={`Erro ao carregar dados: ${status.error}`} />}

      {!status.loading && !status.error && (
        <div className="booking-list">
          {bookings.length === 0 ? (
            <p className="text-center" style={{ color: '#aaa' }}>Você ainda não fez nenhum agendamento.</p>
          ) : (
            bookings.map((booking, index) => (
              <div key={index} className="booking-item">
                <div className="booking-details">
                  <h3>Agendamento #{index + 1}</h3>
                  <p><strong>Sala:</strong> {booking.room}</p>
                  <p><strong>Nome:</strong> {booking.name}</p>
                  <p><strong>Email:</strong> {booking.email}</p>
                  <p><strong>Data:</strong> {booking.date}</p>
                  <p><strong>Horário:</strong> {booking.horario}</p>
                </div>
                <button className="booking-delete-button" onClick={() => handleDelete(index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12.578 0c-1.131.288-2.14.744-3.08 1.332m12.578 0A48.06 48.06 0 0113.12 4.498m-4.524 0A48.06 48.06 0 005.122 4.498m13.056 0A48.061 48.061 0 0010.5 4.498m8.032.3c.47.11.927.24 1.364.386m-1.364-.386l-1.927-1.48V3.75c0-.621-.504-1.125-1.125-1.125H9.75C9.129 2.625 8.625 3.129 8.625 3.75v1.157l-1.927 1.48m12.578 0c-.244.08-.497.16-.755.244m-11.072 0c-.258-.084-.511-.164-.755-.244m11.827 0l-1.7-1.385c-.206-.167-.458-.25-.717-.25H9.682c-.259 0-.511.083-.717.25l-1.7 1.385m11.827 0l-4.227-3.26a.75.75 0 00-1.144 0L6.168 5.79m12.578 0l-1.927-1.48m-11.827 0l-1.927 1.48" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default MyBookingsPage;