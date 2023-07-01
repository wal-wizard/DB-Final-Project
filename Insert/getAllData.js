const axios = require("axios");
const fs = require("fs");
const path = require("path");
const  { format, check }  = require('prettier-package-json');

const getAllData = async () => {
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&primary_release_year=1990&sort_by=popularity.desc";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjkyZDJkNzAwMGU1N2EyNzk1ZDgyMzZmYzMyMGViOSIsInN1YiI6IjY0OWY1NWI1ODFkYTM5MDBlYTdiOWEzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fECK1TJtzJ0PMRYjYzh88u_J5I_BhchgfMNt_am0a4A",
    },
  };

  axios
    .get(url, options)
    .then((result) => {
      console.log("Get All Data with Success");

      var data = {};
      data.table = [];
      for (i = 0; i < 100; i++) {
        var obj = {
          info: result.data,
        };

        data.table.push(obj);
      }
      let jsonDAta = JSON.stringify(data.table);

      fs.writeFile("Filmes.json", jsonDAta, function (err) {
        if (err) throw err;
        console.log("complete");
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAllData
};
