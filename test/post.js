import test from 'jtm';

const { nats } = test;

test("post", async function (t) {

   const data = {
      code: 0,
      data: "create"
   };

   const result = await nats.post("/user", data);

   t.deepEqual(result, data);

});
