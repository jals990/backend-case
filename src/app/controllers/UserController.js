import * as UseCase from '../useCases/index';

class UserController {

  async create(req, res) {
    try {
      const result = await UseCase.userCreate.index(req)
      return res.status(201).json({ success: true, ...result })
    } catch (err) {
      return res.status(err.code).json({ success: false, message: err.message })
    }
  };

  async delete(req, res) {
    try {
      const result = await UseCase.userDelete.index(req)
      return res.status(200).json({ success: true, ...result })
    } catch (err) {
      return res.status(err.code).json({ success: false, message: err.message })
    }
  };

  async filter(req, res) {
    try {
      const result = await UseCase.userFilter.index(req)
      return res.status(200).json({ success: true, ...result })
    } catch (err) {
      return res.status(err.code).json({ success: false, message: err.message })
    }
  };
 
  async update(req, res) {
    try {
      const result = await UseCase.userUpdate.index(req)
      return res.status(200).json({ success: true, ...result })
    } catch (err) {
      return res.status(err.code).json({ success: false, message: err.message })
    }
  };

}

export default new UserController();
