import * as Repository from '../../repository';
import { v4 as uuidv4 } from 'uuid';

export async function index(payload) {
  const { id } = payload?.body
 
  const exists = await Repository.user.findOne({ id: id })

  if(!exists) throw({ code: 404, message: 'usuário não existe' });

  try{
    await Repository.user.update(
      { id: id },
      { isDeleted: true, deletedAt: new Date() }
    )
    return { message: "Usuário deletado com sucesso "}
  }catch(err){
    console.log(err)
    throw(err)
  }
  
}
