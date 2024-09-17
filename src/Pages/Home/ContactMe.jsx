export default function ContactMe() {
  return (
    <section id="ContactMe" className="contact--section">
      <div className="contactMe--container">
        <div className="contact--info--text">Contact Info </div>
        <div className="contact--info--container">
          <div className="contactMe--tel">
          <img width="50" height="50" src="https://img.icons8.com/ios/50/phone--v1.png" alt="phone--v1"/>
          <a href="tel:+355699445499" className="contact--info">+355699445499</a>
        </div>
        <div className="contactMe--mail">
          <img width="50" height="50" src="https://img.icons8.com/ios/50/mail.png" alt="mail"/>
          <a href="mailto: xhoi.ibra@gmail.com" className="contact--mail">xhoi.ibra@gmail.com</a>
        </div>
        </div>
      </div>

    </section>
  )
}