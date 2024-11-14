window.donhangg = function ($scope, $http, $routeParams, $rootScope,$cookies) {
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
    var url = "http://localhost:3000/donhang"
    // call Api
    $scope.donhang = undefined
    $http.get(url)
        .then(function (response) {
            $scope.donhang = response.data
            $rootScope.dh = response.data
        })
        .catch(function (error) {
            console.log("k gọi dc j")
        })
    $scope.thanhcong = function (id, index) {
        var a = $rootScope.dh[index].trangthai
        $rootScope.abce = a
        console.log($rootScope.abce)
        let check = confirm("Bạn có muốn xác nhận là đã hoàn thành đơn này không !")
        var trangthaimoi = "Thành công"
        if (check) {
            if ($rootScope.abce == "Đã huỷ") {
                alert("Đơn hàng này đã bị huỷ !")
            }
            else {
                let api = url + "/" + id
                $http.patch(api, { trangthai: trangthaimoi })
                    .then(function (response) {
                        alert("Xác nhận đơn hàng thành công");
                    })
            }

        }
    }
}