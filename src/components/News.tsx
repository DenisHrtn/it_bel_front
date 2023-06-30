import { Articles } from "../data/Articles";

export const News = () => {
  return (
    <div>
      { Articles.map((Article) => (
        <div className="article" key={ Article['id'] }>
          <h1>{ Article['title'] }</h1>
          <h5>{ Article['date'] }</h5>
          <p>{ Article['content'] }</p>
        </div>
      )
      )}
    </div>
  );
};
