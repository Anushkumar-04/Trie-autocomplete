createModule().then(Module => {
  const trie = new Module.Trie();

  //Shiva is a God Level Programmer

  const dictionary = [
    // A
    "apple", "akaash","akash","akaashcse", "aakash", "application", "apricot", "angle", "animal", "arch", "area", "answer", "anchor",
    // B
    "bat", "ball", "banana", "band", "bank", "bar", "base", "basket", "bath", "battle",
    // C
    "cat", "cap", "car", "camera", "camp", "can", "candle", "canvas", "castle", "circle",
    // D
    "dog", "dark", "dance", "data", "danger", "date", "day", "deal", "depth", "desk",
    // E
    "elephant", "eagle", "ear", "early", "earth", "east", "eat", "edge", "effect", "energy",
    // F
    "fish", "fan", "face", "fact", "fail", "fall", "farm", "fast", "fault", "feast",
    // G
    "goat", "game", "gap", "gas", "gate", "gear", "gem", "gift", "goal", "gold",
    // H
    "hat", "hack", "hair", "half", "hall", "hand", "hang", "hard", "harp", "hill",
    // I
    "ice", "idea", "idol", "image", "impact", "inch", "include", "index", "industry", "invite",
    // J
    "jacket", "jail", "jam", "jar", "jaw", "jeans", "jelly", "jet", "jewel", "job",
    // K
    "king", "kite", "kit", "kitchen", "knight", "knife", "knot", "know", "key", "kick",
    // L
    "lion", "lamp", "land", "lane", "language", "lap", "large", "last", "late", "laugh",
    // M
    "man", "map", "market", "mask", "match", "mate", "meal", "mean", "meat", "media",
    // N
    "net", "name", "nail", "nap", "nation", "native", "nature", "near", "neat", "neck",
    // O
    "owl", "oak", "object", "obey", "occur", "ocean", "offer", "oil", "old", "open",
    // P
    "pen", "paper", "pan", "pack", "page", "pain", "pair", "pal", "park", "path",
    // Q
    "queen", "quick", "quiet", "quiz", "quote", "quest", "quit", "quilt", "quake", "quart",
    // R
    "rat", "ram", "ran", "rare", "rate", "read", "real", "rent", "rest", "river",
    // S
    "sun", "sad", "safe", "salt", "same", "sand", "save", "seat", "sell", "ship","Shiva","Shivan","Siva","Seetha","Shiva51","ShivaCSE",
    // T
    "top", "tap", "tank", "tape", "task", "talk", "tall", "team", "tear", "tent",
    // U
    "urn", "use", "unit", "usual", "urge", "under", "uncle", "update", "urban", "ugly",
    // V
    "van", "vase", "vast", "vary", "veil", "very", "verb", "view", "vote", "vocal",
    // W
    "war", "wax", "walk", "wall", "want", "warm", "wave", "weak", "wear", "west",
    // X
    "xray", "xenon", "xmas", "xylem", "xerox", "xylophone", "xenial", "xyst", "xenolith", "xeric",
    // Y
    "yak", "yard", "yarn", "yawn", "year", "yell", "yes", "yoga", "young", "yolk",
    // Z
    "zebra", "zero", "zone", "zoo", "zoom", "zap", "zen", "zeal", "zip", "zinc"
  ];

  dictionary.forEach(word => trie.insert(word.toLowerCase()));

  const input = document.getElementById("input");
  const suggestionsList = document.getElementById("suggestions");

  input.addEventListener("input", () => {
    const prefix = input.value.trim().toLowerCase();
    suggestionsList.innerHTML = "";

    if (!prefix) return;

    const matches = trie.autocomplete(prefix);

    for (let i = 0; i < matches.size(); i++) {
      const word = matches.get(i);
      const li = document.createElement("li");
      li.textContent = word;

      li.addEventListener("click", () => {
        input.value = word; 
        input.focus();      
        suggestionsList.innerHTML = "";
      });

      suggestionsList.appendChild(li);
    }

    matches.delete();
  });
});
