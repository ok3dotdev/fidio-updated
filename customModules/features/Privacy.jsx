import React from 'react';

const PrivacyContent = () => {
  const paraStyle = {
    color: 'rgba(163, 163, 163, 1)',
    fontSize: '16px',
    fontFamily: 'lexend',
    paddingTop: '10px',
    lineHeight: '1.4rem',
    fontWeight: '400',
  };
  return (
    <div className='px-4 h-full'>
      <div className='max-w-4xl mx-auto'>
        <main class=' p-4 text-white'>
          <h1 class='text-2xl font-semibold mb-4'>FIDIO PRIVACY POLICY</h1>

          <section class=' p-4 shadow rounded-lg mb-4'>
            <h3 class='text-lg font-semibold mb-2'>
              Effective as of January 15, 2023 (Publication Date September 16,
              2023)
            </h3>
            <p style={paraStyle} className='  text-sm font-light mt-2'>
              Thank you for visiting Fidio. Your privacy is important to us.
              This privacy policy ('Privacy Policy') describes how we, our
              affiliated and associated entities, as further detailed below
              (collectively 'Fidio', 'we', 'us', and 'our'), collects, uses,
              discloses, transfers, stores, retains, or otherwise processes your
              personal data, and the choices you can make about the way your
              information is collected and used by Fidio. Please review our
              Privacy Policy as it may change in the future and contact us at{' '}
              <a href='mailto:privacy@fidio.ca' class='text-blue-500'>
                privacy@fidio.ca
              </a>{' '}
              or the correspondence address below if you have any questions or
              concerns or wish to exercise your privacy rights.
            </p>
          </section>

          <section class=' p-4 shadow rounded-lg mb-4'>
            <h3 class='text-lg font-semibold mb-2'>It’s your right to:</h3>
            <ul class='list-disc pl-6'>
              <li class='mb-2'>
                <h3 class='text-base font-semibold'>
                  Be informed about how we process your personal data.
                </h3>
                <p style={paraStyle} className='text-sm font-light mt-2'>
                  We provide this information through our Privacy Policy, our
                  Services, and by answering your questions when you contact us.
                </p>
              </li>
              <li class='mb-2'>
                <h3 class='text-base font-semibold'>
                  Access your personal data.
                </h3>
                <p style={paraStyle} className='text-sm font-light mt-2'>
                  You can ask whether we process your personal data, and if we
                  do, you can ask for a copy of your personal data and for
                  information on certain other aspects of the processing,
                  including: the purposes of the processing; categories of the
                  personal data processed; recipients or categories of
                  recipients of the data; source of the data where we have not
                  received your data directly from you; information about the
                  existence of automated decision-making or profiling; and
                  information about other privacy rights you have in relation to
                  your personal data.
                </p>
              </li>
              <li class='mb-2'>
                <h3 class='text-base font-semibold'>
                  Rectify inaccurate or incomplete personal data.
                </h3>
                <p style={paraStyle} className='text-sm font-light mt-2'>
                  You may correct some categories of your personal data yourself
                  in your account settings or contact{' '}
                  <a href='mailto:privacy@fidio.ca' class='text-blue-500'>
                    privacy@fidio.ca
                  </a>
                  .
                </p>
              </li>
              <li class='mb-2'>
                <h3 class='text-base font-semibold'>
                  Deletion (erasure) of your personal data.
                </h3>
                <p style={paraStyle} className='text-sm font-light mt-2'>
                  You have the right to ask us to delete your personal data
                  under certain circumstances, including:
                </p>
                <ul class='list-disc pl-6'>
                  <li className='font-sans text-sm font-light mt-2'>
                    Your personal data are no longer necessary in relation to
                    the purposes for which we have collected them;
                  </li>
                  <li className='font-sans text-sm font-light mt-2'>
                    You withdraw your consent to processing of your personal
                    data and there is no other legal ground for the processing;
                  </li>
                  <li className='font-sans text-sm font-light mt-2'>
                    You object to the processing and there are no overriding
                    legitimate grounds for the processing or when you object to
                    the processing of your data for direct marketing purposes;
                  </li>
                  <li className='font-sans text-sm font-light mt-2'>
                    Your personal data were unlawfully processed by us;
                  </li>
                  <li className='font-sans text-sm font-light mt-2'>
                    The erasure is mandated under a law to which we are subject;
                  </li>
                  <li className='font-sans text-sm font-light mt-2'>
                    We have collected the personal data of a child.
                  </li>
                </ul>
                <p style={paraStyle} className='text-sm font-light mt-2'>
                  Please know that you may also delete certain personal data by
                  yourself in your Fidio account. You may also delete your
                  folders, playlists, playlist descriptions, remove tracks from
                  your playlists or remove added artists and other content from
                  your library. Under some circumstances, we are legally not
                  required to comply with a deletion request.
                </p>
                <p style={paraStyle} className='text-sm font-light mt-2'>
                  In order to delete the personal data associated with your
                  account, please contact{' '}
                  <a href='mailto:privacy@fidio.ca' class='text-blue-500'>
                    privacy@fidio.ca
                  </a>{' '}
                  or visit Settings within the FIDIO app followed by Account.
                  Click ‘Delete Account’. Please note, you must first cancel
                  your existing subscription before being allowed to delete all
                  of the personal information associated with your account.
                  Please contact our support team at{' '}
                  <a href='mailto:privacy@fidio.ca' class='text-blue-500'>
                    privacy@fidio.ca
                  </a>{' '}
                  with any questions or concerns about this process.
                </p>
              </li>
              <li class='mb-2'>
                <h3 class='text-base font-semibold'>
                  Restriction of processing of your personal data.
                </h3>
                <p style={paraStyle} className='text-sm font-light mt-2'>
                  Under certain circumstances, you may request that we stop
                  processing some or all of your personal data temporarily. You
                  may request the restriction of processing if:
                </p>
                <ul class='list-disc pl-6'>
                  <li className='font-sans text-sm font-light mt-2'>
                    You have contested the accuracy of your personal data for
                    the period of verification of the accuracy of your personal
                    data;
                  </li>
                  <li className='font-sans text-sm font-light mt-2'>
                    When we unlawfully processed your personal data and instead
                    of erasure of such data you request restriction of their
                    use;
                  </li>
                  <li className='font-sans text-sm font-light mt-2'>
                    When we no longer need your personal data in relation to the
                    purposes for which they were collected but you require such
                    data for the establishment, exercise or defense of legal
                    claims;
                  </li>
                  <li className='font-sans text-sm font-light mt-2'>
                    When you have objected to the processing, pending the
                    verification on our end whether our legitimate grounds
                    override your interests.
                  </li>
                </ul>
              </li>
              <li class='mb-2'>
                <h3 class='text-base font-semibold'>Data Portability.</h3>
                <p style={paraStyle} className='text-sm font-light mt-2'>
                  You have the right to receive a copy of your personal data in
                  a machine-readable (electronic) format and to have it sent to
                  another service provider, if our legal basis for processing
                  your personal data is your consent or performance of contract.
                </p>
              </li>
              <li class='mb-2'>
                <h3 class='text-base font-semibold'>Object.</h3>
                <p style={paraStyle} className='text-sm font-light mt-2'>
                  You have the right to object to the processing of your
                  personal data on certain grounds:
                </p>
                <ul class='list-disc pl-6'>
                  <li className='font-sans text-sm font-light mt-2'>
                    When we process your personal data for our or third party’s
                    legitimate interests. When we receive your request on this
                    ground, we will no longer process your personal data for
                    such purposes, unless we demonstrate that we have compelling
                    legitimate grounds to continue processing your personal data
                    for these purposes, which override your interests, rights,
                    and freedoms or where we need to process such data for the
                    establishment, exercise, or defense of legal claims.
                  </li>
                  <li className='font-sans text-sm font-light mt-2'>
                    When we process your data for direct marketing purposes. You
                    can also object at any time that we process your personal
                    data for direct marketing purposes. If you object, we will
                    no longer process your data for such purposes. You may
                    change your preferences and opt out from receiving some or
                    all of these types of direct marketing communications in
                    your FIDIO account settings, or you may contact us through
                    the contact points provided in this Privacy Policy (
                    <a href='mailto:privacy@fidio.ca' class='text-blue-500'>
                      privacy@fidio.ca
                    </a>{' '}
                    or our correspondence address below). You may also
                    unsubscribe from our marketing emails by clicking on the
                    unsubscribe link provided in such emails.
                  </li>
                </ul>
              </li>
              <li class='mb-2'>
                <h3 class='text-base font-semibold'>
                  Not be subject to automated decision-making.
                </h3>
                <p style={paraStyle} className='text-sm font-light mt-2'>
                  You have the right not to be subject to a decision based
                  solely on automated processing (i.e., decisions made by
                  machines without human involvement), including profiling,
                  which would produce legal effects or similarly affect you
                  significantly. Our processing of your data does not involve
                  this type of automated decision-making.
                </p>
              </li>
              <li class='mb-2'>
                <h3 class='text-base font-semibold'>Withdraw consent.</h3>
                <p style={paraStyle} className='text-sm font-light mt-2'>
                  Where we rely on your consent to process your personal data
                  for a particular purpose, you may withdraw your consent at any
                  time. If you withdraw your consent, we will stop processing
                  your personal data for the specific purpose or purposes
                  requested. This does not affect the lawfulness of processing
                  of your data before you have revoked the consent.
                </p>
              </li>
              <li class='mb-2'>
                <h3 class='text-base font-semibold'>Register a complaint.</h3>
                <p style={paraStyle} className='text-sm font-light mt-2'>
                  If you reside in applicable jurisdictions, you are entitled,
                  per local data protection law, to contact your local
                  authorities regarding any question, concern, or complaint you
                  have relating to our processing of your personal data.
                </p>
              </li>
              <li>
                <h3 class='text-base font-semibold'>Non-discrimination.</h3>
                <p style={paraStyle} className='text-sm font-light mt-2'>
                  You have the right to not be discriminated against if you
                  exercise any of your privacy rights. We will not discriminate
                  against you or deny, charge different prices for, or provide a
                  different quality of our Services if you choose to exercise
                  these rights, although some functionality and features on the
                  Services may change or no longer be available to you.
                </p>
              </li>
            </ul>
          </section>

          <section class=' p-4 shadow rounded-lg mb-4'>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              You can request to exercise any of your privacy rights with an
              email to{' '}
              <a href='mailto:privacy@fidio.ca' class='text-blue-500'>
                privacy@fidio.ca
              </a>{' '}
              with our customer service support contact form, or by writing to
              the correspondence address below. Please note that when you make a
              request to exercise your rights, we may require that you provide
              information and follow procedures so that we can verify your
              identity. Where possible, we will attempt to match the information
              that you provide in your request to information we already have to
              verify your identity. If we are able to verify your request, we
              will process it. We will assess any request to exercise these
              rights on a case-by-case basis. We will respond to your request
              within the periods required by applicable data protection law.
              However, we may not always be able to comply fully with your
              request, and we will notify you in that event.
            </p>
          </section>
          <section class=' p-4 shadow rounded-lg mb-4'>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              For the purposes of this Privacy Policy, Fidio Technologies Inc.
              d/b/a ‘Fidio’ is the ‘controller’ of your personal data. Fidio
              Technologies Inc. is registered as a Corporation in Canada, with
              headquarters located at 95 Kenesky Drive, Toronto ON L8B 1Y3
              Canada.
            </p>
          </section>

          <section class=' p-4 shadow rounded-lg mb-4'>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              The correspondence address for FIDIO is 95 Kenesky Drive, Toronto
              ON L8B 1Y3 Canada. As the controller Fidio decides why and how
              your personal data are handled by FIDIO when you use our services
              ('Services').
            </p>
          </section>
          <section class=' p-4 shadow rounded-lg mb-4'>
            <h3 class='text-lg font-semibold mb-2'>
              FIDIO is responsible for handling your data according to
              applicable data protection rules.
            </h3>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              Our policy is to process your personal data in accordance with
              applicable data protection laws and regulations. This Privacy
              Policy is separate from FIDIO’s Terms of Use ('Terms'), which
              govern your use and access to FIDIO Services.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              This Privacy Policy applies when: you register a FIDIO account;
              you log in and use FIDIO’s content and streaming services; you
              download and/or use FIDIO clients (e.g., FIDIO mobile
              applications, desktop player, web player, or other technical
              interfaces provided by FIDIO); your personalization of your user
              experience; you visit or interact with our websites and fan pages
              on social networks; our websites, services, communications, or
              documents refer to this Privacy Policy; you interact with us in
              any other way, such as when you contact our customer support
              service, respond to our surveys, participate in our competitions
              and giveaways, use our developer platform, and other
              communications. This Privacy Policy collectively refers to the
              above as processing of your data in the context of provision of
              our Services.
            </p>
          </section>

          <section class=' p-4 shadow rounded-lg mb-4'>
            <h3 class='text-lg font-semibold mb-2'>
              The Personal and Other Information We Collect
            </h3>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              At FIDIO and FIDIO websites, you can order products, express an
              opinion, create playlists, and subscribe to services such as
              online newsletters and paid streaming. The types of personally
              identifiable information that may be collected at these pages
              include your: name, FIDIO account, user and profile data
              (including privacy and marketing settings), address, location,
              e-mail address, telephone number, fax number, contact preferences,
              credit card and other payment information, Internet protocol
              address, date of birth, gender, Facebook, Twitter, Google or Apple
              user identifiers, and details of how you use and interact with our
              websites and Services (e.g., your search queries, login data,
              playlists, device information, network connection type, a record
              of customer service emails, consumption data, listening behavior,
              surveys, sweepstakes and competitions entered, etc.).
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              FIDIO may process information about you related to: identification
              data and contact data; account data; subscription data; payment
              and billing data; usage data; login data; device data; network
              data, marketing data; personal data processed in the context of
              customer support; personal data processed in the context of
              surveys, interviews and user-testing; personal data processed in
              the context of competitions and sweepstakes; personal data
              processed about you in the context of your interaction with our
              fan pages on social media networks.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              At certain parts of some of our Services and websites, only
              persons who provide us with the requested personally identifiable
              information will be able to order products, programs, and services
              or otherwise participate in the Service or and/website's
              activities and offerings. We may draw inferences from any of the
              information we gather via our websites and Services, including
              about your preferences. We do not deliberately collect sensitive
              personal data and would not use any such information except for
              the purposes for which it is collected and as authorized by law.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              We may also receive information about you from third parties that
              may have collected and transferred your personal data to us in
              accordance with their own privacy policies and/or terms of use.
              When we receive such information from third parties, we may
              combine it with the other personal data that we have collected
              about you as set out in this Privacy Policy and use such
              information either alone or in combination with the other personal
              data we hold.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              We also may collect certain non-personally identifiable
              information when you visit many of our web pages such as the type
              of browser you are using (e.g., Safari, Internet Explorer), the
              type of operating system you are using and information about your
              Internet service provider (e.g., Comcast, AT&T) or device (e.g.,
              iPhone X, MacBook Pro) and other user-related general data (e.g.,
              zip code, area code).
            </p>
          </section>

          <section class=' p-4 shadow rounded-lg mb-4'>
            <h3 class='text-lg font-semibold mb-2'>
              How We Use the Information We Collect
            </h3>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              We may use the information you provide about yourself to fulfill
              your requests for our products, programs, and services, to respond
              to your inquiries about our offerings, and to offer you other
              products, programs or services that we believe may be of interest
              to you. We sometimes use this information to communicate with you,
              such as to notify you when a concert you have purchased is
              available for download, to fulfill a request by you for an online
              newsletter, or to contact you about your account with us. If you
              enter into a giveaway, contest or other promotion, we may use the
              information you provide to administer those programs.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              The information we collect in connection with our website is used
              to provide an interactive experience. We use this information to
              facilitate participation in these online forums and communities
              and, from time to time, to offer you new products, programs, or
              services. As is the case with most Internet services, we obtain
              some information automatically and store it in log files. We use
              this and other information to understand and analyze trends, to
              administer the site, to learn about user behavior on the site, to
              improve our products and services, and to gather generalized
              demographic information about our users. We may use this
              information to market and advertise our products and services.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              When we process your personal data, we do so because we have
              specific and defined reasons as well as a legal justification to
              do so.
            </p>
            <ul class='list-disc pl-6'>
              <li className='font-sans text-sm font-light mt-2'>
                <strong>Consent:</strong> When you have given us your free,
                informed, unambiguous consent to process your personal data for
                a specific purpose. You are free to withdraw your consent at any
                time;
              </li>
              <li className='font-sans text-sm font-light mt-2'>
                <strong>Performance of Contract:</strong> When you request our
                products and/or Services and we need to process your personal
                data to deliver these Services according to our Terms;
              </li>
              <li className='font-sans text-sm font-light mt-2'>
                <strong>Legal Obligation:</strong> When we are subject to
                different legal or regulatory obligations in jurisdictions where
                we operate, which require that we process certain personal data
                for specific purposes;
              </li>
              <li className='font-sans text-sm font-light mt-2'>
                <strong>Legitimate Interests:</strong> When we or a third party
                have legitimate interests to process your personal data for
                various purposes that benefit FIDIO or third parties, such as
                other FIDIO users. Prior to relying on this legal basis, we
                balance the benefits of processing for FIDIO or third parties
                against your interests, rights and freedoms to determine if we
                can rely on this legal basis.
              </li>
            </ul>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              We may collect, share, use or otherwise process personal data
              about you for various purposes, including providing our Services
              and products, payment and billing, personalization, improvement of
              our websites, Services and products, analytics, troubleshooting,
              testing, calculating royalty payments, marketing, compliance with
              legal obligations, enforcement of Terms and policies, addressing
              misuse and unlawful activity, establishment and defense of legal
              claims, fulfilling contractual obligations, conducting surveys and
              user-testing, enabling your participation in our FIDIO
              subscription service and special offers, providing customer
              support, and communication on social networks.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              You are not required to provide any personally identifiable
              information that we have requested, but if you choose not to do
              so, in many cases we will not be able to provide you with our
              products or services or respond to any questions you may have.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              We sometimes use the non-personally identifiable information that
              we collect to improve the design and content of our site and to
              enable us to personalize your Internet experience. We also may
              share non-personally identifiable information publicly and with
              our partners and use this information in the aggregate to analyze
              site usage, as well as to offer you products, programs, or
              services.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              We share your data with third parties if you give us permission,
              if it is necessary for the performance of the contract we have
              with you, or if we have a legitimate interest for such sharing. We
              may receive and share information with our business partners,
              including third parties such as an artist, promoter, venue,
              sponsor, and/or strategic marketing and advertising partners.
            </p>
          </section>
          <section class='p-4 shadow rounded-lg mb-4'>
            <h3 class='text-lg font-semibold mb-2'>
              Our business partners use the information we give them as
              described in their privacy policies, which may include sending you
              marketing communications.
            </h3>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              You should read those policies to learn how they treat your
              information. We may share information with our affiliates and
              group companies; our processors and service providers; third-party
              applications, services and platforms (including audio devices,
              smart TVs, cars, voice assistants, etc.); payment service
              providers; advertising and analytics service providers; auditors
              and other third party accounting services; and any purchaser or
              successor to all or part of our business. For example, if part of
              our business is sold we may give our customer list as part of that
              transaction.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              We may disclose personally identifiable information in response to
              legal process (e.g. in response to a court order or a subpoena),
              public authorities or to enforce applicable Terms, including
              investigation of potential violations. We also may disclose such
              information to detect, prevent or otherwise address fraud,
              intellectual property violations, security or technical issues, to
              protect our operations or users, or to respond to a law
              enforcement agency's request. Additionally, in the event of a
              reorganization, merger or sale we may transfer any and all
              information we collect to the relevant third party.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              We may de-identify your data and combine and aggregate your
              de-identified information with other information in a way that it
              no longer enables your identification and share that
              de-identified, aggregated information with other third parties not
              mentioned above – for example, with artists or content rights
              holders whose content we license. Such de-identified and
              aggregated statistics may include demographic data, such as how
              many users constitute a particular age group, general locations of
              where groups of users reside and similar data.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              Agents and contractors of FIDIO who have access to personally
              identifiable information are required to protect this information
              in a manner that is consistent with this Privacy Policy by, for
              example, not using the information for any purpose other than to
              carry out the services they are performing for FIDIO.
            </p>
            <p>
              Although we take appropriate measures to safeguard against
              unauthorized disclosures of information, we cannot assure you that
              personally identifiable information that we collect will never be
              disclosed in a manner that is inconsistent with this Privacy
              Policy.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              Finally, FIDIO websites will not use or transfer personally
              identifiable information provided to us in ways unrelated to the
              ones described above without also providing you with an
              opportunity to opt out of these unrelated uses. For example, if
              you don’t want to be on our mailing list, you can opt out by
              updating your settings or contacting us at privacy@fidio.ca
            </p>
          </section>

          <section class='p-4 shadow rounded-lg mb-4'>
            <h3 class='text-lg font-semibold mb-2'>Cookies</h3>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              To enhance your experience with our website, many of our web pages
              use "cookies." Cookies are text files we place in your computer's
              browser to store your preferences. Cookies, by themselves, do not
              tell us your e-mail address or other personally identifiable
              information unless you choose to provide this information to us
              by, for example, registering at our site. However, once you choose
              to furnish the site with personally identifiable information, this
              information may be linked to the data stored in the cookie.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              We use cookies to understand site usage and to improve the content
              and offerings on our site. For example, we may use cookies to
              personalize your experience at Fidio.ca (e.g. to recognize you by
              name when you return to our site), save your password in
              password-protected areas, and enable you to use shopping carts on
              our website.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              You may also set your browser to block all cookies, including
              cookies associated with our services, or to indicate when a cookie
              is being set by us. However, many of our services may not function
              properly if your cookies are disabled.
            </p>
          </section>

          <section class='p-4 shadow rounded-lg mb-4'>
            <h3 class='text-lg font-semibold mb-2'>Social Media Networks</h3>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              We use various usage and insight tools offered by the operators of
              social media networks, through which we can view general,
              anonymized statistics about our fan pages, such as interactions
              and reach of our posts and demographic information about our fan
              page visitors (e.g. age, gender, region). We can optimize the
              content we offer on our fan pages on that basis. Whenever you
              interact with our fan pages, operators of the social networks use
              cookies and similar technologies to track the usage behavior of
              fan page visits. This information is collected regardless of
              whether you are a logged-in user of the particular social network
              or not. On that basis, we receive various insights from the
              operators of social networks.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              We do not have access to the personal data which the operators of
              social networks use to create such insights. The selection and
              processing of your data for insights is performed exclusively by
              the operators of social networks. However, in some cases, when
              using these usage analysis and insight tools, we are jointly
              responsible ('joint controllers') with the operators of the social
              networks for processing your data to the extent indicated below.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              When you visit our profile or fan pages on Facebook and Instagram
              (each the 'Social Media Network'), the Social Media Network and
              FIDIO act as joint controllers with respect to the collection of
              your data and the creation of insights. We have entered into joint
              controller terms with each Social Media Network to govern the
              relationship between FIDIO and the Social Media Network with
              respect to this processing. The Social Media Network is the
              primary controller for the collection of your data that is used
              for the creation of insight reports. The Social Media Network is
              therefore responsible for enabling your privacy rights in line
              with the applicable privacy laws. More information on how the
              Social Media Network processes your personal data, including the
              legal basis the Social Media Network relies on and the ways to
              exercise privacy rights against the Social Media Network, can be
              found in each Social Media Network's own Privacy Policy (Facebook,
              Instagram, etc.).
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              When you visit our Twitter or YouTube profiles, Twitter as the
              operator of Twitter or Google as the operator of YouTube, as
              relevant, collects and processes your personal data to the extent
              described in their privacy policies. Through statistics, we
              receive anonymized information from Twitter and Google – for
              example about the number of our Twitter and YouTube profile
              visits, about how successful our posts are or about what interests
              our followers pursue. Please refer to the Twitter and YouTube
              privacy policies for further information on how they process your
              personal data.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              Note that when you visit our fan pages, the operators of social
              media process your data also for their own purposes, which are not
              covered in this Privacy Policy. We have no influence over the data
              processing operations of third parties. In this regard, we refer
              you to the privacy policy of the respective social network.
            </p>
          </section>

          <section class='p-4 shadow rounded-lg mb-4'>
            <h3 class='text-lg font-semibold mb-2'>
              Links to Third Party Sites or Services
            </h3>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              We may link to third party sites or services we don't control. If
              you click on one of those links, you will be taken to websites we
              do not control. This policy does not apply to the privacy
              practices of those websites. Read the privacy policy of these
              other websites carefully. We are not responsible for these
              third-party websites. Our site may also serve third-party content
              that contains their own cookies or tracking technologies. We do
              not control the use of those technologies.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              We do not track our customers across third-party websites;
              however, some third-party sites do keep track of your browsing
              activities when they provide you content, which allows them to
              determine what they present to you. If you are visiting such
              sites, your browser should allow you to set the Do Not Track (DNT)
              signal so that third parties know you do not want to be tracked.
              Third parties that have content embedded on FIDIO websites may set
              cookies on a user's browser and/or collect information about the
              fact that a web browser visited a specific FIDIO website from a
              certain IP address. Third parties cannot obtain any other
              personally identifiable information from FIDIO's websites unless
              you provide it to them directly. Information collected by third
              parties is governed by their privacy practices.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              FIDIO offers interactive services that allow you to post content
              to share publicly or with friends. At any time, you can contact
              privacy@fidio.ca to delete or remove content you have posted using
              the deletion or removal options within our service. Although we
              offer deletion capability for our services, please be aware that
              the removal of content may not ensure complete or comprehensive
              removal of that content or information posted through the
              services.
            </p>
          </section>
          <section class=' p-4 shadow rounded-lg mb-4'>
            <h3 class='text-lg font-semibold mb-2'>
              Information You Choose to Make Public
            </h3>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              Certain information will be public on our websites and Services as
              part of your user experience including your user name, and any
              public interactions you initiate on our websites or Services
              including posting reviews, playlists, identifying favorite artists
              or performances, etc. The extent of your information visible to
              others on our websites and Services will depend on the information
              you choose to share. You can change or delete some of the
              information you provide. If you use another third party service or
              website to authenticate to our Services we will receive your first
              and last name and profile information from these third parties and
              this information will be saved automatically in your FIDIO account
              along with your user name and data. You can also edit or delete
              this information.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              You may be able to create public playlists on our Services. Your
              public playlists will appear in your user data, will be searchable
              on our Services and other FIDIO users can access and use them. You
              and other FIDIO users may be able to share user playlists and
              information via a shareable link or via third-party social
              networks or messaging platforms. You can change the privacy of
              your playlists at any time. If you change your public playlist to
              a private setting, it will no longer be searchable on our Services
              or appear in any public user data. Please be aware that if other
              FIDIO users access a previously public playlist, subsequent
              changing of the playlist to a private setting will not
              automatically remove the playlist for such other users. If you
              shared your public or private playlist through a shareable URL
              link or with other FIDIO users and they added such a playlist, at
              present you can only remove the playlist from their collections by
              their deleting it.
            </p>
          </section>

          <section class=' p-4 shadow rounded-lg mb-4'>
            <h3 class='text-lg font-semibold mb-2'>Children’s Personal Data</h3>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              Our Services and their content are not directed at children under
              the age of 13. We do not knowingly collect or solicit any personal
              data from children under the age of 13 or knowingly allow such
              persons to register for our Services. If you are under the age of
              13, please do not use our Services, do not browse our websites and
              do not send us any of your personal data. If we learn that we have
              collected personal data from a child under the age 13, we will
              promptly delete that information, in accordance with applicable
              law. If you are a parent or guardian and believe that we may have
              collected personal data from your child, please notify us
              immediately by sending an email to privacy@fidio.ca. If you are 13
              – 18 years of age, you may use our Services according to our Terms
              in appropriate circumstances. We reserve the right to limit access
              to our Services for children aged 13 – 18 years if their use of
              our Services or processing of personal data would be illegal or
              would require a consent of a parent or guardian, according to law
              applicable in their country of residence. Do not play or recommend
              any inappropriate content to individuals under 18 years old.
            </p>
          </section>

          <section class=' p-4 shadow rounded-lg mb-4'>
            <h3 class='text-lg font-semibold mb-2'>
              Data Retention, Deletion and Anonymization
            </h3>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              <strong>Data Retention.</strong> We will keep your personal data
              only for the period necessary to fulfil the purposes for which we
              collect and process your personal data, as described in this
              Privacy Policy and in accordance with applicable law. This means
              that the retention periods will vary according to the data
              category and the purpose we have to process your personal data.
              The retention periods for data are determined on a case-by-case
              basis that depends on various factors.
            </p>
            <ul>
              <li className='font-sans text-sm font-light mt-2'>
                The nature of the personal data and why it is collected and
                processed. The length of time we will keep your personal data
                will generally be determined by how long we need that
                information to provide you with our Services and to provide
                customer support. For example, as set out in this Privacy
                Policy, we require account data to deliver our Services. We need
                to keep it for the duration your FIDIO account exists so that we
                can maintain your account. Similarly, we will keep some of your
                usage data, such as your playlists or folders for the lifetime
                of your account;
              </li>
              <li className='font-sans text-sm font-light mt-2'>
                For so long as we are required by law to do so. We are subject
                to various legal obligations in countries in which we operate,
                such as bookkeeping, accounting, tax or audit obligations, which
                require that we keep certain data for specified periods. For
                example, we will keep your information in accordance with
                applicable law and where we have a legal obligation to do so;
              </li>
              <li className='font-sans text-sm font-light mt-2'>
                Other factors as required by law and our legitimate interests.
                We may keep certain data for the establishment, exercise, or
                defense of legal claims, to deal with and resolve requests,
                disputes or complaints, for litigation or regulatory matters,
                and for the safety, security, and integrity of our Services,
                among other reasons.
              </li>
            </ul>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              <strong>Data Deletion and Anonymization.</strong> Subject to
              applicable law, after the lapse of the retention periods, we will
              delete or permanently anonymize your personal data so that it is
              no longer capable of identifying you. If you request that we
              delete your FIDIO user account, we will treat your FIDIO account
              deletion request as a request for erasure (deletion) of your
              personal data and we will delete or anonymize your personal data,
              so that it no longer identifies you, in accordance with applicable
              law. Depending on the jurisdiction in which you reside, there may
              be circumstances in which we retain your personal data for lawful
              reasons after receiving a deletion request, for example if certain
              legal obligations apply or if there are unresolved issues or
              claims relating to your FIDIO user account or your use of our
              Services.
            </p>
          </section>
          <section id='data-retention-security' class='p-4'>
            <h2>Data Retention, Deletion and Anonymization</h2>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              We have compelling legitimate grounds to retain some of your
              personal data that overrides your interests in having your data
              deleted (e.g., for fraud prevention purposes, to enforce our
              Terms, etc.).
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              We cannot verify your identity or confirm that the personal data
              that we maintain relates to you, or if we cannot verify that you
              have the authority to make a request on behalf of another
              individual;
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              There is another exception under the applicable legislation in the
              country or state of your residence (e.g., exceptions applicable
              under the California Consumer Privacy Act).
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              In such cases, we will keep limited information about you in a
              protected form for the period necessary to fulfil processing under
              the applicable exception.
            </p>
          </section>

          <section id='commitment-to-security' class='p-4'>
            <h2>Our Commitment to Security</h2>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              We have put in place appropriate physical, electronic, and
              managerial procedures to safeguard and help prevent unauthorized
              access, maintain data security, and correctly use the information
              we collect online.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              We use standard security measures in place to protect your
              information. These measures will depend on the type of information
              collected. However, as the Internet is not guaranteed to be
              secure, we cannot promise that your use of FIDIO sites and
              Internet-based services and applications will be completely safe.
              If you believe that an unauthorized account has been created with
              your name or identity, contact us at the address below.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              We recommend that you always use strong passwords, that you change
              them regularly and that you do not use the same passwords for your
              FIDIO account as you already use to access other services or
              devices. We also recommend that you always access the Services and
              make payments from a secure computer or device. Any third-party
              services that you use to connect to your FIDIO account may also
              affect your information.
            </p>
          </section>

          <section id='additional-disclosures' class='p-4'>
            <h2>
              ADDITIONAL DISCLOSURES FOR INDIVIDUALS RESIDING IN SELECT
              JURISDICTIONS
            </h2>
            <h3>CANADA</h3>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              This section is relevant if you reside in Canada. FIDIO complies
              with the Canadian Personal Information Protection and Electronic
              Documents Act (‘PIPEDA’). This Privacy Policy includes all the
              necessary disclosures required by the PIPEDA. If you are not
              satisfied with how we handled your privacy request, please contact
              admin@fidio.ca and please note you have the right to make a
              written submission indicating your concerns to the Privacy
              Commissioner in your jurisdiction or to the Office of the Privacy
              Commissioner of Canada at the following address: Office of the
              Privacy Commissioner of Canada, 30 Victoria Street Gatineau,
              Quebec K1A 1H3.
              <a href='https://www.priv.gc.ca/en'>https://www.priv.gc.ca/en</a>
            </p>
            <h3>THE EUROPEAN ECONOMIC AREA AND THE UNITED KINGDOM</h3>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              This section is relevant if you reside in any of the European
              Economic Area countries (the ‘EEA’) or in the United Kingdom (the
              ‘UK’) and includes disclosures required by the General Data
              Protection Regulation (GDPR). The GDPR gives you rights as
              described in this Privacy Policy, which you can exercise through
              the contacts and methods provided in this Privacy Policy.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              If you are not satisfied with how we handled your request to
              exercise any of your rights or you have any other questions or
              concerns about your rights or this Privacy Policy, please contact
              admin@fidio.ca or send us a letter to our correspondence address
              as provided in this Privacy Policy.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              You also have the right to register a complaint with the relevant
              data protection authority. You may contact your local data
              protection authority about any questions or concerns you may have.
              <a href='https://www.eeassoc.org/privacy-notice'>
                Overview of data protection authorities in different EEA
                countries
              </a>
              and the data protection authority for the UK is the Information
              Commissioner’s Office.
              <a href='https://ico.org.uk/global/contact-us/'>
                Information Commissioner’s Office
              </a>
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              As described above in this Privacy Policy, we share your data both
              internally and with our content providers, affiliates and partners
              and processors and third-party vendors. Some of these recipients
              are located in countries outside the EEA and the UK, including in
              the United States and other countries, whose laws may not provide
              an equivalent level of protection for your personal data as is the
              level of protection guaranteed in the EEA and the UK. These
              transfers are necessary and essential for us to provide our
              Services to you. Prior to your personal data being shared with
              third parties, we will take contractual or other steps reasonably
              necessary to ensure that your personal data is treated securely by
              such third parties.
              <a href='https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en'>
                Standard Contractual Clauses approved by the European Commission
              </a>
            </p>
          </section>

          <section id='amendments-to-privacy-policy' class='p-4'>
            <h2>Amendments to this Privacy Policy</h2>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              Our websites and Services are subject to constant improvements,
              and future changes may influence what personal data we process and
              how we collect, use, share, store or otherwise process it. We may
              develop other Services in the future which are currently not
              mentioned in this Privacy Policy. The Privacy Policy will apply to
              them accordingly unless stated otherwise upon the launch of the
              new Services.
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              This Privacy Policy may be updated to reflect new changes in our
              Services, changes in the legal framework, or improvements in how
              we handle personal data. When we make material changes to the
              Privacy Policy, we will provide you with notice as appropriate
              under the circumstances, by sending you an email or notification
              within a FIDIO client. Unless stated otherwise, our most recent
              Privacy Policy applies to all information that we process about
              you.
            </p>
          </section>
          <section id='contact-us' class='p-4'>
            <h2>How to Contact Us</h2>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              If you have any questions or concerns about the FIDIO Privacy
              Policy for this site our Services or its implementation you may
              contact our Data Protection Office at{' '}
              <a href='mailto:privacy@fidio.ca'>privacy@fidio.ca</a> or at the
              address below:
            </p>
            <p style={paraStyle} className='text-sm font-light mt-2'>
              Fidio Technologies Inc. 95 Kenesky Drive, Toronto ON L8B 1Y3
              Canada. Attn: Privacy
            </p>
            <p>©FIDIO</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PrivacyContent;
