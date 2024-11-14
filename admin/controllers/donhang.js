window.donhang = function ($scope, $http, $routeParams, $rootScope,$cookies) {
    var bbbb = $cookies.getObject('now')
    var aaaa = $cookies.getObject('id')
    var cccc = $cookies.getObject('cv')
    $rootScope.currentUser = aaaa
    console.log($rootScope.currentUser)
    if(cccc == "1"){
        document.getElementById("admin").innerText = "𝓠𝓾𝓪𝓷𝓰𝓝𝓰𝓾𝔂𝓮𝓷"
        document.getElementById("ab").innerText = "ADMIN - " + aaaa
    }else{
        document.getElementById("admin").innerText = ""
        document.getElementById("ab").innerText = "KHÁCH HÀNG"
    }
    var url = "http://localhost:3000/donhang"
    var geton = url + "?idkhachhang=" + $rootScope.currentUser
    // call Api
    $scope.donhang = undefined
    $http.get(geton)
        .then(function (response) {
            $scope.donhang = response.data
            $rootScope.dh = response.data
        })
        .catch(function (error) {
            console.log("k gọi dc j")
        })
    $scope.delete = function (id, index) {
        console.log(id)
        console.log(index)
        var a = $rootScope.dh[index].trangthai
        $rootScope.abc = a
        console.log($rootScope.abc)
        let check = confirm("Bạn có muốn huỷ hay không")
        var trangthaimoi = "Đã huỷ"
        if (check) {
            if ($rootScope.abc == "Đã huỷ") {
                alert("Bạn đã huỷ đơn hàng này rồi")
            }
            else {
                let api = url + "/" + id
                $http.patch(api, { trangthai: trangthaimoi })
                    .then(function (response) {
                        alert("Huỷ đơn hàng thành công");
                        $http.path("/trang-nguoi-dung")
                    })
            }

        }
    }
}