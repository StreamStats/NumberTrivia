$(document).ready(function(event){
   $('#submit').click(function(event){
      getData();
      
   });
   $('#formThing').submit(function(event){
      event.preventDefault();
      getData();
   });
});
function getData(){
    $.getJSON('http://numbersapi.com/' + $('#inputText').val(), "/year?json",  function(data){
         var nNumber = data.number;
         var nDate = data.date;
         var nText = data.text;
         var Avatar = "https://beam.pro/api/v1/users/644520/avatar";
         var html = '<center><img src="' + Avatar + '"width="100px" height="100px" style="border:3px solid #fff">';
         html += '<h1><span class="label label-success">' + nNumber + '</h1>';
         html += '<h1><span class="label label-success">' + nDate + '</h1>';
         html += '<h1><span class="label label-success">' + nText + '</h1>';
         $('.profile').html(html);
      });;
}
