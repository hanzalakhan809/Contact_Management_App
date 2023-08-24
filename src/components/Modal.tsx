import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Select, message } from 'antd';
import { Contact } from '../interfaces/contact';


const App = (props: any) => {
  const { title, type, contacts, setContacts, openModal, onClose, setIsModalVisible, contact, setModalPassingType, setModalPassingContact } = props;

  const [isModalOpen, setIsModalOpen] = useState(openModal);
  const [form] = Form.useForm();

  const blankContactField: Contact = {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    relation: "",
    status: "Active",
    profilePhotoUrl: ""
  }


  //FOR MODAL OPEN WHEN EVERY THIME PASSING PROPS IM MODAL AND SET FIELD ACCORDING TO TYPE
  useEffect(() => {

    if (type === "editContact") {
      form.setFieldsValue(contact);
    } else if (type === "createNewContact") {
      form.setFieldsValue(blankContactField);
    }

    setIsModalOpen(openModal);
  }, [openModal, contact, form]);



  // FORM SUBMITION FOR CREATE AND EDIT CONTACT
  const onFinish = (values: Contact) => {

    if (type === "createNewContact") {
      let newContact = { ...values, profilePhotoUrl: "" };
      setContacts([...contacts, newContact]);

    }


    if (type === "editContact") {
      let contactToEditIndex = contacts.findIndex((item: Contact) => item.mobileNumber === contact.mobileNumber);

      // IF CONTACT IS FOUND IN THE ARRAY
      if (contactToEditIndex !== -1) {
        contacts[contactToEditIndex] = { ...contacts[contactToEditIndex], ...values, profilePhotoUrl: "" };
      }
      setContacts(contacts);
    }
    form.resetFields();
    setIsModalVisible(false);
    setModalPassingType(false);
    setModalPassingContact(false);
    type === "createNewContact"?  message.success("Contact created Successfully"): message.success("Contact edited Successfully")

  }


  //MODAL OK AND CANCEL
  const handleOk = () => {
    form.submit();
  };
  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
    if (onClose) onClose();
  };



  return (
    <>
      <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          form={form}
          autoComplete="off"
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}>


          {/* FORM FOR CREATE NEW CONTACT */}
          {type === "createNewContact" && (
            <>
              <Form.Item
                name="firstName"
                rules={[
                  { required: true, message: 'First Name is required' },
                  { max: 20, message: 'Max 20 Characters' }]}
              >
                <Input placeholder="First Name" />
              </Form.Item>

              <Form.Item
                name="lastName"
                rules={[{ required: true, message: 'Last Name is required' },
                { max: 20, message: 'Max 20 Characters' }]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>

              <Form.Item
                name="mobileNumber"
                rules={[
                  { required: true, message: 'Mobile No. is required' },
                  { max: 10, message: 'Max 10 Characters' },
                  { min: 8, message: 'Min 8 Characters' },
                  {
                    pattern: /^[0-9]*$/,
                    message: 'Mobile No. should not contain alphabets or special characters'
                  }
                ]}
              >
                <Input placeholder="Mobile Number" />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[{ type: 'email', message: 'Invalid Email Address' }]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="relation"
                rules={[{ max: 10, message: 'Max 10 Characters' }]}
              >
                <Input placeholder="Relation" />
              </Form.Item>

              <Form.Item
                name="status"
                initialValue="Active"
              >
                <Select placeholder="Status">
                  <Select.Option value="Active">Active</Select.Option>
                  <Select.Option value="Inactive">Inactive</Select.Option>
                </Select>
              </Form.Item>
            </>
          )}


          {/* FORM FOR EDIT CONTACT */}
          {type === "editContact" && (
            <>
              <Form.Item
                name="firstName"
                rules={[{ max: 20, message: 'Max 20 Characters' }]}
              >
                <Input placeholder="First Name" />
              </Form.Item>

              <Form.Item
                name="lastName"
                rules={[{ max: 20, message: 'Max 20 Characters' }]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>

              <Form.Item
                name="mobileNumber"
                rules={[
                  { required: true, message: 'Mobile No. is required' },
                  { max: 10, message: 'Max 10 Characters' },
                  { min: 8, message: 'Min 8 Characters' },
                  {
                    pattern: /^[0-9]*$/,
                    message: 'Mobile No. should not contain alphabets or special characters'
                  }
                ]}
              >
                <Input placeholder="Mobile Number" />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[{ type: 'email', message: 'Invalid Email Address' }]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="relation"
                rules={[{ max: 10, message: 'Max 10 Characters' }]}
              >
                <Input placeholder="Relation" />
              </Form.Item>

              <Form.Item name="status">
                <Select placeholder="Status">
                  <Select.Option value="Active">Active</Select.Option>
                  <Select.Option value="Inactive">Inactive</Select.Option>
                </Select>
              </Form.Item>
            </>
          )}


        </Form>

      </Modal>
    </>
  );
};

export default App;