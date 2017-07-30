const bbvaFciUrl = 'https://hb.bbv.com.ar/fnet/mod/inversiones/NL-FondosSC.jsp';
const webRequestPromise = require('./web-request-promise');
// const regex = /<td\sclass\=\'td1\'>.*?<span.*?>(?'code'.*?)</span>.*?<td\sclass\=\'td1\'>.*?<span.*?>(?'description'.*?)</span>.*?<td\sclass\=\'td2\'>.*?<span.*?>(?'currency'.*?)</span>.*?<td\sclass\=\'td3\'>.*?<span.*?>(?'price'.*?)</span>.*?<td\sclass\=\'td3\'>.*?<span.*?>(?'dailyVariation'.*?)</span>.*?<td\sclass\=\'td3\'>.*?<span.*?>(?'MonthDayVariation'.*?)</span>/g;

exports.crawler = () => {
    let result = [
        {
            'FBA RenDoA': {
                'descripcion': 'FBA RENTA FIJA DOLAR A',
                'currency': 'U$D',
                'price': 1030.140,
                'daily-variation': 0.02,
                '30-days-variation': 0.15
            }
        }
    ];

    return webRequestPromise.webRequest(bbvaFciUrl).then((html) => {
        // let regex = /<td\sclass=\'td1\'><span\sclass=\'conceptos\'>(?'code'.*?)<\/span>/g;
        
        console.log('=========crawler=========\n\n\n\n\n\n\n');
        let regexRows = /(<tr\sclass='tr2'.*?>.*?<\/tr>)/g;
        try {
            console.log('----------------------<html>----------------------------');
            console.log(html);
            console.log('----------------------</html>----------------------------');
            
            let rows = regexRows.exec(html);
            console.log('count', rows.length);
            console.log('----------------------<rows>----------------------------');
            console.log(JSON.stringify(rows));
            console.log('----------------------</rows>----------------------------');
            for(let i=0; i < rows.length; i++){
            console.log('----------------------<row>----------------------------');
                console.log(JSON.stringify(rows[i]));
            console.log('----------------------</row>----------------------------');
            }
        } catch (error) {
            console.error(error);
        }

        return html;
    });
};