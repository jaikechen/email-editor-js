import express from 'express';
const bodyParser = require('body-parser');
const path = require('path');

import {render} from 'mjml-react';
import * as email from './email';
import * as api from "./lib/http";
import * as cheerio from "cheerio";


const port = 3000;
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', function (req,res){
  res.sendFile(path.join(__dirname , '../views/index.html'))
})
router.post('/save', async (req, res)=>{
  const {html}  = render(email.generate(req.body), {validationLevel: 'soft'});
  res.json({html});
})

router.get('/fetchUrl', async (req, res)=>{
  const url = req.query.url
  let response = {}
  try {
    response = await api.get(url, '')
  }catch {}
  const $ = cheerio.load(response)
  const title =
      $('meta[property="og:title"]').attr("content") ||
      $('meta[name="title"]').attr("content") || '';
  const description =
      $('meta[property="og:description"]').attr("content") ||
      $('meta[name="description"]').attr("content") || '';
  const image =
      $('meta[property="og:image"]').attr("content") ||
      $('meta[property="og:image:url"]').attr("content")||
      $('meta[property="og:image:url"]').attr("content") ||'';
  res.json({
    "success" : 1,
    "meta": {
      title,
      description,
      "image" : {
        "url" : image
      }
    }
  })
})
app.use('/assets',express.static(path.join(__dirname , '../assets')))
app.use("/",router)
app.listen(port, () => console.log(`Listening on port ${port}!`));
