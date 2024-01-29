import Header from "./Header"
import Contact from "./Contact"
import About from "./About"
export default function Home(){
    return(
        <div className="display_grid">
    
          <Header currentpage="home"/>
          <div className="home" >
         
          <div>
         
          <h1 className="mid"> Rock And Mine Predication </h1>
          <input type="file" id="upload" className="mid"/>
          <div className="mid">
           <input type="submit" id="submit"/>
           </div>
  
          </div>
          </div>


   
          <About/>
          
          <div className="contact_page"> <Contact/></div>
      
        
        </div>
    )
}