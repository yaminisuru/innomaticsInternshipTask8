// src/context/StudentContext.js
import React, { createContext, useState } from 'react';

const initialStudents = [
    {
        "id":1,
        "name":"John Doe",
        "email":"john@example.com",
        "age":16,
        "class":"10th Grade",
        "address":"1234 Elm St, Springfield",
        "phone":"123-456-7890"
    },
    {
        "id":2,
        "name":"Jane Smith",
        "email":"jane@example.com",
        "age":17,
        "class":"11th Grade",
        "address":"5678 Oak St, Springfield",
        "phone":"987-654-3210"
    },
    {
        "id":3,
        "name":"Michael Johnson",
        "email":"michael@example.com",
        "age":18,
        "class":"12th Grade",
        "address":"9102 Maple St, Riverside",
        "phone":"345-678-9012"
    },
    {
        "id":4,
        "name":"Emily Davis",
        "email":"emily@example.com",
        "age":16,
        "class":"10th Grade",
        "address":"2345 Pine St, Greendale",
        "phone":"456-789-0123"
    },
    {
        "id":5,
        "name":"Daniel Harris",
        "email":"daniel@example.com",
        "age":17,
        "class":"11th Grade",
        "address":"6789 Birch St, Fairview",
        "phone":"234-567-8901"
    },
    {
        "id":6,
        "name":"Emma Wilson",
        "email":"emma@example.com",
        "age":16,
        "class":"10th Grade",
        "address":"3456 Willow St, Lakeside",
        "phone":"678-901-2345"
    },
    {
        "id":7,
        "name":"Sophia Moore",
        "email":"sophia@example.com",
        "age":18,
        "class":"12th Grade",
        "address":"7890 Cedar St, Oakwood",
        "phone":"890-123-4567"
    },
    {
        "id":8,
        "name":"Ethan Brown",
        "email":"ethan@example.com",
        "age":17,
        "class":"11th Grade",
        "address":"4567 Poplar St, Mapleton",
        "phone":"321-654-9870"
    },
    {
        "id":9,
        "name":"Mia Taylor",
        "email":"mia@example.com",
        "age":18,
        "class":"12th Grade",
        "address":"1012 Ash St, Brookfield",
        "phone":"654-789-1234"
    },
    {
        "id":10,
        "name":"Oliver Anderson",
        "email":"oliver@example.com",
        "age":16,
        "class":"10th Grade",
        "address":"8765 Spruce St, Rivertown",
        "phone":"987-321-6547"
    },
    {
        "id":11,
        "name":"Ava Thomas",
        "email":"ava@example.com",
        "age":17,
        "class":"11th Grade",
        "address":"2341 Cherry St, Cliffton",
        "phone":"654-321-7890"
    },
    {
        "id":12,
        "name":"Lucas Martinez",
        "email":"lucas@example.com",
        "age":18,
        "class":"12th Grade",
        "address":"7896 Pear St, Bridgeview",
        "phone":"321-987-6543"
    },
    {
        "id":13,
        "name":"Lily Thompson",
        "email":"lily@example.com",
        "age":16,
        "class":"10th Grade",
        "address":"1239 Fir St, Mountainview",
        "phone":"567-234-8901"
    },
    {
        "id":14,
        "name":"James White",
        "email":"james@example.com",
        "age":17,
        "class":"11th Grade",
        "address":"5643 Juniper St, Riverbend",
        "phone":"789-345-0123"
    },
    {
        "id":15,
        "name":"Grace Hall",
        "email":"grace@example.com",
        "age":18,
        "class":"12th Grade",
        "address":"7654 Magnolia St, Sunset Hills",
        "phone":"234-123-9876"
    },
    {
        "id":16,
        "name":"Benjamin Lee",
        "email":"benjamin@example.com",
        "age":17,
        "class":"11th Grade",
        "address":"5432 Hickory St, Elmwood",
        "phone":"123-456-2345"
    },
    {
        "id":17,
        "name":"Zoe Lewis",
        "email":"zoe@example.com",
        "age":16,
        "class":"10th Grade",
        "address":"2346 Linden St, Cedarwood",
        "phone":"678-432-1098"
    },
    {
        "id":18,
        "name":"Jack Walker",
        "email":"jack@example.com",
        "age":18,
        "class":"12th Grade",
        "address":"8764 Alder St, Westlake",
        "phone":"345-678-9870"
    },
    {
        "id":19,
        "name":"Amelia Robinson",
        "email":"amelia@example.com",
        "age":16,
        "class":"10th Grade",
        "address":"2347 Beech St, Hillside",
        "phone":"901-234-6789"
    },
    {
        "id":20,
        "name":"Logan Scott",
        "email":"logan@example.com",
        "age":17,
        "class":"11th Grade",
        "address":"9843 Sycamore St, Pineville",
        "phone":"789-012-3456"
    },
    {
        "id":21,
        "name":"Chloe King",
        "email":"chloe@example.com",
        "age":18,
        "class":"12th Grade",
        "address":"1122 Elmwood Dr, Clearwater",
        "phone":"567-890-1234"
    },
    {
        "id":22,
        "name":"Henry Young",
        "email":"henry@example.com",
        "age":16,
        "class":"10th Grade",
        "address":"3421 Redwood St, Hillcrest",
        "phone":"345-678-0123"
    },
    {
        "id":23,
        "name":"Lillian Wright",
        "email":"lillian@example.com",
        "age":17,
        "class":"11th Grade",
        "address":"6543 Birchwood Ln, Eastwood",
        "phone":"789-123-6547"
    },
    {
        "id":24,
        "name":"Noah Allen",
        "email":"noah@example.com",
        "age":18,
        "class":"12th Grade",
        "address":"2348 Evergreen St, Northfield",
        "phone":"901-876-5432"
    },
    {
        "id":25,
        "name":"Scarlett Green",
        "email":"scarlett@example.com",
        "age":16,
        "class":"10th Grade",
        "address":"5439 Oakridge Ln, Lakeview",
        "phone":"678-901-3456"
    },
    {
        "id":26,
        "name":"Mason Baker",
        "email":"mason@example.com",
        "age":17,
        "class":"11th Grade",
        "address":"9871 Holly St, Meadowbrook",
        "phone":"890-765-4321"
    },
    {
        "id":27,
        "name":"Ella Hill",
        "email":"ella@example.com",
        "age":16,
        "class":"10th Grade",
        "address":"8769 Pinecrest St, Brighton",
        "phone":"234-678-9876"
    },
    {
        "id":28,
        "name":"Alexander Adams",
        "email":"alexander@example.com",
        "age":18,
        "class":"12th Grade",
        "address":"1235 Cypress St, Kingsport",
        "phone":"543-210-9876"
    },
    {
        "id":29,
        "name":"Harper Nelson",
        "email":"harper@example.com",
        "age":17,
        "class":"11th Grade",
        "address":"3210 Poplar Grove, Crestwood",
        "phone":"890-234-5678"
    },
    {
        "id":30,
        "name":"Owen Carter",
        "email":"owen@example.com",
        "age":18,
        "class":"12th Grade",
        "address":"5467 Ashwood St, Maple Grove",
        "phone":"234-876-5432"
    },
    {
        "id":31,
        "name":"Abigail Clark",
        "email":"abigail@example.com",
        "age":16,
        "class":"10th Grade",
        "address":"6781 Bay St, Clearwater",
        "phone":"678-234-7654"
    },
    {
        "id":32,
        "name":"Elijah Turner",
        "email":"elijah@example.com",
        "age":17,
        "class":"11th Grade",
        "address":"6542 Willow Dr, Canyonville",
        "phone":"567-890-2345"
    },
    {
        "id":33,
        "name":"Samantha Rivera",
        "email":"samantha@example.com",
        "age":18,
        "class":"12th Grade",
        "address":"1236 Sprucewood St, Riverton",
        "phone":"789-345-6789"
    },
    {
        "id":34,
        "name":"David Mitchell",
        "email":"david@example.com",
        "age":16,
        "class":"10th Grade",
        "address":"5431 Cedar Crest, Stoneville",
        "phone":"890-123-0987"
    },
    {
        "id":35,
        "name":"Victoria Perez",
        "email":"victoria@example.com",
        "age":17,
        "class":"11th Grade",
        "address":"4320 Alder Ct, Bluffside",
        "phone":"321-765-8901"
    },
    {
        "id":36,
        "name":"Isaac Flores",
        "email":"isaac@example.com",
        "age":18,
        "class":"12th Grade",
        "address":"3429 Elmwood Grove, Greenside",
        "phone":"234-654-1234"
    },
    {
        "id":37,
        "name":"Charlotte Diaz",
        "email":"charlotte@example.com",
        "age":16,
        "class":"10th Grade",
        "address":"6783 Fir Tree Ln, Cedar Hill",
        "phone":"123-765-8901"
    },
    {
        "id":38,
        "name":"Sebastian Cooper",
        "email":"sebastian@example.com",
        "age":17,
        "class":"11th Grade",
        "address":"9873 Pinehurst St, Baytown",
        "phone":"987-654-3210"
    },
    {
        "id":39,
        "name":"Hannah Bennett",
        "email":"hannah@example.com",
        "age":18,
        "class":"12th Grade",
        "address":"5434 Maplewood St, Clearbrook",
        "phone":"890-234-3210"
    },
    {
        "id":40,
        "name":"Matthew Ramirez",
        "email":"matthew@example.com",
        "age":16,
        "class":"10th Grade",
        "address":"1243 Hickory Grove, Mountainridge",
        "phone":"234-765-0123"
    },
    {
        "id":41,
        "name":"Isabella Barnes",
        "email":"isabella@example.com",
        "age":17,
        "class":"11th Grade",
        "address":"2134 Cypress Ln, Greenridge",
        "phone":"890-432-8765"
    },
    {
        "id":42,
        "name":"Samuel Bell",
        "email":"samuel@example.com",
        "age":18,
        "class":"12th Grade",
        "address":"4321 Willow Ln, Pinecliff",
        "phone":"654-234-8761"
    },
    {
        "id":43,
        "name":"Sofia Morris",
        "email":"sofia@example.com",
        "age":16,
        "class":"10th Grade",
        "address":"7651 Birch Grove, Eastbrook",
        "phone":"345-123-6789"
    },
    {
        "id":44,
        "name":"Levi Murphy",
        "email":"levi@example.com",
        "age":17,
        "class":"11th Grade",
        "address":"9082 Evergreen Grove, Southville",
        "phone":"432-123-5678"
    },
    {
        "id":45,
        "name":"Mila Bailey",
        "email":"mila@example.com",
        "age":18,
        "class":"12th Grade",
        "address":"1342 Cedarview St, Springfield",
        "phone":"890-543-3210"
    },
    {
        "id":46,
        "name":"Carter Reed",
        "email":"carter@example.com",
        "age":16,
        "class":"10th Grade",
        "address":"6549 Magnolia Grove, Greenview",
        "phone":"765-432-9876"
    },
    {
        "id":47,
        "name":"Avery Gray",
        "email":"avery@example.com",
        "age":17,
        "class":"11th Grade",
        "address":"3215 Linden Ct, Hillcrest",
        "phone":"543-123-9876"
    }
]

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState(initialStudents);

    const addStudent = (student) => {
        student.id = students.length ? students[students.length - 1].id + 1 : 1;
        setStudents([...students, student]);
    };

    const updateStudent = (updatedStudent) => {
        setStudents(students.map(student => student.id === updatedStudent.id ? updatedStudent : student));
    };

    const deleteStudent = (id) => {
        setStudents(students.filter(student => student.id !== id));
    };

    return (
        <StudentContext.Provider value={{ students, addStudent, updateStudent, deleteStudent }}>
            {children}
        </StudentContext.Provider>
    );
};
export default StudentProvider;
