import { connect } from "mongoose";

const options = {
  user: 'root',
  pass: 'root',
  ddName: 'maintenances'
}

connect('mongodb://localhost:27017/', options);