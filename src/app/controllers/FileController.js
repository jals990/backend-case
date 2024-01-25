import * as UseCase from '../useCases/index';

class FileController {
  
  async delete(req, res) {
    try {
      const result = await UseCase.fileDelete.index(req)
      return res.status(201).json(result)
    } catch (err) {
      return res.status(401).json({ success: false, message: err })
    }
  };

  async filter(req, res) {
    try {
      const result = await UseCase.fileFilter.index(req)
      return res.status(201).json(result)
    } catch (err) {
      return res.status(401).json({ success: false, message: err })
    }
  };
 
  async update(req, res) {
    try {
      const result = await UseCase.fileUpdate.index(req)
      return res.status(201).json(result)
    } catch (err) {
      return res.status(401).json({ success: false, message: err })
    }
  };

  async upload(req, res) {
    try {
      const result = await UseCase.fileUpload.index(req)
      return res.status(201).json(result)
    } catch (err) {
      return res.status(401).json({ success: false, message: err })
    }
  };
 
}

export default new FileController();
