import { maxItemAssociation } from "./maxItemAssociation";
import { orders } from "./data";

describe("test maxItemAssociation function", () => {
  it("should return string[] recommendations list", () => {
    expect(maxItemAssociation(orders)).toStrictEqual(["a", "b", "c", "q"]);
  });
});
