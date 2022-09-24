angular.module("sportsStore")
.controller("productsListCtrl",function($scope,$filter){
    var selectedCategory=null;
    $scope.selectedCategory=function(newCategory){
        selectedCategory=newCategory;
    }
    $scope.categoryFilterFn(product){
        return selectedCategory==null || product.category==selectedCategory;
    }
});
