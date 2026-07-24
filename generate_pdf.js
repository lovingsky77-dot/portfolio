import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePDF() {
  console.log('🚀 Starting Enriched High-Density PDF Generation...');
  
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });
  
  const htmlPath = path.join(__dirname, 'generate_pdf.html');
  const targetUrl = `file:///${htmlPath.replace(/\\/g, '/')}`;
  
  console.log(`📄 Loading HTML from: ${targetUrl}`);
  await page.goto(targetUrl, { waitUntil: 'networkidle0' });

  const pdfPath = path.join(__dirname, '김민우_AI업무혁신_포트폴리오.pdf');
  const pdfEnglishPath = path.join(__dirname, 'portfolio_minwoo_kim_ai_hrd.pdf');

  console.log(`🖨️ Printing High-Density PDF to: ${pdfPath}`);
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0mm',
      right: '0mm',
      bottom: '0mm',
      left: '0mm'
    },
    preferCSSPageSize: true
  });

  await page.pdf({
    path: pdfEnglishPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0mm',
      right: '0mm',
      bottom: '0mm',
      left: '0mm'
    },
    preferCSSPageSize: true
  });

  await browser.close();
  console.log('✅ Enriched High-Density PDF Generation Completed Successfully!');
}

generatePDF().catch(err => {
  console.error('❌ Error generating PDF:', err);
  process.exit(1);
});
