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
                                $window.location.href = 'admin/indexadmin.html';
                                alert('Đăng nhập thành công với quyền admin!');
                                $rootScope.currentUser = authenticatedUser.id
                                console.log($rootScope.currentUser)
                                console.log(authenticatedUser.id)
                            } else {
                                // Đăng nhập thành công với quyền khách hàng
                                $location.path("/trang-chu")
                                alert('Đăng nhập thành công với quyền khách hàng!');
                                $rootScope.currentUser = authenticatedUser.id
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