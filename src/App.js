import React from 'react';
import Form from './containers/Form';

const rows = [
  {
    Id: 1,
    Name: 'fullName',
    Type: 'text',
    Lable: '',
    Description: 'Họ tên:'
  }, {
    Id: 2,
    Name: 'email',
    Type: 'text',
    Lable: '',
    Description: 'Email:'
  }, {
    Id: 3,
    Name: 'password',
    Type: 'password',
    Lable: '',
    Description: 'Mật khẩu:'
  }, {
    Id: 4,
    Name: 'avatar',
    Type: 'file',
    Lable: 'No file choose',
    Description: 'Avatar:'
  }, {
    Id: 5,
    Name: 'phone',
    Type: 'text',
    Lable: '',
    Description: 'Số điện thoại:'
  }, {
    Id: 6,
    Name: 'age',
    Type: 'select',
    Lable: '',
    Description: 'Tuổi:'
  }, {
    Id: 7,
    Type: 'radio',
    Radios: [
      {
        Id: 1,
        Name: 'gender',
        Lable: 'Nữ',
      },
      {
        Id: 2,
        Name: 'gender',
        Lable: 'Nam',
      }
    ],
    Description: 'Giới tính:'
  }, {
    Id: 8,
    Type: 'checkbox',
    CheckBoxs: [{
      Id: 1,
      Name: 'hobbies',
      Lable: 'Đá bóng',
    }, {
      Id: 2,
      Name: 'hobbies',
      Lable: 'Cầu lông',
    }, {
      Id: 3,
      Name: 'hobbies',
      Lable: 'Đua thuyền',
    }],
    Description: 'Sở thích:'
  }, {
    Id: 9,
    Name: 'note',
    Type: 'textarea',
    Lable: '',
    Description: 'Ghi chú:'
  }
];

function App() {
  return (
    <Form Rows={rows}></Form>
  );
}

export default App;
