window.adds = function ($scope, $http, $cookies, $rootScope,$location) {
    var a = document.getElementById("11");
    var b = document.getElementById("12");
    var c = document.getElementById("13");
    var d = document.getElementById("14");
    var e = document.getElementById("15");
    var f = document.getElementById("16");
    var g = document.getElementById("17");
    var h = document.getElementById("18");
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
    $scope.validate = function () {
        e.innerText = "";
        f.innerText = "";
        g.innerText = "";
        h.innerText = "";
    }
    $scope.data = {
        ten: "",
        taikhoan: "",
        matkhau: "",
        vaitro: ""
    }
    var url = "http://localhost:3000/nguoidung"
    $scope.save = function () {
        $http.get(url)
        .then(function (response) {
            var ten = response.data
            var checkten = ten.find(function (a) {
                return a.taikhoan === $scope.data.taikhoan
            })
            $rootScope.tenn = checkten.taikhoan
            console.log($rootScope.tenn)
            
        })
        .catch(function(error){
            console.log("Không gọi được gì")
        })
        var aha = /[!@#$%^&*(),.?":{}|<>]/.test(c.value);
        $rootScope.tk = $scope.data.taikhoan
        console.log($rootScope.tk)
        var ba = $rootScope.tenn;
        var bon = $rootScope.tk;
        if (a.value == "") {
            e.innerText = "Không được bỏ trống tên người dùng !"
        } else if (b.value == "") {
            f.innerText = "Không được bỏ trống tài khoản !"
        } else if (c.value.length <=4) {
                g.innerText = "Mật khẩu phải lớn hơn 4 ký tự và có ít nhất 1 ký tự đặc biệt !"
        } else if (d.value.length <= 0 || d.value !== "1" && d.value !== "2") {
            h.innerText = "Vai trò (điền 1 là Admin, điền 2 là Khách hàng) !"
        }
        else {

            if (ba === bon) {
                alert("Tài khoản này đã có người tạo rồi");
            } else {
                let data = angular.copy($scope.data)
                $http.post(url, data)
                    .then(function (response) {
                        alert("Them thanh cong")
                        $location.path("/qlnd")
                    })
                    .catch(function (error) {
                        alert("Them")
                        $location.path("/qlnd")
                    })
            }
        }
        $scope.delete = function (id) {
            let check = confirm("muon xoa khong")
            if (check) {
                let ai = url + "/" + id
                $http.delete(ai)
            }
        }
    }
}