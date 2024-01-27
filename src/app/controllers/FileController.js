import * as UseCase from '../useCases/index';

class FileController {
  
  async delete(req, res) {
    try {
      const result = await UseCase.fileDelete.index(req)
      return res.status(200).json({ success: true, ...result })
    } catch (err) {
      return res.status(err.code).json({ success: false, message: err.message })
    }
  };

  async filter(req, res) {
    try {
      const result = await UseCase.fileFilter.index(req)
      return res.status(200).json({ success: true, ...result })
    } catch (err) {
      return res.status(err.code).json({ success: false, message: err.message })
    }
  };
 
  async update(req, res) {
    try {
      const result = await UseCase.fileUpdate.index(req)
      return res.status(200).json({ success: true, ...result })
    } catch (err) {
      return res.status(err.code).json({ success: false, message: err.message })
    }
  };

  async upload(req, res) {
    try {
      const result = await UseCase.fileUpload.index(req)
      return res.status(200).json({ success: true, ...result })
    } catch (err) {
      return res.status(err.code).json({ success: false, message: err.message })
    }
  };
 
}

export default new FileController();
