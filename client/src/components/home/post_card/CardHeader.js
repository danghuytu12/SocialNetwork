import React from 'react'
// import Avatar from '../../Avatar'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { GLOBALTYPES } from '../../../redux/actions/globalTypes'
import { deletePost } from '../../../redux/actions/postAction'
import { BASE_URL } from '../../../utils/config'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import { Tooltip } from '@mui/material'

const CardHeader = ({ post }) => {
    const { auth, socket } = useSelector(state => state)
    const dispatch = useDispatch()

    const history = useHistory()

    const handleEditPost = () => {
        dispatch({ type: GLOBALTYPES.STATUS, payload: { ...post, onEdit: true } })
    }

    const handleDeletePost = () => {
        if (window.confirm("Are you sure want to delete this post?")) {
            dispatch(deletePost({ post, auth, socket }))
            return history.push("/")
        }
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(`${BASE_URL}/post/${post._id}`)
    }
    console.log("aaaaa",post)

    return (
        <div className="card_header">
            <div className="d-flex">
                {/* <Avatar src={post.user.avatar} size="big-avatar" /> */}
                <Stack direction="row" spacing={2}>
                    <Avatar  src={post.user.avatar} />
                </Stack>
                <div className="card_name">
                    <Link to={`/profile/${post.user._id}`} className="text-dark" style={{ marginLeft: "10px", fontSize: "22px" }}>
                        <Tooltip title={(
                            <div ><span style={{ fontSize: "14px" }}>{post.user.username}</span>
                                </div>
                        )}>
                            <Typography variant="subtitle1" gutterBottom component="div" style={{ marginTop: "-30px", marginLeft: "15px" }}>
                                {post.user.username}
                            </Typography>
                        </Tooltip>

                    </Link>
                    {/* <small className="text-muted" style={{ marginLeft: "10px", fontSize: '15px' }}>
                        {moment(post.createdAt).fromNow()}
                    </small> */}
                </div>
            </div>

            <div className="nav-item dropdown">
                <span className="material-icons" id="moreLink" data-toggle="dropdown" style={{cursor:"pointer"}}>
                    more_horiz
                </span>

                <div className="dropdown-menu" style={{ marginLeft: "-100px" }}>
                    {
                        auth.user._id === post.user._id &&
                        <>
                            <div className="dropdown-item" onClick={handleEditPost}>
                                <span className="material-icons">create</span> Edit Post
                            </div>
                            <div className="dropdown-item" onClick={handleDeletePost} >
                                <span className="material-icons">delete_outline</span> Remove Post
                            </div>
                        </>
                    }

                    <div className="dropdown-item" onClick={handleCopyLink}>
                        <span className="material-icons">content_copy</span> Copy Link
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardHeader
