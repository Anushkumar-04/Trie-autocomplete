#include <emscripten/bind.h>
#include <vector>
#include <string>
#include <unordered_map>

using namespace std;
using namespace emscripten;

class TrieNode {
public:
    unordered_map<char, TrieNode*> children;
    bool isEnd = false;
};

class Trie {
    TrieNode* root = new TrieNode();

public:
    void insert(const string& word) {
        TrieNode* node = root;
        for (char ch : word) {
            if (!node->children[ch])
                node->children[ch] = new TrieNode();
            node = node->children[ch];
        }
        node->isEnd = true;
    }

    vector<string> autocomplete(const string& prefix) {
        vector<string> result;
        TrieNode* node = root;
        for (char ch : prefix) {
            if (!node->children[ch]) return result;
            node = node->children[ch];
        }
        dfs(node, prefix, result);
        return result;
    }

private:
    void dfs(TrieNode* node, string path, vector<string>& res) {
        if (node->isEnd) res.push_back(path);
        for (auto& p : node->children)
            dfs(p.second, path + p.first, res);
    }
};

// Binding
EMSCRIPTEN_BINDINGS(trie_module) {
    class_<Trie>("Trie")
        .constructor()
        .function("insert", &Trie::insert)
        .function("autocomplete", &Trie::autocomplete);

    register_vector<string>("vector<string>");
}
