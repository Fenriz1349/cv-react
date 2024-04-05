import "../styles/MailModal.css";
import { useState } from 'react';

function MailModal({ mail, toggleMailModal }) {
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSenderEmailChange = (event) => {
    setSenderEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  let handleSubmit = () => {
    let mailtoLink = `mailto:${mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    if (senderEmail) {
      mailtoLink += `&cc=${encodeURIComponent(senderEmail)}`;
    }
    window.location.href = mailtoLink;
    toggleMailModal();
  };

  return (
    <div className="mail-modal">
      <div className="mail-modal-content">
        <h4>Contactes moi sur <br/>{mail}</h4>
        <div className="column">
          <div className="mail-modal-textarea">
            <p>Expéditeur</p>
            <input type="email" value={senderEmail} onChange={handleSenderEmailChange} />
          </div>
          <div className="mail-modal-textarea">
            <p>Sujet</p>
            <input type="text" value={subject} onChange={handleSubjectChange} />
          </div>
          <div className="mail-modal-textarea">
            <p>Message</p>
            <textarea 
              id="message"
              value={message} 
              onChange={handleMessageChange} 
              rows={10}
            />
          </div>
          <div className="button-container">
            <button type="button" onClick={handleSubmit}>Envoyer</button>
            <button onClick={toggleMailModal}>Fermer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailModal;
