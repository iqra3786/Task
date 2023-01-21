// In task they had only asked about raw queries and raw table so i had made only that 

app.post('/students', (req, res) => {
    const { student_name, student_email, student_address, student_dob, student_gender, student_phone } = req.body;
    const query = `INSERT INTO students (student_name, student_email, student_address, student_dob, student_gender, student_phone) VALUES ('${student_name}', '${student_email}', '${student_address}', '${student_dob}', '${student_gender}', '${student_phone}')`;
    sequelize.query(query)
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

app.get('/students', (req, res) => {
    const query = 'SELECT * FROM students';
    sequelize.query(query)
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

app.put('/students/:id', (req, res) => {
    const { student_name, student_email, student_address, student_dob, student_gender, student_phone } = req.body;
    const query = `UPDATE students SET student_name = '${student_name}', student_email = '${student_email}', student_address = '${student_address}', student_dob = '${student_dob}', student_gender = '${student_gender}', student_phone = '${student_phone}' WHERE student_id = ${req.params.id}`;
    sequelize.query(query)
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

app.delete('/students/:id', (req, res) => {
    const query = `DELETE FROM students WHERE student_id = ${req.params.id}`;
    sequelize.query(query)
})