import Header from "./Header"
export default function Contact(){
  return(
    <div> 
      <Header/>
      <div class="contact">
        
          <div className="insider">
          <h2> Contact Information</h2>
          <p>fill the space</p>
          <h6>701009073</h6>
          <h6>kingmaker@gmail.com</h6>
          <p> SRM valliammi Engieering College, Chennai-603203</p>
        </div>
        <div class="cont">
        <h1 className="container">Contact Us</h1>
    <div class = "container">
     <form id="contact-form" role="form">
    <div class="controls">
       <div class="row">
        <div class="col-md-6">
        <div class="form-group">
  <label for="form_name">Firstname *</label>
  <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."/>
                            
    </div>
    </div>
  <div class="col-md-6">
  <div class="form-group">
  <label for="form_lastname">Lastname *</label>
  <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."/>
  </div>
  </div>
   </div>
  <div class="row">
  <div class="col-md-6">
     <div class="form-group">
      <label for="form_email">Email *</label>
   <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
    </div>
       </div>
      <div class="col-md-6">
       <div class="form-group">
     <label for="form_need">Please specify your need *</label>
<select id="form_need" name="need" class="form-control" required="required" data-error="Please specify your need.">
 <option value="" selected disabled>--Select Your Issue--</option>
<option >Request to call</option>
  <option > Incorrect Output</option>
  <option >Haven't received Output yet</option>
  </select>
                            
 </div>
 </div>
</div>
  <div class="row">
    <div class="col-md-12">
   <div class="form-group">
     <label for="form_message">Message *</label>
   <textarea id="form_message" name="message" class="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea >
   </div>
</div>
 <div class="col-md-12">
<input type="submit" class="btn btn-success btn-send  pt-2 btn-block " value="Send Message" />
 </div>
</div>
</div>
 </form>
</div>
</div>
</div>

  <footer>
  <h5 className="container">copyright@BY THE ORDER OF PEAKY BLINDERS  </h5>
</footer>
</div>

  )
}