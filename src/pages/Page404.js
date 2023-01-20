import { Link } from "react-router-dom";

export default function Page404() {
    return(
        <div>
        <h3>Sayfa Bulunamadı</h3>
        <Link to='/'>Turn the home page</Link>
        </div>
    )
}