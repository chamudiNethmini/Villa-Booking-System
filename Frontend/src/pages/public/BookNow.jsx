import { useSearchParams } from "react-router-dom";
import PageHero from "../../components/public/PageHero";
import BookingForm from "../../components/bookings/BookingForm";
import { addBooking } from "../../services/bookingService";

function BookNow() {
  const [searchParams] = useSearchParams();
  const selectedRoomId = searchParams.get("roomId") || "";

  const handleBookingSubmit = async (bookingData) => {
    try {
      const newBooking = await addBooking(bookingData);

      alert(
        `Booking request submitted successfully.\nYour Booking ID is: ${newBooking.id}\nYou can check the status in My Bookings.`
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <PageHero
        label="Booking"
        title="Book your villa stay"
        description="Send your booking request and our team will contact you soon to confirm availability."
      />

      <section className="section booking-section">
        <div className="section-container">
          <div className="booking-layout">
            <div className="booking-info-card">
              <span className="section-label">How It Works</span>
              <h2>Simple booking request process</h2>

              <div className="booking-steps">
                <div>
                  <span>01</span>
                  <p>Choose your preferred room.</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Submit your booking details.</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Villa owner confirms availability.</p>
                </div>
              </div>

              <p className="booking-note">
                This is a booking request only. Final confirmation will be shared
                by phone, email, or WhatsApp.
              </p>
            </div>

            <div className="booking-form-card">
              <h2>Booking Request Form</h2>
              <BookingForm
                selectedRoomId={selectedRoomId}
                onSubmit={handleBookingSubmit}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookNow;