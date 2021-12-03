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
};

export default data;
