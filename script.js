function showHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('recipe-list').style.display = 'none';
    document.getElementById('recipe-detail').style.display = 'none';
}
function showRecipes() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('recipe-list').style.display = 'block';
    document.getElementById('recipe-detail').style.display = 'none';
}


function showRecipe(recipeId) {
    const recipes = {
        recipe1: {
            title: "Spaghetti Carbonara",
            content: "Ingredients: Spaghetti, pancetta or guanciale, eggs, Pecorino Romano cheese, black pepper.Process: Cook spaghetti in salted water; in a separate pan, sauté pancetta until crispy. Whisk eggs and cheese together, then combine with the drained pasta and pancetta, off heat. Season with black pepper and serve immediately.",
            
        },
        recipe2: {
            title: "Chicken Curry",
            content: "Ingredients: Chicken, onion, garlic, ginger, tomatoes, coconut milk, curry powder, salt, and cilantro. Process: Sauté chopped onion, garlic, and ginger until golden; add chicken and cook until browned. Stir in curry powder and tomatoes, then add coconut milk and simmer until chicken is cooked through. Garnish with cilantro and serve with rice or bread.",
            image:"https://myfoodstory.com/wp-content/uploads/2020/10/Dhaba-Style-Chicken-Curry-2.jpg"
        },
        
        recipe3: {
            title: "Chocolate Cake",
            content: "Ingredients: All-purpose flour, sugar, cocoa powder, baking powder, eggs, milk, vegetable oil, and vanilla extract.Process:Preheat oven to 350°F (175°C); mix dry ingredients in one bowl and wet ingredients in another. Combine both mixtures until smooth, then pour into a greased cake pan. Bake for 30-35 minutes, cool, and frost as desired"
        },
        recipe4:{
            title:"Fruit Custard",
            content: "Ingredients: Mixed fruits (e.g., bananas, apples, grapes), custard powder, milk, sugar, and vanilla extract.Process: Heat milk and dissolve custard powder mixed with a little cold milk; add sugar and vanilla. Stir until thickened, then cool. Combine with chopped fruits, chill, and serve."      
         },
        recipe5:{
            title:"Falooda Dessert",
            content:"Ingredients:Falooda sev (noodles), basil seeds, milk, sugar, rose syrup, and ice cream.Process:Soak basil seeds in water until they swell; cook falooda sev according to package instructions. In a glass, layer milk mixed with sugar, falooda sev, basil seeds, and rose syrup. Top with a scoop of ice cream and serve chilled."
        },
        recipe6:{
            title:"Gulab Jamun",
            content:"Ingredients: Milk powder, all-purpose flour, baking soda, ghee, milk, sugar, water, and rose water.Process:Mix milk powder, flour, and baking soda; add ghee and milk to form a dough. Shape into small balls and fry in ghee until golden. Prepare sugar syrup with water and sugar, add rose water, and soak the fried balls in the syrup before serving."
        },
        recipe7:{
            title:"Kheer",
            content:"Ingredients:Basmati rice, milk, sugar, cardamom, almonds, cashews, and saffron.Process:Rinse rice and cook it in boiling milk until soft; add sugar and cardamom. Simmer until thickened, then stir in soaked saffron and nuts. Serve warm or chilled, garnished with extra nuts."
        },
        recipe8:{
            title:"Jalebi",
            content:"Ingredients: All-purpose flour, yogurt, baking powder, sugar, water, saffron, and cardamom.Process: Mix flour, yogurt, and baking powder to form a batter; let it ferment for a few hours. Heat oil and pipe the batter into spiral shapes; fry until golden. Prepare sugar syrup with water, sugar, saffron, and cardamom, then dip fried jalebis in the syrup before serving."
        },
        recipe9:{
            title:"Veg Biriyani",
            content:"Ingredients:Basmati rice, mixed vegetables (carrots, peas, beans), onion, garlic, ginger, biryani masala, yogurt, saffron, and cilantro.Process:Sauté sliced onions, garlic, and ginger; add mixed vegetables and biryani masala, then cook briefly. Layer partially cooked rice on top, mix in yogurt and saffron, then cover and cook on low heat until the rice is fully cooked. Garnish with cilantro and serve with raita."
        },
        recipe10:{
            title:"Mushroom curry",
            content:"Ingredients: 500g sliced mushrooms, 1 onion (chopped), 2 tomatoes (pureed), 2-3 cloves garlic (minced), 1-inch ginger (grated), spices (cumin, coriander, turmeric, garam masala, chili powder), salt, oil.Process: Sauté onion, garlic, ginger, and green chilies in oil, then add tomato puree and spices. Stir in mushrooms and cook until tender. Finish with coconut milk if desired, and garnish with cilantro before serving."

        },
        recipe11:{
            title:"Paneer curry",
            content:"Ingredients: 250g paneer (cubed), 1 onion (chopped), 2 tomatoes (pureed), 2-3 cloves garlic (minced), 1-inch ginger (grated), spices (cumin, coriander, turmeric, garam masala), salt, oil, and cilantro. Process: Sauté onion, garlic, and ginger in oil, then add tomato puree and spices. Add paneer and cook for a few minutes, stirring gently. Garnish with cilantro before serving."
        },
        recipe12:{
            title:'Chole Bhature',
            content:"Ingredients: 1 cup chickpeas (soaked overnight), 1 onion (chopped), 2 tomatoes (pureed), 2-3 cloves garlic (minced), 1-inch ginger (grated), spices (cumin, coriander, garam masala, red chili powder), salt, oil, and 2 cups flour (for bhature).Process: Cook soaked chickpeas with onion, garlic, ginger, tomato puree, and spices until tender. For bhature, knead flour with water and yogurt, let it rest, then roll and deep-fry until puffed. Serve the chickpeas with hot bhature!"
        },
        recipe13:{
            title:"Brinjal curry",
            content:"Ingredients:*500g brinjal (eggplant, chopped), 1 onion (chopped), 2 tomatoes (pureed), 2-3 cloves garlic (minced), 1-inch ginger (grated), spices (cumin, coriander, turmeric, garam masala), salt, oil, and cilantro.Process: Sauté onion, garlic, and ginger in oil, then add tomato puree and spices. Stir in the chopped brinjal and cook until tender, adding a little water if needed. Garnish with cilantro before serving."
        },
        recipe14:{
            title:"Paneer Biriyani",
            content:"Ingredients: 1 cup basmati rice, 250g paneer (cubed), 1 onion (sliced), 2 tomatoes (chopped), 2-3 cloves garlic (minced), 1-inch ginger (grated), spices (cumin, cardamom, bay leaf, garam masala), salt, oil, and cilantro/mint for garnish.Process: Sauté onion, garlic, and ginger in oil, then add tomatoes and spices, cooking until fragrant. Add paneer and cook briefly before mixing in soaked rice and water (2 cups). Cover and cook until rice is done; garnish with cilantro or mint before serving."
        },
        recipe15:{
            title:"Mushroom Biriyani",
            content:"Ingredients:1 cup basmati rice, 500g mushrooms (sliced), 1 onion (sliced), 2 tomatoes (chopped), 2-3 cloves garlic (minced), 1-inch ginger (grated), spices (cumin, cardamom, bay leaf, garam masala), salt, oil, and cilantro/mint for garnish. Process:Sauté onion, garlic, and ginger in oil, then add tomatoes and spices, cooking until fragrant. Add sliced mushrooms and cook until tender, then stir in soaked rice and water (2 cups). Cover and cook until rice is done; garnish with cilantro or mint before serving."
        },
        recipe16:{
            title:"Chicken Biriyani",
            content:"Ingredients: 1 cup basmati rice, 500g chicken (cubed), 1 onion (sliced), 2 tomatoes (chopped), 2-3 cloves garlic (minced), 1-inch ginger (grated), spices (cumin, cardamom, bay leaf, garam masala), salt, oil, and cilantro/mint.Process: Sauté onion, garlic, and ginger in oil, then add tomatoes and spices until fragrant. Add chicken and cook until browned, then stir in soaked rice and water (2 cups). Cover and cook until rice is tender; garnish with cilantro or mint before serving."
        },
        recipe17:{
            title:"Mutton Biriyani",
            content:"Ingredients: 1 cup basmati rice, 500g mutton (cubed), 1 onion (sliced), 2 tomatoes (chopped), 2-3 cloves garlic (minced), 1-inch ginger (grated), spices (cumin, cardamom, bay leaf, cloves, garam masala), salt, oil, and cilantro/mint for garnish.Process: Sauté onion, garlic, and ginger in oil, then add mutton and brown it. Stir in tomatoes and spices, cooking until tender, then add soaked rice and water (2 cups). Cover and cook until rice is done; garnish with cilantro or mint before serving."
        },
        recipe18:{
            title:"Mughalai Chicken Biriyani",
            content:"Ingredients: 1 cup basmati rice, 500g chicken (marinated in yogurt and spices), 1 onion (sliced), 2 tomatoes (chopped), 2-3 cloves garlic (minced), 1-inch ginger (grated), spices (cumin, cardamom, bay leaf, cloves, garam masala), salt, oil, and cilantro/mint for garnish.Process: Sauté onion, garlic, and ginger in oil, then add marinated chicken and cook until browned. Stir in tomatoes and spices, then add soaked rice and water (2 cups). Cover and cook until rice is done; garnish with cilantro or mint before serving."
        },
        recipe19:{
            title:"Mutton Curry",
            content:"Ingredients:500g mutton (cubed), 2 onions (sliced), 2 tomatoes (chopped), 2-3 cloves garlic (minced), 1-inch ginger (grated), spices (cumin, coriander, turmeric, garam masala), salt, oil, and cilantro for garnish.Process: Sauté onions, garlic, and ginger in oil until golden, then add tomatoes and spices, cooking until soft. Add mutton and cook until browned, then add water and simmer until tender. Garnish with cilantro before serving."
        },
        recipe20:{
            title:"Mutton  Dalcha",
            content:"Ingredients: 500g mutton (cubed), 1 cup toor dal (split pigeon peas), 1 onion (sliced), 2 tomatoes (chopped), 2-3 cloves garlic (minced), 1-inch ginger (grated), spices (cumin, coriander, turmeric, garam masala), salt, oil, and cilantro for garnish.Process: Cook toor dal separately until soft. Sauté onions, garlic, and ginger in oil, then add tomatoes and spices, cooking until soft. Add mutton and simmer until tender, then combine with the cooked dal. Garnish with cilantro before serving."
        },
        recipe21:{
            title:"Egg Rice",
            content:"For a quick egg rice dish, gather 2 cups of cooked rice, 2 eggs, 2 chopped green onions, and soy sauce, salt, and pepper to taste. Begin by scrambling the eggs in a pan until fully cooked, then set them aside. Stir-fry the cooked rice in the same pan for a few minutes, adding the scrambled eggs and chopped green onions. Season with soy sauce, salt, and pepper, then serve warm for a tasty meal!"
        },
        recipe22:{
            title:"Egg Curry",
            content:"To prepare a flavorful egg curry, you’ll need 4 hard-boiled eggs, 1 onion (chopped), 2 tomatoes (chopped), 1 teaspoon ginger-garlic paste, and spices like turmeric, cumin, and garam masala. Heat oil in a pan and sauté the chopped onion until golden, then add the ginger-garlic paste and cook until fragrant. Add the tomatoes and spices, cooking until the tomatoes soften, then gently add the halved boiled eggs. Simmer for a few minutes, adjusting salt to taste, and serve hot with rice or bread!"
        },
        recipe23:{
            title:"Egg Biriyani",
            content:"To make a delicious egg biryani, gather 2 cups basmati rice, 4 hard-boiled eggs, 1 onion (sliced), 2 tomatoes (chopped), 1 teaspoon ginger-garlic paste, and spices like cumin, coriander, and garam masala. Start by frying the sliced onions in oil until golden, then add the ginger-garlic paste and sauté until fragrant. Mix in the chopped tomatoes and spices, cooking until the tomatoes soften, then stir in the soaked and drained rice along with 4 cups of water. Gently place the boiled eggs on top, cover, and cook on low heat until the rice is fluffy; serve hot with raita or salad!"
        },
        recipe24:{
            title:"Rasagulla",
            content:"To make delicious rasgulla, you’ll need 1 liter of milk, 2 tablespoons of lemon juice, 1 cup of sugar, and 4 cups of water. Start by boiling the milk and adding lemon juice to curdle it, then strain the curds through a cheesecloth and rinse to remove the acidity. Knead the chenna (curds) until smooth, then form small balls and set aside. In a separate pot, bring water and sugar to a boil to make a syrup, then gently add the chenna balls, cooking until they double in size; let cool in the syrup before serving!"
        },
        recipe25:{
            title:"Rasamalai",
            content:"To make tasty rasmalai, gather 1 liter of milk, 2 tablespoons of lemon juice, 1 cup of sugar, 4 cups of water, and a pinch of cardamom powder. First, boil the milk and add lemon juice to curdle it, then strain the curds through a cheesecloth and rinse. Knead the chenna until smooth, form small discs, and boil them in a sugar syrup made from 1 cup of sugar and 4 cups of water. Once cooked, soak the discs in flavored milk (boiled and cooled with cardamom) and chill before serving!"
        },
        recipe26:{
            title:"Milk Kova",
            content:"To make delicious milk kova, you’ll need 1 liter of full-fat milk, 1 cup of sugar, and 1 tablespoon of ghee. Begin by boiling the milk in a heavy-bottomed pan, stirring continuously until it reduces to half its volume. Add sugar and ghee, cooking on low heat while stirring until it thickens and starts to leave the sides of the pan. Once it reaches a desired consistency, transfer it to a greased plate, let it cool slightly, and then cut into pieces before serving!"
        },
        recipe27:{
            title:"Badam Milk",
            content:"To make refreshing badam milk, gather 1 liter of milk, 10-12 almonds (badam), 2 tablespoons of sugar, and a pinch of cardamom powder. Soak the almonds in warm water for a few hours, then peel and blend them into a smooth paste. In a saucepan, bring the milk to a boil, then add the almond paste, sugar, and cardamom powder, simmering for a few minutes. Serve warm or chilled, garnished with chopped almonds for a delightful treat!"
        },
        recipe28:{
            title:"Butterscotch Cake",
            content:"To make a delicious butterscotch cake, gather 1 cup of unsalted butter, 1 cup of brown sugar, 2 cups of all-purpose flour, 1 teaspoon of baking powder, and 4 eggs. Cream the butter and brown sugar together until fluffy, then add the eggs one at a time, mixing well. Gradually fold in the flour and baking powder, then pour the batter into a greased cake pan. Bake at 350°F (175°C) for about 30-35 minutes, let cool, and frost with butterscotch icing for a delightful finish!"
        },
        recipe29:{
            title:"Vanilla Cake",
            content:"To make a classic vanilla cake, gather 1 cup of unsalted butter, 2 cups of granulated sugar, 4 eggs, 3 cups of all-purpose flour, 1 tablespoon of baking powder, and 1 tablespoon of vanilla extract. Cream the butter and sugar together until light and fluffy, then add the eggs one at a time, mixing well. In a separate bowl, combine the flour and baking powder, then gradually add this to the butter mixture along with the vanilla extract. Pour the batter into a greased cake pan and bake at 350°F (175°C) for 25-30 minutes; let cool before frosting!"
        },
        recipe30:{
            title:"Banana Milk Shake",
            content:"To make a creamy banana milkshake, gather 2 ripe bananas, 2 cups of cold milk, 2 tablespoons of sugar (or to taste), and a pinch of cinnamon (optional). In a blender, combine the bananas, cold milk, sugar, and cinnamon, blending until smooth. If you prefer a thicker shake, add a scoop of ice cream. Pour into glasses and serve immediately for a refreshing treat!"
        },
        recipe31:{
            title:"Chocolate Milk Shake",
            content:"Ingredients:2 cups milk ,3 tablespoons chocolate syrup , 2 scoops chocolate ice cream   Whipped cream (for topping) .Process: Blend the milk, chocolate syrup, and ice cream until smooth. Pour into glasses and top with whipped cream. Serve immediately. Enjoy your delicious treat!"
        },
        recipe32:{
            title:"Custard Apple Milk Shake",
            content:" Ingredients:1 ripe custard apple (peeled and seeded),2 cups milk ,2 tablespoons sugar (to taste) ,Ice cubes (optional),Process:Blend the custard apple pulp with milk and sugar until smooth. Add ice cubes if desired and blend again. Pour into glasses and serve immediately. Enjoy!"
        },
        recipe33:{
            title:"Dosa",
            content:"Ingredients: 1 cup rice ,1/3 cup split urad dal ,Water (for soaking and grinding) ,Salt (to taste).Process:Soak rice and urad dal separately for 4-6 hours, then grind to a smooth batter with water. Ferment the batter overnight, then heat a skillet, pour a ladle of batter, and spread it thin. Cook until golden brown, then serve with chutney or sambar. Enjoy!"
        },
        recipe34:{
            title:"Puri",
            content:"Ingredients:2 cups whole wheat flour ,1 teaspoon salt , Water (as needed),Oil (for frying).Process: Mix the flour and salt, then gradually add water to form a smooth dough. Divide into small balls and roll them out into small circles. Heat oil in a pan and fry each puri until puffed and golden brown. Serve hot with curry or chutney. Enjoy!"
        },
        recipe35:{
            tilte:"Idli",
            content:"Ingredients:1 cup rice,1/2 cup split urad dal ,Water (for soaking and grinding),Salt (to taste).Process:Soak rice and urad dal separately for 4-6 hours, then grind to a smooth batter with water. Mix in salt and let it ferment overnight. Pour the batter into idli molds and steam for 10-12 minutes. Serve hot with chutney or sambar. Enjoy!"
        },
        recipe36:{
            title:"Vada",
            content:"Ingredients:1 cup split urad dal ,1/4 cup chopped onions,2-3 green chilies (chopped),Salt (to taste),Oil (for frying).Process: Soak urad dal for 4-6 hours, then grind to a coarse paste with a little water. Mix in onions, green chilies, and salt. Shape the mixture into small donuts and fry in hot oil until golden brown. Serve hot with chutney or sambar. Enjoy!"
        },
        recipe37:{
            title:"Lemon Rice",
            content:"Ingredients: 2 cups cooked rice ,2 tablespoons oil,1 teaspoon mustard seeds,1-2 green chilies (slit),1/4 teaspoon turmeric powder,Salt (to taste),Juiceof 1 lemon ,Chopped coriander (for garnish).Process: Heat oil in a pan, add mustard seeds, and let them splutter. Add green chilies, turmeric powder, and salt, then sauté for a minute. Mix in the cooked rice and lemon juice, stirring well. Garnish with chopped coriander and serve warm. Enjoy!"
        },
        recipe38:{
            title:"Sambar",
            content:"Ingredients:1 cup tuvar dal (pigeon peas),1-2 cups mixed vegetables (carrots, beans, potato),2 tablespoons sambar powder,1/2 teaspoon turmeric powder,Salt (to taste),Tamarind pulp (to taste),2 tablespoons oil,Mustard seeds and curry leaves (for tempering),Process:Cook the tuvar dal and mixed vegetables until soft. Add sambar powder, turmeric, salt, and tamarind pulp, then simmer for 10 minutes. In a separate pan, heat oil, add mustard seeds and curry leaves for tempering, and pour it into the sambar. Serve hot with rice or idli. Enjoy!"
        },
        recipe39:{
            tilte:"Peanut Chutney",
            content:"Ingredients:1 cup roasted peanuts,2-3 green chilies (adjust to taste),1 tablespoon tamarind pulp,Salt (to taste),Water (as needed). Process: Blend roasted peanuts, green chilies, tamarind pulp, and salt until smooth, adding water as needed for desired consistency. Transfer to a bowl and adjust seasoning if necessary. Serve with idli, dosa, or vada. Enjoy!"
        },
        recipe40:{
            title:"Coconut Chutney",
            content:"Ingredients:1 cup grated fresh coconut,2-3 green chilies (adjust to taste),1 tablespoon ginger (chopped),Salt (to taste),Water (as needed),1 teaspoon mustard seeds (for tempering),Curry leaves (for tempering),1 tablespoon oil (for tempering).Process:Blend grated coconut, green chilies, ginger, and salt with water until smooth. Transfer to a bowl. In a small pan, heat oil, add mustard seeds and curry leaves until they splutter, then pour over the chutney. Serve with idli, dosa, or vada. Enjoy!"
        },
        recipe41:{
            tilte:"Aloo Curry",
            content:"Ingredients:3-4 medium potatoes (peeled and cubed),2 tablespoons oil,1 teaspoon cumin seeds,1 onion (chopped),2 tomatoes (chopped),1 teaspoon ginger-garlic paste ,1 teaspoon turmeric powder,1 teaspoon red chili powder,Salt (to taste),Chopped coriander (for garnish).Process:Heat oil in a pan, add cumin seeds, and let them splutter. Sauté onions until golden, then add ginger-garlic paste and tomatoes, cooking until soft. Add potatoes, turmeric, red chili powder, salt, and water; simmer until potatoes are cooked. Garnish with coriander and serve hot. Enjoy!"

        },
        recipe42:{
            title:"Uddi Vada",
            content:"Ingredients: 1 cup urad dal (split black gram),2-3 green chilies,1-inch ginger, chopped,Salt to taste,Oil for frying.Process: 1. Soak urad dal for 4-6 hours, then drain and grind with green chilies, ginger, and salt to a smooth paste,2. Shape the batter into small donuts and deep fry in hot oil until golden brown,3. Serve hot with coconut chutney or sambar for dipping,4. Enjoy the crispy, savory Uddi Vadas!"
        },
        recipe43:{
            title:"Punugulu",
            content:"Ingredients:1 cup rice flour ,½ cup urad dal flour ,1-2 green chilies, chopped ,1 small onion, finely chopped,Salt to taste,Water, as needed,  Oil for frying . Process: 1. In a bowl, mix rice flour, urad dal flour, green chilies, onion, and salt; add water to form a thick batter,2. Heat oil in a pan and drop spoonfuls of the batter into the hot oil, frying until golden brown, 3. Remove and drain on paper towels, 4. Serve hot with coconut chutney or tomato sauce!"
        },
        recipe44:{
            title:"Nellore Fish Curry",
            content:"Ingredients:To make Nellore fish curry, marinate 1 lb of fish (like red snapper) with turmeric, chili powder, and salt,Process: Sauté onions, green chilies, and tomatoes in oil, then add tamarind juice and the marinated fish. Cook until the fish is tender and the gravy thickens, then finish with a sprinkle of pulusu podi for flavor. Serve hot with steamed rice or ragi mudde for a delicious meal."
        },
        recipe45:{
            title:"title: Fish Fry",
            content:"Ingredients: For a simple fish fry, marinate 1 lb of fish (like tilapia or catfish) with turmeric, red chili powder, and salt for about 30 minutes. Coat the fish in rice flour or cornmeal for extra crunch, then heat oil in a pan and fry the fish until golden brown on both sides. Drain on paper towels and serve hot with lemon wedges and sliced onions for a tasty side. Enjoy!"

        },
        recipe46:{
            title:"Prawns Curry",
            content:"Ingredients: To make prawn curry, sauté 1 chopped onion, 2 minced garlic cloves, and 1-inch ginger in oil until golden. Add 2 chopped tomatoes, 1 tsp turmeric, and 2 tsp red chili powder, cooking until the tomatoes soften. Stir in 1 lb of cleaned prawns and cook until they turn pink, then add coconut milk and simmer for 5-7 minutes. Finish with salt to taste and garnish with fresh coriander, serving hot with rice or naan."

        },
        recipe47:{
            title:"Chicken Fry",
            content:"Ingredients:For chicken fry, marinate 1 lb of chicken pieces with 1 tsp turmeric, 2 tsp red chili powder, and salt for 30 minutes. Heat oil in a pan and sauté 1 chopped onion until golden brown, then add the marinated chicken and cook until browned and cooked through, about 15-20 minutes. Optionally, add curry leaves and green chilies for extra flavor. Serve hot with lemon wedges and enjoy!"

        },
        recipe48:{
            title:"Chicken Kabab",
            content:"Ingredients: For chicken kebabs, start by marinating 1 lb of boneless chicken pieces in a mixture of 1 cup yogurt, 2 tsp ginger-garlic paste, 1 tsp turmeric, 2 tsp red chili powder, 1 tsp garam masala, and salt to taste. Let it marinate for at least 1 hour (or overnight for best results).Preheat your grill or oven to medium-high heat. Thread the marinated chicken onto skewers and grill for about 15-20 minutes, turning occasionally, until the chicken is cooked through and slightly charred.Serve hot with mint chutney and onion rings for a delicious treat! Enjoy!"

        },
        recipe49:{
            title:"Mutton Fry",
            content:"Ingredients:For mutton fry, start by marinating 1 lb of mutton pieces with 1 tsp turmeric, 2 tsp red chili powder, and salt to taste. Let it marinate for at least 30 minutes.Heat oil in a pan and add 2 chopped onions, frying until golden brown. Add 1 tablespoon ginger-garlic paste and sauté until the raw smell disappears. Then, add the marinated mutton and cook on high heat until it’s browned on all sides.Lower the heat, cover, and cook until the mutton is tender, stirring occasionally. If needed, add a little water to prevent sticking. Once cooked, add curry leaves and green chilies for extra flavor and sauté for a few more minutes.Serve hot with rice or roti, garnished with fresh coriander. Enjoy!"

        },
        recipe50:{
            title:"Mutton Kabab",
            content:"Ingredients:For mutton kebabs, start by finely grinding 1 lb of mutton (preferably shoulder or leg) in a food processor. In a mixing bowl, combine the ground mutton with 1 medium finely chopped onion, 2 tsp ginger-garlic paste, 2 tsp red chili powder, 1 tsp garam masala, 1/2 tsp cumin powder, and salt to taste. Add a handful of chopped fresh coriander and mint leaves for added flavor.Mix well and let the mixture marinate for at least 1 hour in the refrigerator.Preheat your grill or oven to medium-high heat. Shape the marinated mixture into kebabs or patties and thread them onto skewers if desired.Grill the kebabs for about 15-20 minutes, turning occasionally, until they are cooked through and nicely charred.Serve hot with mint chutney, sliced onions, and lemon wedges. Enjoy your delicious mutton kebabs!"






        }


    };

    document.getElementById('recipe-title').innerText = recipes[recipeId].title;
    document.getElementById('recipe-content').innerText = recipes[recipeId].content;
    // document.getElementById('recipe-image').src = recipes[recipeId].image;
    document.getElementById('home').style.display = 'none';
    document.getElementById('recipe-list').style.display = 'none';
    document.getElementById('recipe-detail').style.display = 'block';
}


// Initialize the home view
showHome();
