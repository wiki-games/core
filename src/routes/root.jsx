export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>PAGEZ!!!!!!!!!</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search pages"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/pages/1`}>test</a>
              </li>
              <li>
                <a href={`/pages/2`}>test</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }