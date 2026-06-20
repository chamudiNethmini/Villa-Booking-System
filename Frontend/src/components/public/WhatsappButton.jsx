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
    >
      WhatsApp
    </a>
  );
}

export default WhatsAppButton;