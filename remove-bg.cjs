const { Jimp, intToRGBA, rgbaToInt } = require("jimp");
async function main() {
    try {
        const image = await Jimp.read("src/assets/images/esp_control_unit_1785695760250.jpg");
        const w = image.bitmap.width;
        const h = image.bitmap.height;
        // Simple flood fill or threshold
        for (let x = 0; x < w; x++) {
            for (let y = 0; y < h; y++) {
                const hex = image.getPixelColor(x, y);
                // Jimp v1 API might be different, let's just do manual buffer manipulation
                const idx = (w * y + x) << 2;
                const r = image.bitmap.data[idx + 0];
                const g = image.bitmap.data[idx + 1];
                const b = image.bitmap.data[idx + 2];
                if (r > 240 && g > 240 && b > 240) {
                    image.bitmap.data[idx + 3] = 0; // alpha to 0
                }
            }
        }
        await image.write("src/assets/images/esp_control_unit_transparent.png");
        console.log("Done");
    } catch (e) {
        console.error(e);
    }
}
main();
