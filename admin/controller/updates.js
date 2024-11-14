window.updates = function ($scope, $http, $routeParams, $location,$cookies,$rootScope) {
    var bbbb = $cookies.getObject('now')
    var aaaa = $cookies.getObject('id')
    var cccc = $cookies.getObject('cv')
    $rootScope.currentUser = aaaa
    console.log($rootScope.currentUser)
    if(cccc == "1"){
        document.getElementById("admin").innerText = "𝓚𝓲𝓮𝓷𝓝𝓰𝓾𝔂𝓮𝓷"
        document.getElementById("ab").innerText = "ADMIN - " + aaaa
    }else{
        document.getElementById("admin").innerText = ""
        document.getElementById("ab").innerText = "KHÁCH HÀNG"
    }
    var url = "http://localhost:3000/nguoidung"
    var urlGetOn = url + "/" + $routeParams.id
    $scope.data = {
        ten: "",
        taikhoan: "",
        matkhau: "",
        chucvu: ""
    }
    $http.get(urlGetOn)
        .then(function (response) {
            $scope.update1 = response.data
        })
        $scope.update2 = function(){
            let data = angular.copy($scope.update1)
            $http.patch(urlGetOn, data)
            .then(function(response){
                alert("thanh cong")
                $location.path("/qlnd")
            })
        }
}