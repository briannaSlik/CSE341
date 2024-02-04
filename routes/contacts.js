const routes = require('express').Router()
const contact = require("../controllers/contactController")

routes.get('/', contact.getContacts)
routes.get('/:id', contact.findContactById, contact.getContactById)
routes.post('/', contact.createContact)
routes.put('/:id', contact.findContactById, contact.updateContact)
routes.delete('/:id', contact.findContactById, contact.deleteContact)

module.exports = routes