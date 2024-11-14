window.chitiet = function ($scope, $http, $routeParams, $location, $rootScope,$q,$cookies) {
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
    var url = "http://localhost:3000/sanpham";
    var url1 = "http://localhost:3000/donhang";
    var urlGetOnn = url + "/" + $routeParams.id;

    // Sử dụng $q.defer() để tạo một deferred object
    var deferred = $q.defer();

    $http.get(urlGetOnn)
        .then(function (response) {
            $scope.ct = response.data;
            $rootScope.hdd = $scope.ct.ten;
            $rootScope.gia = $scope.ct.card;
            $scope.ctt = response.data.anhct;
            console.log($scope.ctt);

            // Giải quyết promise khi giá trị đã được gán
            deferred.resolve();
        });

    // Sử dụng $q để đảm bảo rằng $rootScope.hdd đã nhận được giá trị trước khi gán cho $scope.hd.tensung
    deferred.promise.then(function () {
        $scope.hd = {
            tensung: $rootScope.hdd,
            gia: $rootScope.gia,
            trangthai: "Chờ xử lý",
            idkhachhang: $rootScope.currentUser,
            idgame: ""
        };

        console.log($rootScope.hdd);
        console.log($rootScope.gia);
    });

    $scope.mua = function () {
        let data = angular.copy($scope.hd);
        $http.post(url1, data)
            .then(function (response) {
                alert("Mua thành công vui lòng đợi ADMIN xử lý đơn hàng của bạn (15-20p)");
            })
            .catch(function (error) {
                console.log("nguuuuuuuuuuu");
            });
    };




    // var url = "http://localhost:3000/sanpham"
    // var url1 = "http://localhost:3000/donhang"
    // var urlGetOnn = url + "/" + $routeParams.id
    // $http.get(urlGetOnn)
    //     .then(function (response) {
    //         $scope.ct = response.data
    //         $rootScope.hdd = $scope.ct.ten
    //         $scope.ctt = response.data.anhct
    //         console.log($scope.ctt)
    //     });
    //     console.log($rootScope.hdd) 
    // $scope.hd = {
    //     tensung: "",
    //     gia: "",
    //     trangthai: "Chờ xử lý",
    //     idkhachhang: "",
    //     idgame: ""
    // }
    // $scope.hd.idkhachhang = $rootScope.currentUser
    // $scope.mua = function () {
    //     let data = angular.copy($scope.hd)
    //     $http.post(url1, data)
    //         .then(function (response) {
    //             alert("Mua thành công vui lòng đợi ADMIN xử lý đơn hàng của bạn (15-20p)")
    //         })
    //         .catch(function (error) {
    //             console.log("nguuuuuuuuuuu")
    //         })
    // }
}