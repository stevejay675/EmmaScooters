"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"; // Firebase Firestore methods
import { db } from "../../firebase/firebase"; // Import Firebase configuration
import "./ngobapage.css"; // CSS for styling

const NgobaPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contactsCollection = collection(db, "contacts");
        const contactSnapshot = await getDocs(contactsCollection);
        const contactList = contactSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setContacts(contactList);
      } catch (err) {
        setError("Error fetching contacts. Please try again later.");
        console.error("Error fetching documents: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // Function to format the timestamp
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Returns a human-readable date format
  };

  if (loading) return <p>Loading contacts...</p>;
  if (error) return <p>{error}</p>;

  // Separate contacts into two categories and sort by timestamp
  const kittyContacts = contacts
    .filter(contact => contact.gender)
    .sort((a, b) => b.timestamp?.toDate() - a.timestamp?.toDate());

  const scooterContacts = contacts
    .filter(contact => !contact.gender)
    .sort((a, b) => b.timestamp?.toDate() - a.timestamp?.toDate());

  return (
    <section className="ngoba-page">
      <div className="ngoba-container">
        <h2>Contacted People</h2>

        {/* Scooter Contacts Section */}
        <div className="contact-section">
          <h3>
            Scooter Inquiries 
            <span className="inquiry-count">{scooterContacts.length}</span>
          </h3>
          {scooterContacts.length === 0 ? (
            <p>No scooter inquiries available.</p>
          ) : (
            <ul className="contact-list">
              {scooterContacts.map(contact => (
                <li key={contact.id} className="contact-item">
                  <p><strong>Name:</strong> {contact.name}</p>
                  <p><strong>Email:</strong> {contact.email}</p>
                  <p><strong>Country:</strong> {contact.country}</p>
                  <p><strong>Message:</strong> {contact.message}</p>
                  <p><strong>Timestamp:</strong> {formatTimestamp(contact.timestamp?.toDate())}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Kitty Contacts Section */}
        <div className="contact-section">
          <h3>
            Kitty Inquiries 
            <span className="inquiry-count">{kittyContacts.length}</span>
          </h3>
          {kittyContacts.length === 0 ? (
            <p>No kitty inquiries available.</p>
          ) : (
            <ul className="contact-list">
              {kittyContacts.map(contact => (
                <li key={contact.id} className="contact-item">
                  <p><strong>Name:</strong> {contact.name}</p>
                  <p><strong>Email:</strong> {contact.email}</p>
                  <p><strong>Country:</strong> {contact.country}</p>
                  <p><strong>Message:</strong> {contact.message}</p>
                  <p><strong>Gender:</strong> {contact.gender}</p>
                  <p><strong>Timestamp:</strong> {formatTimestamp(contact.timestamp?.toDate())}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default NgobaPage;
