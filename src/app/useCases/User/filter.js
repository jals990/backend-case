import * as Repository from '../../repository';
import * as Utils from '../../../utils';

export async function index(payload) {
  const { arg } = payload.query;

  const ignoreFields = {
    createdAt: 0,
    updatedAt: 0,
    auth: 0,
    isDeleted: 0,
    deletedAt: 0,
    _id: 0,
    __v: 0
  }

  try{

    const users = await Repository.user.find({
      $or: [
        { email: { $regex: arg }},
        { fullName: { $regex: arg }},
      ]
    }, ignoreFields )

    return { 
      total: users.length,
      users: users 
    }

  }catch(err){
    console.log(err)
    throw(err)
  }
  
}
