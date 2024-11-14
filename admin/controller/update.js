
window.update = function ($scope, $http, $routeParams, $location, $cookies, $rootScope) {
    var bbbb = $cookies.getObject('now')
    var aaaa = $cookies.getObject('id')
    var cccc = $cookies.getObject('cv')
    $rootScope.currentUser = aaaa
    console.log($rootScope.currentUser)
    if (cccc == "1") {
        document.getElementById("admin").innerText = "𝓚𝓲𝓮𝓷𝓝𝓰𝓾𝔂𝓮𝓷"
        document.getElementById("ab").innerText = "ADMIN - " + aaaa
    } else {
        document.getElementById("admin").innerText = ""
        document.getElementById("ab").innerText = "KHÁCH HÀNG"
    }
    var a = document.getElementById("1");
    var b = document.getElementById("2");
    var c = document.getElementById("3");
    var d = document.getElementById("4");
    var e = document.getElementById("5");
    var f = document.getElementById("6");
    var g = document.getElementById("7");
    var h = document.getElementById("8");
    var i = document.getElementById("9");
    var k = document.getElementById("10");
    var url = "http://localhost:3000/sanpham"
    var urlGetOn = url + "/" + $routeParams.id
    $scope.data = {
        ten: "",
        loai: "",
        card: 0,
        atm: 0,
        anh: ""
    }
    $http.get(urlGetOn)
        .then(function (response) {
            $scope.update = response.data
        })
    $scope.update1 = function () {
        if (a.value == "") {
            f.innerText = "Không được bỏ trống tên súng"
        } else if (b.value == "") {
            g.innerText = "Không được bỏ trống loại súng"
        } else if (c.value < 1000) {
            h.innerText = "Giá tiền phải lớn hơn 1000"
        } else if (d.value < 1000) {
            i.innerText = "Giá tiền phải lớn hơn 1000"
        } else if (e.value == "") {
            k.innerText = "Không được bỏ trống link ảnh"
        }
        else {
            if ($rootScope.showw === $rootScope.currentUser) {
                let data = angular.copy($scope.update)
                $http.patch(urlGetOn, data)
                    .then(function (response) {
                        alert("thanh cong")
                        $location.path("/qlsp")
                    })

            } else {
                alert("Bạn không thể sửa sản phẩm không phải là bạn tạo !")
                $location.path("/qlsp")
            }
        }
    }
    $scope.validate = function () {
        f.innerText = "";
        g.innerText = "";
        h.innerText = "";
        i.innerText = "";
        k.innerText = "";
    }
}