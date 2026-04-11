const products = [
  {
    id: 1,
    title: "Cotton Slim Fit T-Shirt",
    price: 25.99,
    description: "Premium quality breathable cotton t-shirt for summer.",
    categoryId: 2,
    images: ["https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=400"]
  },
  {
    id: 2,
    title: "Gaming Mechanical Keyboard",
    price: 89.50,
    description: "RGB backlit mechanical keyboard with blue switches.",
    categoryId: 1,
    images: ["https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=400"]
  },
  {
    id: 3,
    title: "Leather Wallet for Men",
    price: 15.00,
    description: "Genuine leather wallet with multiple card slots.",
    categoryId: 5,
    images: ["https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbGV0fGVufDB8fDB8fHww"]
  },
  {
    id: 4,
    title: "Wireless Noise Cancelling Headphones",
    price: 199.99,
    description: "Immersive sound quality with 40-hour battery life.",
    categoryId: 1,
    images: ["https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=400"]
  },
  {
    id: 5,
    title: "Non-Stick Frying Pan",
    price: 32.00,
    description: "Durable non-stick coating for healthy cooking.",
    categoryId: 4,
    images: ["https://images.pexels.com/photos/5907530/pexels-photo-5907530.jpeg?auto=compress&cs=tinysrgb&w=400"]
  },
  {
    id: 6,
    title: "Running Sneakers",
    price: 75.25,
    description: "Lightweight sneakers with extra cushioning for athletes.",
    categoryId: 2,
    images: ["https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400"]
  },
  {
    id: 7,
    title: "Stainless Steel Smart Watch",
    price: 145.00,
    description: "Track your health and notifications on the go.",
    categoryId: 1,
    images: ["https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400"]
  },
  {
    id: 8,
    title: "Ceramic Coffee Mug Set",
    price: 18.99,
    description: "Set of 4 elegant ceramic mugs for your morning coffee.",
    categoryId: 4,
    images: ["https://images.pexels.com/photos/4108668/pexels-photo-4108668.jpeg?auto=compress&cs=tinysrgb&w=400"]
  },
  {
    id: 9,
    title: "Minimalist Desk Lamp",
    price: 28.50,
    description: "Adjustable brightness LED lamp for study or work.",
    categoryId: 3,
    images: ["https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400"]
  },
  {
    id: 10,
    title: "Denim Jacket",
    price: 55.00,
    description: "Classic blue denim jacket with a comfortable fit.",
    categoryId: 2,
    images: ["https://images.unsplash.com/photo-1527016021513-b09758b777bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RGVuaW0lMjBKYWNrZXR8ZW58MHx8MHx8fDA%3D"]
  },
  {
    id: 11,
    title: "USB-C Hub Adapter",
    price: 42.99,
    description: "7-in-1 multi-port adapter for laptops and tablets.",
    categoryId: 1,
    images: ["https://images.pexels.com/photos/3829227/pexels-photo-3829227.jpeg?auto=compress&cs=tinysrgb&w=400"]
  },
  {
    id: 12,
    title: "Yoga Mat (6mm)",
    price: 22.00,
    description: "Non-slip eco-friendly mat for yoga and pilates.",
    categoryId: 2,
    images: ["https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=400"]
  },
  {
    id: 13,
    title: "Wooden Dining Table",
    price: 350.00,
    description: "Solid oak wood table that seats up to 6 people.",
    categoryId: 3,
    images: ["https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=400"]
  },
  {
    id: 14,
    title: "Organic Green Tea",
    price: 12.50,
    description: "100% natural organic tea leaves for a healthy lifestyle.",
    categoryId: 6,
    images: ["https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400"]
  },
  {
    id: 15,
    title: "Portable Bluetooth Speaker",
    price: 49.99,
    description: "Water-resistant speaker with powerful bass.",
    categoryId: 1,
    images: ["https://images.pexels.com/photos/1034653/pexels-photo-1034653.jpeg?auto=compress&cs=tinysrgb&w=400"]
  },
  {
    id: 16,
    title: "Classic White Sneakers",
    price: 65.00,
    description: "Minimalist leather sneakers with a durable rubber sole.",
    categoryId: 2,
    images: ["https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBzbmVha2Vyc3xlbnwwfHwwfHx8MA%3D%3D"]
  },
  {
    id: 17,
    title: "Bamboo Office Desk",
    price: 210.00,
    description: "Eco-friendly bamboo desk with a sleek modern design.",
    categoryId: 3,
    images: ["https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&auto=format&fit=crop&q=60"]
  },
  {
    id: 18,
    title: "Electric Kettle",
    price: 35.99,
    description: "Fast-boil stainless steel kettle with auto shut-off.",
    categoryId: 4,
    images: ["https://images.unsplash.com/photo-1738520420652-0c47cea3922b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWxlY3RyaWMlMjBLZXR0bGV8ZW58MHx8MHx8fDA%3Dages.unsplash.com/photo-1594212699903-ec8a3ecc50f6?w=500&auto=format&fit=crop&q=60"]
  },
  {
    id: 19,
    title: "Casual Cotton Chinos",
    price: 40.00,
    description: "Comfortable slim-fit chinos for everyday wear.",
    categoryId: 2,
    images: ["https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop&q=60"]
  },
  {
    id: 20,
    title: "Wireless Charging Pad",
    price: 25.50,
    description: "Ultra-slim 15W fast wireless charger for all devices.",
    categoryId: 1,
    images: ["https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=500&auto=format&fit=crop&q=60"]
  },
  {
    id: 21,
    title: "Black Leather Belt",
    price: 20.00,
    description: "Genuine leather belt with a classic silver buckle.",
    categoryId: 5,
    images: ["https://images.unsplash.com/photo-1752386341161-de2b02ea1f50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEJsYWNrJTIwTGVhdGhlciUyMEJlbHR8ZW58MHx8MHx8fDA%3D"]
  },
  {
    id: 22,
    title: "Yoga Foam Roller",
    price: 18.00,
    description: "High-density foam roller for muscle recovery.",
    categoryId: 2,
    images: ["https://images.unsplash.com/photo-1646376248949-9db1b3b7bce4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8WW9nYSUyMEZvYW0lMjBSb2xsZXJ8ZW58MHx8MHx8fDA%3D"]
  },
  {
    id: 23,
    title: "Ceramic Wall Clock",
    price: 45.00,
    description: "Handcrafted ceramic clock for living room decor.",
    categoryId: 3,
    images: ["https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&auto=format&fit=crop&q=60"]
  },
  {
    id: 24,
    title: "Waterproof Raincoat",
    price: 70.00,
    description: "Lightweight breathable raincoat with a hidden hood.",
    categoryId: 2,
    images: ["https://images.unsplash.com/photo-1693122079741-f7c000d40558?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8V2F0ZXJwcm9vZiUyMFJhaW5jb2F0fGVufDB8fDB8fHww"]
  },
  {
    id: 25,
    title: "Portable Power Bank",
    price: 55.00,
    description: "20,000mAh capacity with dual USB output.",
    categoryId: 1,
    images: ["https://images.unsplash.com/photo-1687007081819-984a72322567?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFBvcnRhYmxlJTIwcG93ZXIlMjBiYW5rfGVufDB8fDB8fHww"]
  },
  {
    id: 26,
    title: "Stainless Steel Cutlery Set",
    price: 85.00,
    description: "24-piece premium mirror finish dining set.",
    categoryId: 4,
    images: ["https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&auto=format&fit=crop&q=60"]
  },
  {
    id: 27,
    title: "Polarized Sunglasses",
    price: 130.00,
    description: "Classic aviator style with UV400 protection.",
    categoryId: 5,
    images: ["https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60"]
  },
  {
    id: 28,
    title: "Indoor Snake Plant",
    price: 22.00,
    description: "Air-purifying indoor plant in a ceramic pot.",
    categoryId: 3,
    images: ["https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=500&auto=format&fit=crop&q=60"]
  },
  {
    id: 29,
    title: "Men's Wool Sweater",
    price: 60.00,
    description: "Warm and cozy knit sweater for cold weather.",
    categoryId: 2,
    images: ["https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60"]
  },
  {
    id: 30,
    title: "HD Webcam with Mic",
    price: 49.00,
    description: "1080p resolution perfect for streaming and meetings.",
    categoryId: 1,
    images: ["https://images.unsplash.com/photo-1636569826709-8e07f6104992?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEhEJTIwV2ViY2FtJTIwd2l0aCUyME1pY3xlbnwwfHwwfHx8MA%3D%3D"]
  }
];



module.exports = products;