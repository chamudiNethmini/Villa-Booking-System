import whatsappIcon from "../../assets/images/whatsapp-icon.png";

function WhatsAppButton() {
  const phoneNumber = "94725901592";
  const message = "Hello, I would like to know more about the villa booking.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-btn"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <img
        src={whatsappIcon}
        alt=""
        className="whatsapp-icon"
        aria-hidden="true"
      />
    </a>
  );
}

export default WhatsAppButton;
