window.login = function ($scope, $http, $location, $rootScope, $cookies) {
    var url = "http://localhost:3000/nguoidung"
    var id = undefined
    $scope.user = {};
    $scope.login = function () {
        $http.get(url)
            .then(function (response) {
                var users = response.data;
                console.log(users)
                var authenticatedUser = users.find(function (user) {
                    return user.taikhoan === $scope.user.taikhoan && user.matkhau === $scope.user.matkhau;
                });
                console.log(authenticatedUser)

                if (authenticatedUser) {
                    // Xác định loại người dùng
                    if (authenticatedUser.chucvu === '1') {
                        // Đăng nhập thành công với quyền admin
                        $location.path("/trang-chu")
                        alert('Đăng nhập thành công với quyền admin!');
                        $rootScope.currentUser = authenticatedUser.id
                        $rootScope.currentkey = "1"
                        document.getElementById("admin").innerText = "𝓠𝓾𝓪𝓷𝓰𝓝𝓰𝓾𝔂𝓮𝓷"
                        var a = $cookies.putObject("id", $rootScope.currentUser)
                        var b = $cookies.putObject("cv", $rootScope.currentkey)
                        localStorage.setItem('a',authenticatedUser);
                        console.log(authenticatedUser.id)
                    } else {
                        // Đăng nhập thành công với quyền khách hàng
                        $location.path("/trang-chu")
                        alert('Đăng nhập thành công với quyền khách hàng!');
                        $rootScope.currentUser = authenticatedUser.id
                        $rootScope.currentkey = "2"
                        var a = $cookies.putObject("id", $rootScope.currentUser)
                        var b = $cookies.putObject("cv", $rootScope.currentkey)
                        console.log(authenticatedUser.id)
                    }
                } else {
                    // Sai tên đăng nhập hoặc mật khẩu
                    alert("Sai tên đăng nhập hoặc mật khẩu.")
                }
            }, function (error) {
                // Xử lý lỗi khi tải db.json
                alert("Sai tài khoản hoặc mật khẩu")
            });
    };

}