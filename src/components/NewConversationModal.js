import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { contacts } from './ContactsProvider'

export default function NewConversationModal({ id }) {
  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {Contacts.map(contact => (

          ))}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}
