import { header } from "../../style";


export function Header() {
    return(
        <div className={header()} >
            <div>
                Logo
            </div>
            <div>
                <button>User</button>
                <button>Cart</button>
            </div>
        </div>
    );
}

