import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [contentPerPage] = useState(2000);

  useEffect(() => {
    fetch(`https://ajani-backend-5oot.onrender.com/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data))
      .catch((err) => console.error("Error fetching article:", err));
  }, [id]);

  if (!article) return <p>Loading...</p>;

  const paginateContent = (content) => {
    const pages = [];
    const totalLength = content.length;

    for (let i = 0; i < totalLength; i += contentPerPage) {
      pages.push(content.slice(i, i + contentPerPage));
    }
    return pages;
  };

  const pages = paginateContent(article.file_text);

  const nextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-6 bg-cyan-900">
      <h1 className="text-3xl font-bold font-serif">{article.title}</h1>
      <p className="text-black-900">{article.created_at}</p>

      {article.file_text && (
        <div className="mt-6 bg-orange-200 p-4 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
          <pre className="whitespace-pre-wrap text-gray-700 text-xl font-serif">
            {pages[currentPage - 1]}
          </pre>

          <div className="mt-4 flex justify-between">
            <button
              onClick={prevPage}
              className="px-4 py-2 bg-cyan-900 text-white rounded disabled:opacity-50"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              onClick={nextPage}
              className="px-4 py-2 bg-cyan-900 text-white rounded disabled:opacity-50"
              disabled={currentPage === pages.length}
            >
              Next
            </button>
          </div>
          <p className="text-center text-gray-600 mt-2">
            Page {currentPage} of {pages.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default ArticleDetail;
