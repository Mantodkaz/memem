function silit(silit) {return require(silit);}
const muter = silit('pup\x70\x65\x74\x65\x65\x72');
const eses = silit('\x74\x65\x73\x73\x65\x72\x61\x63\x74\x2ejs');
const hm = silit('\x66s');
const query = hm.readFileSync('data\x2e\x74\x78\x74', '\x75\x74\x668');
const dat = JSON.parse(query);
(async () => {
    const go = await muter.launch({
        headless: true,
        args: ['--\x6e\x6f-sa\x6e\x64\x62\x6fx', '--\x64\x69\x73\x61\x62\x6c\x65\x2d\x73\x65\x74ui\x64\x2d\x73\x61\x6e\x64\x62\x6f\x78', '--en\x61\x62\x6c\x65\x2d\x75\x6e\x73\x61\x66\x65\x2d\x73wif\x74\x73\x68\x61\x64\x65r'],
    });
    const kaz = await go.newPage();
    await kaz.setExtraHTTPHeaders({
        'User-Agent': 'Moz'+'il'+'la/'+'5.0 (Win'+'dows N'+'T 10.'+'0; Win'+'64; x'+'64) Apple'+'Web'+'Kit'+'/537'+'.36 (KH'+'TML, like Ge'+'cko) Chr'+'ome/1'+'31'+'.0.0.0 Safari/537.36 '+'Edg'+'/131.0'+'.0.0',
        'Origin': 'ht'+'tp'+'s:/'+'/m'+'em'+'ha'+'sh'+'-f'+'r'+'o'+'nt'+'en'+'d'+'.'+'f'+'l'+'y'+'.d'+'ev',
        'Referer': 'ht'+'tp'+'s:'+'//'+'m'+'e'+'m'+'has'+'h-'+'fr'+'on'+'te'+'nd.f'+'ly'+'.d'+'e'+'v',
        'Sec-Fetch-Dest': 'emp'+'ty',
        'Sec-Fetch-Mode': 'cor'+'s',
        'Sec-Fetch-Site': 'cro'+'ss-'+'sit'+'e',
    });
    let retri = 0;
    const meks = 5;
    kaz.on('\x63\x6f\x6eso\x6c\x65', async (msg) => {
        const text = msg.text();
        const igls = ['[\x54\x65\x6c\x65\x67\x72\x61\x6d\x2e\x57\x65\x62\x56\x69\x65\x77]','[\x54\x65\x6c\x65\x67\x72\x61\x6d\x2e\x57\x65\x62\x41\x70\x70]','h\x61\x73\x68\x63\x61\x73h\x2e\x67\x65\x74','\x46\x61\x69\x6c\x65\x64\x20to','Refu\x73\x65\x64\x20\x74\x6f\x20\x73\x65\x74\x20\x75\x6e\x73\x61\x66\x65\x20\x68\x65\x61der','\x43\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x66\x69\x6e\x64\x20\x61 set','Err\x6f\x72'];
        if (igls.some(log => text.includes(log))) {
            return; 
        }
        console.log(`=> ${text}`);
        if (text.includes("\x68\x61\x73\x20\x62\x65\x65\x6e\x20\x62\x6c\x6f\x63\x6b\x65\x64\x20\x62\x79\x20\x43\x4f\x52\x53\x20\x70\x6f\x6c\x69\x63\x79")) {
            if (retri < meks) {
                retri++;
                console.log("\x77\x61\x69\x74\x69\x6e\x67.\x2e.");
                await new Promise((resolve) => setTimeout(resolve, 5000));
                await kaz.reload({ waitUntil: '\x64\x6f\x6d\x63\x6f\x6e\x74\x65\x6e\x74\x6c\x6f\x61\x64\x65\x64' });
            } else {
                console.error("\x52\x65\x6c\x6f\x61\x64\x20\x6c\x69\x6d\x69\x74\x20reach\x65\x64\x2e\x20\x53\x74\x6f\x70\x70\x69\x6e\x67\x20\x65\x78\x65\x63\x75\x74ion.");
                await go.close();
                process.exit(1);
            }
        }
        if (text.includes("\x57\x61\x6b\x65\x6c\x6f\x63\x6b\x20\x65\x6eable\x64\x20\x73\x75\x63\x63\x65\x73\x73\x66\x75\x6c\x6c\x79")) {
            console.log("\x53\x74\x61rt M\x69\x6e\x69ng\x2e\x2e\x2e");
        }
    });
    await kaz.goto('\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6d\x65\x6dhash\x2d\x66\x72\x6f\x6e\x74\x65\x6e\x64\x2efly\x2e\x64\x65\x76\x2f', { waitUntil: '\x64\x6f\x6d\x63\x6f\x6e\x74\x65\x6e\x74loaded' });
    await kaz.evaluate((dat) => {
        sessionStorage.setItem('\x5f\x5f\x74\x65\x6c\x65\x67\x72\x61\x6d\x5f\x5fdefaultColors', JSON.stringify({
            "bg\x5f\x63\x6f\x6c\x6f\x72": "\x23\x30\x300000",
            "bg_dark\x5f\x63\x6f\x6c\x6f\x72": "\x23000\x30\x300",
            "header\x5f\x63\x6f\x6c\x6f\x72": "\x230000\x30\x30",
            "\x68\x65\x61\x64\x65\x72\x5fdark\x5f\x63\x6f\x6c\x6f\x72": "\x2300\x30\x3000"
        }));
        sessionStorage.setItem('\x5f\x5f\x74\x65\x6c\x65\x67\x72\x61\x6d\x5f\x5fthemeParams', JSON.stringify({
            "accent_t\x65\x78t\x5f\x63\x6f\x6c\x6f\x72": "\x236ab2f2",
            "bg\x5f\x63\x6f\x6c\x6f\x72": "\x2317212b",
            "bottom_bar_bg\x5f\x63\x6f\x6c\x6f\x72": "\x2317212b",
            "button\x5f\x63\x6f\x6c\x6f\x72": "\x235288c1",
            "button_t\x65\x78t\x5f\x63\x6f\x6c\x6f\x72": "\x23ffffff",
            "destructive_t\x65\x78t\x5f\x63\x6f\x6c\x6f\x72": "\x23ec3942",
            "\x68\x65\x61\x64\x65\x72\x5fbg\x5f\x63\x6f\x6c\x6f\x72": "\x2317212b",
            "hint\x5f\x63\x6f\x6c\x6f\x72": "\x23708499",
            "link\x5f\x63\x6f\x6c\x6f\x72": "\x236ab3f3",
            "secondary_bg\x5f\x63\x6f\x6c\x6f\x72": "\x23232e3c",
            "sec\x74\x69\x6f\x6e\x5fbg\x5f\x63\x6f\x6c\x6f\x72": "\x2317212b",
            "sec\x74\x69\x6f\x6e\x5f\x68\x65\x61\x64\x65\x72\x5ft\x65\x78t\x5f\x63\x6f\x6c\x6f\x72": "\x236ab3f3",
            "sec\x74\x69\x6f\x6e\x5fseparator\x5f\x63\x6f\x6c\x6f\x72": "\x23111921",
            "subtitle_t\x65\x78t\x5f\x63\x6f\x6c\x6f\x72": "\x23708499",
            "t\x65\x78t\x5f\x63\x6f\x6c\x6f\x72": "\x23f5f5f5"
        }));sessionStorage.setItem('\x5f\x5f\x74\x65\x6c\x65\x67\x72\x61\x6d\x5f\x5finit\x50\x61\x72\x61\x6d\x73', JSON.stringify(dat));
    }, dat);
    await kaz.reload({ waitUntil: '\x6e\x65\x74wo\x72k\x69\x64\x6c\x65\x32' });
    console.log("\n\x20\x5b\x20\x4b\x61\x7a\x20\x7c\x20\x4d\x65\x6d\x68\x61\x73\x68\x20\x52\x75\x6e\x6e\x65\x72\x20\x5d\n");
    await new Promise((resolve) => setTimeout(resolve, 6942));
    function hesh(x1, x2, x3) {
    const wan = x1 / x2;const tu = wan - x3;return tu;}
    const x1=1000;const d2=2.1;const mm=2.5;const mmm=1.75;const k=200;const yy=7;const sub=1500;const tor=600;
    const x3=3;const bv=7890;const x2=2.5;const d1=3.0;const ex=bv/d1;const ze=ex/d2;const ez=ze*mm;
    const bef=ez- k;const eb=Math.round(bef *mmm);const ep=eb- sub;const wfb=Math.round(ep/ d2);
    const iu=wfb -tor;const ek=hesh(x1, x2, x3);const cen=Math.round(iu / mm);const ex0=Math.round(cen-yy);
    const ex1=Math.round(ex0-49);const mem=ex1;await kaz.mouse.click(mem,ek);
    console.log("\x4d\x69\x6e\x65\x72\x20\x52\x75\x6e\x6e\x69\x6e\x67\x2e\x2e\x2e");
    const ceess = async () => {
    const ssstatusss = '\x73\x74\x61\x74\x75\x73' + '\x2e\x70\x6e\x67';
    try {
        await kaz.screenshot({ path: ssstatusss, fullPage: true });
        const { data } = await eses.recognize(ssstatusss, 'eng');
        const lines = data.text.split('\n').map(line => line.trim());
        const maps = { Balance:null,Energy:null,Block:null,Difficulty:null,Reward:null,Shares:null,Hashes:null,Earned:null };
        const seenLines = new Set();
        lines.forEach((line) => {
            for (const wut of Object.keys(maps)) {
                if (line.includes(wut) && !maps[wut] && !seenLines.has(line)) {
                    maps[wut] = line;
                    seenLines.add(line);
                }
            }
        });
        const output = Object.entries(maps)
            .filter(([key, value]) => value !== null)
            .map(([_, value]) => value)
            .join('\n');
        console.log(output);
    } catch (error) {
        console.error(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x73\x74\x61\x74\x75\x73\x3a`);
    } finally {
        hm.unlink(ssstatusss, () => {
        });
    }
};
    setInterval(async () => {
        console.log("\n\x5b\x2d\x20\x49\x6e\x66\x6f\x72m\x61\x74\x69\x6f\x6e\x20\x2d\x5d");
        await ceess();
    }, 60000);
    console.log("\x6c\x6f\x6f\x6b\x69\x6e\x67\x20fo\x72\x20\x61\x20\x76\x61\x6cid\x20\x68\x61\x73\x68\x2e\x2e.");
})();
