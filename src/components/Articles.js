const Articles = ({ article }) => {

    const dateFormater = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    return newDate;
  };

  return (
    <div className="article">
      <div className="card-header">
      <h3>{article.title}</h3>
        <em>{dateFormater(article.updated_at)}</em>
      </div>
      <p>{article.content}</p>
      <h5>Créé par user id: {article.user_id} </h5>
      <div className="btn-container">
        <button>Edit</button>
        <button>Supprimer</button>
      </div>
    </div>
  );
};

export default Articles;