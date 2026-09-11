const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'lessons.ts');
const fileContent = fs.readFileSync(filePath, 'utf8');

const lines = fileContent.split('\n');
let isInA22 = false;
let currentLessonTitle = null;
let updatedCount = 0;

const updatedLines = lines.map((line) => {
  // Check level declaration
  const levelMatch = line.match(/level:\s*'(A\d\.\d)'/);
  if (levelMatch) {
    const level = levelMatch[1];
    if (level === 'A2.2') {
      isInA22 = true;
    } else {
      isInA22 = false;
    }
  }

  if (isInA22) {
    // Look for title: '2.x'
    const titleMatch = line.match(/title:\s*'([2]\.\d+)'/);
    if (titleMatch) {
      currentLessonTitle = titleMatch[1];
    }

    // Look for audioSrc: ''
    if (line.includes("audioSrc: ''") || line.includes('audioSrc: ""')) {
      if (currentLessonTitle) {
        // Name format is: a2.2_2.x.mp3
        const newLine = line.replace(/audioSrc:\s*['"].*?['"]/, `audioSrc: '/a2.2_${currentLessonTitle}.mp3'`);
        updatedCount++;
        currentLessonTitle = null; // reset to avoid reusing
        return newLine;
      }
    }
  }

  return line;
});

if (updatedCount > 0) {
  fs.writeFileSync(filePath, updatedLines.join('\n'), 'utf8');
  console.log(`Successfully updated ${updatedCount} audio paths for A2.2 in lessons.ts!`);
} else {
  console.log('No audio paths were updated. Check the file format.');
}
