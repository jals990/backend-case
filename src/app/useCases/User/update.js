import * as Repository from '../../repository';
import { v4 as uuidv4 } from 'uuid';

export async function index(payload) {
  const { id, access, fullName, email, password } = payload?.body
 
  const exists = await Repository.user.findOne({ id: id })

  if(!exists) throw({ code: 404, message: 'usuário não existe' });

  let update = {};

  if(access) update.access = access;
  if(fullName) update.fullName = fullName;
  if(email) update.email = email;
  if(password) update.auth.password = password;

  try{
    await Repository.user.update(
      { id: id },
      { ...update }
    )
    return { message: "Usuário alterado com sucesso "}
  }catch(err){
    console.log(err)
    throw(err)
  }
  
}
