$(document).ready(function(){
    $("#serialize").click(function(){
        var myobj = {Name:$("#Name").val(),Comment:$("#Comment").val(),Moms_Name:$("#mothersName").val()};
        jobj = JSON.stringify(myobj);
        $("#json").text(jobj);
        var url = "comment";
 $.ajax({
  url:url,
  type: "POST",
  data: jobj,
  contentType: "application/json; charset=utf-8",
  success: function(data,textStatus) {
      $("#done").html(textStatus);
  }
})

    });


   $("#getThem").click(function() {
      $.getJSON('comment', function(data) {
        console.log(data);
        var everything = "";
	//var everything = "<ul class = 'commentList'>";
        for(var comment in data) {
          com = data[comment];
          everything += "<div class ='commentItem'><strong>Name:</strong> " + com.Name + " -- <strong>Comment:</strong> " + com.Comment + " ----<strong>Mom's Name:</strong> "+ com.Moms_Name +"</div>";
        }
        //everything += "</ul>";
        $("#comments").html(everything);
      })
    })

});
