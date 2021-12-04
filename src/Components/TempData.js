const chef = [];
for (let i = 0; i < 10; i++) {
  chef.push({
    ChefName: "Elizabeth Labadie",
    ChefRating: 4.5,
    ChefDescription: "South Indian, Punjabi, North Indian",
    ChefProfilePhoto:
      "https://www.escoffier.edu/wp-content/uploads/2016/02/Smiling-female-chef-with-white-hat-and-uniform-in-a-kitchen-e1611773135718.jpg",
    ChefCategory: "Non Veg",
  });
}

const data = {
  userhome: {
    chef: chef,
  },

  orders: {
    highlightData: [100, 500, 1500],
    paymentHistory: [
      {
        userName: "Joe Biden",
        amount: 650,
        timestamp: "03/12/2021 12:40PM",
      },
      {
        userName: "Atal Bihari Vajpayee",
        amount: 12500,
        timestamp: "03/12/2021 12:40PM",
      },
      {
        userName: "Joe Biden",
        amount: 198550,
        timestamp: "03/12/2021 12:40PM",
      },
      {
        userName: "Joe Biden",
        amount: 650,
        timestamp: "03/12/2021 12:40PM",
      },
      {
        userName: "Atal Bihari Vajpayee",
        amount: 12500,
        timestamp: "03/12/2021 12:40PM",
      },
      {
        userName: "Joe Biden",
        amount: 198550,
        timestamp: "03/12/2021 12:40PM",
      },
      {
        userName: "Joe Biden",
        amount: 650,
        timestamp: "03/12/2021 12:40PM",
      },
      {
        userName: "Atal Bihari Vajpayee",
        amount: 12500,
        timestamp: "03/12/2021 12:40PM",
      },
      {
        userName: "Joe Biden",
        amount: 198550,
        timestamp: "03/12/2021 12:40PM",
      },
      {
        userName: "Joe Biden",
        amount: 650,
        timestamp: "03/12/2021 12:40PM",
      },
      {
        userName: "Atal Bihari Vajpayee",
        amount: 12500,
        timestamp: "03/12/2021 12:40PM",
      },
      {
        userName: "Joe Biden",
        amount: 198550,
        timestamp: "03/12/2021 12:40PM",
      },
      {
        userName: "Joe Biden",
        amount: 650,
        timestamp: "03/12/2021 12:40PM",
      },
      {
        userName: "Atal Bihari Vajpayee",
        amount: 12500,
        timestamp: "03/12/2021 12:40PM",
      },
      {
        userName: "Joe Biden",
        amount: 198550,
        timestamp: "03/12/2021 12:40PM",
      },
    ],
    breakfast: [
      {
        userName: "Joe Biden",
        numberOfPerson: 2,
      },
      {
        userName: "Joe Biden",
        numberOfPerson: 2,
      },
      {
        userName: "Joe Biden",
        numberOfPerson: 2,
      },
    ],
    lunch: [
      {
        userName: "Joe Biden",
        numberOfPerson: 3,
      },
      {
        userName: "Joe Biden",
        numberOfPerson: 3,
      },
      {
        userName: "Joe Biden",
        numberOfPerson: 3,
      },
    ],
    snacks: [
      {
        userName: "Joe Biden",
        numberOfPerson: 4,
      },
      {
        userName: "Joe Biden",
        numberOfPerson: 4,
      },
      {
        userName: "Narendra Modi",
        numberOfPerson: 4,
      },
    ],
    dinner: [
      {
        userName: "Joe Biden",
        numberOfPerson: 5,
      },
      {
        userName: "Atal Bihari Vajpayee",
        numberOfPerson: 5,
      },
      {
        userName: "Joe Biden",
        numberOfPerson: 5,
      },
      {
        userName: "Joe Biden",
        numberOfPerson: 5,
      },
      {
        userName: "Atal Bihari Vajpayee",
        numberOfPerson: 5,
      },
      {
        userName: "Joe Biden",
        numberOfPerson: 5,
      },
      {
        userName: "Joe Biden",
        numberOfPerson: 5,
      },
      {
        userName: "Atal Bihari Vajpayee",
        numberOfPerson: 5,
      },
      {
        userName: "Joe Biden",
        numberOfPerson: 5,
      },
      {
        userName: "Joe Biden",
        numberOfPerson: 5,
      },
      {
        userName: "Atal Bihari Vajpayee",
        numberOfPerson: 5,
      },
      {
        userName: "Joe Biden",
        numberOfPerson: 5,
      },
      {
        userName: "Joe Biden",
        numberOfPerson: 5,
      },
      {
        userName: "Atal Bihari Vajpayee",
        numberOfPerson: 5,
      },
      {
        userName: "Joe Biden",
        numberOfPerson: 5,
      },
      {
        userName: "Joe Biden",
        numberOfPerson: 5,
      },
      {
        userName: "Atal Bihari Vajpayee",
        numberOfPerson: 5,
      },
      {
        userName: "Joe Biden",
        numberOfPerson: 5,
      },
      {
        userName: "Joe Biden",
        numberOfPerson: 5,
      },
      {
        userName: "Atal Bihari Vajpayee",
        numberOfPerson: 5,
      },
      {
        userName: "Joe Biden",
        numberOfPerson: 5,
      },
    ],
  },
  foodData: {
    costPerPerson: [
      { foodType: "Breakfast", cost: "100" },
      { foodType: "Lunch", cost: "200" },
      { foodType: "Dinner", cost: "300" },
      { foodType: "Snacks", cost: "50" },
    ],
    breakfast: [
      {
        name: "Veg Cheese Grill Sandwich + Cold Coco [300 ml]",
        type: "veg",
        image:
          "https://b.zmtcdn.com/data/dish_photos/a33/5b13ddb907176b737a0eda26325fba33.jpg",
      },
      {
        name: "Poha",
        type: "veg",
        image:
          "https://b.zmtcdn.com/data/dish_photos/a33/5b13ddb907176b737a0eda26325fba33.jpg",
      },
      {
        name: "Poha",
        type: "non-veg",
        image:
          "https://img.etimg.com/thumb/msid-74572648,width-640,resizemode-4,imgsize-246114/people-say-no-to-non-veg.jpg",
      },
    ],
    lunch: [
      {
        name: "Poha1",
        type: "veg",
        image:
          "https://b.zmtcdn.com/data/dish_photos/a33/5b13ddb907176b737a0eda26325fba33.jpg",
      },
      {
        name: "Poha1",
        type: "non-veg",
        image:
          "https://img.etimg.com/thumb/msid-74572648,width-640,resizemode-4,imgsize-246114/people-say-no-to-non-veg.jpg",
      },
      {
        name: "Poha1",
        type: "veg",
        image:
          "https://b.zmtcdn.com/data/dish_photos/a33/5b13ddb907176b737a0eda26325fba33.jpg",
      },
    ],
    snacks: [
      {
        name: "Poha2",
        type: "non-veg",
        image:
          "https://img.etimg.com/thumb/msid-74572648,width-640,resizemode-4,imgsize-246114/people-say-no-to-non-veg.jpg",
      },
      {
        name: "Poha2",
        type: "veg",
        image:
          "https://b.zmtcdn.com/data/dish_photos/a33/5b13ddb907176b737a0eda26325fba33.jpg",
      },
      {
        name: "Poha2",
        type: "veg",
        image:
          "https://b.zmtcdn.com/data/dish_photos/a33/5b13ddb907176b737a0eda26325fba33.jpg",
      },
    ],
    dinner: [
      {
        name: "Poha3",
        type: "non-veg",
        image:
          "https://english.cdn.zeenews.com/sites/default/files/2018/02/08/659113-final-non-veg.jpg",
      },
      {
        name: "Poha3",
        type: "veg",
        image:
          "https://b.zmtcdn.com/data/dish_photos/a33/5b13ddb907176b737a0eda26325fba33.jpg",
      },
      {
        name: "Poha3",
        type: "non-veg",
        image:
          "https://img.etimg.com/thumb/msid-74572648,width-640,resizemode-4,imgsize-246114/people-say-no-to-non-veg.jpg",
      },
    ],
  }
};


export default data;
