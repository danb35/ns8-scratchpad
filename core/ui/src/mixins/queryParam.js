// let ns8lib = window.ns8lib;

// //// REMOVE FILE, USE PUBLIC/LIBS

// export default {
//   name: "QueryParamService",
//   methods: {
//     // used by NS8 core and external apps to dynamically register a watch for every object inside data.q
//     watchQueryData(context) {
//       Object.keys(context.q).forEach((dataItem) => {
//         context.$watch("q." + dataItem, function () {
//           console.log("watch", dataItem); ////
//           ns8lib.dataToQueryParams(context);
//         });
//       });
//     },
//     queryParamsToDataForCore(context, queryParams) {
//       Object.keys(context.q).forEach((dataItem) => {
//         if (typeof queryParams[dataItem] !== "undefined") {
//           context.q[dataItem] = ns8lib.getTypedValue(queryParams[dataItem]);
//         }
//       });
//     },
//     getQueryParamsForApp() {
//       if (
//         !window.location.hash.includes("?") ||
//         window.location.hash.split("?").length < 2
//       ) {
//         return {};
//       }

//       const params = new URLSearchParams(window.location.hash.split("?").pop());
//       let queryParams = {};

//       params.forEach((value, key) => {
//         if (key) {
//           queryParams[key] = value;
//         }
//       });
//       return queryParams;
//     },
//   },
// };
