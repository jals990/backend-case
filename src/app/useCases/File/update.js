import * as Repository from '../../repository';
import { v4 as uuidv4 } from 'uuid';

export async function index(payload) {
  const data = payload?.body || payload

  try{
    console.log(data);
    return { route: "update "}
  }catch(err){
    console.log(err)
    throw(err)
  }
  
}
