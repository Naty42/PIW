var express = require('express');
var router = express.Router();
var professorService = require("../services/professor.services")
const ps = new professorService()
var professorServiceMongo = require("../services/professor.services.mongo")


router.get(
  "/listar"
  ,
  (request, response, next) => {
    professorServiceMongo.list(request, response)
  }
)

router.post(
  "/register",
   function (request, response, next) {
    professorServiceMongo.register(request,response)
}
)

router.get(
  "/retrieve/:id",
  function (request, response, next) {
    professorServiceMongo.retrieve(request, response)
  }
)

router.put(
  "/update/:id",
  (request, response, next) => {
    professorServiceMongo.update(request, response)
  }
)

router.delete("/delete/:id",
  function (request, response, next) {
    professorServiceMongo.delete(request, response)
  }
)

module.exports = router;
