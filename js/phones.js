angular.module('phonePrices', [])
      .controller('phoneController', function($scope){
          $scope.list = [
            {
  phone: "iPad Mini 2 Retina 16GB",
  price: '$0.00',
  retail: '$549.99',
  voice: 'N/A'
},
{
  phone: "iPad Mini 2 Retina 32GB",
  price: '$0.00',
  retail: '$649.99',
  voice: 'N/A'
  },
{
  phone: "iPad Air 2 16GB",
  price: '$339.99',
  retail: '$689.99',
  voice: 'N/A'
  },
{
  phone: "iPad Air 2 64GB",
  price: '$449.99',
  retail: '$799.99',
  voice: 'N/A'
  },
{
  phone: "iPad Mini 3 Retina 16GB",
  price: '$129.99',
  retail: '$579.99',
  voice: 'N/A'
  },
{
  phone: "iPad Mini 3 Retina 64GB ",
  price: '$239.99',
  retail: '$689.99',
  voice: 'N/A'
  },
{
  phone: "iPad Mini 4 16GB",
  price: '$329.99',
  retail: '$579.99',
  voice: 'N/A'
  },
{
  phone: "Apple iPhone 5C 8GB",
  price: '$0.00',
  retail: '$480.99',
  voice: 'N/A'
  },
{
  phone: "Apple iPhone 5S 16GB",
  price: '$0.00',
  retail: '$719.99',
  voice: 'N/A'
  },
{
  phone: "Apple iPhone 5S 32GB",
  price: '$128.99',
  retail: '$819.99',
  voice: 'N/A'
  },
  {
  phone: "Apple iPhone 6 16GB",
  price: '$198.99',
  retail: '$839.99',
voice: 'N/A'
  },
{
  phone: "Apple iPhone 6 64GB",
  price: '$298.99',
  retail: '$969.99',
voice: 'N/A'
  },
{
  phone: "Apple iPhone 6 128GB",
  price: '$398.99',
  retail: '$1,099.99',
voice: 'N/A'
  },
{
  phone: "Apple iPhone 6 Plus 16GB",
  price: '$328.99',
  retail: '$969.99',
voice: 'N/A'
  },
{
  phone: "Apple iPhone 6 Plus 64GB",
  price: '$428.99',
  retail: '$1,099.99',
voice: 'N/A'
  },
{
  phone: "Apple iPhone 6 Plus 128GB",
  price: '$528.99',
  retail: '$1,229.99',
voice: 'N/A',
  url: 'http://www.gsmarena.com/apple_iphone_6s-7242.php'
  },
{
  phone: "Apple iPhone 6s 16GB",
  price: '$398.99',
  retail: '$914.99',
voice: 'N/A'
  },
{
  phone: "Apple iPhone 6s 64GB",
  price: '$528.99',
  retail: '$1,054.99',
voice: 'N/A'
  },
{
  phone: "Apple iPhone 6s 128GB",
  price: '$658.99',
  retail: '$1,194.99',
voice: 'N/A'
  },
{
  phone: "Apple iPhone 6s Plus 16GB",
  price: '$528.99',
  retail: '$1,054.99',
voice: 'N/A'
  },
{
  phone: "Apple iPhone 6s Plus 64GB",
  price: '$658.99',
  retail: '$1,194.99',
voice: 'N/A'
  },
{
  phone: "Apple iPhone 6s Plus 128GB",
  price: '$788.99',
  retail: '$1,334.99',
voice: 'N/A'
  },
{
  phone: "BlackBerry Classic",
  price: '$49.99',
  retail: '$449.99',
  voice: '$99.99'
  },
   {
  phone: "BlackBerry Leap",
  price: '$49.99',
  retail: '$349.99',
  voice: '$0.00'
  }, {
  phone: "BlackBerry Passport",
  price: '$99.99',
  retail: '$699.99',
  voice: 'N/A'
},
{
  phone:"Blackberry PRIV",
  price: '$399.99',
  retail: '$849.99',
  voice: 'N/A'
},
{
  phone: "HTC Desire 626s",
  price: '$29.99',
  retail: '$199.99',
  voice: '$29.99'
  }, {
  phone: "HTC One (M9)",
  price: '$0.00',
  retail: '$749.99',
  voice: 'N/A'
  }, {
  phone: "Huawei Ascend (Y530)",
  price: '$0.00',
  retail: '$119.99',
  voice: '$0.00'
  }, {
  phone: "LG F4nR",
  price: 'N/A',
  retail: '$99.99',
  voice: '$29.99'
  }, {
  phone: "LG G4",
  price: '$49.99',
  retail: '$699.99',
  voice: 'N/A'
  }, {
  phone: "LG G4 Vigor",
  price: '$49.99',
  retail: '$299.99',
  voice: '$79.99'
}, {
  phone: "Motorola Moto G",
  price: '$0.00',
  retail: '$229.99',
  voice: '$49.99'
  }, {
  phone: "Motorola Moto X Play",
  price: '$0.00',
  retail: '$399.99',
  voice: '$49.99'
  }, {
  phone: "Nokia Lumia 830",
  price: '$0.00',
  retail: '$449.99',
  voice: '$49.99'
  }, {
  phone: "Novatel Wireless MiFi 6630",
  price: '$49.99',
  retail: '$199.99',
  voice: 'N/A'
  }, {
  phone: "Samsung Galaxy Grand Prime",
  price: '$49.99',
  retail: '$249.99',
  voice: '$74.99'
  }, {
  phone: "Samsung Galaxy Note 4",
  price: '$99.99',
  retail: '$749.99',
  voice: 'N/A'
  }, {
  phone: "Samsung Galaxy Note 5",
  price: '$259.99',
  retail: '$849.99',
  voice: 'N/A'
  }, {
  phone: "Samsung Galaxy Note Edge",
  price: '$199.99',
  retail: '$899.99',
  voice: 'N/A'
  }, {
  phone: "Samsung Galaxy S4",
  price: '$0.00',
  retail: '$699.99',
  voice: 'N/A'
  }, {
  phone: "Samsung Galaxy S5",
  price: '$0.00',
  retail: '$729.99',
  voice: 'N/A'
  }, {
  phone: "Samsung Galaxy S6 32GB",
  price: '$149.99',
  retail: '$749.99',
  voice: 'N/A'
  }, {
  phone: "Samsung Galaxy S6 64GB",
  price: '$199.99',
  retail: '$859.99',
  voice: 'N/A'
  }, {
  phone: "Samsung Galaxy S6 128GB",
  price: '$299.99',
  retail: '$969.99',
  voice: 'N/A'
  }, {
  phone: "Samsung Galaxy S6 Edge 32GB",
  price: '$249.99',
  retail: '$849.99',
  voice: 'N/A'
  }, {
  phone: "Samsung Galaxy S6 Edge 64GB",
  price: '$299.99',
  retail: '$959.99',
  voice: 'N/A'
  }, {
  phone: "Samsung Galaxy S6 Edge 128GB",
  price: '$399.99',
  retail: '$1,069.99',
  voice: 'N/A'
  }, {
  phone: "Samsung Galaxy S6 Edge+ 32GB",
  price: '$309.99',
  retail: '$949.99',
  voice: 'N/A'
  }, {
  phone: "Samsung Galaxy S6 Edge+ 64GB",
  price: '$409.99',
  retail: '$1,049.99',
  voice: 'N/A'
  }, {
  phone: "Samsung Rugby 4",
  price: 'N/A',
  retail: '$249.99',
  voice: '$79.99'
  }, {
  phone: "Sonim Bolt 2 IS",
  price: '$0.00',
  retail: '$999.99',
  voice: 'N/A'
  },{
  phone: "Sonim XP7",
  price: '$99.99',
  retail: '$749.99',
  voice: 'N/A'
  },{
  phone: "Sony Xperia E1",
  price: '$0.00',
  retail: '$129.99',
  voice: '$0.00'
  },{
  phone: "Sony Xperia M4 Aqua",
  price:  '$0.00',
  retail: '$299.99',
  voice:  '$49.99'
  },{
  phone: "Sony Xperia Z3",
  price: '$69.99',
  retail: '$699.99',
  voice: 'N/A'
  },
  {
  phone: "Nexus 5X",
  price: '$149.99',
  retail: '$599.99',
  voice: '$199.99'
},
{
  phone: "Sony Xperia Z5",
  price: '$199.99',
  retail: '649.99',
  voice: 'N/A'
},
{
phone: "Samsung Galaxy A5",
price: '$49.99',
retail: '$449.99',
voice: '$74.99'
},
{
phone: "Samsung Galaxy S5 neo",
price: '$99.99',
retail: '$549.99',
voice: 'N/A'
}];

});
