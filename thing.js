// Data for countries and their information
const countryData = {
    "Kud": {
        overview: "Kud is a nation primarily of High Elves and Wood Elves, known for lush forests and a focus on magic and diplomacy.",
        geography: "Kud has lush forests, rolling hills, and peaceful valleys. The landscape is rich in natural beauty and arcane energy.",
        culture: "Kud has a long tradition of magical studies, diplomatic relations, and deep respect for nature and the arcane arts.",
        political_stance: "Kud is an active member of the Elven Alliance and seeks peaceful relations with its neighbors, though it has tense relations with the Dragonborn."
    },
    "Republic of Cheth": {
        overview: "The Republic of Cheth is a powerful nation of High Elves known for its expansive arcane practices and political ambitions.",
        geography: "Cheth is characterized by its vast mountain ranges, deep forests, and ancient ruins, which provide resources for their magical pursuits.",
        culture: "A highly structured society that emphasizes arcane power, intellectualism, and the importance of elven heritage.",
        political_stance: "The Republic of Cheth takes an aggressive stance against the Dragonborn and has aspirations for expanding its borders."
    },
    "Protectorate of Deloragh": {
        overview: "Deloragh is a land of Wood Elves, deeply connected to nature and its preservation, focused on maintaining balance with the world.",
        geography: "The landscape consists of dense forests, ancient trees, and wild, untamed rivers that flow through the land.",
        culture: "The elves of Deloragh live in harmony with nature, with a deep respect for its sanctity. They practice druidic magic and live in tight-knit communities.",
        political_stance: "Deloragh is neutral in most conflicts, focusing on the protection of nature, but it will defend its lands fiercely if needed."
    },
    "Kingdom of Zraz": {
        overview: "The Kingdom of Zraz is an Eladrin elf-dominated nation with a strong focus on arcane research and magical pursuits.",
        geography: "Zraz is a land of mystical forests, ancient ruins, and elven cities surrounded by magical barriers and shifting landscapes.",
        culture: "Zraz has a deep connection to the Feywild, with many traditions rooted in arcane experimentation and celestial alignment.",
        political_stance: "Zraz has recently become more isolated, focusing on arcane research and maintaining neutrality in the growing tensions between other nations."
    },
    "Kingdom of Schi": {
        overview: "The Kingdom of Schi is a human-dominated kingdom that arose from the uprisings against the Elven Alliance during the Dragonborn Wars.",
        geography: "Located to the south of the Elven Alliance, Schi's geography includes vast plains, agricultural fields, and bustling cities.",
        culture: "Schi has a diverse culture, with humans and Dragonborn being the dominant groups. The kingdom places great value on independence and self-sufficiency.",
        political_stance: "Schi is neutral in most conflicts but supports the Dragonborn and has a tense relationship with the Elven Alliance."
    },
    "Principality of Hlyterius": {
        overview: "Hlyterius is a small principality, dominated by gnomes but inclusive of humans, half-elves, Dragonborn, and halflings.",
        geography: "A land of rolling hills, small towns, and ancient forests. Hlyterius is strategically located between several powerful nations.",
        culture: "Known for their ingenuity and intellectual pursuits, the gnomes of Hlyterius have a rich tradition of crafting, invention, and diplomacy.",
        political_stance: "Hlyterius maintains a neutral stance in the political sphere but is an active player in trade and diplomacy."
    },
    "Kingdom of Lilaurathan": {
        overview: "Lilaurathan is a kingdom where elves and other races, such as humans, coexist peacefully, making it an exception in a world of conflict.",
        geography: "Located along the coast, with beautiful beaches, cliffside cities, and dense forests that provide protection and resources.",
        culture: "Lilaurathan values peaceful coexistence and unity, with a focus on art, music, and understanding between different races.",
        political_stance: "The kingdom pursues a policy of neutrality but is committed to defending its people from external threats."
    },
    "Ulus of Chandia": {
        overview: "Chandia is a land of humans, gnomes, dwarves, and halflings that rose to power after the fall of the Dragonborn Kingdom.",
        geography: "The Ulus is a diverse land, with rocky hills, fertile valleys, and strategic mountain passes that lead to both conflict and prosperity.",
        culture: "Chandians are proud of their history and culture, focused on strong familial bonds, honor, and collective memory of their rise to power.",
        political_stance: "Chandia is fiercely independent, having fought for their lands and rights during the Dragonborn Wars."
    },
    "Khanate of Shar": {
        overview: "Shar is a kingdom of mountain dwarves, known for their fortresses and complex underground cities.",
        geography: "Shar's landscape is dominated by steep mountains, deep caverns, and fortified strongholds.",
        culture: "Dwarven craftsmanship, mining, and warrior traditions define the culture of Shar, which holds a deep respect for their ancient heritage.",
        political_stance: "Shar is neutral in most conflicts but will fiercely protect its lands, especially its rich mineral resources."
    },
    "Thearchy of Kilnarg": {
        overview: "Kilnarg is a theocratic nation of Aarakocra, who revere the skies and celestial forces.",
        geography: "Set in the towering mountains, Kilnarg’s cities are built high in the cliffs and clouds, with vast, sweeping views of the lands below.",
        culture: "Kilnarg’s people worship the celestial powers and believe they are the chosen guardians of the heavens.",
        political_stance: "Kilnarg maintains neutrality but will defend its lofty homes from any who threaten their way of life."
    },
    "Protectorate of Snaken": {
        overview: "Snaken is an autonomous region populated by Tieflings, known for its rare magical resources and isolationist policies.",
        geography: "Snaken’s landscape is harsh and remote, consisting of rocky terrain, deep forests, and arcane sources of power.",
        culture: "The Tieflings of Snaken maintain a mysterious, closed society and are known for their prowess in magic and trade of enchanted artifacts.",
        political_stance: "Snaken keeps to itself, but it is a key player in the magical trade, remaining neutral while retaining its autonomy."
    },
    "Faharond": {
        overview: "Faharond is the oldest known nation, surrounded by a mystical barrier that no one has been able to cross.",
        geography: "The land of Faharond is covered by an impenetrable shield, with only the tallest wizard towers visible from the outside.",
        culture: "The culture of Faharond is a mystery, as few have been able to enter the land to learn of its people.",
        political_stance: "It is unknown whether Faharond has any political ambitions, as no one from the outside can confirm its activities."
    },
    "Dhod": {
        overview: "Dhod, the Shrinking Silver Dragonborn State, was once part of the vast Dragonborn Kingdom but has since been reduced in size due to the Elven Alliance's expansion.",
        geography: "Consists of a few scattered cities, with the largest being a prominent coastal city.",
        culture: "Known for traditions of honor and martial prowess among Silver Dragonborn.",
        political_stance: "Involved in ongoing skirmishes with Kud, high tension with the Elven Alliance."
    }
};

// Event listener for the submit button
document.getElementById("submitBtn").addEventListener("click", () => {
    const selectedCountry = document.getElementById("countries").value;
    const selectedCategory = document.getElementById("info").value;

    if (selectedCountry !== "null" && selectedCategory !== "null") {
        // Display the relevant information based on the selections
        document.getElementById("resultDisplay").innerText = countryData[selectedCountry][selectedCategory];
    } else {
        document.getElementById("resultDisplay").innerText = "Please select both a country and a category.";
    }
});
