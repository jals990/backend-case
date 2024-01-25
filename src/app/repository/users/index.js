import Model from '../../models/User';

export async function create(data) {
  const document = await Model.create(data);
  return document
}

export async function find(query, fields) {
  const document = await Model.find(query, fields);
  return document;
}

export async function findOne(query, fields) {
  const document = await Model.findOne(query, fields);
  return document;
}

export async function update(filter, update) {
  const document = await Model.findOneAndUpdate(filter, update)
  return document;
}

export async function destroy(id) {
  await id.destroy();
  return;
}
