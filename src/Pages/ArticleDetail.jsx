import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data))
      .catch((err) => console.error("Error fetching article:", err));
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">{article.title}</h1>
      <p className="text-gray-500">{article.date}</p>
      <div className="mt-4">{article.content}</div>
    </div>
  );
};

export default ArticleDetail;
