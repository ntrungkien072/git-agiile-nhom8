window.index = function($scope,$http,$cookies,$rootScope){
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
}