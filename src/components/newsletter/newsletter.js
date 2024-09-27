
import "./newsletter.css";
import '../../app/globals.css'

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="news">
        <h2>Sign up for Newsletter</h2>
        <small>
          get emailed about our <b>special offers</b>
        </small>
      </div>

      <div className="textArea">
        <input type="email" placeholder="Your email address" />
        <button>Signup</button>
      </div>
    </section>
  );
}

export default Newsletter;
