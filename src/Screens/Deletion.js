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
              <h4>INTRODUCTION:</h4>
              <p className="mainpara">
                This App Deletion Policy ("Policy") outlines the procedures and guidelines
                for users to delete their accounts and associated data from Stound ("App"),
                in compliance with Apple's App Store and Google Play guidelines. By using
                the App, users agree to abide by this Policy.
              </p>
              <div className="inner-col">
                <h5>ACCOUNT DELETION PROCESS:</h5>
                <p>
                    Users who wish to delete their accounts and data from the App can follow these steps:
                </p>
                <ol className="termsorderlist">
                    <li>Open the App and navigate to the "Settings" or "Account" section.</li>
                    <li>Look for the "Delete Account".</li>
                    <li>Confirm their intention to delete the account when prompted.</li>
                </ol>
                <p>They can also delete their account using our web portal by following these steps:</p>
                <ol className="termsorderlist">
                    <li>Login to their Stound Account and go to “Setting” or “Account” section.</li>
                    <li>Look for the “Delete Account”.</li>
                    <li>Confirm their intention to delete the account when prompted.</li>
                </ol>
                <h5>DATA DELETION:</h5>
                <p>
                    Upon confirming the account deletion, the following data associated with the user's account will be permanently deleted:
                </p>
                <ul className="termsUnorderlist">
                    <li>Personal information provided during account registration, such as name, email address, and profile picture.</li>
                    <li>User-generated content, including listing, chats, and other contributions.</li>
                    <li>Any other data that is directly linked to the user's account.</li>
                </ul>

                <h5>RETENTION OF NON-PERSONAL DATA:</h5>

                <p>
                    Some non-personal and non-identifiable data may be retained for analytical purposes, such as improving the App's performance and user experience. This data will be anonymized and used solely for statistical analysis.
                </p>

                <h5>COMMUNICATION:</h5>

                <p>
                    Upon initiating the account deletion process, users may receive a confirmation email notifying them of the deletion request. Additionally, a final confirmation message will be displayed within the App upon successful account deletion.
                </p>

                <h5>DATA SECURITY:</h5>

                <p>
                    We take data security seriously and employ industry-standard measures to safeguard user data. Once an account deletion is confirmed, data removal will be irreversible, and reasonable precautions will be taken to prevent unauthorized access to deleted information.
                    For any inquiries, concerns, or requests related to account deletion or data privacy, users can contact our support team at <a href="#"> stound.manage@gmail.com</a>                    
                </p>
                <p><span className="text-line">Policy changes:</span>
                This Policy may be updated from time to time to reflect changes in our practices or regulatory requirements. Users will be notified of any significant changes in the Policy.
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
