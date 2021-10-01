import "./ContentSection.css";

function ContentSection(props) {
  return (
    <div className="all-parent-NYT" id="border-on-top-NYT">
      {/* Left area */}
      <article className="left-section-NYT">
        <section className="article-title-NYT">
          <h2 className="h2-NYT">
            F.D.A. Panel Recommends Pfizer Boosters for People 65 and Older
          </h2>
          <p className="p-articles-NYT">
            The move came after the panel overwhelmingly recommended against
            approving a Pfizer vaccine booster for younger people. Here’s the
            latest on the virus.
          </p>
        </section>
        <section className="article-image-NYT">
          <img
            src="https://static01.nyt.com/images/2021/09/17/lens/17fda-virus-booster1/17fda-virus-booster1-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
            alt="Nurse gives little girl a vaccine"
          ></img>
          <p className="image-caption-NYT">
            Raquel Gonzales, 27, receives a Covid-19 vaccine administered by
            Charley Baldwin, 48, a nurse practitioner, during a free vaccination
            clinic in San Antonio, Tx., on Saturday.
          </p>
        </section>
      </article>

      {/* right area */}
      <section className="right-section-NYT">
        <article className="right-top-article-NYT">
          <h3 className="h3-NYT">
            A Manhattan restaurant hostess was assaulted after asking to see
            proof of vaccination for three tourists, the police said.
          </h3>
        </article>
        <article className="right-individual-articles-NYT">
          <h3 className="h3-NYT">
            Idahoan, Austin Hansen, graduates from Brigham Young Univerity-Idaho
            and is ready to take on the world.
          </h3>
          <p className="p-articles-NYT">
            Some said he couldn't do it. But he didn't let that stop him from
            doing the impossible.
          </p>
        </article>
      </section>
    </div>
  );
}

export default ContentSection;
