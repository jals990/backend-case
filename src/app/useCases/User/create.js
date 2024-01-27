import * as Repository from '../../repository';
import * as Utils from '../../../utils';

export async function  index(payload) {
  const { access, fullName, email, password } = payload?.body

  const exists = await Repository.user.findOne({ email: email })

  if(exists) throw({ code: 400, message: 'Usuário já existe na base'}) 

  try{
    const id = Utils.helpers.id();

    await Repository.user.create({
      id: id, 
      access: access,
      fullName: fullName,
      email: email,
      auth: {
        password: password
      }
    })
    return { message: 'Usuário criado com sucesso.'}
  }catch(err){
    console.log(err)
    throw(err)
  }
  
}
