export const unformatTaxId = (value) =>
  value.toString().replace(/\D/g, "");

export const unformatPhone = (value) =>
  value.toString().replace("+55", "");

export const unformatBirthday = (value) =>
  value.toISOString().substring(0, 10);
