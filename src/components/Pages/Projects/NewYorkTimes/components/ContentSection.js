import "./ContentSection.css";

function ContentSection(props) {
  return (
    <div className="all-parent-NYT">
      <article className="left-section-NYT">
        <section className="article-title-NYT">
          <h2 className="h2-NYT">
            U.S. Submarine Deal Aimed to Unite Allies Against China. France Is
            Furious.
          </h2>
          <p className="p-articles-NYT">
            President Biden’s announcement of a deal to help Australia deploy
            nuclear-powered submarines has infuriated France and strained the
            Western alliance.
          </p>
          <p className="p-articles-NYT">
            The diplomatic storm foreshadows how the conflicting American and
            European responses to confrontation with China may redraw the
            strategic map.
          </p>
        </section>
        <section className="article-image-NYT">
          <img
            src="https://static01.nyt.com/images/2021/09/16/world/16france-defense01/16france-defense01-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
            alt="Submarine and French government leaders"
          ></img>
          <p className="image-caption-NYT">
            President Emmanuel Macron of France, second from left, and Malcolm
            Turnbull, then prime minister of Australia, third from left, on an
            Australian submarine in 2018.
          </p>
        </section>
      </article>

      <section className="right-section-NYT">
        <article className="right-top-article-NYT">
          <h3 className="h3-NYT">
            The U.S. said it gave France only a few hours’ notice of the defense
            deal. Paris called the move a “knife in the back.”
          </h3>
        </article>
        <article className="right-individual-articles-NYT">
          <h3 className="h3-NYT">
            Analysis: Why Australia Bet the House on Lasting American Power in
            Asia
          </h3>
          <p className="p-articles-NYT">
            In 2018, Australia’s leader said his country need not choose between
            the U.S. and China. A nuclear submarine deal shows that much has
            changed.
          </p>
        </article>
      </section>
    </div>
  );
}

export default ContentSection;
