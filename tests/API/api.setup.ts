import { test as setup, expect} from '@fixtures/pages.fixture'
import fs from 'fs'
import path from 'path'

setup.describe('Setting up API files', async () => {
    setup("Initialise storage", async () => {
    // Define a relative file path (relative to project root)
    const relativeDir = path.join(__dirname, '../../.temp');
    const fileName = 'gpPracticesFile.json';
    const filePath = path.join(relativeDir, fileName);

    // Ensure the directory exists
    if (!fs.existsSync(relativeDir)) {
        fs.mkdirSync(relativeDir, { recursive: true });
    }

    // Write file synchronously
    fs.writeFileSync(filePath, JSON.stringify('initiating file storage'), 'utf8');

    console.log(`File created at: ${filePath}`);
    })
})