import React, { useRef, useEffect } from "react";
import "./Contact.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Footer from "./Footer";
import Navbar from "./Navbar";

// Fix Leaflet marker issue
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function Contact() {
  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.invalidateSize(); // forces map to render correctly
    }
  }, []);

  return (
    <>
      <Navbar />

      {/* Cover Image */}
      <div className="contact-cover">Get in Touch</div>

      <div className="contact-container">
        {/* Left: Company Info */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>📍 Alphanio Nexgen, No.39, 2nd Floor,</p>
          <p>Suite, 1263, NGEF Ln, Stage 1, Indiranagar</p>
          <p> Bengaluru, Karnataka 560038</p>
          <p>✉️ support@alphanio.com</p>
          <p>⏰ Mon – Fri, 9:00 AM – 6:00 PM</p>
        </div>

        {/* Right: Map */}
        <div className="contact-map">
          <MapContainer
            center={[12.978081621734207, 77.63984948465591]}
            zoom={17}
            style={{ height: "100%", width: "100%" }}
            whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[12.978081621734207, 77.63984948465591]}>
              <Popup>📍 Alphanio HQ - Bengaluru</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
