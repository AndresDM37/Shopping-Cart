import "./Footer.css";
import { GitHubIcon } from "./GitHubIcon";

export function Footer() {
  return (
    <footer className="footer">
      <h4>
        Shopping Cart Realizado por － <span>@Andrés Marchena</span>
      </h4>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <h5>
          Programa Hecho con React ⚛️ -
          <span>
            <GitHubIcon />
          </span>
        </h5>
      </div>
    </footer>
  );
}
