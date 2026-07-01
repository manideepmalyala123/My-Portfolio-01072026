import Container from "../Common/Container";
import SectionHeader from "../Common/SectionHeader";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="scroll-mt-32 py-32"
    >

      <Container>

        <SectionHeader
          badge="Contact"
          title="Let's Build Something Amazing"
          description="I'm always interested in discussing backend development, enterprise applications, and exciting new opportunities."
        />

        <div className="grid lg:grid-cols-2 gap-12">

          <ContactInfo />

          <ContactForm />

        </div>

      </Container>

    </section>
  );
};

export default Contact;