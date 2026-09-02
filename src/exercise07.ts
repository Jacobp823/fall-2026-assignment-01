import fs from 'fs';

export type Gradebook = {
  [studentName: string]: {
    [subject: string]: number;
  };
};

export function calculateSubjectAverage(subject: string): number {
  const data = fs.readFileSync('data/gradebook.json', 'utf8');

  const gradebook: Gradebook = JSON.parse(data);

  const grades = Object.values(gradebook).filter(student => student[subject] !== undefined).map(student => student[subject]);

  if (grades.length === 0) {
    return 0;
  }

  return grades.reduce((total, grade) => total + grade, 0) / grades.length;
}
