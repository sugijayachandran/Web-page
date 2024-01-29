export default function Register(){
  return(
    <div>
      <form class="row g-3 needs-validation" novalidate>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<div class="container register">
    <div class="row">
    <div class="col-md-3 register-left">
     <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
      <h1>Welcome</h1>
        <h6>We use Logistic Regression Algorithm machine learning technique to predict</h6>
</div>
<div class="col-md-9 register-right" row g-3 >
<ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
<h3 class="register-heading">Registration</h3>
<div class="row register-form">
<div class="col-md-6">
<div class="form-group">
<input type="text" class="form-control" placeholder="First Name "  required/>
</div>
<div class="form-group">
<input type="email" class="form-control" placeholder="Email Id "  required />
</div>
<div class="form-group">
<input type="password" class="form-control"  placeholder=" Password " required />
</div>



</div>
<div class="col-md-6">
<div class="form-group">
<input type="name" class="form-control" placeholder="Your Last Name "  required />
</div>
<div class="form-group">
<input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Your Phone "  required />
</div>
<div class="form-group">
</div>
<div class="form-group">
<input type="text" class="form-control" placeholder="confirm password" required />
</div>
<a href="/login"><input type="submit" class="btnRegister"  value="Register"/></a>
</div>
</div>
</div>

</div>
</div>
</div>
</div>
</form>
</div>
)}