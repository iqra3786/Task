// In task they had only asked about raw queries and raw table so i had made only that 

//........ERD .............//
Table1: Students

student_id (Primary_Key)
student_name
student_email
student_address
student_dob
student_gender
student_phone


Table2: Teachers
teacher_id (Primary_Key)
teacher_name
teacher_email
teacher_address
teacher_dob
teacher_gender
teacher_phone

Table3: Classes

class_id (Primary_Key)
class_name
class_room_number
class_capacity

Table4: Subjects
subject_id (Primary_Key)
subject_name

Table5: Enrollments
enrollment_id (Primary_Key)
student_id (Foreign_Key, referencing , Students)
class_id (Foreign_Key,referencing,Classes)
subject_id (Foreign_Key,referencing,Subjects)
teacher_id (Foreign_Key,referencing,Teachers)