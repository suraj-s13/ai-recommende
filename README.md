# AI Tool Recommender 🤖

An intelligent web application that helps users discover the most suitable AI tools for their needs. Instead of browsing endless directories, users can describe their problem and get smart, context-aware recommendations.

### ✨ [Live Demo Link](https://ai-tool-recommende.onrender.com/) ✨

![AI Tool Recommender Screenshot](https://github.com/suraj-s13/ai-recommende/blob/main/.vscode/AI-Tool%20Recom.png)

## About The Project

The world of AI is expanding at an incredible rate, with hundreds of new tools released every month. This project was built to solve a common problem: "Which AI tool should I use?" 

This application acts as a specialized search engine. It uses **semantic search** to understand the *meaning* behind a user's query, providing far more relevant results than a simple keyword search. The goal is to make AI more accessible and help individuals and businesses find the perfect tool without the hassle.

---

## How It Works

The magic behind the recommendation engine is a process based on **vector embeddings** and **cosine similarity**:

1.  **Data Pre-processing:** The description and keywords for every AI tool in the database are converted into a high-dimensional numerical vector (an embedding) using the `all-mpnet-base-v2` model from Sentence-Transformers. These vectors are stored in a JSON file.
2.  **User Query:** When a user types a query (e.g., "help me edit a podcast"), that query is also converted into a vector using the same model.
3.  **Similarity Search:** The backend calculates the **cosine similarity** between the user's query vector and every tool's vector in the database.
4.  **Ranking:** Tools with the highest similarity score are ranked and returned to the user, resulting in highly relevant, context-aware recommendations.

---

## Tech Stack

This project is a full-stack application built with modern technologies.

### **Frontend (Hosted on Render)**
* **[React.js](https://reactjs.org/):** A popular JavaScript library for building user interfaces.
* **[Axios](https://axios-http.com/):** For making API requests to the backend.
* **CSS:** Custom styling for a clean and responsive design.

### **Backend (Hosted on Hugging Face)**
* **[Python](https://www.python.org/):** The core language for the backend.
* **[Flask](https://flask.palletsprojects.com/):** A lightweight web framework for building the API.
* **[Sentence-Transformers](https://www.sbert.net/):** The library used for generating text embeddings.
* **[Scikit-learn](https://scikit-learn.org/):** Used for calculating cosine similarity.
* **[Gunicorn](https://gunicorn.org/):** A production-ready web server.

---

## Local Development Setup

To get a local copy up and running, follow these simple steps.

### **Prerequisites**
* Node.js and npm installed (`v16` or higher)
* Python installed (`v3.9` or higher)

### **Installation**

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/](https://github.com/)[suraj-s13]/[ai-recommender].git
    cd [your-repo-name]
    ```

2.  **Setup the Backend:**
    ```sh
    cd backend
    # Create and activate a virtual environment
    python -m venv venv
    # On Windows: venv\Scripts\activate
    # On Mac/Linux: source venv/bin/activate

    # Install required packages
    pip install -r requirements.txt

    # IMPORTANT: Generate the embeddings file for the first time
    python generate_embeddings.py

    # Run the Flask server
    flask run
    ```
    Your backend will now be running on `http://127.0.0.1:5000`.

3.  **Setup the Frontend:**
    * In a new terminal window:
    ```sh
    cd frontend
    npm install

    # Create a .env file in the 'frontend' directory
    # Add the following line to it:
    # REACT_APP_API_URL=[http://127.0.0.1:5000](http://127.0.0.1:5000)

    # Start the React development server
    npm start
    ```
    Your frontend will now be running on `http://localhost:3000` and connected to your local backend.

---

## License

Distributed under the MIT License. See `LICENSE` file for more information.
