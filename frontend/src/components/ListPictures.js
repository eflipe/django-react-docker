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

    deletePost = (pk) => {
        this.props.deletePost(pk, this.info);
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
                                key={p.pk}
                                bordered={true}
                                // style={{width: 240}}
                                cover={<a href={p.url_pic}><img width="240" alt={p.titulo} src={p.url_pic} /></a>}
                                actions={[
                                    <DeleteOutlined key="delete" onClick={()=>this.deletePost(p.pk)} />,
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
