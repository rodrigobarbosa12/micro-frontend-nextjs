
interface Props {
  gitHub: {
    name: string;
    html_url: string;
    avatar_url: string;
    bio: string;
    followers: number;
    public_repos: number;
    company: string;
  }
}
export function ProfileGitHub({ gitHub }: Props ) {
  return (
    <section className="vh-100" style={{ backgroundColor: "#9de2ff" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-md-9 col-lg-7 col-xl-5">
            <div className="card" style={{ borderRadius: 15 }}>
              <div className="card-body p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <img
                      src={gitHub.avatar_url}
                      alt="Generic placeholder image"
                      className="img-fluid"
                      style={{ width: 180, borderRadius: 10 }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">
                      {gitHub.name}
                    </h5>
                    <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                      {gitHub.bio}
                    </p>
                    <div
                      className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: "#efefef" }}
                    >
                      <div>
                        <p className="small text-muted mb-1">company</p>
                        <p className="mb-0">
                          {gitHub.company}
                        </p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Followers</p>
                        <p className="mb-0">
                          {gitHub.followers}
                        </p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Public repos</p>
                        <p className="mb-0">
                          {gitHub.public_repos}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <button
                        type="button"
                        className="btn btn-outline-primary me-1 flex-grow-1"
                      >
                        Chat
                      </button>
                      <a
                        type="button"
                        className="btn btn-primary flex-grow-1"
                        href={gitHub.html_url}
                      >
                        Follow
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
