var app = angular.module('guyu', []);

app.run(['$rootScope', function ($rootScope) {
    $rootScope.mainMenus = [
        { linkURL: '#', text: '公司产品' },
        { linkURL: '#', text: '行业解决方案' },
        { linkURL: '#', text: '移动开发' },
        { linkURL: '#', text: '微信应用' },
        { linkURL: '#', text: '关于我们' },
        { linkURL: '#', text: '联系我们' },
    ];
    $rootScope.rightMenus = [
        { linkURL: '#', text: '注册' },
        { linkURL: '#', text: '登录' }
    ];
}]);