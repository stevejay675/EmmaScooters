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

  // Separate contacts into three categories
  const steveContacts = contacts
    .filter(contact => !contact.category && !contact.gender) // Steve Inquiries: No category and no gender
    .sort((a, b) => b.timestamp?.toDate() - a.timestamp?.toDate());

  const kittenContacts = contacts
    .filter(contact => contact.gender) // Kitten Inquiries: Has a gender field
    .sort((a, b) => b.timestamp?.toDate() - a.timestamp?.toDate());

  const aAndJContacts = contacts
    .filter(contact => contact.category) // A&J Inquiries: Has a product category field
    .sort((a, b) => b.timestamp?.toDate() - a.timestamp?.toDate());

  return (
    <section className="ngoba-page">
      <div className="ngoba-container">
        <h2>Contacted People</h2>

        {/* Steve Contacts Section */}
        <div className="contact-section">
          <h3>
            Steve Inquiries
            <span className="inquiry-count">{steveContacts.length}</span>
          </h3>
          {steveContacts.length === 0 ? (
            <p>No Steve inquiries available.</p>
          ) : (
            <ul className="contact-list">
              {steveContacts.map(contact => (
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

        {/* Kitten Contacts Section */}
        <div className="contact-section">
          <h3>
            Kitten Inquiries
            <span className="inquiry-count">{kittenContacts.length}</span>
          </h3>
          {kittenContacts.length === 0 ? (
            <p>No kitten inquiries available.</p>
          ) : (
            <ul className="contact-list">
              {kittenContacts.map(contact => (
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

        {/* A&J Contacts Section */}
        <div className="contact-section">
          <h3>
            A&J Inquiries
            <span className="inquiry-count">{aAndJContacts.length}</span>
          </h3>
          {aAndJContacts.length === 0 ? (
            <p>No A&J inquiries available.</p>
          ) : (
            <ul className="contact-list">
              {aAndJContacts.map(contact => (
                <li key={contact.id} className="contact-item">
                  <p><strong>Name:</strong> {contact.name}</p>
                  <p><strong>Email:</strong> {contact.email}</p>
                  <p><strong>Country:</strong> {contact.country}</p>
                  <p><strong>Message:</strong> {contact.message}</p>
                  <p><strong>Category:</strong> {contact.category}</p>
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
