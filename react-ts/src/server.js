import { HttpsProxyAgent } from 'https-proxy-agent';
import * as https from 'https';

const proxyUrl = "http://riehl-bln.ivbb.bund.de:8080";

const proxyAgent = new HttpsProxyAgent(proxyUrl);

const targetUrl = "https://jsonplaceholder.typicode.com/users";

async function testProxy() {
    https.get(
        targetUrl,
        { agent: proxyAgent, timeout: 2000 },
        (res) => {

            let data = [];
            res.setEncoding('utf8');
            res.on('data', chunk => {
                data.push(chunk);
            });
            res.on('end', () => {
                console.log(JSON.parse(data.join('')));
            });

        }
    ).on('error', (err) => console.error('Error:', err.message));
}

export async function run() {
    await testProxy();
}