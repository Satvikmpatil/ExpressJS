# Express.js Assignment 2

## How to Run

1. Open terminal in Assignment2 folder
2. Run any file: `node 1-GET/1-students-list.js`
3. Open browser or use Postman to test

## Folder Structure

```
Assignment2/
├── 1-GET/          (5 files - Read data)
├── 2-POST/         (5 files - Create data)
├── 3-PUT/          (5 files - Update data)
├── 4-DELETE/       (5 files - Delete data)
└── 5-Middleware/   (5 files - Middleware examples)
```

## Testing APIs

### GET requests
- Just open URL in browser

### POST/PUT/DELETE requests
- Use Postman or Thunder Client (VS Code extension)
- Or use curl in terminal:

```bash
# POST example
curl -X POST http://localhost:3000/student \
  -H "Content-Type: application/json" \
  -d '{"name":"Rahul","age":20}'

# PUT example
curl -X PUT http://localhost:3000/student/1 \
  -H "Content-Type: application/json" \
  -d '{"marks":95}'

# DELETE example
curl -X DELETE http://localhost:3000/student/1
```

## Quick Reference

| Method | Purpose | Example |
|--------|---------|---------|
| GET    | Read data | Get all students |
| POST   | Create data | Add new student |
| PUT    | Update data | Update marks |
| DELETE | Remove data | Delete student |
