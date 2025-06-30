import React, { useState } from 'react';
import { FaWhatsapp, FaClipboard } from 'react-icons/fa';

function Test() {
  // const id = 574653;
  const id = localStorage.getItem('ref')
  const shareLink = `${window.location.origin}/User_Reg/${id}`;
  const [copied, setCopied] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => {
        console.error('Failed to copy text:', error);
      });
  };

  const handleWhatsappShare = () => {
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareLink)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div style={{ paddingTop: '70px', textAlign: 'center' }}>
      {/* Main Share Button */}
      <button onClick={() => setShowPopup(true)}>
        📤 Share
      </button>

      {/* Share Popup Modal */}
      {showPopup && (
        <div style={{
          position: 'fixed',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '10px',
          zIndex: 1000,
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }}>
          <h3>Share this link</h3>
          <button onClick={handleCopy} style={{ margin: '10px' }}>
            <FaClipboard /> {copied ? '✅ Copied!' : 'Copy Link'}
          </button>
          <button onClick={handleWhatsappShare} style={{ margin: '10px' }}>
            <FaWhatsapp /> Share on WhatsApp
          </button>
          <div style={{ marginTop: '15px' }}>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Optional Overlay */}
      {showPopup && (
        <div
          onClick={() => setShowPopup(false)}
          style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 999
          }}
        />
      )}
    </div>
  );
}

export default Test;


// import React from 'react'
// import { Button } from 'antd'
// import { IoCall } from "react-icons/io5";

// function Test() {
//   const data = [{ contact: '8888888888' }]
//   return (
//     <div style={{paddingTop:'70px'}}>
//       {data.map(i => (
//         <Button
//           onClick={() => window.location.href = `tel:${i.contact}`}
//           style={{ height: "33px", width: "100px" }}
//         >
//           <IoCall style={{ fontSize: "18px" }} />
//         </Button>
//       ))}
//     </div>
//   )
// }

// export default Test