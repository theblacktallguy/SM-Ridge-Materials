type PageBannerProps = {
  eyebrow?: string;
  title: string;
  text: string;
};

const PageBanner = ({ eyebrow, title, text }: PageBannerProps) => {
  return (
    <section className="page-banner">
      <div className="container">
        {eyebrow ? <span className="page-banner__eyebrow">{eyebrow}</span> : null}
        <h1 className="page-banner__title">{title}</h1>
        <p className="page-banner__text">{text}</p>
      </div>
    </section>
  );
};

export default PageBanner;