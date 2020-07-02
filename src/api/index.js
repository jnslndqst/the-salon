import jsonData from "./salons.json";
export function getSalons() {
  return [...jsonData];
}

export function getSalon(id) {
  // eslint-disable-next-line
  return jsonData.find((x) => x.id == id);
}
