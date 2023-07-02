const con = require("../config/DB");
const path = require("path");

const { createTable } = require("../oprtations/create");
const {
  getElencoData,
  getMovieData,
  getPersonData,
} = require("../oprtations/getData");
const { insertData } = require("../oprtations/insert");

const express = require("express");
const operationsRouter = express.Router();

operationsRouter.get("/data", async (req, res) => {
  try {
    getElencoData(22);
    getMovieData(22);
    getPersonData(22);
  } catch (error) {
    console.log({ message: error });
  }
});

operationsRouter.get("/create", async (req, res) => {
  try {
    createTable();
  } catch (error) {
    console.log({ message: error });
  }
});

operationsRouter.get("/insert", async (req, res) => {
  try {
    insertData();
  } catch (error) {
    console.log({ message: error });
  }
});


module.exports = operationsRouter;