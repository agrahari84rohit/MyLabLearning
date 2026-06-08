// About component shows the blog logo and description.
// It receives the image source and about text from props.
export default function About({ image, about }) {
  return (
    <section className="about-section">
      <img src={image} alt="blog logo" className="about-image" />
      <div className="about-copy">
        <h2>About this blog</h2>
        <p>{about}</p>
      </div>
    </section>
  )
}
