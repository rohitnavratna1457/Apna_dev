
import React, { useEffect, useState } from 'react'
import { UserDataGet, UserDataUpdate } from '../../Api/CoreApi'
import { Form, Button, Input, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
function User_Bank_Details() {
    const Navigate = useNavigate();

    const id = localStorage.getItem('user_id')
    const [form] = Form.useForm();

    const get = async () => {
        try {
            const response = await UserDataGet();
            const filter_user = response.filter(i => i.User_id === id);
            if (filter_user.length > 0) {
                form.setFieldsValue(filter_user[0]);
            } else {
                message.warning("User not found.");
            }
        } catch (err) {
            console.error("Failed to fetch user data", err);
            message.error("Error fetching data.");
        }
    }

    useEffect(() => {
        get();
    }, [])

    const update = async (value) => {
        try {
            const response = await UserDataUpdate(id, value);
            console.log(response, '***** update response *****');
            message.success("Bank details updated successfully!");
        } catch (err) {
            console.error("Update failed", err);
            message.error("Failed to update bank details.");
        }
    }

    const log_out = () => {
        localStorage.clear()

        // localStorage.removeItem('user_id')
        Navigate('/User_Login')
    }

    return (
        <div>
            <div style={{ width: '100%', height: '50px', backgroundColor: 'rgba(7, 110, 148,1)', position: 'fixed', zIndex: '999', display: 'flex' }}>
                <Link to='/Home_Page_wLog'>
                    <p style={{ fontSize: '30px', color: 'white', marginLeft: '20px', marginTop: '-1px' }}>Ristey</p>
                </Link>

                {id ? (
                    <Link to='/User_Panel'>
                        <p style={{ fontSize: '15px', color: 'white', marginTop: '13px', marginLeft: '1300px' }}>Profile</p>
                    </Link>
                ) : (
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <Link to='/User_Reg/885695'>
                            <p style={{ fontSize: '15px', color: 'white', marginTop: '13px', marginLeft: '1200px' }}>Sign Up</p>
                        </Link>
                        <Link to='/User_Login'>
                            <p style={{ fontSize: '15px', color: 'white', marginTop: '13px', marginLeft: '30px' }}>Login</p>
                        </Link>
                    </div>
                )}
            </div>
            <div style={{ width: "180px", height: '680px', backgroundColor: 'white', position: 'fixed', marginTop: '50px' }}>
                <Link to='/User_Panel'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                        }}

                    >
                        Dashboard
                    </Button>
                </Link>
                <Link to='/User_Added_User'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                        }}
                    >
                        User
                    </Button>
                </Link>
                <Link to='/User_Recharge'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                        }}
                    >
                        Recharge
                    </Button>
                </Link>
                <Link to='/User_Transaction_User'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                        }}
                    >
                        Transaction
                    </Button>
                </Link>
                <Link to='/User_Withdrawal_User'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                        }}
                    >
                        Withdrawal
                    </Button>
                </Link>
                <Link to='/User_Bank_Details'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                        }}
                    >
                        Bank Account
                    </Button>
                </Link>
                <Button
                    style={{
                        textAlign: "center",
                        color: "black",
                        borderRadius: "0px",
                        width: "100%",
                    }}
                    onClick={log_out}
                >
                    Log Out
                </Button>
            </div>
            <div style={{ paddingTop: '100px', paddingLeft: '400px' }}>
                <div style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '10px', width: '800px', height: '350px', backgroundColor: 'white', paddingTop: '5px' }}>
                    <div style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', height: '300px', marginTop: '20px', width: '550px', marginLeft: '130px', borderRadius: '10px', backgroundColor: 'white' }}>
                        <Form form={form} onFinish={update} layout="vertical">
                            <Form.Item
                                label="Bank Account"
                                name="bank_account"
                                rules={[
                                    { required: true, message: 'Bank account is required' },
                                    { pattern: /^\d{9,18}$/, message: 'Enter a valid account number' },
                                ]}
                                style={{ textAlign: 'center' }}
                            >
                                <Input placeholder="Enter your bank account number" style={{ width: '500px' }} />
                            </Form.Item>

                            <Form.Item
                                label="IFSC Code"
                                name="ifsc_code"
                                rules={[
                                    { required: true, message: 'IFSC code is required' },
                                    { pattern: /^[A-Z]{4}0[A-Z0-9]{6}$/, message: 'Enter a valid IFSC code' },
                                ]}
                                style={{ textAlign: 'center' }}
                            >
                                <Input placeholder="Enter IFSC code (e.g. SBIN0001234)" style={{ width: '500px' }} />
                            </Form.Item>

                            <Form.Item
                                label="UPI ID"
                                name="upi_id"
                                rules={[
                                    { required: true, message: 'UPI ID is required' },
                                    {
                                        pattern: /^[\w.-]+@[\w.-]+$/,
                                        message: 'Enter a valid UPI ID (e.g. name@bank)',
                                    },
                                ]}
                                style={{ textAlign: 'center' }}
                            >
                                <Input placeholder="Enter UPI ID" style={{ width: '500px' }} />
                            </Form.Item>

                            <Form.Item style={{ textAlign: 'center' }}>
                                <Button htmlType="submit" type="primary">Submit</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User_Bank_Details
