import { getSomethingFromApi } from "./service.js";

import { storeFileOnApi } from "./service.js";

console.log("in ui");


const text = await getSomethingFromApi();
console.log(text);

// const setupForm = () => {
//     const formElement = document.getElementById("fileUploadForm");
//     formElement.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const fileUploadElement = document.getElementById("fileUpload");


//         const file = fileUploadElement.files[0]
//         console.log(file);

//         function getBase64(file) {
//             var reader = new FileReader();
//             reader.readAsDataURL(file);
//             reader.onload = function () {
//               console.log(reader.result);

//               return reader.result
//             };
//             reader.onerror = function (error) {
//               console.log('Error: ', error);
//             };
//          }
         
//          (getBase64(file));
         
//     });
// }

// setupForm();

storeFileOnApi("some random string")