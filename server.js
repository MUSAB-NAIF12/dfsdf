const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://forested-ten-milk.glitch.me/`); //اسم البروجيكت
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat"); //npm i dateformat
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//الكود

client.on("ready", () => {
  console.log("osama/osama");
});

const developers = ["689407063318986773"]; //id
const adminprefix = "$"; //برفكس
client.on("message", message => {
  var argresult = message.content
    .split(` `)
    .slice(1)
    .join(" ");
  if (!developers.includes(message.author.id)) return;

  if (message.content.startsWith(adminprefix + "p")) {
    client.user.setGame(argresult);
    message.channel.send(
      "**:white_check_mark: | The Playing Status Has Been Changed To : ``" +
        `${argresult}` +
        "``**"
    );
  } else if (message.content.startsWith(adminprefix + "w")) {
    client.user.setActivity(argresult, { type: "WATCHING" });
    message.channel.send(
      "**:white_check_mark: | The Watching Status Has Been Changed To : ``" +
        `${argresult}` +
        "``**"
    );
  } else if (message.content.startsWith(adminprefix + "l")) {
    client.user.setActivity(argresult, { type: "LISTENING" });
    message.channel.send(
      "**:white_check_mark: | The Listening Status Has Been Changed To : ``" +
        `${argresult}` +
        "``**"
    );
  } else if (message.content.startsWith(adminprefix + "s")) {
    client.user.setGame(argresult, "https://www.Twitter/GG5");
    message.channel.send(
      "**:white_check_mark: | تم التغيير للستريمنق : ``" +
        `${argresult}` +
        "``**"
    );
  }
});
client.login("Njg5NDA3MDYzMzE4OTg2Nzcz.Xs3bbQ.mQot_pfce89atu4JOfn-sQuXixo"); //بين التخصيص التوكن

//بلاينق : $p
// ستريمنق : $s
// ليسنينق : $l
/// وتشينق : $w

//بلاينق : $pl
// ستريمنق : $st
// ليسنينق : $ls
/// وتشينق : $wt