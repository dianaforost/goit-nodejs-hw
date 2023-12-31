const fs = require('fs/promises');
const path = require('path');
const contactsPath = path.join(__dirname, 'db/contacts.json');
async function listContacts(){
    const result = (await fs.readFile(contactsPath, "utf-8")).toString()
    console.log(result);
}
async function getContactById(contactId){
    try{
      const results = (await fs.readFile(contactsPath, "utf-8"))
    const contacts = JSON.parse(results);
    const contact = contacts.find((c) => c.id === contactId)
    if (contact) {
        console.log(contact);
      } else {
        console.log('Contact not found');
      }
    }
    catch(e) {
      console.log(e);
    }
}
async function removeContact(contactId){
    try{
      const results = (await fs.readFile(contactsPath, "utf-8"))
    const contacts = JSON.parse(results);
    const updatedContacts = contacts.filter((c) => c.id !== contactId)
    const append = await  fs.writeFile(contactsPath, JSON.stringify(updatedContacts), 'utf8')
    console.log(updatedContacts);
    }
    catch(e) {
      console.log(e);
    }
}
async function addContact(name, email, phone) {
    try{
      const results = (await fs.readFile(contactsPath, "utf-8"))
    const contacts = JSON.parse(results);
    const newContact = {id: Date.now().toString(), name, email,phone}
    contacts.push(newContact)
    const write = fs.writeFile(contactsPath, JSON.stringify(contacts), "utf-8");
    console.log(JSON.stringify(contacts));
    }
    catch (e){
      console.log(e);
    }
  }
module.exports = {
    listContacts,getContactById,removeContact,addContact
}