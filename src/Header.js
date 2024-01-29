
export default function Header(props){
    return(
       <div>
            <ul className="menu">
             <li className={props.currentPage==='home'?'active':''}><a href="/home" class="green">Home</a></li>
             <li className={props.currentPage==='register'?'active':''}><a href="/about"class="green">About</a></li>
            <li  className={props.currentPage==='contact'?'active':''}><a href="/contact"class="green">Contact</a></li>
            <li className="center"> ROCK AND MINE PREDICATION </li>
            <li className="right"> <input type="text" id="search" placeholder="" /></li>
            <li className="float"> <input type="button" id="sumbit" value="search" /> </li>
          </ul>
         
         </div>
       
        
    )
}

