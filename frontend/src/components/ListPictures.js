import React from "react";
import {connect} from 'react-redux'
import {getPosts, deletePost} from '../Redux/actions.js'
import {Card, Row, Col, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";


class ListPictures extends React.Component {

    componentDidMount() {
        this.props.getPosts();
    }

    deletePost = (id) => {
        this.props.deletePost(id, this.info);
    }

    info() {
        message.info('Contenido eliminado');
    };

    render() {
        const { Meta } = Card;

        const posts = this.props.posts
        console.log(posts)


        return (
          <div className="site-card-wrapper">
            <Row gutter={16}>
            {posts.map(p => (
                          <Col span={4}>
                            <Card
                                hoverable
                                key={p.id}
                                bordered={true}
                                style={{width: 240}}
                                cover={<img alt={p.titulo} src={p.url_pic} />}
                                actions={[
                                    <DeleteOutlined key="delete" onClick={()=>this.deletePost(p.id)} />,
                                ]}
                            >
                                <Meta title={p.titulo} description={p.autor} />
                            </Card>
                          </Col>

                ))}
              </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts
})

const mapDispatchToProps = {
    getPosts ,deletePost
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPictures)
