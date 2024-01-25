import * as UseCase from '../useCases/index';

class UserController {

  async create(req, res) {
    try {
      const result = await UseCase.userCreate.index(req)
      return res.status(201).json(result)
    } catch (err) {
      return res.status(401).json({ success: false, message: err })
    }
  };

  async delete(req, res) {
    try {
      const result = await UseCase.userDelete.index(req)
      return res.status(201).json(result)
    } catch (err) {
      return res.status(401).json({ success: false, message: err })
    }
  };

  async filter(req, res) {
    try {
      const result = await UseCase.userFilter.index(req)
      return res.status(201).json(result)
    } catch (err) {
      return res.status(401).json({ success: false, message: err })
    }
  };
 
  async update(req, res) {
    try {
      const result = await UseCase.userUpdate.index(req)
      return res.status(201).json(result)
    } catch (err) {
      return res.status(401).json({ success: false, message: err })
    }
  };

}

export default new UserController();
