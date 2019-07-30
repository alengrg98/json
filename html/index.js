$(document).ready(function(){
    $("#img1").hide();
    $('#b1').click(function(){
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/users",  //"data1.json" //"http://10.0.2.64:8080/mydata.json.json" 
            /*success:function(data){
                //console.log(data);
                var output="<table class='table table-bordered'> <thead class='thead-light'><tr><th>NAME</th><th>USERNAME</th><th>EMAIL</th><th>STREET</th><th>SUITE</th><th>CITY</th><th>ZIPCODE</th></tr></thead>";
                for(var i in data )
                {
                    output+="<tr><td>"+data[i].name+"</td><td>"+data[i].username+"</td><td>"+data[i].email+"</td><td>"+data[i].address.street+"</td><td>"+data[i].address.suite+"</td><td>"+data[i].address.city+"</td><td>"+data[i].address.zipcode+"</td></tr>";

                }
                output+="</table>";
                $('.results').html(output);
                }
                

        });
    });
});

*/      
        beforeSend:function(){
            $("#img1").show();
        },
        success:function(data){
            $("#img1").hide();
            var output="";

            for(var i in data){
                output+='<br><div class="card">';
                output+='<h5 class="card-header">  Name:'+data[i].name+'</h5>';
                output+='<div class="card-body">';
                //output+='<p>Name:'+data[i].name+'</p>';
                output+='<p><b>Username:</b>'+data[i].username+'</p>';
                output+='<p><b>Email:</b>'+data[i].email+'</p>';
                output+='<p><b>Street:</b>'+data[i].address.street+'</p>';
                output+='<p><b>Suite:</b>'+data[i].address.suite+'</p>';
                output+='<p><b>City:</b>'+data[i].address.city+'</p>';
                output+='<p><b>Zipcode:</b>'+data[i].address.zipcode+'</p>';
                output+='<button class="btn btn-info " type="button">Contact Me</button>';
                output+='</div>    </div> <br>';
         
                

            }
            $('.results').html(output);

        }
    });
});
});