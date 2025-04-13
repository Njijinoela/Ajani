import { useEffect, useState } from "react";
import { Card, CardContent } from "../Components/ui/card";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://ajani-backend-5oot.onrender.com/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error("Error fetching articles:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Latest Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card key={article.id} className="rounded-2xl shadow-md p-4">
            <CardContent>
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-gray-600">{article.summary}</p>
              <Link
                to={`/articles/${article.id}`}
                className="text-blue-600 hover:underline"
              >
                Read more →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Articles;
