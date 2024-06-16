export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>React Router Pages</h1>
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
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/`}>Homepage</a>
              </li>
              <li>
                <a href={`/singlepost/:postId`}>Single Post</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }