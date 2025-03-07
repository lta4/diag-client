import React from "react";
import "./Term.css";

const Term = () => {
    return (
        <div className="legal">
            <header>
                <h2 className="legal__title">Terms Of Service</h2>
                <h3 className="legal__para">WE AGREE TO BE CONTRACTED FOR THE DEVELOPMENT OF A THIRD PARTY WEBSITE (THE "WEBSITE") UNDER  THE FOLLOWING TERMS AND CONDITIONS IN ACCORDANCE WITH THE PROPOSAL AGREED IN WRITING BETWEEN THE PARTIES (THE “PROPOSAL”). ONCE THE PROPOSAL DOCUMENT (THE “AGREEMENT”) IS SIGNED AND DEPOSIT PAID, THE WEBSITE SHALL BE DEVELOPED BY US (THE “DEVELOPER”) FOR YOU (THE “CLIENT”).
                </h3>
            </header>
            <body>
                <section className="legal__sec">
                    <h2 className="legal__title">1. The Project</h2>
                    <h3 className="legal__para">1.1 In consideration of the Client paying the Developer the relevant Fees (as set out in the Project Proposal), the Developer shall:
                    (a) develop the Website in accordance with the Client Requirements set out in the Project Proposal on behalf of the Client (the “Project”); and
                    (b) where agreed between the parties, provide the Services to the Client.

                    1.2 The Project Specification can be found in Project Proposal document.

                    1.3 Any amendments or variations to the Project Specification must be made in writing and agreed between the Parties. Where one Party does not agree with the proposed amendment or variation, the Parties shall meet and discuss the proposed changes in good faith. Where any changes to the Project Specification would result in additional expense to the Developer over and above the Fees as outlined in the proposal, the Developer shall be entitled to charge the Client for the additional expenses at its standard rates from time to time.
                    </h3>
                </section>
                <section className="legal__sec">
                    <h2 className="legal__title">2. Delivery and Acceptance</h2>
                    <h3>2.1 Upon completion of the Project, the Client shall make full payment of the fees to the Developer upon which the Developer shall make live or deploy the completed Website to the Client’s hosting server.

                    2.2 If the Client requires the completed Website to be loaded onto third party hosting services provided by the client, the Developer reserves the right to charge additional fees to the Client for this service. The Client is responsible for ensuring that the intended fileserver or disk space is properly configured. 

                    2.3 Once the Developer has delivered the Website to the Client, the Client shall have a period of 14 working days (the “Acceptance Test Period”) to test the Website to ensure it conforms to the Project Specification (the “Acceptance Test”). Acceptance of the Website may only be withheld by the Client if it can demonstrate that the Website does not conform materially to the Project Specification. Upon completion of the Acceptance Test, the Client shall confirm  to the Developer that the Project is complete (the “Project Release”).

                    2.4 Acceptance of the Website shall be deemed to have taken place upon the occurrence of any of the following events:
                    (a) the expiry of the Acceptance Test Period and the Client has not raised with the Developer any material differences between the Website and the Project Specification; or
                    (b) the Client uses any part of the Website other than for test purposes.

                    2.5 Upon receipt of the Project Release or deemed acceptance, the Developer shall have no further obligations to undertake any work in relation to the Project. The Client may however request that the Developer undertake further work relating directly or indirectly to the Project. If it agrees to undertake such work, the Developer reserves the right to charge the Client for any additional work carried out at its commercial rate at that time.
                    </h3>
                </section>
                <section className="legal__sec">
                    <h2 className="legal__title">3. Delivery of Content, Materials and Feedback</h2>
                    <h3>3.1 The Client undertakes to deliver to the Developer all content, data, images and other information and all trade marks, trade names, logos and other branding of the Client (the “Customer Content”) required for the Project.

                    3.2 The Client acknowledges that the Developer’s ability to complete the Project is dependent upon the full and timely co-operation of the Client and the Client undertakes to notify the Developer promptly in writing of any delays in delivering the Client Content or specification input. Where the Client has notified the Developer of any delay, the Client will provide the Developer with a revised timetable for supplying such Client Content or input.

                    3.3 The Developer will not be responsible for any delays, missed milestones (where specified in the Project) or additional expenses incurred due to the late delivery or non-delivery of the Client Content or input where required by the Developer for the Project.
                    </h3>
                </section>
                <section>
                    <h2 className="legal__title">4. Fees and Payment</h2>
                    <h3 className="legal__para">4.1 The Client will pay the Project fees set out in the Project Proposals Payment Schedule (the “Fees”) to the Developer.

                    4.2 Notwithstanding any specific payment milestones set out in the Project Specification, the Fees shall by payable by the Client in the following instalments :
                    (a) 50% of the Fees estimated in proposal to be paid at least 5 days before commencement of the Project by the Developer;
                    (b) remainder of the Estimated Fees to be paid on completion (before or on go live) ; and
                    (c) any outstanding balance of the development Fees to be paid no later than 10 days after the expiry of the Acceptance Test Period.

                    4.4 All Fees payable are inclusive of VAT, unless you provide written evidence of VAT exemption. 

                    4.5 The Client shall make all payments due in full without any deduction whether by way of set-off, counterclaim, discount, abatement or otherwise.

                    4.6 Without prejudice to any other right or remedy that the Developer may have, if the Client fails to pay the Fees on the due date, the Developer may, at its option:
                    (a) claim interest at its discretion on any unpaid amounts under the Late Payment of Commercial Debts (Interest) Act;
                    (b) suspend the Project until payment has been made in full;
                    (c) disable the Website in whole or in part until payment has been made in full; or
                    (d) terminate this Agreement immediately upon notice.
                    
                    4.7 All invoices are sent to the Client via email to the Client’s specified email address. The Client will notify the Developer of any changes to the invoicing address.
                    
                    4.8 The Developer will return the Deposit to the Client, if the project does not go ahead on account of the Developer. If works have already commenced, and the contract is cancelled by the Client, the deposit will be returned minus costs for works completed.
                    </h3>
                </section>
            </body>
        </div>
    );
};

export default Term;