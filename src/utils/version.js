const pjson = require('../../package.json');

class Version {

  async valid(_, res) {
    res.status(200).send({ "Name": pjson.name, "Current Version":  pjson.version })
  }
}

export default new Version();
