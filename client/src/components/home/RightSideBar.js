import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/authAction'
import UserCard from '../UserCard'
import FollowBtn from '../FollowBtn'
import LoadIcon from '../../images/loading.gif'
import { getSuggestions } from '../../redux/actions/suggestionsAction'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UserModal from '../UserModal'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { Link } from 'react-router-dom'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',

    // boxShadow: 24,
    // p: 4,
    borderRadius: 2,
    padding: "0px 0px 10px 0px",
};
const RightSideBar = ({ post }) => {
    const { auth, suggestions } = useSelector(state => state)

    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className="mt-3">
            <div style={{ display: "flex", alignItems: 'center' }}>
                <UserCard user={auth.user} />

                <span onClick={handleOpen} style={{ color: "#0095f6", alignItems: "center", fontSize: "12px", cursor: "pointer", marginRight: "30px" }}>Chuyển</span>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"

                >
                    <Box sx={style}>
                        <Typography style={{ display: 'flex', justifyContent: "center", marginTop: "15px" }}>Chuyển tài khoản</Typography>
                        <hr style={{ marginTop: "5px" }} />
                        <div style={{ display: 'flex', alignItems: 'center', paddingLeft: "20px", paddingRight: "20px" }}>
                            <UserModal user={auth.user} />
                            <CheckCircleOutlinedIcon style={{ color: '#0095f6' }} />
                        </div>
                        <hr style={{ marginTop: '90px' }} />
                        <Link className="dropdown-item" to="/"
                            onClick={() => dispatch(logout())}
                            style={{ color: "#0095f6", cursor: "pointer", display: 'flex', justifyContent: 'center', marginTop: "-10px" }}>
                            Đăng nhập bằng tài khoản hiện có
                        </Link>
                    </Box>
                </Modal>
            </div>

            <div className="d-flex justify-content-between align-items-center my-2">
                <span style={{color:"#8e8e8e",fontSize:"14px",marginLeft:"15px"}}>Gợi ý cho bạn</span>
                {/* {
                    !suggestions.loading &&
                    <i className="fas fa-redo" style={{ cursor: 'pointer', marginRight: "40px" }}
                        onClick={() => dispatch(getSuggestions(auth.token))} />
                } */}
                <span style={{color:"#262626",fontSize:"12px",marginRight:"20px",cursor:"pointer"}}>Xem tất cả</span>
            </div>

            {
                suggestions.loading
                    ? <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
                    : <div className="suggestions">
                        {
                            suggestions.users.map(user => (
                                <UserCard key={user._id} user={user} >
                                    <FollowBtn user={user} />
                                </UserCard>
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default RightSideBar
