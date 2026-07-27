import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "Contact Us | Center for Adolescent Wellness",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        image="/images/contact/hero.png"
      />
      <section className="-mt-[50px] px-6 py-20 sm:px-10 md:px-[100px]">
        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
