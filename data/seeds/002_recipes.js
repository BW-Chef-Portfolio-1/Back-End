
exports.seed = function (knex) {
  // return knex('posts').del()
  //   .then(function () {
  return knex('posts').insert([
    {
      chef_name: "Brendan :D",
      recipe_name: "avocado",
      ingredients: "its just an avocado",
      cook_time: "2",
      prep_time: 2,
      servings: "1 I like my avocado",
      instructions: "EAT THE AVOCADO",
      user_id: 2
    },
    {
      chef_name: "Brendan :D",
      recipe_name: "Pork Chops in Garlic Mushroom Sauce",
      ingredients: "2 pounds boneless pork chops1/2 teaspoon paprika1 pinch kosher salt and ground black pepper to taste1/4 cup butter 1 (8 ounce) package sliced fresh mushrooms4 cloves garlic, minced1 teaspoon Dijon mustard2 tablespoons all-purpose flour",
      cook_time: "20 min",
      prep_time: "10min",
      servings: "4 servings",
      instructions: "Season both sides of pork chops with paprika, salt, and pepper.Heat a large skillet over medium-high heat; add 2 tablespoons butter. Sear pork chops until golden brown and no longer pink in the center, 2 to 4 minutes per side. Remove pork chops from the skillet and set aside.Melt remaining butter in the same skillet over medium-high heat. Add mushrooms and cook until golden and excess moisture evaporates, about 5 minutes. Add garlic and mustard; cook until garlic is fragrant, about 1 minute.Add flour to the skillet, stirring to remove any lumps. Slowly add beef broth, whisking until incorporated. Season with salt and pepper. Reduce heat to medium and simmer, stirring often, until sauce thickens, about 5 minutes. Check for seasoning again.Return pork chops to the skillet and cook until heated through, about 1 minute. Serve hot.",
      user_id: 2
    },
    {
      chef_name: "Brendan :D",
      recipe_name: "Lettuce Wraps",
      ingredients: "16 Boston Bibb or butter lettuce leaves1 pound lean ground beef1 tablespoon cooking oil1 large onion, chopped1/4 cup hoisin sauce2 cloves fresh garlic, minced 1 tablespoon soy sauce1 tablespoon rice wine vinegar2 teaspoons minced pickled ginger1 dash Asian chile pepper sauce, or to taste (optional)1 (8 ounce) can water chestnuts, drained and finely chopped1 bunch green onions, chopped2 teaspoons Asian (dark) sesame oil",
      recipe_photo: "https://images.media-allrecipes.com/userphotos/720x405/2630776.jpg",
      cook_time: "15 min",
      prep_time: "20 min",
      servings: "4 servings",
      instructions: "Rinse whole lettuce leaves and pat dry, being careful not tear them. Set aside. Heat a large skillet over medium-high heat. Cook and stir beef and cooking oil in the hot skillet until browned and crumbly, 5 to 7 minutes. Drain and discard grease; transfer beef to a bowl. Cook and stir onion in the same skillet used for beef until slightly tender, 5 to 10 minutes. Stir hoisin sauce, garlic, soy sauce, vinegar, ginger, and chile pepper sauce into onions. Add water chestnuts, green onions, sesame oil, and cooked beef; cook and stir until the onions just begin to wilt, about 2 minutes.Arrange lettuce leaves around the outer edge of a large serving platter and pile meat mixture in the center.",
      user_id: 2
    },



    {
      chef_name: "Brendan :D",
      recipe_name: "Quick and Easy Monkey Bread",
      ingredients: "24 ounces frozen dinner roll dough1 cup packed brown sugar1 (3.4 ounce) package instant butterscotch pudding mix1/4 cup white sugar2 teaspoons ground cinnamon1/2 cup chopped walnuts1/2 cup melted butter",
      recipe_photo: "https://images.media-allrecipes.com/userphotos/560x315/3026392.jpg",
      cook_time: "15 min",
      prep_time: "20 min",
      servings: "4 servings",
      instructions: "The night or several hours before, grease and flour a 9 or 10 inch tube pan. Mix brown sugar and pudding mix together. Mix white sugar and cinnamon together. Place frozen dinner rolls in pan a layer at a time. Sprinkle brown sugar and pudding mix over first layer of rolls. Sprinkle sugar and cinnamon mixture over the brown sugar and pudding mixture. Spread half the nuts and melted butter over first layer. Repeat with the next layer. Place on counter over night. Do not cover. Next morning bake in a preheated 350 degrees F (175 degrees C) oven for 30 minutes. Let stand a few minutes and turn pan over onto serving platter.",
      user_id: 2
    },
    {
      chef_name: "Brendan :D",
      recipe_name: "Chef John's Perfect Prime Rib",
      ingredients: "4 pounds prime rib roast1/4 cup unsalted butter, softened1 tablespoon freshly ground black pepper1 teaspoon herbes de Provencekosher salt",
      recipe_photo: "https://images.media-allrecipes.com/userphotos/720x405/4886145.jpg",
      cook_time: "140 min",
      prep_time: "10 min",
      servings: "8 servings",
      instructions: "Place rib roast on a plate and bring to room temperature, about 4 hours. Preheat an oven to 500 degrees F (260 degrees C). Combine butter, pepper, and herbes de Provence in a bowl; mix until well blended. Spread butter mixture evenly over entire roast. Season roast generously with kosher salt. Roast the 4-pound prime rib (see footnote if using a larger and smaller roast) in the preheated oven for 20 minutes. Turn the oven off and, leaving the roast in the oven with the door closed, let the roast sit in the oven for 2 hours. Remove roast from the oven, slice, and serve.",
      user_id: 2
    },
    {
      chef_name: "Brendan :D",
      recipe_name: "Lettuce Wraps",
      ingredients: "16 Boston Bibb or butter lettuce leaves1 pound lean ground beef1 tablespoon cooking oil1 large onion, chopped1/4 cup hoisin sauce2 cloves fresh garlic, minced 1 tablespoon soy sauce1 tablespoon rice wine vinegar2 teaspoons minced pickled ginger1 dash Asian chile pepper sauce, or to taste (optional)1 (8 ounce) can water chestnuts, drained and finely chopped1 bunch green onions, chopped2 teaspoons Asian (dark) sesame oil",
      recipe_photo: "https://images.media-allrecipes.com/userphotos/720x405/2630776.jpg",
      cook_time: "15 min",
      prep_time: "20 min",
      servings: "4 servings",
      instructions: "Rinse whole lettuce leaves and pat dry, being careful not tear them. Set aside. Heat a large skillet over medium-high heat. Cook and stir beef and cooking oil in the hot skillet until browned and crumbly, 5 to 7 minutes. Drain and discard grease; transfer beef to a bowl. Cook and stir onion in the same skillet used for beef until slightly tender, 5 to 10 minutes. Stir hoisin sauce, garlic, soy sauce, vinegar, ginger, and chile pepper sauce into onions. Add water chestnuts, green onions, sesame oil, and cooked beef; cook and stir until the onions just begin to wilt, about 2 minutes.Arrange lettuce leaves around the outer edge of a large serving platter and pile meat mixture in the center.",
      user_id: 2
    },
    {
      chef_name: "Brendan :D",
      recipe_name: "Potato",
      ingredients: "1 standard Irish Potato",
      recipe_photo: "https://vistapointe.net/images/potato-wallpaper-17.jpg",
      cook_time: "N/A",
      prep_time: "2 min",
      servings: "1 serving",
      instructions: "Rinse potato.... Salt potato... EAT POTATO",
      user_id: 2
    },
  ]);
};
