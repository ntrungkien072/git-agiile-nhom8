window.fills = function($scope,$http,$cookies,$rootScope){
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
    // call Api
    $scope.ds = undefined
        $http.get(url)
        .then(function(response){
            $scope.ds = response.data
        })
        .catch(function(error){
            console.log("k gọi dc j")
        })
        $scope.delete = function (id) {
            let check = confirm("Bạn có muốn xóa hay không")
            if (check) {
                let api = url + "/" + id
                $http.delete(api)
                    .then
    
            }
        }
}