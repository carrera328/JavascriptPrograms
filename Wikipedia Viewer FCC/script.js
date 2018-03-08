$(document).ready(function(){
    
     $("#wikiButton").click(function(){
        $("#target").empty();
        $("div").removeClass("text-center");
        
       var input = $("#input").val();
       
         var api = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+ input + "&callback=?";
         
         // call based on input
         $.getJSON(api, function(data){
             var description = data[2]
             ;
             console.log(description)
             console.log(data);
             for (var i = 0; i < data[1].length; i++){
                 
                 content = $("<a href =" + data[3][i]+"></a>");
                 content.append("<div>"+data[1][i]+"</div>");
                 
                 $("#target").append(content);
                 $("#target").append(data[2][i] + "<br>").css("font-size", "1.7em");
                 $("#target").append("<br>");
                 
                 
             }
         });
     });
 });