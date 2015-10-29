$(document).ready(function(){
    
    var index = function (){
            $.ajax({
                method: 'GET',
                url: 'articulos.json',
                datatype: 'json',
                data: {},
                success: function(data){
                    $.each(data, function(index, article){
                        $('#articles').append('<div><h1>' + article.name+ '</h1><p>' + article.price +'</p></div>');
                    });
                }
        
            });
            
            
            
    }
        
    $('#nuevo').click(function(){
        
                $.ajax({
                    method: 'POST',
                    url: '/articulos',
                    datatype: 'json',
                    data: {articulo: {name: $('#name').val(), price: $('#price').val()}},
                    success: function(data){
                        $('#name').val(''), $('#price').val('');
                        $('#articles').empty();
                        index();
                    }
                    
                });
                
                return false;
                
            });
            
            index();
    
});
