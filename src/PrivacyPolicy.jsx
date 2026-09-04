import React from "react";
import logo from "./assets/logo-02.svg";
import characters from "./assets/characters.svg";

function Logo({ className }) {
  return (
    <img
      src={logo}
      alt="Felix Studio Games"
      className={`fs-logo ${className || ""}`}
    />
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="pp-page">
      <header className="pp-header">
        <div className="pp-header-inner">
          <Logo />
        </div>
      </header>

      <main className="pp-main">
        <div className="pp-hero">
          <div className="pp-hero-rule" />
          <h1 className="pp-title">Privacy Policy</h1>
          <img
            src={characters}
            alt=""
            className="pp-hero-characters"
            aria-hidden="true"
          />
        </div>

        <div className="pp-layout">
          <aside className="pp-sidebar">
            <div className="pp-meta-block">
              <p className="pp-meta-label">Effective Date:</p>
              <p className="pp-meta-value">5th May, 2026</p>
            </div>
            <div className="pp-meta-block">
              <p className="pp-meta-label">Developer:</p>
              <p className="pp-meta-value">Felix Studio Games</p>
            </div>
          </aside>

          <article className="pp-content">
            <p>
              Welcome to <strong>Call Break Master</strong>. This Privacy
              Policy explains how <strong>Felix Studio Games</strong>{" "}
              collects, uses, and shares information when you use our mobile
              game.
            </p>
            <p>
              By using <strong>Call Break Master</strong>, you agree to the
              collection and use of information in accordance with this
              policy.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We do not collect personally identifiable information such as
              your name, email address, or phone number.
            </p>
            <p>
              However, we may collect certain non-personal information
              automatically, including:
            </p>
            <ul>
              <li>Device information (model, OS version)</li>
              <li>App usage data (game interactions, session duration)</li>
              <li>Advertising identifiers (such as device Advertising ID)</li>
              <li>Log data (IP address, device type, crash logs if applicable)</li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>
              Our game uses third-party services that may collect
              information used to identify you.
            </p>

            <h3>i. Advertising</h3>
            <p>We use Google AdMob to display ads.</p>
            <p>AdMob may collect:</p>
            <ul>
              <li>Advertising ID</li>
              <li>Device information</li>
              <li>Interaction with ads</li>
              {/* <li>Learn more: Google Privacy Policy</li> */}
            </ul>

            <p>
              Learn more:{" "}
              <a href="https://policies.google.com/privacy" className="google-policy-link">
                  Google Privacy Policy
              </a>
            </p>

            <h3>ii. Analytics</h3>
            <p>We use Firebase to understand how users interact with the game.</p>
            <p>Firebase may collect:</p>
            <ul>
              <li>App usage data</li>
              <li>Device information</li>
              <li>Performance data</li>
            </ul>

            <h3>iii. Crash Reporting</h3>
            <p>
              We use Firebase Crashlytics to monitor and fix crashes in the
              game.
            </p>
            <p>This service may collect information such as:</p>
            <ul>
              <li>Crash logs</li>
              <li>Device information (e.g., device model, OS version)</li>
              <li>App state at the time of the crash</li>
            </ul>

            <h2>How We Use Information</h2>
            <p>We use the collected data to:</p>
            <ul>
              <li>Improve game performance and user experience</li>
              <li>Analyze gameplay behavior</li>
              <li>Fix bugs and crashes</li>
              <li>Show relevant advertisements</li>
            </ul>

            <h2>Children's Privacy</h2>
            <p>This game is intended for users aged 13 and above.</p>
            <p>
              We do not knowingly collect personal information from children
              under 13. Since our app does not require account registration,
              we do not directly store personal data.
            </p>
            <p>
              However, if you believe that a child has used our app and you
              have concerns, please contact us. We will guide you on how to
              remove or limit data collection, including through device
              settings or third-party services.
            </p>

            <h2>Data Security</h2>
            <p>
              We take reasonable measures to protect your information.
              However, no method of transmission over the internet is 100%
              secure.
            </p>

            <h2>User Rights</h2>
            <p>
              Depending on your location, you may have certain privacy
              rights regarding data collected by third-party services used
              in the game, such as Google AdMob and Firebase.
            </p>
            <p>
              Since Call Break Master does not require user accounts or
              directly store personally identifiable information, we do not
              provide an in-app mechanism for requesting data deletion.
            </p>
            <p>
              Users may manage certain data and privacy preferences through
              their device settings, including resetting advertising
              identifiers or limiting ad personalization.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes
              will be posted on this page with an updated effective date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions or suggestions, contact us at:{" "}
              <a href="mailto:felixstudiogames@gmail.com">
                felixstudiogames@gmail.com
              </a>
            </p>
          </article>
          
        </div>
      </main>

      <footer className="pp-footer">
        <div className="pp-footer-inner">
          <Logo />
        </div>
      </footer>
    </div>
  );
}