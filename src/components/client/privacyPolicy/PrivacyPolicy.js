import Link from "next/link";
import Layout from "../layout";
import styles from './PrivacyPolicy.module.css';
const PrivacyPolicy = () => {
    return (
        <Layout>
            <section>
                <div className={`${styles.toggle__container} container d-flex justify-content-center`}>
                    <div className={styles.privacy__area}>
                        <div className="text-center mb-5">
                            <h1 className={styles.privacy__title}>Privacy Policy</h1>
                            <h3 className={styles.privacy__date}>Effective June 1, 2021</h3>
                        </div>
                        <p>At TalentDrop, we take your privacy seriously. Please read this Privacy Policy to learn how we treat your personal data.<b>By using or accessing our Services in any manner, you acknowledge that you accept the practices and policies outlined below, and you hereby consent that we will collect, use and share your information as described in this Privacy Policy.</b></p>
                        <br />
                        <p>Remember that your use of TalentDrop's Services is at all times subject to our <Link href="/"><a> Terms of Use</a></Link>
                            , which incorporates this Privacy Policy. Any terms we use in this Policy without defining them have the definitions given to them in the Terms of Use.</p>
                        <p>If you have a disability, you may access this Privacy Policy in an alternative format by contacting <Link href="/"><a >support@talentdrop.com</a></Link>.</p>
                        <h3 className={styles.privacy__date}>What this Privacy Policy Covers</h3>
                        <p>This Privacy Policy covers how we treat Personal Data that we gather when you access or use our Services. “Personal Data” means any information that identifies or relates to a particular individual and also includes information referred to as “personally identifiable information” or “personal information” under applicable data privacy laws, rules or regulations. This Privacy Policy does not cover the practices of companies we don’t own or control or people we don’t manage.</p>
                        <br />
                        <h3 className={styles.privacy__date}>Personal Data</h3>
                        <h6 className="text-center"><b>Categories of Sources of Personal Data</b></h6>
                        <p>We collect Personal Data about you from the following categories of sources:</p>
                        <h6><strong>You:</strong></h6>
                        <ul>
                            <li>
                                When you provide such information directly to us.
                                <ul>
                                    <li>When you create an account or use our interactive tools and Services.</li>
                                    <li>When you voluntarily provide information in free-form text boxes through the Services or through responses to surveys or questionnaires.</li>
                                    <li>When you send us an email or otherwise contact us.</li>
                                </ul>
                            </li>
                            <li>When you use the Services and such information is collected automatically.
                                <ul>
                                    <li>Through Cookies (defined in the “Tracking Tools, Advertising and Opt-Out” section below).</li>
                                    <li>If you use a location-enabled browser, we may receive information about your location.</li>
                                    <li>If you download and install certain applications and software we make available, we may receive and collect information transmitted from your computing device for the purpose of providing you the relevant Services, such as information regarding when you are logged on and available to receive updates or alert notices.</li>
                                </ul>
                            </li>
                        </ul>
                        <h6><strong>Public Records:</strong></h6>
                        <ul>
                            <li>From the government or other sources, including public social media posts.</li>
                        </ul>
                        <h6><strong>Third Parties:</strong></h6>
                        <ul>
                            <li>
                                Referrers
                                <ul>
                                    <li>We receive information from referrers who think you may be good match for a company on our Services.</li>
                                    <li></li>
                                </ul>
                            </li>
                            <li>
                                Vendors
                                <ul>
                                    <li>We may use analytics providers to analyze how you interact and engage with the Services, or third parties may help us provide you with customer support.</li>
                                    <li>We may use vendors to obtain information to generate leads and create user profiles.</li>
                                </ul>
                            </li>
                            <li>Advertising Partners
                                <ul>
                                    <li>We receive information about you from some of our vendors who assist us with marketing or promotional services related to how you interact with our websites, applications, products, Services, advertisements or communications.</li>

                                </ul>
                            </li>
                            <li>
                                Social Networks
                                <ul>
                                    <li>If you provide your social network account credentials to us or otherwise sign in to the Services through a third-party site or service, some content and/or information in those accounts may be transmitted into your account with us.</li>
                                </ul>
                            </li>
                        </ul>
                        <h6 className="text-center"><b>Our Commercial or Business Purposes for Collecting Personal Data</b></h6>
                        <h6 className=""><b>Providing, Customizing, and Improving the Services</b></h6>
                        <ul>
                            <li>Creating and managing your account or other user profiles.</li>
                            <li>Processing orders or other transactions; billing.</li>
                            <li>Providing you with the products, services or information you request.</li>
                            <li>Meeting or fulfilling the reason you provided the information to us.</li>
                            <li>Providing support and assistance for the Services.</li>
                            <li>Improving the Services, including testing, research, internal analytics and product development.</li>
                            <li>Personalizing the Services, website content and communications based on your preferences.</li>
                            <li>Doing fraud protection, security and debugging.</li>
                            <li>Carrying out other business purposes stated when collecting your Personal Data or as otherwise set forth in applicable data privacy laws, such as the California Consumer Privacy Act (the “CCPA”).</li>
                        </ul>
                        <h6 className=""><b>Marketing the Services</b></h6>
                        <ul>
                            <li>Marketing and selling the Services.</li>
                            <li>Showing you advertisements, including interest-based or online behavioral advertising.</li>
                        </ul>
                        <h6><b>Corresponding with You</b></h6>
                        <ul>
                            <li>Responding to correspondence that we receive from you, contacting you when necessary or requested, and sending you information about TalentDrop or the Services.</li>
                            <li>Sending emails and other communications according to your preferences or that display content that we think will interest you.</li>
                        </ul>
                        <h6><b>Meeting Legal Requirements and Enforcing Legal Terms</b></h6>
                        <ul>
                            <li>Fulfilling our legal obligations under applicable law, regulation, court order or other legal process, such as preventing, detecting and investigating security incidents and potentially illegal or prohibited activities.</li>
                            <li>Protecting the rights, property or safety of you, TalentDrop or another party.</li>
                            <li>Enforcing any agreements with you.</li>
                            <li>Responding to claims that any posting or other content violates third-party rights.</li>
                            <li>Resolving disputes.</li>
                        </ul>
                        <br />
                        <p>We will not collect additional categories of Personal Data or use the Personal Data we collected for materially different, unrelated or incompatible purposes without providing you notice.</p>
                        <h3 className={styles.privacy__date}>How We Share Your Personal Data</h3>
                        <h6 className="text-center"><b>Legal Obligations</b></h6>
                        <p>We may share any Personal Data that we collect with third parties in conjunction with any of the activities set forth under “Meeting Legal Requirements and Enforcing Legal Terms” in the “Our Commercial or Business Purposes for Collecting Personal Data” section above.</p>
                        <br />
                        <h6 className="text-center"><b>Business Transfers</b></h6>
                        <p>All of your Personal Data that we collect may be transferred to a third party if we undergo a merger, acquisition, bankruptcy or other transaction in which that third party assumes control of our business (in whole or in part). Should one of these events occur, we will make reasonable efforts to notify you before your information becomes subject to different privacy and security policies and practices.</p>
                        <br />
                        <h6 className="text-center"><b>Data that is Not Personal Data</b></h6>
                        <p>We may create aggregated, de-identified or anonymized data from the Personal Data we collect, including by removing information that makes the data personally identifiable to a particular user. We may use such aggregated, de-identified or anonymized data and share it with third parties for our lawful business purposes, including to analyze, build and improve the Services and promote our business, provided that we will not share such data in a manner that could identify you.</p>
                        <br />
                        <h3 className={styles.privacy__date}>Tracking Tools, Advertising and Opt-Out</h3>
                        <br />



                        <p>The Services use cookies and similar technologies such as pixel tags, web beacons, clear GIFs and JavaScript (collectively, “Cookies”) to enable our servers to recognize your web browser, tell us how and when you visit and use our Services, analyze trends, learn about our user base and operate and improve our Services. Cookies are small pieces of data– usually text files – placed on your computer, tablet, phone or similar device when you use that device to access our Services. We may also supplement the information we collect from you with information received from third parties, including third parties that have placed their own Cookies on your device(s). Please note that because of our use of Cookies, the Services do not support “Do Not Track” requests sent from a browser at this time.</p>
                        <br />
                        <p>We use the following types of Cookies:</p>
                        <br />
                        <p><strong>Essential Cookies:</strong> Essential Cookies are required for providing you with features or services that you have requested. For example, certain Cookies enable you to log into secure areas of our Services. Disabling these Cookies may make certain features and services unavailable.</p>
                        <p><strong>Functional Cookies:</strong> Functional Cookies are used to record your choices and settings regarding our Services, maintain your preferences over time and recognize you when you return to our Services. These Cookies help us to personalize our content for you, greet you by name and remember your preferences (for example, your choice of language or region).</p>
                        <p><strong>Performance/Analytical Cookies:</strong> Performance/Analytical Cookies allow us to understand how visitors use our Services. They do this by collecting information about the number of visitors to the Services, what pages visitors view on our Services and how long visitors are viewing pages on the Services. Performance/Analytical Cookies also help us measure the performance of our advertising campaigns in order to help us improve our campaigns and the Services’ content for those who engage with our advertising. For example, Google LLC (“Google”) uses cookies in connection with its Google Analytics services. Google’s ability to use and share information collected by Google Analytics about your visits to the Services is subject to the Google Analytics Terms of Use and the Google Privacy Policy. You have the option to opt-out of Google’s use of Cookies by visiting the Google advertising opt-out page at www.google.com/privacy_ads.html or the Google Analytics Opt-out Browser Add-on at https://tools.google.com/dlpage/gaoptout/.</p>
                        <br />
                        <p>You can decide whether or not to accept Cookies through your internet browser’s settings. Most browsers have an option for turning off the Cookie feature, which will prevent your browser from accepting new Cookies, as well as (depending on the sophistication of your browser software) allow you to decide on acceptance of each new Cookie in a variety of ways. You can also delete all Cookies that are already on your device. If you do this, however, you may have to manually adjust some preferences every time you visit our website and some of the Services and functionalities may not work.</p>
                        <br />
                        <p>To explore what Cookie settings are available to you, look in the “preferences” or “options” section of your browser’s menu. To find out more information about Cookies, including information about how to manage and delete Cookies, please visit https://www.allaboutcookies.org/.</p>
                        <br />
                        <h3 className={styles.privacy__date}>Data Security and Retention</h3>

                        <p>We seek to protect your Personal Data from unauthorized access, use and disclosure using appropriate physical, technical, organizational and administrative security measures based on the type of Personal Data and how we are processing that data. You should also help protect your data by appropriately selecting and protecting your password and/or other sign-on mechanism; limiting access to your computer or device and browser; and signing off after you have finished accessing your account. Although we work to protect the security of your account and other data that we hold in our records, please be aware that no method of transmitting data over the internet or storing data is completely secure.</p>
                        <br />
                        <p>We retain Personal Data about you for as long as you have an open account with us or as otherwise necessary to provide you with our Services. In some cases we retain Personal Data for longer, if doing so is necessary to comply with our legal obligations, resolve disputes or collect fees owed, or is otherwise permitted or required by applicable law, rule or regulation. We may further retain information in an anonymous or aggregated form where that information would not identify you personally.</p>

                        <h3 className={styles.privacy__date}>Personal Data of Children</h3>

                        <p>As noted in the Terms of Use, we do not knowingly collect or solicit Personal Data about children under 16 years of age; if you are a child under the age of 16, please do not attempt to register for or otherwise use the Services or send us any Personal Data. If we learn we have collected Personal Data from a child under 16 years of age, we will delete that information as quickly as possible. If you believe that a child under 16 years of age may have provided Personal Data to us, please contact us at support@talentdrop.com.</p>
                        <br />
                        <h6 className="text-center"><b>California Resident Rights</b></h6>
                        <p>Under California Civil Code Sections 1798.83-1798.84, California residents are entitled to contact us to prevent disclosure of Personal Data to third parties for such third parties’ direct marketing purposes; in order to submit such a request, please contact us at support@talentdrop.com.</p>
                        <br />
                        <h6 className="text-center"><b>Nevada Resident Rights</b></h6>
                        <p>If you are a resident of Nevada, you have the right to opt-out of the sale of certain Personal Data to third parties who intend to license or sell that Personal Data. You can exercise this right by contacting us at support@talentdrop.com with the subject line “Nevada Do Not Sell Request” and providing us with your name and the email address associated with your account. We will not and do not sell your Personal Data.</p>
                        <br />
                        <h3 className={styles.privacy__date}>European Union Data Subject Rights</h3>
                        <p>If you are a resident of the European Union (“EU”), United Kingdom, Lichtenstein, Norway or Iceland, you may have additional rights under the EU General Data Protection Regulation (the “GDPR”) with respect to your Personal Data, as outlined below.</p>
                        <p>For this section, we use the terms “Personal Data” and “processing” as they are defined in the GDPR, but “Personal Data” generally means information that can be used to individually identify a person, and “processing” generally covers actions that can be performed in connection with data such as collection, use, storage and disclosure. TalentDrop will be the controller of your Personal Data processed in connection with the Services.</p>
                        <p>If there are any conflicts between this this section and any other provision of this Privacy Policy, the policy or portion that is more protective of Personal Data shall control to the extent of such conflict. If you have any questions about this section or whether any of the following applies to you, please contact us at support@talentdrop.com.</p>
                        <h3 className={styles.privacy__date}>Changes to this Privacy Policy</h3>
                        <p>We’re constantly trying to improve our Services, so we may need to change this Privacy Policy from time to time, but we will alert you to any such changes by placing a notice on the TalentDrop website, by sending you an email and/or by some other means. Please note that if you’ve opted not to receive legal notice emails from us (or you haven’t provided us with your email address), those legal notices will still govern your use of the Services, and you are still responsible for reading and understanding them. If you use the Services after any changes to the Privacy Policy have been posted, that means you agree to all of the changes. Use of information we collect is subject to the Privacy Policy in effect at the time such information is collected.</p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default PrivacyPolicy;