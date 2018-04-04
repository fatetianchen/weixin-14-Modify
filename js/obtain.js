$.ajax({
		url: 'https://weixin-test-ziweigamepoch.c9users.io/api/accounts/',
		method:'GET',
		dataType: "json",
		data:{},//false true
		success: function(data){
			console.log(data)
//			for(var i in data) { 
//				if(data[i].unionid == user){
//					user = user+w+e;
////					console.log(user);
//				}
//			}
			
		},					
		error : function(err) {
			console.log(err);
		}
		});