"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = exports.categories = exports.dataPath = void 0;
exports.save = save;
const fs_1 = require("fs");
const path_1 = require("path");
class FileNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "FileNotFoundError";
    }
}
class JSONParseError extends Error {
    constructor(message, originalError) {
        super(message);
        this.originalError = originalError;
        this.name = "JSONParseError";
    }
}
class InvalidDataStructureError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidDataStructureError";
    }
}
exports.dataPath = (0, path_1.join)(__dirname, '../');
exports.categories = ['colleagues', 'friends', 'family'];
let records = [];
exports.categories.forEach(category => {
    const filePath = (0, path_1.join)(exports.dataPath, `${category}.json`);
    if ((0, fs_1.existsSync)(filePath)) {
        try {
            const rawData = (0, fs_1.readFileSync)(filePath, 'utf-8');
            try {
                const categoryRecords = JSON.parse(rawData);
                if (!Array.isArray(categoryRecords)) {
                    throw new InvalidDataStructureError(`Data in ${category}.json is not an array.`);
                }
                records = records.concat(categoryRecords);
            }
            catch (e) {
                throw new JSONParseError(`Failed to parse JSON data in ${category}.json.`, e);
            }
        }
        catch (e) {
            if (e.code === 'ENOENT') {
                throw new FileNotFoundError(`File not found: ${filePath}`);
            }
            throw new Error(`Error reading file ${filePath}: ${e.message}`);
        }
    }
});
exports.data = records;
function save() {
    exports.categories.forEach(category => {
        const filePath = (0, path_1.join)(exports.dataPath, `${category}.json`);
        const categoryRecords = exports.data.filter(record => record.category === category);
        try {
            (0, fs_1.writeFileSync)(filePath, JSON.stringify(categoryRecords, null, 2), 'utf-8');
        }
        catch (e) {
            throw new Error(`Error writing to ${category}.json: ${e.message}`);
        }
    });
}
