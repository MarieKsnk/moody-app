import ImageKit from "imagekit";

const ImageKit = require("imagekit");
require("dotenv").config();

const imagekit = new ImageKit({
  publicKey: "public_8EaTLPNxNHJtHEnQk7jBRDAkdBs=",
  privateKey: "private_Z4aN//g0BUccSc+8JxnxcU6STo0=",
  urlEndpoint: "https://ik.imagekit.io/moody/",
});

module.exports = imagekit;
