import "../styles/PhoneModal.css"; 

function PhoneModal({ telephone, togglePhoneModal }) {
  return (
      <div className="phone-modal">
        <div className="phone-modal-content">
          <p>Téléphone : {telephone}</p>
          <button onClick={togglePhoneModal}>Fermer</button>
        </div>
    </div>
  );
}
    
export default PhoneModal;