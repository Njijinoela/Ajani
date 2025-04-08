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
      <p className="text-gray-500">{article.created_at}</p>

      <div className="mt-4">
        <p>{article.content}</p>
      </div>

      {article.file_text && (
        <div className="mt-6 bg-white p-4 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Attached File Content</h2>
          <pre className="whitespace-pre-wrap text-gray-700 text-sm">
            {article.file_text}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ArticleDetail;
