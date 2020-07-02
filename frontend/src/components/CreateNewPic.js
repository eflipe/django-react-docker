import React from "react";
import {connect} from 'react-redux'
import {createPost} from '../Redux/actions'
import "antd/dist/antd.css";
import {Form, Input, message, Button, InputNumber} from 'antd';


class CreateNewPic extends React.Component {

    onFinish(values) {
        console.log(values);
        this.props.createPost(values,this.info())
    }

    info() {
        message.info('Contenido creado, yay!');
    };

    render() {
        const posts = this.props.posts
        console.log(posts)

        const layout = {
            labelCol: {span: 5},
            wrapperCol: {span: 12},
        };

        const validateMessages = {
            required: '${label} is required!',
            types: {
                autor: '${label} is not validate autor!',
                titulo: '${label} is not a validate titulo!',
                url_pic: '${label} is not a validate url_pic!',
                yeay: '${label} is not a validate año!',
            },
            number: {
                  range: '${label} must be between ${min} and ${max}',
                },

        };

        return (
            <Form
                {...layout}
                name="nest-messages"
                onFinish={this.onFinish.bind(this)}
                validateMessages={validateMessages}>
                <Form.Item name='autor' label="Autor" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>

                <Form.Item name='title' label="Title" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>


                <Form.Item name='url_pic' label="Url_pic" rules={[{ required: true, message: 'Please input url!' }]}>
                    <Input/>
                </Form.Item>

                <Form.Item name='year' label="Year" rules={[{ type: 'number', min: 100, max: 2222 }]}>
                  <InputNumber />
                </Form.Item>

                <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts
})

const mapDispatchToProps = {
    createPost
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPic)
