// $(function () {
//   let requestUri =
//     _spPageContextInfo.webAbsoluteUrl +
//     "/_api/web/lists/getbyTitle('Unit')/items";
//   $.ajax({
//     url: requestUri,
//     type: "GET",
//     headers: {
//       accept: "application/json; odata=verbose",
//     },
//     success: onSuccess,
//     error: onError,
//   });
//   function onSuccess(data, request) {
//     let renderedHtml = "";
//     for (const info of data.d.results) {
//       console.log(info);
//       renderedHtml += 
//       `<div class="dropdown-main2">
//           <button class="btn-main2"> ${info.title}</h1>
//       </div>`;
//     }
//     $("#list-group__tools").append(renderedHtml);
//   }
//   function onError(error) {
//     console.log(error);
//   }
//   const getSubunitFromUnit=(Title)=>{

//   }
// });


document.addEventListener('DOMContentloaded', () => {
  var siteurl = _spPageContextInfo.webAbsoluteUrl;
  $.ajax({
    url: siteurl + "/_api/web/lists/getbytitle('Unit')/items",
    method: "GET",
    headers: { "Accept": "application/json; odata=verbose" },
    success: function (data) {
      for (const info of data.d.results) {
        //This section can be used to iterate through data and show it on screen
        console.log(info);
      }
    },
    error: function (data) {
      alert("Error: "+ data);
    }
  });


})


