import "bootstrap/dist/css/bootstrap.css";
import "../styles/Hero.css";

const Hero = ({ heroData }) => {
  return (
    <div
      id="hero"
      className="jumbotron jumbotron-fluid"
      style={{
        background: `url(${heroData.urlbackground})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container-fluid hero mt-4">
        <div className="row header-row align-items-center justify-content-center">
          <div className="section-intro">
            <div style={{ width: "80%", margin: "auto" }}>
              <div className="logocontainer">
                <img
                  alt="logo"
                  style={{ width: "100%" }}
                  className="img-fluid"
                  src="https://lh3.googleusercontent.com/9Hi_SWDZYSD5Jgx1v2I-s2lgwqMYCH6FuL52NYuJY5iht7d68roH1KfvH00qDConzHF5dsmxRys1z3X5UUnwmrEuq0wZbKqZ_D4Q14A"
                />
                <p>Recording Studio | Estudio de Grabación</p>
              </div>
            </div>
            <div className="flex-elem mt-5">
              <a
                target="_blank"
                href="https://www.instagram.com/lasfloresrecords/"
              >
                <img
                  alt="instagram"
                  className="icon"
                  src="https://lh3.googleusercontent.com/bhMXgZliu72_fhyzni61U3OtCCXCHde80THsK_K8zLDVvf7MPxR5qWnyMhJNKw8W3Apeq3oNsL0I-cyF_2rMLj8sFg"
                ></img>
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCmsM08pwXzExDmhHdtYa2Lw"
              >
                <img
                  alt="youtube"
                  className="icon"
                  src="https://lh3.googleusercontent.com/X3qCL_0lvmxwEvgvP1J9IaLYdhowL1YJBSVmV_iqNbrKhKUGh4jGFZ2ZcJssK7c7FT5dewzI9OLUE9K2i1TY5S3dBQ"
                ></img>
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/lasfloresrecords"
              >
                <img
                  alt="Facebook"
                  className="icon"
                  src="https://lh3.googleusercontent.com/5O14AJzPpnogx6_wCJ2dnSe_Rk4WH_gTXXOFiuEbvjlYY5ODF41RhuMC12xSQuUw-NQqwzV9B7quTu9XIEwcXvsCxwKDCnCzUF7XKQ"
                ></img>
              </a>
              <a
                target="_blank"
                href="https://open.spotify.com/playlist/3bLQzyJ7erhshGJFtzQ8Kv?si=qk_QUH0jSReCkMg3VbOllA"
              >
                <img
                  alt="spotify"
                  className="icon"
                  src="https://lh3.googleusercontent.com/w5vpLtvRS-0GA_MF35KMwt46rdhCiEOdM3oC-ISPgF1JJ1imuOIwscuisyknto1UY_lSE_ytClVA9dKWCagwAO5ESrz1smtO3rlsQg"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
