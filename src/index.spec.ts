import { House, countUniqueHouses } from "~/domain";

describe("Test countUniqueHouses", () => {
  test("sample data", async () => {
    const houses: House[] = [
      { id: "1", address: "1 Main St." },
      { id: "1", address: "1 Main Street" },
      { id: "2", address: "1 Main Street" },
      { id: "2", address: "1 Main Street West" },
      { id: "3", address: "2 Fifth Ave" },
      { id: "4", address: "3 Wall Street" },
    ];

    expect(countUniqueHouses(houses)).toEqual(3);
  });

  test("new data", async () => {
    const houses: House[] = [
      { id: "1", address: "1 Main St." },
      { id: "1", address: "1 Main St." },
    ];

    expect(countUniqueHouses(houses)).toEqual(0);
  });
});
