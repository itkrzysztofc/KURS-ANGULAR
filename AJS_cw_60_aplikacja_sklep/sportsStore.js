angular.module("sportsStore")
.controller("sportsStoreCtrl", function($scope){
    $scope.data = {
        products: [
            {nazwa: "Produkt #1", opis: "To jest produkt.", category: "Kategoria #1", cena: 100},
            {nazwa: "Produkt #2", opis: "To jest produkt.", category: "Kategoria #1", cena: 120},
            {nazwa: "Produkt #3", opis: "To jest produkt.", category: "Kategoria #2", cena: 200},
            {nazwa: "Produkt #4", opis: "To jest produkt.", category: "Kategoria #3", cena: 220}
        ]
    };
});

