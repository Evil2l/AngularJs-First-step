(function(){
    "use strict";
    angular
        .module('ngStart')
        .controller('startCtrl', function($scope){
            var vm = $scope;
            vm.name = {
                name: 'Evil',
                job: 'Tool'
            };
            vm.showContact = false;
            vm.showAdmin = false;
            vm.items = [
                {
                    id: "1",
                    title: "Some latest phone",
                    description: "2013 rainbow trailer 20 feet x 82 inch deck area, two 5,000 lb axels, electric brakes, two pull out ramps, break away box, spare tire.",
                    price: 6000,
                    posted: "2015-10-24",
                    contact: {
                        name: "John Doe",
                        phone: "(555) 555-5555",
                        email: "johndoe@gmail.com"
                    },
                    categories: [
                        "Vehicles",
                        "Parts and Accessories"
                    ],
                    image: "https://s.appleinsider.ru/2016/09/apple-iphone-watch-20160907-4609.jpg",
                    views: 213
                },
                {
                    id: "2",
                    title: "Canada Goose Jacket",
                    description: "Red woman's Canada Goose Montebello jacket. It was used for two seasons. This jacket retails for $745. The jacket has been professionally cleaned since it was last worn by anyone.",
                    price: 500,
                    posted: "2015-10-28",
                    contact: {
                        name: "Jane Doe",
                        phone: "(555) 555-5555",
                        email: "janedoe@gmail.com"
                    },
                    categories: [
                        "Clothing"
                    ],
                    image: "http://www.yakwax.com/images/products/zoom/1384439291-15052800.jpg",
                    views: 422
                },
                {
                    id: "3",
                    title: "Baby Crib and Matress",
                    description: "Good condition.",
                    price: 50,
                    posted: "2015-10-27",
                    contact: {
                        name: "Jane Doe",
                        phone: "(555) 555-5555",
                        email: "janedoe@gmail.com"
                    },
                    categories: [
                        "Furniture"
                    ],
                    image: "http://images.landofnod.com/is/image/LandOfNod/Crib_Anderson_Nat_V1/$web_setitem$/1308310657/andersen-crib-maple.jpg",
                    views: 23
                },
                {
                    id: "4",
                    title: "Leather Sofa",
                    description: "Brown leather sofa for sale. Good condition but small tear on one cushion.",
                    price: 250,
                    posted: "2015-11-01",
                    contact: {
                        name: "John Doe",
                        phone: "(555) 555-5555",
                        email: "johndoe@gmail.com"
                    },
                    categories: [
                        "Furniture"
                    ],
                    image: "http://www.search4furniture.com/media/catalog/category/1557-balston_leather_sofa.jpg",
                    views: 77
                },
                {
                    id: "5",
                    title: "MacBook Air",
                    description: "2013 MacBook Air. Great condition, but a few scratches.",
                    price: 1150,
                    posted: "2015-11-02",
                    contact: {
                        name: "John Doe",
                        phone: "(555) 555-5555",
                        email: "johndoe@gmail.com"
                    },
                    categories: [
                        "Electronics",
                        "Computer Parts and Accessories"
                    ],
                    image: "http://images2.itechpost.com/data/images/full/17861/apples-new-air-laptop-goes-on-sales-in-stores.jpg",
                    views: 889
                },
                {
                    id: "6",
                    title: "Dodge Charger",
                    description: "Battery blanket and block heater installed. Winter tires, good tread left are on the car currently. Car comes with 4 summer tires with also good treads left. Hydraulic power steering fluid line installed so this won't break on you in the cold Yellowknife winters! Synthetic oil used, good for 1000+ more KMs. AC/Sunroof/power doors/steering, CD player/radio. Red accented dash and upolstry.",
                    price: 4800,
                    posted: "2015-11-03",
                    contact: {
                        name: "John Doe",
                        phone: "(555) 555-5555",
                        email: "johndoe@gmail.com"
                    },
                    categories: [
                        "Vehicles",
                        "Cars"
                    ],
                    image: "http://carrrsmag.com/data_images/models/dodge-charger/dodge-charger-01.jpg",
                    views: 423
                }
            ]
        });

})();