import { HouseData, countUniqueHouses } from "~/domain";

describe("Test countUniqueHouses", () => {
  test("sample data", async () => {
    const houses: HouseData[] = [
      { id: "1", address: "1 Main St." },
      { id: "1", address: "1 Main Street" },
      { id: "2", address: "1 Main Street" },
      { id: "2", address: "1 Main Street West" },
      { id: "3", address: "2 Fifth Ave" },
      { id: "4", address: "3 Wall Street" },
    ];

    expect(countUniqueHouses(houses)).toEqual(3);
  });

  test("All the same", async () => {
    const houses: HouseData[] = [
      { id: "1", address: "1 Main St" },
      { id: "2", address: "1 Main St" },
      { id: "3", address: "1 Main St" },
      { id: "2", address: "1 Main St.12121212" },
      { id: "6", address: "1 Main St" },
    ];

    expect(countUniqueHouses(houses)).toEqual(1);
  });

  test("All difference", async () => {
    const houses: HouseData[] = [
      { id: "1", address: "1" },
      { id: "2", address: "2" },
      { id: "3", address: "3" },
      { id: "4", address: "4" },
    ];

    expect(countUniqueHouses(houses)).toEqual(4);
  });

  test("Just 2", async () => {
    const houses: HouseData[] = [
      { id: "1", address: "a" },
      { id: "2", address: "a" },
      { id: "3", address: "b" },
      { id: "3", address: "c" },
    ];

    expect(countUniqueHouses(houses)).toEqual(2);
  });
});
