import React from 'react'
import {Form, Button, Input, Card,message} from 'antd'
import { UserPost } from '../../Api/CoreApi'
function Admin_Reg() {
    const submit = async(i)=>{
      const response = await UserPost(i)
      if(response.status===200){
        message.success('success')
      }else{
        message.error('Register Fail')
      }
    }
  return (
    <div style={{paddingTop:'10%'}}>
        <Card style={{width:'40%',marginLeft:'30%',paddingLeft:'1%'}}>
        <Form onFinish={submit}>
            <Form.Item label='Username' name='username'>
                <Input style={{width:'90%'}}/>
            </Form.Item>

            <Form.Item label='Password' name='password'>
                <Input style={{width:'90%'}}/>
            </Form.Item>
            <Form.Item>
                <Button htmlType='sumit' style={{marginLeft:'40%'}}>Submit</Button>
            </Form.Item>
        </Form>
        </Card>
    </div>
  )
}

export default Admin_Reg