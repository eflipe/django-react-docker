import Types from "./types";
import axios from "axios";
import { API_URL } from "../constants";

export const getPosts = () => {
    return dispatch => {
        dispatch({type:Types.POSTS_LOADING, payload:true})
        axios.get(API_URL)
            .then(response => {
                    dispatch({type:Types.GET_POSTS, payload:response.data})
                }
            )
            .catch(err => {
                    console.log(err)
                    dispatch({type:Types.POSTS_LOADING, payload:false})
            }
            );
    }
}

export const deletePost = (id,cb) => {
    return dispatch => {
        console.log(id)
        dispatch({type:Types.POSTS_LOADING, payload:true})
        axios.delete(API_URL + id)

            .then(response => {
                    dispatch({type:Types.DELETE_POST, payload:id});
                cb();
                }
            )
            .catch(err => {
                    console.log(err)
                }
            );
    }
}

export const createPost = (data,cb) => {
    return dispatch => {
        axios.post(API_URL, data)
            .then(response => {
                console.log(response)
                    dispatch({type:Types.CREATE_POST, payload:response.data});
                    cb()
                }
            )
            .catch(err => {
                    console.log(err)

                    dispatch({type:Types.POSTS_LOADING, payload:false})
                }
            );
    }
}
// import { API_URL } from "../constants";
//
// export const getPosts = () => {
//     return dispatch => {
//         dispatch({type:Types.POSTS_LOADING, payload:true})
//         axios.get(`${API_URL}`)
//             .then(response => {
//                     dispatch({type:Types.GET_POSTS, payload:response.data})
//                 }
//             )
//             .catch(err => {
//                     console.log(err)
//                     dispatch({type:Types.POSTS_LOADING, payload:false})
//             }
//             );
//     }
// }
//
// export const deletePost = (id,cb) => {
//     return dispatch => {
//         dispatch({type:Types.POSTS_LOADING, payload:true})
//         axios.delete(`${API_URL}${id}`)
//             .then(response => {
//                     dispatch({type:Types.DELETE_POST, payload:id});
//                 cb();
//                 }
//             )
//             .catch(err => {
//                     console.log(err)
//                 }
//             );
//     }
// }
//
// export const createPost = (data,cb) => {
//     return dispatch => {
//         axios.post(`${API_URL}`, data)
//             .then(response => {
//                 console.log(response)
//                     dispatch({type:Types.CREATE_POST, payload:response.data});
//                     cb()
//                 }
//             )
//             .catch(err => {
//                     console.log(err)
//                     dispatch({type:Types.POSTS_LOADING, payload:false})
//                 }
//             );
//     }
// }
