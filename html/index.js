$(document).ready(function(){
    $('#b1').click(function(){
        $.ajax({
            type:"GET",
            url:"data1.json",//"https://jsonplaceholder.typicode.com/users.json",  //data1.json //"http://10.0.2.64:8080/mydata.json.json" 
            success:function(data){
                //console.log(data);
                var output="<table class='table table-bordered'> <thead class='thead-light'><tr><th>NAME</th><th>D.O.B</th><th>COLLEGE</th><th>MOBILE</th></tr></thead>";
                for(var i in data )
                {
                    output+="<tr><td>"+data[i].name+"</td><td>"+data[i].dob+"</td><td>"+data[i].college+"</td><td>"+data[i].mobile+"</td></tr>";

                }
                output+="</table>";
                $('.results').html(output);
                }

        });
    });
});