import React from "react";

const Navbar = () => {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg"
        style={{ background: "rgb(24,24,24)" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img
              src="./assets/car-.png"
              alt="Logo"
              width="50"
              height="50"
              class="d-inline-block align-text-top rounded-5"
            />{" "}
            &nbsp;
            <b className="text-white">
              <span style={{ color: "blueviolet" }}>Book Store</span>
            </b>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav  justify-content-center w-100">
              <a
                class="nav-link  px-5 fs-5"
                aria-current="page"
                href="/"
                style={{ color: "blueviolet" }}
              >
                <span className="nav-item">
                  <i className="fa-solid fa-house-chimney"></i> &nbsp; Home
                </span>
              </a>
              <a
                class="nav-link px-5 fs-5"
                href="/add"
                style={{ color: "blueviolet" }}
              >
                <span className="nav-item">
                  <i className="fa-solid fa-eject"></i> &nbsp;Add
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
