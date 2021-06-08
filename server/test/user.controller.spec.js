const request = require("supertest");
const server = require("./server");

describe("get user list", () => {
  it("user list", async () => {
    const res = await request(server).get(`/api/user/list`);
    expect(res.statusCode).toEqual(200);
  });
});
