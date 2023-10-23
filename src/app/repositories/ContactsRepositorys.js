const { v4 } = require("uuid");

let contacts = [
  {
    id: v4(),
    name: "Thiago",
    email: "thiago@email,",
    phone: "31313131",
    category_id: v4(),
  },
  {
    id: v4(),
    name: "Jose",
    email: "jose@email,",
    phone: "31313131",
    category_id: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }
  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }
  create({ name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };
      contacts.push(newContact);
      resolve(newContact);
    });
  }
  update(id, { name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };
      contacts = contacts.map((contact) => {
        return contact.id === id ? updatedContact : contact;
      });

      resolve(updatedContact);
    });
  }
  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();
