import express, { response } from "express";
import axios from "axios";

const app=express();

const port = 8888;
const hostname = '127.0.0.1';

async function fetch(url,a) {
    try {
      const response = await axios.get(url,a);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; 
    }
  }
  
  
  app.get('/', async (req, res) => {
    try {
      const data = await fetch('https://picsum.photos/200',{responseType:"arraybuffer"});
      res.set("Content-Type", "image/jpeg")
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send('Error fetching data');
    }
  });

  app.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}`);
  });