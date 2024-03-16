import  express  from "express";

// this is needed to get the current directory
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// directory end
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000);