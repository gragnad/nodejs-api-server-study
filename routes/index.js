var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/products/:id', function(req, res, next) {
  res.status(200).json(
    {
      "id": 30,
      "name": "Refined Fresh Chicken",
      "price": "209.00",
      "imageUrl": "http://placeimg.com/640/480/fashion"
    }
  );
});

router.get('/api/products', function(req, res, next) {
  res.status(200).json(
    {
    "products": [
      {
        "id": 30,
        "name": "Refined Fresh Chicken",
        "price": "209.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 1,
        "name": "Intelligent Metal Mouse",
        "price": "84.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 2,
        "name": "Handcrafted Frozen Pizza",
        "price": "315.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 3,
        "name": "Practical Metal Gloves",
        "price": "702.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 4,
        "name": "Unbranded Rubber Chair",
        "price": "458.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 5,
        "name": "Small Rubber Salad",
        "price": "455.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 6,
        "name": "Handmade Granite Mouse",
        "price": "591.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 7,
        "name": "Awesome Concrete Shirt",
        "price": "165.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 8,
        "name": "Sleek Steel Towels",
        "price": "607.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 9,
        "name": "Handcrafted Plastic Computer",
        "price": "289.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 10,
        "name": "Small Fresh Soap",
        "price": "777.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 11,
        "name": "Practical Granite Chicken",
        "price": "518.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 12,
        "name": "Awesome Metal Hat",
        "price": "376.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 13,
        "name": "Refined Soft Towels",
        "price": "723.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 14,
        "name": "Ergonomic Concrete Cheese",
        "price": "339.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 15,
        "name": "Generic Soft Sausages",
        "price": "669.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 16,
        "name": "Incredible Metal Ball",
        "price": "697.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 17,
        "name": "Sleek Soft Shirt",
        "price": "654.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 18,
        "name": "Rustic Plastic Fish",
        "price": "133.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 19,
        "name": "Gorgeous Cotton Soap",
        "price": "38.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 20,
        "name": "Incredible Concrete Chair",
        "price": "569.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 21,
        "name": "Handcrafted Soft Pizza",
        "price": "277.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 22,
        "name": "Intelligent Granite Chicken",
        "price": "509.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 23,
        "name": "Handcrafted Rubber Ball",
        "price": "487.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 24,
        "name": "Practical Frozen Pants",
        "price": "607.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 25,
        "name": "Sleek Plastic Mouse",
        "price": "909.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 26,
        "name": "Incredible Frozen Gloves",
        "price": "172.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 27,
        "name": "Intelligent Concrete Salad",
        "price": "501.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 28,
        "name": "Fantastic Metal Soap",
        "price": "75.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 29,
        "name": "Intelligent Cotton Shirt",
        "price": "130.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      }
    ],
  }
  )
});

router.get("/api/cart", function(req, res, next) {
  res.status(200).json({
    "carts": [
      {
        "id": 1,
        "name": "Intelligent Metal Mouse",
        "price": "84.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 7,
        "name": "Awesome Concrete Shirt",
        "price": "165.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 8,
        "name": "Refined Fresh Chicken",
        "price": "209.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 9,
        "name": "Refined Fresh Chicken",
        "price": "209.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 10,
        "name": "Refined Fresh Chicken",
        "price": "209.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      },
      {
        "id": 11,
        "name": "Refined Fresh Chicken",
        "price": "209.00",
        "imageUrl": "http://placeimg.com/640/480/fashion"
      }
    ]
  });
});

module.exports = router;
