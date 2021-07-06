import { Client } from "../src/index"

describe('Client Basics', () => {
  it('initialize client', () => {
    expect(() => {
      new Client({ auth: "foo" })
    }).not.toThrow();
  });
});
