from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

app = Flask(__name__)
CORS(app)

with open('tools_with_embeddings.json', 'r') as f:
    tools_data = json.load(f)

tools_embeddings = np.array([tool['embedding'] for tool in tools_data])

model = SentenceTransformer('multi-qa-MiniLM-L6-cos-v1')

@app.route('/recommend', methods=['POST'])
def recommend():
    query = request.json.get('query', '')
    if not query:
        return jsonify({"error": "Query is required"}), 400
    
    query_embedding = model.encode([query])
    similarities = cosine_similarity(query_embedding, tools_embeddings)[0]
    
    scored_tools = zip(tools_data, similarities)

    sorted_tools = sorted(scored_tools,key=lambda x: x[1], reverse=True)

    results = []
    for tool, score in sorted_tools:
        if score > 0.3 :
            result_item = tool.copy()
            del result_item['embedding']
            result_item['score'] = float(score)
            results.append(result_item)

    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True, port=5000)