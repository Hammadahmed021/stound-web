import { Header, Footer } from "../Containers";
import React from "react";

export default function Deletion() {
  return (
    <>
      <Header />
      <section className="termsSection">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="termsHeading">Deletion Policy</h2>
              <p className="mainpara">
                At Stound, we respect your right to control your personal
                information. This Deletion Policy outlines our procedures for
                deleting and handling your data when you request the removal of
                your account or specific information from our platform.
              </p>
              <div className="inner-col">
                <h5>1. Account Deletion</h5>
                <p>
                  1.1. If you decide to close your Stound account, you can
                  initiate the deletion process by accessing your account
                  settings and selecting the "Delete Account" option. Before
                  proceeding, we may ask you to verify your identity to ensure
                  the security of your account.
                </p>
                <p>
                  1.2. Once your account deletion request is submitted, we will
                  deactivate your account, making it inaccessible to you and
                  other users.
                </p>
                <p>
                  1.3. Your personal information associated with your account
                  will be retained in our systems for a limited period in
                  accordance with legal requirements or legitimate business
                  purposes.
                </p>

                <h5>2. Data Retention</h5>
                <p>
                  2.1. Stound will retain your personal information as long as
                  necessary to fulfill the purposes outlined in our Privacy
                  Policy. After the retention period ends, we will securely
                  delete or anonymize your data.
                </p>
                <p>
                  2.2. We may retain certain data even after your account
                  deletion if required by law or for legitimate business
                  purposes, such as resolving disputes, enforcing our
                  agreements, or complying with legal obligations.
                </p>

                <h5>3. Data Removal Requests</h5>

                <p>
                  3.1. If you wish to remove specific information associated
                  with your account without deleting the entire account, you can
                  submit a data removal request by contacting us at [Your
                  Contact Email].
                </p>
                <p>
                  3.2. We will review your request and take appropriate actions
                  to delete or anonymize the specified data within a reasonable
                  timeframe, as required by applicable laws and regulations.
                </p>
                <h5>4. Backup and Recovery</h5>

                <p>
                  4.1. Please note that our routine data backup processes may
                  temporarily retain your data even after deletion. These
                  backups are maintained solely for disaster recovery and system
                  stability purposes and are not used to restore individual
                  accounts.
                </p>

                <h5>5. Children's Data</h5>

                <p>
                  5.1. If you are the parent or legal guardian of a child under
                  the age of 13 and believe that your child's information is
                  stored in our database, you can request the removal of that
                  data by contacting us at [Your Contact Email].
                </p>
                <h5>6. Contact Us</h5>

                <p>
                  6.1. If you have any questions or concerns about the deletion
                  of your data or any other privacy-related matters, please
                  contact us at [Your Contact Email].
                </p>

                <h5>7. Changes to the Deletion Policy</h5>

                <p>
                  7.1. Stound may update this Deletion Policy from time to time
                  to reflect changes in our data management practices or for
                  other operational, legal, or regulatory reasons. Any updates
                  will be posted on Stound, and your continued use of the
                  platform after changes are made will signify your acceptance
                  of the revised Deletion Policy.
                </p>
                <p>
                  Thank you for choosing Stound. We are committed to
                  safeguarding your privacy and ensuring the secure handling of
                  your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
