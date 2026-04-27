const CompanyIntro = () => {
  return (
    <section className="company-intro">

      <div className="intro-wrapper">

        {/* MAIN CONTENT */}
        <div className="intro-card">

            {/* LOGO + NAME */}
            <div className="intro-brand">
                <img src="/logo/logo4.png" alt="SM Ridge Materials" />
            </div>

            <h2>Built on Reliability. Driven by Supply Excellence.</h2>

            <p>
                SM Ridge Materials is a trusted construction material supplier
                delivering high-quality resources across Lagos and Southwest Nigeria.
                From large-scale developments to private builds, we ensure timely,
                consistent, and dependable supply.
            </p>

            <div className="intro-points">
                <span>✔ Bulk Material Supply</span>
                <span>✔ Reliable Delivery Network</span>
                <span>✔ Trusted by Contractors & Developers</span>
            </div>

        </div>

        {/* FLOATING STATS */}
        <div className="intro-stats">
          <div>
            <strong>500+</strong>
            <span>Projects Supplied</span>
          </div>

          <div>
            <strong>50+</strong>
            <span>Active Clients</span>
          </div>

          <div>
            <strong>10+</strong>
            <span>Years Experience</span>
          </div>
        </div>

      </div>

    </section>
  );
};

export default CompanyIntro;