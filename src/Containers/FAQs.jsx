import React from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

export default function FAQs() {
  return (
    <>
      <section className="FaqsSection">
        <div className="container">
          <div className="row pt-3 pb-3">
            <div className="col-12">
              <h2 className="globalHeading" data-scroll data-scroll-direction="vertical" data-scroll-speed='0.5'>Questions? Answers.</h2>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-12">
              <MDBAccordion initialActive={1}>
                <MDBAccordionItem
                  collapseId={1}
                  headerTitle="How do I create an account on the app?"
                  data-scroll data-scroll-direction="vertical" data-scroll-speed='0.25'
                >
                  To create an account, click on the "Sign Up" button, fill in
                  your details, and follow the on-screen instructions.
                  Alternatively, you can sign up using your Google or Facebook
                  account for a quicker process.
                </MDBAccordionItem>

                <MDBAccordionItem
                  collapseId={2}
                  headerTitle="Is the app available on both iOS and Android?"
                  data-scroll data-scroll-direction="vertical" data-scroll-speed='0.25'
                >
                  To create an account, click on the "Sign Up" button, fill in
                  your details, and follow the on-screen instructions.
                  Alternatively, you can sign up using your Google or Facebook
                  account for a quicker process.
                </MDBAccordionItem>

                <MDBAccordionItem
                  collapseId={3}
                  headerTitle="Are the property listings updated in real-time?"
                  data-scroll data-scroll-direction="vertical" data-scroll-speed='0.25'
                >
                  To create an account, click on the "Sign Up" button, fill in
                  your details, and follow the on-screen instructions.
                  Alternatively, you can sign up using your Google or Facebook
                  account for a quicker process.
                </MDBAccordionItem>

                <MDBAccordionItem
                  collapseId={4}
                  headerTitle="How can I refine my property search?"
                  data-scroll data-scroll-direction="vertical" data-scroll-speed='0.25'
                >
                  To create an account, click on the "Sign Up" button, fill in
                  your details, and follow the on-screen instructions.
                  Alternatively, you can sign up using your Google or Facebook
                  account for a quicker process.
                </MDBAccordionItem>

                <MDBAccordionItem
                  collapseId={5}
                  headerTitle="Can I save my favorite properties for future reference?"
                  data-scroll data-scroll-direction="vertical" data-scroll-speed='0.25'
                >
                  To create an account, click on the "Sign Up" button, fill in
                  your details, and follow the on-screen instructions.
                  Alternatively, you can sign up using your Google or Facebook
                  account for a quicker process.
                </MDBAccordionItem>

                <MDBAccordionItem
                  collapseId={6}
                  headerTitle="How can I schedule a property visit?"
                  data-scroll data-scroll-direction="vertical" data-scroll-speed='0.25'
                >
                  To create an account, click on the "Sign Up" button, fill in
                  your details, and follow the on-screen instructions.
                  Alternatively, you can sign up using your Google or Facebook
                  account for a quicker process.
                </MDBAccordionItem>

                <MDBAccordionItem
                  collapseId={7}
                  headerTitle="Is the app free to use?"
                  data-scroll data-scroll-direction="vertical" data-scroll-speed='0.25'
                >
                  To create an account, click on the "Sign Up" button, fill in
                  your details, and follow the on-screen instructions.
                  Alternatively, you can sign up using your Google or Facebook
                  account for a quicker process.
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={8}
                  headerTitle="Are the property listings verified for authenticity?"
                  data-scroll data-scroll-direction="vertical" data-scroll-speed='0.25'
                >
                  To create an account, click on the "Sign Up" button, fill in
                  your details, and follow the on-screen instructions.
                  Alternatively, you can sign up using your Google or Facebook
                  account for a quicker process.
                </MDBAccordionItem>
              </MDBAccordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
