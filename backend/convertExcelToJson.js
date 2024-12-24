import xlsx from 'xlsx';
import fs from 'fs';

const filePath = '../excelFile.xlsx';
const workbook = xlsx.readFile(filePath);

const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

let jsonData = xlsx.utils.sheet_to_json(sheet);

jsonData = jsonData.map((row) => {
    const lowerCaseRow = Object.fromEntries(
        Object.entries(row).map(([key, value]) => [key.toLowerCase(), value])
    );

    if (lowerCaseRow["price ($)"] !== undefined) {
        lowerCaseRow.price = `${lowerCaseRow["price ($)"]}`;
        delete lowerCaseRow["price ($)"];
    }

    lowerCaseRow.image = lowerCaseRow.name
        ? `images/${lowerCaseRow.name.replace(/\s+/g, '-').replace(/[^\w-]/g, '')}.jpeg`
        : undefined;

    // Add the "image" field and format the "price"
    return lowerCaseRow;
});

const outputPath = './data/clothing-items.json';
fs.writeFileSync(outputPath, JSON.stringify(jsonData, null, 4));

console.log(`Excel file successfully converted to JSON! Output saved at ${outputPath}`);
