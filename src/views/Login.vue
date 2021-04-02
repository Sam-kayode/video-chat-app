<template>
  <div class="row">
    <div class="col-md-7 col-lg-6">
      <img
        src="https://res.cloudinary.com/sam-kay/image/upload/q_auto:low/v%20chat/20945760-min_1_1_xweu9y.png"
        class="img-fluid"
        alt=""
      />
    </div>
    <div class="col-md-5 col-lg-6">
      <h1 class="font-weight-bold text-primary">Hello, Welcome back</h1>
      <form action="">
        <form class="mt-3">
          <div class="container">
            <div class="row justify-content-center">
              <h3 class="font-weight-light mb-3">Log in</h3>
              <section class="form-group">
                <div class="col-12 alert alert-danger px-3">error</div>
                <label class="form-control-label sr-only" for="Email">Email</label>
                <input required class="form-control" type="email" id="email" placeholder="Email" />
              </section>
              <section class="form-group">
                <input required class="form-control" type="password" placeholder="Password" />
              </section>
              <div class="form-group text-right mb-0">
                <button class="btn btn-primary" type="submit">Log in</button>
              </div>
            </div>
          </div>
        </form>
      </form>
    </div>
  </div>
</template>
