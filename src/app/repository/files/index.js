import Model from '../../models/File';

export async function create(data) {
  const document = await Model.create(data);
  return document
}

export async function find(query, fields) {
  const document = await Model.find({ isDeleted: false, ...query }, fields);
  return document;
}

export async function findOne(query, fields) {
  const document = await Model.findOne({ isDeleted: false, ...query }, fields);
  return document;
}

export async function update(query, update) {
  const document = await Model.findOneAndUpdate({ isDeleted: false, ...query }, update)
  return document;
}

export async function destroy(id) {
  await id.destroy();
  return;
}
