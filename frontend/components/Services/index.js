import { ServicesStyles } from './styles';

export default function Services() {
  const emailLogo = (
    <svg
      data-v-21b89265=""
      aria-hidden="true"
      focusable="false"
      data-prefix="fal"
      data-icon="envelope"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="svg-inline--fa fa-envelope fa-w-16 fa-2x"
    >
      <path
        data-v-21b89265=""
        fill="currentColor"
        d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"
        className=""
      />
    </svg>
  );
  return (
    <ServicesStyles>
      <section className="header">
        <span className="imageConatiner">
          {' '}
          <svg
            data-v-c28df9e2=""
            data-v-5708f968=""
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            width="36"
            height="36"
            data-icon="concierge-bell"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -20 450 580"
            className="svg-inline--fa fa-concierge-bell fa-w-16"
          >
            <path
              data-v-c28df9e2=""
              data-v-5708f968=""
              fill="currentColor"
              d="M504 416h-24v-64c0-118.31-91.79-214.96-208-223.19V96h40c4.42 0 8-3.58 8-8V72c0-4.42-3.58-8-8-8H200c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h40v32.81C123.79 137.04 32 233.69 32 352v64H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h496c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm-56 0H64v-64c0-100.17 78.3-184.19 178.26-191.27 16.87-1.19 10.33-1.21 27.48 0C369.7 167.81 448 251.83 448 352v64z"
              className=""
            />
          </svg>
        </span>
        <p className="connectHeader">SERVICES</p>
      </section>
      <section className="servicesBody">
        <div className="servicesCard">
          <h4>Web Development</h4>
          <p>
            This is my main service. With 5+ years of experience I can help
            building or optimizing websites
          </p>
          <a
            href="mailto:mwilets@gmail.com?subject= Web Development Inquiry"
            className="btn"
          >
            {emailLogo}
            Web Development
          </a>
        </div>
        <div className="servicesCard">
          <h4>Marketing Services</h4>
          <p>
            I can audit and optimize SEO performance and create nad manage paid
            search campaigns
          </p>
          <a
            href="mailto:mwilets@gmail.com?subject= Marketing Inquiry"
            className="btn"
          >
            {emailLogo}
            Marketing
          </a>
        </div>
        <div className="servicesCard">
          <h4>Tutoring</h4>
          <p>
            With 3 years experience teaching and tutoring for web development I
            can tutor students or anyone curious about coding
          </p>
          <a
            href="mailto:mwilets@gmail.com?subject= Tutoring Inquiry"
            className="btn"
          >
            {emailLogo}
            Tutoring
          </a>
        </div>
      </section>
    </ServicesStyles>
  );
}
