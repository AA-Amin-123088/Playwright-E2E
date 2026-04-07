// import { test, request, APIRequestContext } from '@playwright/test';

// let reqContext2: APIRequestContext;
// test.beforeAll("Before all the test", async () => {
//   reqContext2 = await request.newContext({
//     baseURL: "https://restful-booker.herokuapp.com",
//     extraHTTPHeaders:{
//       Accept:"application/json"
//     }
//   });
// });

// test('Practice-1',async ({request}) => {
//   const resp1=await request.get("https://restful-booker.herokuapp.com/booking",{
//     headers:{
//       Accept:"application/json"
//     }
//   });
//   console.log(await resp1.json());
// });
// test('Practice-2',async () => {
//   const reqContext=await request.newContext({
//     baseURL:"https://restful-booker.herokuapp.com",
//     extraHTTPHeaders:{
//       Accept:"application/json"
//     }
//   });
//   const resp2=await reqContext.get("/booking");
//   console.log(await resp2.json());
// });
