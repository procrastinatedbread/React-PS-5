// export const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/users/status") {
//         resolve({
//           status: 200,
//           message: "Success",
//           data: {
//             users: [
//               { name: "Raju", status: "Online" },
//               { name: "Pankaj", status: "Offline" },
//               { name: "Sakshi", status: "Offline" },
//               { name: "Kishore", status: "Offline" }
//             ]
//           }
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "No users Found"
//         });
//       }
//     }, 2000);
//   });
// };
// 2
// export const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === 'https://example.com/api/products') {
//         resolve({
//           status: 200,
//           message: 'Success',
//           data: {
//             products: [
//               { name: 'Color Pencils', price: 50, quantity: 40 },
//               { name: 'Sketchpens', price: 110, quantity: 20 },
//               { name: 'Erasor', price: 20, quantity: 20 },
//               { name: 'Sharpner', price: 22, quantity: 30 },
//             ],
//           },
//         })
//       } else {
//         reject({
//           status: 404,
//           message: 'Items list not found.',
//         })
//       }
//     }, 2000)
//   })
// }
//3
// export const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/user") {
//         resolve({
//           status: 200,
//           message: "Success",
//           data: {
//             name: "Saroj",
//             image:
//               "https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg",
//             likes: 500,
//             comments: 10
//           }
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "user data not found."
//         });
//       }
//     }, 2000);
//   });
// };
// 4
// You can use your own images if you wish

// export const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === 'https://example.com/api/users') {
//         resolve({
//           status: 200,
//           message: 'Success',
//           data: [
//             {
//               name: 'Saroj',
//               image:
//                 'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
//               likes: 500,
//               comments: 10,
//             },
//             {
//               name: 'Meeta',
//               image:
//                 'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
//               likes: 200,
//               comments: 1,
//             },
//             {
//               name: 'Alia',
//               image:
//                 'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
//               likes: 100,
//               comments: 5,
//             },
//           ],
//         })
//       } else {
//         reject({
//           status: 404,
//           message: 'users data not found.',
//         })
//       }
//     }, 2000)
//   })
// }
//6
// export const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/userchat") {
//         resolve({
//           status: 200,
//           message: "Success",
//           data: [
//             {
//               name: "Alia",
//               messages: [
//                 {
//                   from: "Alia",
//                   message: "Good Morning"
//                 },
//                 {
//                   from: "Ranvir",
//                   message: "Good Morning, How are you?"
//                 }
//               ]
//             },
//             {
//               name: "Jeena",
//               messages: [
//                 {
//                   from: "Jeena",
//                   message: "When is the meeting scheduled?"
//                 },
//                 {
//                   from: "Seema",
//                   message: "It is at 10AM tomorrow."
//                 }
//               ]
//             },
//             {
//               name: "Abhay",
//               messages: [
//                 {
//                   from: "Abhay",
//                   message: "Have you found a house yet?"
//                 },
//                 {
//                   from: "John",
//                   message: "No luck yet, still searching."
//                 },
//                 {
//                   from: "Abhay",
//                   message:
//                     "Hey, an apartment just got vacant in my bulding. Do you wanna have a look?"
//                 }
//               ]
//             }
//           ]
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "users chat not found."
//         });
//       }
//     }, 2000);
//   });
// };
//7
export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/comments") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            comments: [
              {
                name: "Raju",
                text: "Hello how are you long time no see!!!"
              },
              { name: "Pankaj", text: "Party when??" },
              { name: "Sakshi", text: "Where are you currently staying" },
              { name: "Kishore", text: "Hello Buddy!!" }
            ]
          }
        });
      } else {
        reject({
          status: 404,
          message: "No comments Found"
        });
      }
    }, 2000);
  });
};
