import "bootstrap/dist/css/bootstrap.css";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="row footer">
        <div className="col-12 col-sm-6 col-lg-6">
          <div className="flex-elem iconbar">
            <img
              alt="Company logo"
              className="logo"
              src="https://lh3.googleusercontent.com/9Hi_SWDZYSD5Jgx1v2I-s2lgwqMYCH6FuL52NYuJY5iht7d68roH1KfvH00qDConzHF5dsmxRys1z3X5UUnwmrEuq0wZbKqZ_D4Q14A"
            ></img>
            <a
              href="https://www.instagram.com/lasfloresrecords/"
              target="_blank"
            >
              <img
                alt="instagram"
                className="icon"
                src="https://lh3.googleusercontent.com/bhMXgZliu72_fhyzni61U3OtCCXCHde80THsK_K8zLDVvf7MPxR5qWnyMhJNKw8W3Apeq3oNsL0I-cyF_2rMLj8sFg"
              ></img>
            </a>
            <a
              href="https://www.youtube.com/channel/UCmsM08pwXzExDmhHdtYa2Lw"
              target="_blank"
            >
              <img
                alt="youtube"
                className="icon"
                src="https://lh3.googleusercontent.com/X3qCL_0lvmxwEvgvP1J9IaLYdhowL1YJBSVmV_iqNbrKhKUGh4jGFZ2ZcJssK7c7FT5dewzI9OLUE9K2i1TY5S3dBQ"
              ></img>
            </a>

            <a href="https://www.facebook.com/lasfloresrecords" target="_blank">
              <img
                alt="Facebook"
                className="icon"
                src="https://lh3.googleusercontent.com/5O14AJzPpnogx6_wCJ2dnSe_Rk4WH_gTXXOFiuEbvjlYY5ODF41RhuMC12xSQuUw-NQqwzV9B7quTu9XIEwcXvsCxwKDCnCzUF7XKQ"
              ></img>
            </a>
            <a
              href="https://open.spotify.com/playlist/3bLQzyJ7erhshGJFtzQ8Kv?si=qk_QUH0jSReCkMg3VbOllA"
              target="_blank"
            >
              <img
                alt="spotify"
                className="icon"
                src="https://lh3.googleusercontent.com/w5vpLtvRS-0GA_MF35KMwt46rdhCiEOdM3oC-ISPgF1JJ1imuOIwscuisyknto1UY_lSE_ytClVA9dKWCagwAO5ESrz1smtO3rlsQg"
              ></img>
            </a>
          </div>
          <p>
            Desarrollado por Cesar Ludovico Sposaro | Todos los derechos
            reservados
          </p>
        </div>
        <div className="col-12 col-sm-5 col-lg-6 text-center navfoot">
          <a href="/#hero">Inicio</a>
          <strong>|</strong>
          <a href="/#services">Servicios</a>
          <strong>|</strong>
          <a href="/#works">Trabajos</a>
          <strong>|</strong>
          <a href="/#contact">Contacto</a>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Footer;
