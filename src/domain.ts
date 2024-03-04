export type HouseData = {
  id: string;
  address: string;
};

class House {
  private ids: Map<string, boolean>;
  private addresses: Map<string, boolean>;

  private constructor(id: string, address: string) {
    this.ids = new Map<string, boolean>([[id, true]]);
    this.addresses = new Map<string, boolean>([[address, true]]);
  }

  static create(id: string, address: string) {
    return new House(id, address);
  }

  update(id: string, address: string) {
    this.ids.set(id, true);
    this.addresses.set(address, true);
  }

  isTheSame(id: string, address: string) {
    return this.ids.has(id) || this.addresses.has(address);
  }
}

class HouseManager {
  private pool: House[];

  private constructor() {
    this.pool = [];
  }

  static create() {
    return new HouseManager();
  }

  addHouseIfNotExist(houseId: string, houseAddress: string) {
    const found = this.pool.find((h) => h.isTheSame(houseId, houseAddress));

    if (found) {
      found.update(houseId, houseAddress);
      return;
    }

    this.pool.push(House.create(houseId, houseAddress));
  }

  countHouse() {
    return this.pool.length;
  }
}

export function countUniqueHouses(houses: HouseData[]) {
  const hm = HouseManager.create();

  for (const current of houses) {
    hm.addHouseIfNotExist(current.id, current.address);
  }

  return hm.countHouse();
}
