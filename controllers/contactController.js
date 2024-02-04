const Contact = require('../model/contactModel')

// Middle man function for getting contact by id, updated by id, and deleting by id
const findContactById = async (req, res, next) => {
    let contact
    try {
        contact = await Contact.findById(req.params.id)
        if (contact == null) {
            return res.status(404).json({ message: "Sorry, a contact with this id does not exist" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.contact = contact
    next()
}

const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find()
        res.json(contacts)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getContactById = (req, res) => {
    res.json(res.contact)
}

const createContact = async (req, res) => {
    const contact = new Contact(req.body)

    try {
        const newContact = await contact.save()
        res.status(201).json(newContact.id)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const updateContact = async (req, res) => {
    const updatedContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        birthday: req.body.birthday,
        favoriteColor: req.body.favoriteColor
    }
    try {
        await res.contact.replaceOne(updatedContact)
        res.status(204).json({ message: "Contact was successfully updated" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
    
}

const deleteContact = async (req, res) => {
    try {
        await res.contact.deleteOne()
        res.status(200).json({ message: "Contact was successfully deleted" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    getContacts,
    findContactById,
    getContactById,
    createContact,
    updateContact,
    deleteContact
}