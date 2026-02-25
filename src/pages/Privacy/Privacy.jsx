import { useEffect } from "react";
import "./Privacy.css"
import PersonList from "../../components/PersonList/PersonList";
import ScrollToTop from "react-scroll-to-top";

// function Privacy() {

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     return (
//         <div className="legal">
//             <PersonList />
//             <ScrollToTop className="hero__scroll" />
//         </div>
//     );
// };

function Privacy() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="legal">
            {/* <PersonAdd /> */}
            {/* <PersonList /> */}
            {/* <Blog /> */}
            <section>
                <header className="policy">
                    <h1 className="policy__head">Privacy Policy</h1>
                </header>
                <div className="policy__body">

                    <hr className="hr" />
                    
                    <h2 className="policy__title">1. Information We Collect</h2>
                    <p className="policy__desc">We may collect the following types of information:</p>
                    <h3 className="policy__title">A. Information You Voluntarily Provide</h3>
                    <p className="policy__desc">When you:</p>
                    <ul className="policy__list">
                        <li>Subscribe to updates</li>
                        <li>Join a mailing list</li>
                        <li>Contact us through a form</li>
                    </ul>
                    <p className="policy__desc">We collect:</p>
                    <ul className="policy__list">
                        <li>Name</li>
                        <li>Email Address</li>
                        <li>Any message content you provide</li>
                    </ul>

                    <h3 className="policy__title">B. Automatically Collected Information</h3>
                    <p className="policy__desc">When you visit our website, certain information is collected automatically through cookies and analytics tools, including:</p>
                    <ul className="policy__list">
                        <li>IP address</li>
                        <li>Browser type</li>
                        <li>Device information</li>
                        <li>Pages visited</li>
                        <li>Time spent on pages</li>
                        <li>Referring URLS</li>
                    </ul>
                    <p className="policy-desc">This data helps us understand how visitors use our website.</p>

                    <h2 className="policy__title">2. Use of Google Analytics</h2>
                    <p className="policy__desc">We use <a href="https://chatgpt.com/c/6918e609-b6b0-8325-972c-c30f8783f715#:~:text=We%20use%20Google-,Analytics,-to%20analyze%20website">Google Analytics</a> to analyze website traffic and usage patterns.</p>
                    <p className="policy__desc">Google Analytics may collect information such as:</p>
                    <ul className="policy__list">
                        <li>Your IP address</li>
                        <li>Device and browser details</li>
                        <li>Interaction behavior</li>
                    </ul>
                    <p className="policy__desc">This information is transmitted to and stored by Google on servers outside of our control. Google uses this data to provide insights into website performance.</p>
                    <p className="policy__desc">You can learn more about how Google uses data here:
                    https://policies.google.com/privacy</p>
                    <p className="policy__desc">You may opt out of Google Analytics tracking using Google’s browser add-on:
                    https://tools.google.com/dlpage/gaoptout</p>

                    <h2 className="policy__title">3. Embedded Third-Party Content</h2>
                    <p className="policy__desc">Our website may include embedded content such as:</p>
                    <ul className="policy__list">
                        <li>Music players</li>
                        <li>Video players</li>
                        <li>Social media widgets</li>
                        <li>Event or streaming integrations</li>
                    </ul>
                    <p className="policy__desc">Embedded content behaves as if you visited the third-party website directly. These services may:</p>
                    <ul className="policy__list">
                        <li>Collect usage data</li>
                        <li>Use cookies</li>
                        <li>Track interactions</li>
                        <li>Monitor engagement</li>
                    </ul>
                    <p className="policy__desc">We are not responsible for the privacy practices of third-party services. We encourage you to review their privacy policies.</p>

                    <h2 className="policy__title">4. How We Use Your Information</h2>
                    <p className="policy__desc">We use information to:</p>
                    <ul className="policy__list">
                        <li>Respond to inquiries</li>
                        <li>Send email updates (if you subscribe)</li>
                        <li>Improve website performance</li>
                        <li>Analyze traffic and user behavior</li>
                        <li>Maintain site security</li>
                    </ul>
                    <p className="policy__desc">We do not sell your personal information.</p>

                    <h2 className="policy__title">5. Email Communications</h2>
                    <p className="policy__desc">If you subscribe to our mailing list:</p>
                    <ul className="policy__list">
                        <li>You may receive occasional updates or announcements.</li>
                        <li>You may unsubscribe at any time using the unsubscribe link in emails.</li>
                        <li>We will not share your email address with third parties for marketing purposes.</li>
                    </ul>

                    <h2 className="policy__title">6. Cookies and Tracking Technoligies</h2>
                    <p className="policy__desc">We use cookies and similar tracking technologies to:</p>
                    <ul className="policy__list">
                        <li>Enable website functionality</li>
                        <li>Analyze traffic</li>
                        <li>Improve user experience</li>
                    </ul>
                    <p className="policy__desc">You can control cookies through your browser settings. Disabling cookies may affect certain features of the website.</p>

                    <h2 className="policy__title">7. Data Retention</h2>
                    <p className="policy__desc">We retain personal information only as long as necessary to:</p>
                    <ul className="policy__list">
                        <li>Fulfill the purposes described in this policy</li>
                        <li>Comply with legal obligations</li>
                        <li>Resolve disputes</li>
                        <li>Enforce agreements</li>
                    </ul>

                    <h2 className="policy__title">8. Data Security</h2>
                    <p className="policy__desc">We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure.</p>

                    <h2 className="policy__title">9. Childrens Privacy</h2>
                    <p className="policy__desc">This website is not intended for children under 13. We do not knowingly collect personal information from children.</p>

                    <h2 className="policy__title">10. Your Privacy Rights</h2>
                    <p className="policy__desc">Depending on your location, you may have rights including:</p>
                    <ul className="policy__list">
                        <li>Accessing the personal data we hold about you</li>
                        <li>Requesting correction of inaccurate information</li>
                        <li>Requesting deletion of your data</li>
                        <li>Opting out of certain data processing</li>
                    </ul>
                    <p className="policy__desc">To exercise these rights, contact us using the information below.</p>

                    <h2 className="policy__title">11. Changes to This Policy</h2>
                    <p className="policy__desc">We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised “Last Updated” date.</p>

                    <h2 className="policy__title">12. Contact Information</h2>
                    <p className="policy__desc">If you have questions about this Privacy Policy, please contact:</p>
                    <h3 className="policy__title">Email: <a href="mailto:andrew@fignewt.com">andrew@fignewt.com</a></h3>
                    <h3 className="policy__title">Website <a href="andrew@fignewt.com">fignewt.com</a></h3>

                    <hr className="hr" />
                    
                </div>
            </section>
            <ScrollToTop className="hero__scroll" />
        </div>
    );
};

export default Privacy