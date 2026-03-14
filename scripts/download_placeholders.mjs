import fs from "fs";
import path from "path";

const dir = "d:/ZEBRAFILM/MyProject/web/front/ProSperi/public/images/process";

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

async function main() {
    console.log("Starting download of 10 placeholder images...");
    for (let i = 1; i <= 10; i++) {
        const url = `https://picsum.photos/seed/prosperiprocess${i}/1200/800`;
        const filepath = path.join(dir, `placeholder-${i}.jpg`);
        console.log(`Downloading ${filepath}...`);
        
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const buffer = await response.arrayBuffer();
            fs.writeFileSync(filepath, Buffer.from(buffer));
            console.log(`Successfully saved placeholder-${i}.jpg`);
        } catch (error) {
            console.error(`Failed to download image ${i}:`, error);
        }
    }
    console.log("Done downloading all 10 images.");
}

main().catch(console.error);
