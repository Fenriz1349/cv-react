import "../styles/PhoneModal.css"; 

function PhoneModal({ telephone, togglePhoneModal }) {
  const handleCall = () => {
    window.location.href = `tel:${telephone}`;
  };

  return (
      <div className="phone-modal">
        <div className="phone-modal-content">
          <h4>Téléphone : </h4>
          <p>{telephone}</p>
          <button onClick={handleCall}>Appeler</button>
          <button onClick={togglePhoneModal}>Fermer</button>
        </div>
    </div>
  );
}
    
export default PhoneModal;
