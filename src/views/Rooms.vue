<template>
  <div class="container">
    <h2 class="text-center mb-3">Rooms</h2>

    <div class="row">
      <div class="col-sm col-md-5 ml-auto">
        <form class="border rounded p-3">
          <div class="form-group">
            <label for="Input1">Name</label>
            <input type="text" class="form-control" id="Input1" placeholder="Name" />
          </div>
          <div class="form-group">
            <label for="Textarea">Description</label>
            <textarea class="form-control" id="Textarea" rows="3"></textarea>
          </div>

          <button type="submit" class="btn btn-primary">Add room</button>
        </form>
      </div>
      <div class="col-sm col-md-7">
        <h4>Recent</h4>
        <div class="row">
          <div class="card">
            <h5 class="card-header">Featured</h5>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a href="#" class="btn btn-danger">Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style></style>
