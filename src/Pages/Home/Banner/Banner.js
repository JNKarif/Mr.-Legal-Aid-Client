import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">I am 35-year old legal professional with over a decade of experience in
providing quality support to attorneys and clients. My career began as a receptionist and
calendaring clerk at a personal injury firm but they quickly tapped me to be a support
professional. There and with the firms that followed, I gained a significant amount of
experience and knowledge in the field. I progressed from answering the phones to
managing complex, multi-million dollars cases from inception to appeal.</p>
      <button className="btn btn-outline">Read my blogs</button>
    </div>
  </div>
</div>
    );
};

export default Banner;