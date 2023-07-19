
interface Props {
  gitHub: {
    name: string;
    html_url: string;
  }
}

export default function Header({ gitHub }: Props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">
          {gitHub.name}
        </span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active" 
                href={gitHub.html_url}
              >
                GitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active" 
                href={gitHub.html_url}
              >
                Este navbar pertence ao exporter
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}
