# Yoga

This repository contains the source code for https://yoga.minimalwebassets.com/, a template of a landing page for an imaginary yoga studio. It is designed using [JAMStack](https://jamstack.org) principles and uses the following frameworks and technologies as primary building blocks:

* [Netlify](https://netlify.com). Free global CDN, continuous deployment, and serverless functions.
* [Next.js](https://nextjs.org). Server-side rendering and static HTML with React.
* [Material UI](https://material-ui.com). React components using Material Design.
* [Nodemailer](https://nodemailer.com). SMTP email handling in node.js.

The website was designed using the following tools and resources:

* [Figma](https://figma.com). Browser-based website design prototyping.
* [Pixabay](https://pixabay.com). High-quality, royalty-free images.
* [unDraw](https://undraw.co). High-quality, royalty-free illustrations.
* [Material Design](https://material.io). An intuitive, modern design system by Google.

## Cost

For all of the services liste above, this website is currently operating under the free tier. So far, the only cost is with the domain name provider. The limitations of the free tier limitations of these services are listed below.

*Where applicable, limits are calculated on a monthly basis*

* **Netlify**
  * 100 GB CDN bandwidth
  * 300 build minutes
  * 125,000 serverless API requests
  * 100 serverless computation hours
* **Figma**
  * 3 projects
  * 30-day version history
  * Up to 2 editors
  
**1 Credit equals 1000 transformations or 1GB of managed storage or 1GB of monthly viewing bandwidth or 500 SD video processing seconds or 250 HD video processing seconds*

## API

This section documents the API endpoints present on the web page. These are served on-demand by [Netlify Functions](https://www.netlify.com/products/functions/).

### Submit contact form

Called on contact form submission. Sends an email to the site owner's inbox containing the subject, message, and sender email.

* Route: `/.netlify/functions/contact`
* Method: `POST`
* Content: `JSON`
* Request body: `{ email*, subject, message* }`
* Response on success: `{ accepted: [...], rejected: [...], [...], messageId: [...] }`
