
/**
 * Task 1
 */
function leafFiles(files) {
    const leafs = [];
    for (const file of files) {
        if (!isFolder(file.categories)) leafs.push(file.name);
    }
    return leafs;
}

const isFolder = (categories) => {
    for (const category of categories) {
        if (category == "Folder") {
            return true;
        }
    }
    return false;
}

/**
 * Task 2
 */
function kLargestCategories(files, k) {
    const fileMap = new Map();
    for (const file of files) {
        for (const category of file.categories) {
            if (!fileMap.has(category)) {
                fileMap.set(category, 1);
            } else {
                const currentCount = fileMap.get(category);
                fileMap.set(category, currentCount + 1);
            }
        }
    }
    const sortedMap = new Map([...fileMap].sort((a,b) => {
        if (b[1] !== a[1]) {
            return b[1] - a[1];
        } else {
            return a[0].localeCompare(b[0]);
        }
    }))
    const largestCategories = [];
    var obtained = 0;
    for (const category of sortedMap.keys()) {
        if (obtained < k) {
            largestCategories.push(category);
            obtained++;
        }
    }
    largestCategories.sort();
    return largestCategories;
}


/**
 * Task 3
 */
function largestFileSize(files) {
    return 0;
}


function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

const testFiles = [
    { id: 1, name: "Document.txt", categories: ["Documents"], parent: 3, size: 1024 },
    { id: 2, name: "Image.jpg", categories: ["Media", "Photos"], parent: 34, size: 2048 },
    { id: 3, name: "Folder", categories: ["Folder"], parent: -1, size: 0 },
    { id: 5, name: "Spreadsheet.xlsx", categories: ["Documents", "Excel"], parent: 3, size: 4096 },
    { id: 8, name: "Backup.zip", categories: ["Backup"], parent: 233, size: 8192 },
    { id: 13, name: "Presentation.pptx", categories: ["Documents", "Presentation"], parent: 3, size: 3072 },
    { id: 21, name: "Video.mp4", categories: ["Media", "Videos"], parent: 34, size: 6144 },
    { id: 34, name: "Folder2", categories: ["Folder"], parent: 3, size: 0 },
    { id: 55, name: "Code.py", categories: ["Programming"], parent: -1, size: 1536 },
    { id: 89, name: "Audio.mp3", categories: ["Media", "Audio"], parent: 34, size: 2560 },
    { id: 144, name: "Spreadsheet2.xlsx", categories: ["Documents", "Excel"], parent: 3, size: 2048 },
    { id: 233, name: "Folder3", categories: ["Folder"], parent: -1, size: 4096 },
];

console.assert(arraysEqual(
    leafFiles(testFiles).sort((a, b) => a.localeCompare(b)),
    [
        "Audio.mp3",
        "Backup.zip",
        "Code.py",
        "Document.txt",
        "Image.jpg",
        "Presentation.pptx",
        "Spreadsheet.xlsx",
        "Spreadsheet2.xlsx",
        "Video.mp4"
    ]
));

console.assert(arraysEqual(
    kLargestCategories(testFiles, 3),
    ["Documents", "Folder", "Media"]
));

console.assert(largestFileSize(testFiles) == 20992)
