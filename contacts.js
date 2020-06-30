
const fs = require('fs');
const { promises: fsPromises } = fs;
const path = require('path');
const contactsPath = path.join(__dirname, "./db/contacts.json");
const { v4: uuidv4 } = require('uuid')


function listContacts() {
    fs.readFile(contactsPath, "utf-8", (err,data)=>{
        let contacts= JSON.parse(data)
         console.log(contacts)

    })
}




function getContactById(id) {
    fs.readFile(contactsPath, "utf-8",  (err,data)=> {
        JSON.parse(data).map((item) => {
           if(item.id===id){
               console.log(item)
           }
        })
    })

}


function removeContact(id) {
    fs.readFile(contactsPath, "utf-8",  (err,data)=> {
        const result = JSON.parse(data).filter(item => item.id!==id);
        fs.writeFile(contactsPath,JSON.stringify(result),()=>{
            console.log(result)
        })
    })


}





function addContact(name, email, phone) {
    let newContact={
        id:uuidv4(),
        name:name,
        email:email,
        phone:phone
    }
    fs.readFile(contactsPath, "utf-8", (err,data)=>{
        let contacts= JSON.parse(data)
        let updatedInfo= [...contacts,newContact]
        fs.writeFile(contactsPath, JSON.stringify(updatedInfo),
             ()=> {
                 console.log(updatedInfo)
         });
    })

}


module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}




