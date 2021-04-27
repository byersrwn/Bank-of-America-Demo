

const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var fs = require('fs');
var BoxSDK = require('box-node-sdk');

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = mm + '-' + dd + '-' + yyyy;

var sdk = new BoxSDK({
  clientID: 'gr1q8eltx0xe4jkm0w41toy4f9yi8p8n',
  clientSecret: 'GuVXWvkhCwn00k7L6x1H1muirXwr1nl5'
});

var client = sdk.getBasicClient('rbBcwDnamXgAEjx3l1f2mxzg9oNsKwns');

client.users.get(client.CURRENT_USER_ID)
	.then(user => console.log('Hello', user.name, '!'))
	.catch(err => console.log('Got an error!'));

  app.post('/loanStatus', (req, res) => {
    console.log(req.body.folderID + " API folderID");
    client.folders.getMetadata(req.body.folderID, client.metadata.scopes.ENTERPRISE, 'loandocs')
    .then(metadata => {res.send({status: metadata.status})})
    .catch(matadata => console.log("error returning metadata"))});

  app.post('/folderCreation', (req, res) => {
    const folderName = req.body.firstname + " " + req.body.lastname + " " + req.body.loantype + " " + today;
    const internalFolderName = req.body.firstname + " " + req.body.lastname;
    console.log(folderName);
    var metadataValues = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      loantype: req.body.loantype,
      date: today,
      notes: req.body.notes,
      status: "Processing"
    };
    var stream = fs.createReadStream('/Users/willb/BackEnd2/Example.txt');
    client.folders.create('136228528951', internalFolderName)
    .then(folderInfo => {
      client.folders.create(folderInfo.id, folderName)
      .then(folderInfo2 => {
        client.folders.setMetadata(folderInfo2.id, client.metadata.scopes.ENTERPRISE, 'loandocs', metadataValues)
        .then(metadata => {
        console.log("Added metadata to new folder");
        client.metadata.createCascadePolicy('enterprise', 'loandocs', folderInfo2.id)
        .then(cascadePolicy => {
          client.files.uploadFile('136303272366', "Example.txt", stream)
          .then(response => console.log("uploaded example text file"))});
        res.send({folderID: folderInfo2.id})})
        .catch(ret => console.log("Failed to create folder"))
    })
  });});

  
app.listen(5000, () =>
  console.log(`Example app listening on port ${5000}!`),
);