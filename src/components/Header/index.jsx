import { header, headerBtn} from "../../style";


export function Header() {
    return(   
    <div className={header()} >
        <div>
            Logo
        </div>
        <div>
            <button className={headerBtn()} >User</button>
            <button className={headerBtn()} >Cart</button>
        </div>
    </div>
        
    );
}

