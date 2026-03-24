export const imCategory = {
  id: 'im',
  label: 'Information Management',
  description: 'Database concepts, SQL queries, optimization, and transaction control.',
  accentColor: '#3fb9ff',
  accentRgb: '63,185,255',
  modules: [
    {
      id: 'im1',
      num: 'Module 1',
      shortTitle: 'Database Basics',
      title: 'Information Management · Database Basics',
      accentColor: '#3fb9ff',
      accentRgb: '63,185,255',
      terms: [
        { term: 'Database', def: 'An organized collection of related data.' },
        { term: 'DBMS', def: 'Software used to create, manage, and access databases.' },
        { term: 'Table', def: 'A structure that stores data in rows and columns.' },
        { term: 'Primary Key', def: 'A column or set of columns that uniquely identifies each row.' },
        { term: 'Foreign Key', def: 'A column that creates a relationship with another table.' },
        { term: 'Record', def: 'A single row in a table.' },
        { term: 'Field', def: 'A single column in a table.' },
        { term: 'Normalization', def: 'The process of organizing data to reduce redundancy.' },
      ],
      codeExamples: [
        {
          lang: 'SQL',
          desc: 'Create a database',
          code: `CREATE DATABASE SchoolDB;`,
        },
        {
          lang: 'SQL',
          desc: 'Use a database',
          code: `USE SchoolDB;`,
        },
        {
          lang: 'SQL',
          desc: 'Create Students table',
          code: `CREATE TABLE Students (
  StudentID INT PRIMARY KEY,
  FirstName VARCHAR(50),
  LastName VARCHAR(50),
  Age INT,
  DepartmentID INT
);`,
        },
        {
          lang: 'SQL',
          desc: 'Create Departments table',
          code: `CREATE TABLE Departments (
  DepartmentID INT PRIMARY KEY,
  DepartmentName VARCHAR(100)
);`,
        },
        {
          lang: 'SQL',
          desc: 'Insert sample data',
          code: `INSERT INTO Students (StudentID, FirstName, LastName, Age, DepartmentID)
VALUES
(1, 'Ana', 'Lopez', 20, 101),
(2, 'Mark', 'Santos', 21, 102),
(3, 'Lia', 'Reyes', 19, 101);`,
        },
      ],
      bestPractices: [
        'Use meaningful table and column names',
        'Always define primary keys',
        'Use foreign keys to maintain relationships',
        'Avoid duplicate data',
        'Normalize tables when needed',
      ],
    },

    {
      id: 'im2',
      num: 'Module 2',
      shortTitle: 'Basic Queries',
      title: 'Information Management · Basic SQL Queries',
      accentColor: '#5cc8ff',
      accentRgb: '92,200,255',
      terms: [
        { term: 'SELECT', def: 'Retrieves data from a table.' },
        { term: 'WHERE', def: 'Filters rows based on a condition.' },
        { term: 'ORDER BY', def: 'Sorts the result set.' },
        { term: 'GROUP BY', def: 'Groups rows that share the same values.' },
        { term: 'HAVING', def: 'Filters grouped data.' },
        { term: 'JOIN', def: 'Combines data from two or more related tables.' },
      ],
      codeExamples: [
        {
          lang: 'SQL',
          desc: 'Select all records',
          code: `SELECT * FROM Students;`,
        },
        {
          lang: 'SQL',
          desc: 'Select specific columns',
          code: `SELECT FirstName, LastName FROM Students;`,
        },
        {
          lang: 'SQL',
          desc: 'Use WHERE condition',
          code: `SELECT * FROM Students
WHERE Age > 20;`,
        },
        {
          lang: 'SQL',
          desc: 'Sort records',
          code: `SELECT * FROM Students
ORDER BY LastName ASC;`,
        },
        {
          lang: 'SQL',
          desc: 'LIKE operator',
          code: `SELECT * FROM Students
WHERE FirstName LIKE 'A%';`,
        },
        {
          lang: 'SQL',
          desc: 'BETWEEN operator',
          code: `SELECT * FROM Students
WHERE Age BETWEEN 18 AND 21;`,
        },
        {
          lang: 'SQL',
          desc: 'IN operator',
          code: `SELECT * FROM Students
WHERE DepartmentID IN (101, 102);`,
        },
        {
          lang: 'SQL',
          desc: 'INNER JOIN example',
          code: `SELECT Students.FirstName, Departments.DepartmentName
FROM Students
INNER JOIN Departments
ON Students.DepartmentID = Departments.DepartmentID;`,
        },
        {
          lang: 'SQL',
          desc: 'LEFT JOIN example',
          code: `SELECT Students.FirstName, Departments.DepartmentName
FROM Students
LEFT JOIN Departments
ON Students.DepartmentID = Departments.DepartmentID;`,
        },
        {
          lang: 'SQL',
          desc: 'Update data',
          code: `UPDATE Students
SET Age = 22
WHERE StudentID = 2;`,
        },
        {
          lang: 'SQL',
          desc: 'Delete data',
          code: `DELETE FROM Students
WHERE StudentID = 3;`,
        },
      ],
      bestPractices: [
        'Select only necessary columns',
        'Be careful when using UPDATE and DELETE',
        'Use WHERE to avoid changing all rows by mistake',
        'Format SQL neatly for readability',
        'Use proper joins based on the needed result',
      ],
    },

    {
      id: 'im3',
      num: 'Module 3',
      shortTitle: 'Functions & Grouping',
      title: 'Information Management · SQL Functions and Grouping',
      accentColor: '#7ad7ff',
      accentRgb: '122,215,255',
      terms: [
        { term: 'COUNT()', def: 'Counts the number of rows.' },
        { term: 'SUM()', def: 'Adds numeric values.' },
        { term: 'AVG()', def: 'Calculates the average value.' },
        { term: 'MIN()', def: 'Returns the smallest value.' },
        { term: 'MAX()', def: 'Returns the largest value.' },
        { term: 'GROUP BY', def: 'Groups rows before using aggregate functions.' },
      ],
      codeExamples: [
        {
          lang: 'SQL',
          desc: 'Count records',
          code: `SELECT COUNT(*) AS TotalStudents
FROM Students;`,
        },
        {
          lang: 'SQL',
          desc: 'Average age',
          code: `SELECT AVG(Age) AS AverageAge
FROM Students;`,
        },
        {
          lang: 'SQL',
          desc: 'Minimum and maximum age',
          code: `SELECT MIN(Age) AS Youngest, MAX(Age) AS Oldest
FROM Students;`,
        },
        {
          lang: 'SQL',
          desc: 'Sum ages',
          code: `SELECT SUM(Age) AS TotalAge
FROM Students;`,
        },
        {
          lang: 'SQL',
          desc: 'Group students by department',
          code: `SELECT DepartmentID, COUNT(*) AS TotalStudents
FROM Students
GROUP BY DepartmentID;`,
        },
        {
          lang: 'SQL',
          desc: 'Use HAVING with grouped data',
          code: `SELECT DepartmentID, COUNT(*) AS TotalStudents
FROM Students
GROUP BY DepartmentID
HAVING COUNT(*) > 1;`,
        },
      ],
      bestPractices: [
        'Use aliases for clearer output',
        'Use GROUP BY correctly with aggregate functions',
        'Use HAVING after GROUP BY',
        'Check grouped columns carefully',
        'Keep aggregate queries easy to read',
      ],
    },

    {
      id: 'im4',
      num: 'Module 4',
      shortTitle: 'Subqueries & Triggers',
      title: 'Information Management · Subqueries and Triggers',
      accentColor: '#90e1ff',
      accentRgb: '144,225,255',
      terms: [
        { term: 'Subquery', def: 'A query placed inside another query.' },
        { term: 'Non-Correlated Subquery', def: 'A subquery that runs independently from the outer query.' },
        { term: 'Correlated Subquery', def: 'A subquery that depends on the outer query row being processed.' },
        { term: 'Trigger', def: 'A stored action that automatically executes when an event occurs.' },
        { term: 'BEFORE Trigger', def: 'Runs before insert, update, or delete.' },
        { term: 'AFTER Trigger', def: 'Runs after insert, update, or delete.' },
      ],
      codeExamples: [
        {
          lang: 'SQL',
          desc: 'Non-correlated subquery',
          code: `SELECT FirstName, LastName
FROM Students
WHERE Age > (
  SELECT AVG(Age)
  FROM Students
);`,
        },
        {
          lang: 'SQL',
          desc: 'Correlated subquery',
          code: `SELECT s1.FirstName, s1.LastName, s1.DepartmentID, s1.Age
FROM Students s1
WHERE s1.Age > (
  SELECT AVG(s2.Age)
  FROM Students s2
  WHERE s2.DepartmentID = s1.DepartmentID
);`,
        },
        {
          lang: 'SQL',
          desc: 'Subquery with IN',
          code: `SELECT FirstName, LastName
FROM Students
WHERE DepartmentID IN (
  SELECT DepartmentID
  FROM Departments
  WHERE DepartmentName = 'IT'
);`,
        },
        {
          lang: 'SQL',
          desc: 'Create audit table',
          code: `CREATE TABLE StudentLogs (
  LogID INT AUTO_INCREMENT PRIMARY KEY,
  StudentID INT,
  ActionType VARCHAR(50)
);`,
        },
        {
          lang: 'SQL',
          desc: 'AFTER INSERT trigger',
          code: `CREATE TRIGGER after_student_insert
AFTER INSERT ON Students
FOR EACH ROW
INSERT INTO StudentLogs (StudentID, ActionType)
VALUES (NEW.StudentID, 'INSERT');`,
        },
        {
          lang: 'SQL',
          desc: 'AFTER DELETE trigger',
          code: `CREATE TRIGGER after_student_delete
AFTER DELETE ON Students
FOR EACH ROW
INSERT INTO StudentLogs (StudentID, ActionType)
VALUES (OLD.StudentID, 'DELETE');`,
        },
      ],
      bestPractices: [
        'Use non-correlated subqueries for independent conditions',
        'Use correlated subqueries only when needed',
        'Test subqueries separately first',
        'Keep trigger logic simple and clear',
        'Document what each trigger does',
      ],
    },

    {
      id: 'im5',
      num: 'Module 5',
      shortTitle: 'Transactions & Concurrency',
      title: 'Information Management · Transactions and Concurrency Control',
      accentColor: '#a8e7ff',
      accentRgb: '168,231,255',
      terms: [
        { term: 'Transaction', def: 'A sequence of operations treated as one logical unit of work.' },
        { term: 'COMMIT', def: 'Saves all changes made in a transaction permanently.' },
        { term: 'ROLLBACK', def: 'Undoes changes when a transaction fails or is cancelled.' },
        { term: 'ACID', def: 'Atomicity, Consistency, Isolation, and Durability.' },
        { term: 'Concurrency Control', def: 'Methods used to manage simultaneous transactions safely.' },
        { term: 'Lost Update', def: 'When one transaction overwrites another transaction’s update.' },
        { term: 'Dirty Read', def: 'Reading data that has not yet been committed.' },
        { term: 'Lock', def: 'A mechanism that restricts access to data during a transaction.' },
        { term: 'Shared Lock', def: 'Allows reading but prevents conflicting writes.' },
        { term: 'Exclusive Lock', def: 'Allows one transaction to write while blocking others.' },
      ],
      codeExamples: [
        {
          lang: 'SQL',
          desc: 'Basic transaction with COMMIT',
          code: `START TRANSACTION;

UPDATE Students
SET Age = 22
WHERE StudentID = 1;

COMMIT;`,
        },
        {
          lang: 'SQL',
          desc: 'Transaction with ROLLBACK',
          code: `START TRANSACTION;

UPDATE Students
SET Age = 25
WHERE StudentID = 2;

ROLLBACK;`,
        },
        {
          lang: 'SQL',
          desc: 'Transfer example using transaction',
          code: `START TRANSACTION;

UPDATE Accounts
SET Balance = Balance - 500
WHERE AccountID = 1;

UPDATE Accounts
SET Balance = Balance + 500
WHERE AccountID = 2;

COMMIT;`,
        },
        {
          lang: 'SQL',
          desc: 'Set isolation level example',
          code: `SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

START TRANSACTION;

SELECT * FROM Students;

COMMIT;`,
        },
        {
          lang: 'SQL',
          desc: 'Locking example concept',
          code: `SELECT *
FROM Students
WHERE StudentID = 1
FOR UPDATE;`,
        },
      ],
      bestPractices: [
        'Use transactions for related operations',
        'Commit only when all steps succeed',
        'Rollback when errors happen',
        'Choose proper isolation levels',
        'Use locking carefully to avoid conflicts',
      ],
    },

    {
      id: 'im6',
      num: 'Module 6',
      shortTitle: 'Query Optimization',
      title: 'Information Management · Query Tree and Relational Algebra Optimization',
      accentColor: '#c7f2ff',
      accentRgb: '199,242,255',
      terms: [
        { term: 'Relational Algebra', def: 'A formal query language that uses operations on relations.' },
        { term: 'Selection (σ)', def: 'Chooses rows that satisfy a condition.' },
        { term: 'Projection (π)', def: 'Chooses specific columns.' },
        { term: 'Join (⋈)', def: 'Combines related tuples from two relations.' },
        { term: 'Query Tree', def: 'A tree representation of relational algebra operations.' },
        { term: 'Query Optimization', def: 'The process of transforming a query into a more efficient form.' },
        { term: 'Heuristic Optimization', def: 'Using rules like pushing selections down to improve performance.' },
      ],
      codeExamples: [
        {
          lang: 'SQL',
          desc: 'Original SQL query',
          code: `SELECT S.FirstName, D.DepartmentName
FROM Students S
JOIN Departments D
  ON S.DepartmentID = D.DepartmentID
WHERE S.Age > 20
  AND D.DepartmentName = 'IT';`,
        },
        {
          lang: 'SQL',
          desc: 'Relational algebra form',
          code: `π FirstName, DepartmentName
(
  σ Age > 20 AND DepartmentName = 'IT'
  (
    Students ⋈ Students.DepartmentID = Departments.DepartmentID Departments
  )
)`,
        },
        {
          lang: 'SQL',
          desc: 'Initial query tree',
          code: `           π FirstName, DepartmentName
                      |
      σ Age > 20 AND DepartmentName = 'IT'
                      |
      ⋈ S.DepartmentID = D.DepartmentID
               /                    \\
         Students                Departments`,
        },
        {
          lang: 'SQL',
          desc: 'Optimized relational algebra',
          code: `π FirstName, DepartmentName
(
  (σ Age > 20 (Students))
  ⋈ Students.DepartmentID = Departments.DepartmentID
  (σ DepartmentName = 'IT' (Departments))
)`,
        },
        {
          lang: 'SQL',
          desc: 'Optimized query tree',
          code: `           π FirstName, DepartmentName
                      |
      ⋈ S.DepartmentID = D.DepartmentID
             /                      \\
     σ Age > 20                σ DepartmentName = 'IT'
          |                             |
       Students                    Departments`,
        },
        {
          lang: 'SQL',
          desc: 'Optimization explanation',
          code: `Step 1: Convert SQL query into relational algebra.
Step 2: Build the initial query tree.
Step 3: Push selection operations down near the base tables.
Step 4: Reduce rows before join.
Step 5: Perform join on smaller intermediate relations.
Step 6: Apply projection to return only needed columns.`,
        },
        {
          lang: 'SQL',
          desc: 'Another projection pushdown idea',
          code: `π FirstName, DepartmentID
(
  σ Age > 20 (Students)
)

π DepartmentID, DepartmentName
(
  σ DepartmentName = 'IT' (Departments)
)`,
        },
      ],
      bestPractices: [
        'Push selections down as early as possible',
        'Project only needed columns',
        'Reduce intermediate results before joins',
        'Use relational algebra to understand optimization steps',
        'Draw the initial and optimized query tree for analysis',
      ],
    },
  ],
}