const puppeteer = require('puppeteer-core');
const path = require('path');

async function generatePDF() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  const filePath = path.join(__dirname, 'profile-template.html');
  const fileUrl = `file://${filePath}`;
  
  console.log(`Loading HTML template from: ${fileUrl}`);
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });
  await new Promise(resolve => setTimeout(resolve, 3000));

  const pdfPath = path.join(__dirname, 'public', 'Ellen_Spear_Group_Business_Profile.pdf');
  console.log(`Generating PDF to: ${pdfPath}`);
  
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: `
      <style>
        .header-container {
          -webkit-print-color-adjust: exact;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 40px;
          background: linear-gradient(135deg, #b8933a 0%, #b8933a 10%, #0d0d0e 10%, #0d0d0e 90%, #b8933a 90%, #b8933a 100%);
          font-family: 'Oswald', sans-serif;
          font-size: 9px;
          color: white;
        }
      </style>
      <div class="header-container">
        <span style="letter-spacing: 3px; text-transform: uppercase; font-weight: 500;">Ellen Spear Group Limited</span>
        <span style="letter-spacing: 2px; text-transform: uppercase; color: #ccc;">Corporate Profile 2026</span>
      </div>
    `,
    footerTemplate: `
      <style>
        .footer-container {
          -webkit-print-color-adjust: exact;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 40px;
          background: linear-gradient(135deg, #b8933a 0%, #b8933a 10%, #0d0d0e 10%, #0d0d0e 90%, #b8933a 90%, #b8933a 100%);
          font-family: 'Oswald', sans-serif;
          font-size: 9px;
          color: white;
        }
      </style>
      <div class="footer-container">
        <span style="letter-spacing: 2px; text-transform: uppercase;">Absolute Security. Operational Excellence.</span>
        <span style="font-weight: bold;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
      </div>
    `,
    margin: { top: '70px', right: '0', bottom: '70px', left: '0' }
  });

  console.log('PDF Generation Complete!');
  await browser.close();
}

generatePDF().catch(console.error);
