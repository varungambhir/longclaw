$('#facebook').addClass('active item');
	
 var knuth1=angular.module('knuth');
  knuth.controller('fbalbum',[ '$scope' , '$http' ,function($scope, $http) {
 	
 	$scope.gid=333283916693071;
 	var fb="https://graph.facebook.com/v2.5/";

    var gidd=333283916693071;
    var access="CAACEdEose0cBAM1LZCajaiJiZCLjdayMZBo8yEuL1CI02MwbjZAVTV2oJxVtjVDZC5v3CzGYHHMMnzdUlV4GSXlETAovZB2c6dSYOYCrqRda0pucEnwreOba2yC6yn2t1FAsAlZCibEw0HT2nOmAbH9qHIiVYunXrQa2Rnn8wBjqkZAdm2haP77VLxUtErRIdM7J3IuRoCM4nLiUJ6KkWZClA";
    $scope.accesstoken=access;
    var url=fb+gidd+"/albums?access_token="+access;
   $http.get(url)
   .then(function (response) {
   console.log(response);
   // $scope.pp=response.data.first_name;
   $scope.albums=response.data.data;
   console.log($scope.albums);
   // for(int i=0;i<albums.length;i++)
   // {
   // 	albums[i].num=10;
   // }

angular.forEach($scope.albums, function(value, key){
	var url1=fb+value.id+"?fields=count,cover_photo&access_token="+access;
    $http.get(url1)
   .then(function (response) {

   	value.num=response.data.count;
   	var cpid=response.data.cover_photo.id;
   	// alert(cpid);

   	var url2=fb+cpid+"?fields=picture&access_token="+access;
   	$http.get(url2)
   	.then(function(response){
   		value.cpid=cpid;
   		value.cpsrc=response.data.picture;
   		value.cpic=fb+cpid+"/picture?access_token="+access;
   		console.log(value.cpic);
   	})



   })


});

})

}]);